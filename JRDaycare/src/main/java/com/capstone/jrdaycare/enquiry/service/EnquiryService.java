package com.capstone.jrdaycare.enquiry.service;

import com.capstone.jrdaycare.enquiry.dto.CompleteRequestDto;
import com.capstone.jrdaycare.enquiry.dto.EnquiryRequestDto;
import com.capstone.jrdaycare.enquiry.dto.UpdateStatusDto;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author group2
 */
public interface EnquiryService {

    public ResponseEntity<Object> createNewEnquiry(EnquiryRequestDto enquiry);

    public ResponseEntity<Object> getEnquiryPageList(Integer pageNo, String searchString);

    public ResponseEntity<Object> getFinishedEnquiryPageList(Integer pageNo, String searchString);

    public ResponseEntity<Object> getPendingEnquiryPageList(Integer pageNo, String searchString);

    public ResponseEntity<Object> updateEnquiryStatus(UpdateStatusDto statusDto);

    public ResponseEntity<Object> getEnquiryById(Long enquiryid);

    public ResponseEntity<Object> getEnquiryDetails(Long enquiryid);

    public ResponseEntity<Object> getEnquiryDetailsByUUID(String UUID);

    public ResponseEntity<Object> completeEnquiryWithItems(CompleteRequestDto completeRequestDto);
}
