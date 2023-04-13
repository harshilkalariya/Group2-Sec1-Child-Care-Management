package com.capstone.jrdaycare.location.repository;

import com.capstone.jrdaycare.location.entity.CityLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<CityLocation, Long> {

    List<CityLocation> findAllByDistrictId(Long districtId);
}
