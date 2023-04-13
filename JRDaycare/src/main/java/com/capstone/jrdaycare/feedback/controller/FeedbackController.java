package com.capstone.jrdaycare.feedback.controller;

import com.capstone.jrdaycare.feedback.dto.FeedbackRequestDto;
import com.capstone.jrdaycare.feedback.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author group2
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class FeedbackController {

    @Autowired
    FeedbackService feedbackService;

    @PostMapping("/feedback/add")
    public ResponseEntity<Object> addNewFeedback(@RequestBody FeedbackRequestDto requestDto) {
        return feedbackService.addNewFeedbcak(requestDto);
    }

    @GetMapping("/feedback")
    public ResponseEntity<Object> getFeedbackPage(@RequestParam(value = "pageNo") Integer pageNo,
            @Nullable @RequestParam(value = "search", required = false) String search) {
        return feedbackService.getFeedbcakPage(search, pageNo);
    }

    @PostMapping("/announcement/change")
    public ResponseEntity<Object> changeAnnouncement(@Nullable @RequestParam(value = "file", required = false) MultipartFile multipartFile) {
        return feedbackService.changeAnnouncement(multipartFile);
    }

    @GetMapping("/announcement/download")
    public ResponseEntity<Object> downloadAnnouncement() {
        return feedbackService.downloadAnnouncement();
    }

    @GetMapping("/dashboard/admin")
    public ResponseEntity<Object> getAdminDashboardData() {
        return feedbackService.getDashBoardData();
    }

    @GetMapping("/dashboard/partner")
    public ResponseEntity<Object> getPartnerDashboardData() {
        return feedbackService.getDashBoardDataForPartner();
    }

}
