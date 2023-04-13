package com.capstone.jrdaycare.notification.repository;

import com.capstone.jrdaycare.notification.entity.Notification;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author group2
 */
@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    @Query(value = "SELECT * FROM notification where is_readed = false and notification_for = :id order by created_on DESC;", nativeQuery = true)
    List<Notification> getAllUnReadNotificationByUserId(@Param("id") Long id);

}
