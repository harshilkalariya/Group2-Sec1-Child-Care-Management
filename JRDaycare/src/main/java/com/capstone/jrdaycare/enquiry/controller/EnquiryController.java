package com.capstone.jrdaycare.enquiry.controller;

import com.capstone.jrdaycare.enquiry.dto.CompleteRequestDto;
import com.capstone.jrdaycare.enquiry.dto.EnquiryRequestDto;
import com.capstone.jrdaycare.enquiry.dto.UpdateStatusDto;
import com.capstone.jrdaycare.enquiry.service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author group2
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/enquiry")
public class EnquiryController {

    @Autowired
    EnquiryService enquiryService;

    @PostMapping("/add")
    private ResponseEntity<Object> ganerateNewEnquiry(@RequestBody EnquiryRequestDto enquiry) {
        return enquiryService.createNewEnquiry(enquiry);
    }

    @GetMapping("/ongoing")
    private ResponseEntity<Object> getOnGoingEnquiryListByPage(@RequestParam(value = "pageNo") Integer pageNo,
            @Nullable @RequestParam(value = "search", required = false) String search) {
        return enquiryService.getEnquiryPageList(pageNo, search);
    }

    @GetMapping("/finished")
    private ResponseEntity<Object> getFinishiedEnquiryListByPage(@RequestParam(value = "pageNo") Integer pageNo,
            @Nullable @RequestParam(value = "search", required = false) String search) {
        return enquiryService.getFinishedEnquiryPageList(pageNo, search);
    }

    @GetMapping("/pending")
    private ResponseEntity<Object> getPendingEnquiryListByPage(@RequestParam(value = "pageNo") Integer pageNo,
            @Nullable @RequestParam(value = "search", required = false) String search) {
        return enquiryService.getPendingEnquiryPageList(pageNo, search);
    }

    @PostMapping("/status")
    private ResponseEntity<Object> updateStatusForEnquiry(@RequestBody UpdateStatusDto statusDto) {
        return enquiryService.updateEnquiryStatus(statusDto);
    }

    @GetMapping("/{enquiryId}")
    private ResponseEntity<Object> getEnquiryById(@PathVariable(name = "enquiryId") Long enquiryId) {
        return enquiryService.getEnquiryById(enquiryId);
    }

    @PostMapping("/status/complete")
    private ResponseEntity<Object> getEnquiryById(@RequestBody CompleteRequestDto completeRequestDto) {
        return enquiryService.completeEnquiryWithItems(completeRequestDto);
    }

    @GetMapping("/details/{enquiryId}")
    private ResponseEntity<Object> getEnquiryDetails(@PathVariable(name = "enquiryId") Long enquiryId) {
        return enquiryService.getEnquiryDetails(enquiryId);
    }

    @GetMapping("/details/uuid/{uuid}")
    private ResponseEntity<Object> getEnquiryDetailsByUUID(@PathVariable(name = "uuid") String uuid) {
        return enquiryService.getEnquiryDetailsByUUID(uuid);
    }

}
