package com.capstone.jrdaycare.location.repository;

import com.capstone.jrdaycare.location.entity.DistrictLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DistrictRepository extends JpaRepository<DistrictLocation, Long> {

    List<DistrictLocation> findAllByStateId(Long stateId);
}
