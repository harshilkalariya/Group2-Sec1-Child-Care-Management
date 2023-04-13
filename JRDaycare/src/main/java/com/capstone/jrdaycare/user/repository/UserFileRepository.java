package com.capstone.jrdaycare.user.repository;

import com.capstone.jrdaycare.user.Entity.UserBrochure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author group2
 */
@Repository
public interface UserFileRepository extends JpaRepository<UserBrochure, Long> {

    UserBrochure findByUserId(Long id);

}
