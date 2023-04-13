package com.capstone.jrdaycare.location.repository;

import com.capstone.jrdaycare.location.entity.StateLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends JpaRepository<StateLocation, Long> {


}
