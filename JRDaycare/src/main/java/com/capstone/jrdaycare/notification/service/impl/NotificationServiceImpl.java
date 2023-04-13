package com.capstone.jrdaycare.notification.service.impl;

import com.capstone.jrdaycare.common.ErrorMessage;
import com.capstone.jrdaycare.notification.entity.Notification;
import com.capstone.jrdaycare.notification.repository.NotificationRepository;
import com.capstone.jrdaycare.notification.service.NotificationService;
import com.capstone.jrdaycare.user.dto.UserDto;
import com.capstone.jrdaycare.user.service.UserService;
import java.util.List;
import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

/**
 *
 * @author group2
 */
@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    UserService userService;

    @Autowired
    NotificationRepository notificationRepository;

    @Autowired
    JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String emailSentFrom;

    @Override
    public void createNewNotification(Notification notification) {
        notificationRepository.save(notification);
    }

    @Override
    public Notification makeNotification(String type, String content, Long forUser) {
        Notification n = new Notification();
        n.setIsReaded(Boolean.FALSE);
        n.setNotificationContent(content);
        n.setNotificationFor(forUser);
        n.setNotificationType(type);
        return n;
    }

    @Override
    public void createNewNotifications(List<Notification> notifications) {
        notificationRepository.saveAll(notifications);
    }

    @Override
    public ResponseEntity<Object> getNewNotifications() {
        UserDto ud = (UserDto) userService.getCurrentUser().getBody();
        return ResponseEntity.ok().body(notificationRepository.getAllUnReadNotificationByUserId(ud.getUserId()));
    }

    @Override
    public ResponseEntity<Object> notificationMarkAsRead(Long id) {
        notificationRepository.deleteById(id);
        return ResponseEntity.ok().body(new ErrorMessage("Readed"));
    }

    @Override
    public void sendMobileNotifications(List<String> ids, String name, String content) {
        createMobileNotiAPI(ids, name, content);
    }

    private void createMobileNotiAPI(List<String> list, String name, String content) {
        String APP_ID = "140a0ae8-ba47-4d9a-8462-c7e5517aa347";
        OkHttpClient client = new OkHttpClient();
        String ids = "";
        for (String string : list) {
            if (ids.isEmpty()) {
                ids = ids + "\"" + string + "\"";
            } else {
                ids = ids + "," + "\"" + string + "\"";
            }
        }
        String contents = "\"" + content + "\"";
        String nameContent = "\"" + name + "\"";
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "{\"app_id\":\"" + APP_ID + "\",\"include_external_user_ids\":[" + ids + "],\"contents\":{\"en\":" + contents + "},\"name\":" + nameContent + "}");
        Request request = new Request.Builder()
                .url("https://onesignal.com/api/v1/notifications")
                .post(body)
                .addHeader("Accept", "application/json")
                .addHeader("Authorization", "Basic Yjg4ZWM2MjUtMTE4YS00ODA0LWFhMjMtYjAxOTVlOTEwZGRm")
                .addHeader("Content-Type", "application/json")
                .build();

        Response response;
        try {
            response = client.newCall(request).execute();
            System.out.println(response.body());
        } catch (Exception e) {
            System.out.println(e.getLocalizedMessage());
        }

    }

    @Override
    public void sendMail(String mailAddress, String data, String subject) {
        MimeMessagePreparator preparator = new MimeMessagePreparator() {
            public void prepare(MimeMessage mimeMessage) throws Exception {
                mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(mailAddress));
                mimeMessage.setFrom(new InternetAddress(emailSentFrom));
                mimeMessage.setSubject(subject);
                mimeMessage.setText(data, "text/html; charset=utf-8");
                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
                helper.setText(data, true);

            }
        };

        try {
            mailSender.send(preparator);
        } catch (MailException ex) {
            System.err.println(ex.getMessage());
        }
    }

}
