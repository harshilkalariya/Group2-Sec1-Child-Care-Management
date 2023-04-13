package com.capstone.jrdaycare.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

@EnableJpaAuditing(auditorAwareRef = "createAuditorProvider")
@Configuration
public class EntityAuditConfig {

    @Bean
    public AuditorAware<Long> createAuditorProvider() {
        return new SecurityAuditor();
    }

    @Bean
    public AuditingEntityListener createAuditingListener() {
        return new AuditingEntityListener();
    }

    public class SecurityAuditor implements AuditorAware<Long> {

        @Override
        public Optional<Long> getCurrentAuditor() {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
//            Long userId = userDetails.getId();
//            return Optional.ofNullable(userId);
                return  Optional.ofNullable(1L);
        }
    }
}
