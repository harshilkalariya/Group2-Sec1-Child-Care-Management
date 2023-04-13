package com.capstone.jrdaycare.notification.controller;

import com.capstone.jrdaycare.notification.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author group2
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/notification")
public class NotificationController {

    @Autowired
    NotificationService notificationService;

    @GetMapping("")
    private ResponseEntity<Object> getNewNotifications() {
        return notificationService.getNewNotifications();
    }

    @GetMapping("/{id}")
    private ResponseEntity<Object> notificationMarkAsRead(@PathVariable(value = "id") Long id) {
        return notificationService.notificationMarkAsRead(id);
    }

}
