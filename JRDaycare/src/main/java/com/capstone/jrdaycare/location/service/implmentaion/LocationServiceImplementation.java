package com.capstone.jrdaycare.location.service.implmentaion;


import com.capstone.jrdaycare.location.entity.CityLocation;
import com.capstone.jrdaycare.location.entity.DistrictLocation;
import com.capstone.jrdaycare.location.entity.StateLocation;
import com.capstone.jrdaycare.location.repository.CityRepository;
import com.capstone.jrdaycare.location.repository.DistrictRepository;
import com.capstone.jrdaycare.location.repository.StateRepository;
import com.capstone.jrdaycare.location.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImplementation implements LocationService {

    @Autowired
    StateRepository stateRepository;

    @Autowired
    DistrictRepository districtRepository;

    @Autowired
    CityRepository cityRepository;

    @Override
    public ResponseEntity<Object> getStateLocation() {
        List<StateLocation> stateLocationList = stateRepository.findAll();
        return ResponseEntity.ok(stateLocationList);
    }

    @Override
    public ResponseEntity<Object> getDistrictByStateId(Long stateId) {
        List<DistrictLocation> districtLocations = districtRepository.findAllByStateId(stateId);
        return ResponseEntity.ok(districtLocations);
    }

    @Override
    public ResponseEntity<Object> getCityByDistrictId(Long districtId) {
        List<CityLocation> cityLocations = cityRepository.findAllByDistrictId(districtId);
        return ResponseEntity.ok(cityLocations);
    }
}
