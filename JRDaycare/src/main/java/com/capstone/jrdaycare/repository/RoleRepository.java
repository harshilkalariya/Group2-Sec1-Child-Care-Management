package com.capstone.jrdaycare.repository;

import com.capstone.jrdaycare.models.ERole;
import com.capstone.jrdaycare.models.Role;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);
}
