package com.capstone.jrdaycare.otp.service;

import com.capstone.jrdaycare.models.User;
import org.springframework.http.ResponseEntity;

public interface OTPService {

    public ResponseEntity<?> generateOtpForUser(Long userId, User user);

    public ResponseEntity<?> verifyOTP(Long userId, String OTP);
}
