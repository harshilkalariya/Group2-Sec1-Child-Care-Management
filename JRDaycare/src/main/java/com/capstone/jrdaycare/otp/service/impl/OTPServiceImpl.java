package com.capstone.jrdaycare.otp.service.impl;

import com.capstone.jrdaycare.common.CommonConstant;
import com.capstone.jrdaycare.common.ErrorMessage;
import com.capstone.jrdaycare.models.User;
import com.capstone.jrdaycare.notification.service.NotificationService;
import com.capstone.jrdaycare.otp.entity.OTP;
import com.capstone.jrdaycare.otp.repository.OTPRepository;
import com.capstone.jrdaycare.otp.service.OTPService;
import com.capstone.jrdaycare.payload.response.MessageResponse;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class OTPServiceImpl implements OTPService {

    @Autowired
    OTPRepository otpRepository;

    @Autowired
    NotificationService notificationService;

    @Override
    public ResponseEntity<?> generateOtpForUser(Long userId, User dto) {
        otpRepository.deleteByUserId(userId);
        String newOTP = getOTP();

        OTP otp = new OTP();
        otp.setOtp(newOTP);
        otp.setUserId(userId);
        otp.setCreatedAt(new Timestamp(new Date().getTime()));
        otp.setVerified(false);

        OTP savedOTP = otpRepository.save(otp);

        String oTPMailTemplate = "<div style=\"font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2\">\n"
                + "  <div style=\"margin:15px auto;width:70%;padding:20px 0\">\n"
                + "    <div style=\"border-bottom:1px solid #eee\">\n"
                + "      <a href=\"\" style=\"font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600\">JR </a>\n"
                + "    </div>\n"
                + "    <p style=\"font-size:1.1em\">Hi, " + dto.getBusinessName() + "</p>\n"
                + "    <p>Use the following OTP to reset your password. OTP is valid for 10 minutes</p>\n"
                + "    <h2 style=\"background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;\">" + newOTP + "</h2>\n"
                + "    <p style=\"font-size:0.9em;\">Regards,<br />JR </p>\n"
                + "    <hr style=\"border:none;border-top:1px solid #eee\" />\n"
                + "    <div style=\"float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300\">\n"
                + "      <p>JR  Technology</p>\n"
                + "      <p>info@jrdaycare.com</p>\n"
                + "      <p>523, 5th floor, I Square corporate park,</p>\n"
                + "      <p>Science City Rd, Near CIMS Hospital, Sola,</p>\n"
                + "      <p>Ahmedabad, Gujarat (380060)</p>\n"
                + "    </div>\n"
                + "  </div>\n"
                + "</div>";
        notificationService.sendMail(dto.getEmail(), oTPMailTemplate, CommonConstant.MAIL_SUBJECT_OTP);
        return ResponseEntity.ok(savedOTP);
    }

    @Override
    public ResponseEntity<?> verifyOTP(Long userId, String OTP) {
        Optional<OTP> otp = otpRepository.findByUserIdAndOtpAndVerified(userId, OTP, false);

        if (otp.isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorMessage("Wrong OTP OR Change Password Request Isn't Initiated!"));
        } else {
            Long timeDiffSecond = TimeUnit.MILLISECONDS.toSeconds(new Timestamp(new Date().getTime()).getTime() - otp.get().getCreatedAt().getTime());
            if (timeDiffSecond > 600) {
                return ResponseEntity.badRequest().body(new ErrorMessage("Your OTP Is Expire!"));
            } else {
                OTP oldOTP = otp.get();
                oldOTP.setVerified(true);
                otpRepository.save(oldOTP);
                return ResponseEntity.ok(new MessageResponse("You OTP Is Matched"));
            }
        }
    }

    private String getOTP() {
        Random random = new Random();
        return String.format("%04d", random.nextInt(10000));
    }
}
