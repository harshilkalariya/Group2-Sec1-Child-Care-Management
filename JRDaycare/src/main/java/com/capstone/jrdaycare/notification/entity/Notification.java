package com.capstone.jrdaycare.notification.entity;

import com.capstone.jrdaycare.common.model.EntityAuditInfo;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author group2
 */
@Entity
@Table(name = "notification")
public class Notification extends EntityAuditInfo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "notification_type", nullable = false)
    private String notificationType;

    @Column(name = "notification_content", nullable = false)
    private String notificationContent;

    @Column(name = "is_readed")
    private Boolean isReaded;

    @Column(name = "notification_for")
    private Long notificationFor;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(String notificationType) {
        this.notificationType = notificationType;
    }

    public String getNotificationContent() {
        return notificationContent;
    }

    public void setNotificationContent(String notificationContent) {
        this.notificationContent = notificationContent;
    }

    public Boolean getIsReaded() {
        return isReaded;
    }

    public void setIsReaded(Boolean isReaded) {
        this.isReaded = isReaded;
    }

    public Long getNotificationFor() {
        return notificationFor;
    }

    public void setNotificationFor(Long notificationFor) {
        this.notificationFor = notificationFor;
    }

}
