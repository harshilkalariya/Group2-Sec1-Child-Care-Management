package com.capstone.jrdaycare.location.controller;

import com.capstone.jrdaycare.location.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/location")
public class LocationController {

    @Autowired
    LocationService locationService;

    @GetMapping("/state")
    private ResponseEntity<Object> getStateDataList() {
        return locationService.getStateLocation();
    }

    @GetMapping("/district")
    private ResponseEntity<Object> getDistrictById(@RequestParam(value = "stateId") Long stateId) {
        return locationService.getDistrictByStateId(stateId);
    }

    @GetMapping("/city")
    private ResponseEntity<Object> getCityByDistrictId(@RequestParam(value = "districtId") Long districtId) {
        return locationService.getCityByDistrictId(districtId);
    }
}
