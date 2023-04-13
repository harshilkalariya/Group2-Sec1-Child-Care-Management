/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.capstone.jrdaycare.feedback.repository;

import com.capstone.jrdaycare.feedback.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author group2
 */
@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {

}
