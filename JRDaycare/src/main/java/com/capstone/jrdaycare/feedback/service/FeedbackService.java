package com.capstone.jrdaycare.feedback.service;

import com.capstone.jrdaycare.feedback.dto.FeedbackRequestDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author group2
 */
public interface FeedbackService {

    public ResponseEntity<Object> addNewFeedbcak(FeedbackRequestDto dto);

    public ResponseEntity<Object> getFeedbcakPage(String search, Integer pageNo);

    public ResponseEntity<Object> changeAnnouncement(MultipartFile multipartFile);

    public ResponseEntity<Object> downloadAnnouncement();

    public ResponseEntity<Object> getDashBoardData();

    public ResponseEntity<Object> getDashBoardDataForPartner();

}
