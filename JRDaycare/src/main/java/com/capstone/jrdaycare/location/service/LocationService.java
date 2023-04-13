package com.capstone.jrdaycare.location.service;

import org.springframework.http.ResponseEntity;

public interface LocationService {

    public ResponseEntity<Object> getStateLocation();

    public ResponseEntity<Object> getDistrictByStateId(Long stateId);

    public ResponseEntity<Object> getCityByDistrictId(Long districtId);
}
