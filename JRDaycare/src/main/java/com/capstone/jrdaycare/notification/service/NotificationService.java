package com.capstone.jrdaycare.notification.service;

import com.capstone.jrdaycare.notification.entity.Notification;
import java.util.List;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author group2
 */
public interface NotificationService {

    public void createNewNotification(Notification notification);

    public void createNewNotifications(List<Notification> notifications);

    public Notification makeNotification(String type, String content, Long forUser);

    public ResponseEntity<Object> getNewNotifications();

    public ResponseEntity<Object> notificationMarkAsRead(Long id);

    public void sendMobileNotifications(List<String> ids, String name, String content);

    public void sendMail(String mailAddress, String data, String subject);

}
