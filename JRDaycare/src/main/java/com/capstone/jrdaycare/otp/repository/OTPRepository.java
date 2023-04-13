package com.capstone.jrdaycare.otp.repository;

import com.capstone.jrdaycare.otp.entity.OTP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OTPRepository extends JpaRepository<OTP, Long> {

    @Modifying
    void deleteByUserId(Long userId);

    Optional<OTP> findByUserIdAndOtpAndVerified(Long userId, String otp, Boolean verified);
}
