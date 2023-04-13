package com.capstone.jrdaycare.feedback.service.impl;

import com.capstone.jrdaycare.common.CommonConstant;
import com.capstone.jrdaycare.common.ErrorMessage;
import com.capstone.jrdaycare.common.PageDto;
import com.capstone.jrdaycare.enquiry.dto.QueryResponseDtoForPage;
import com.capstone.jrdaycare.enquiry.repository.EnquiryRepository;
import com.capstone.jrdaycare.feedback.dto.AdminDashboardDto;
import com.capstone.jrdaycare.feedback.dto.FeedbackRequestDto;
import com.capstone.jrdaycare.feedback.dto.FeedbackResponseDto;
import com.capstone.jrdaycare.feedback.dto.PartnerDashboardDto;
import com.capstone.jrdaycare.feedback.entity.Announcement;
import com.capstone.jrdaycare.feedback.entity.Feedback;
import com.capstone.jrdaycare.feedback.repository.AnnouncementRepository;
import com.capstone.jrdaycare.feedback.repository.FeedbackRepository;
import com.capstone.jrdaycare.feedback.service.FeedbackService;
import com.capstone.jrdaycare.payload.response.MessageResponse;
import com.capstone.jrdaycare.repository.UserRepository;
import com.capstone.jrdaycare.user.dto.UserDetails;
import com.capstone.jrdaycare.user.dto.UserDto;
import com.capstone.jrdaycare.user.service.UserService;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author group2
 */
@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    FeedbackRepository feedbackRepository;

    @Autowired
    UserService userService;

    @Autowired
    AnnouncementRepository announcementRepository;

    @Autowired
    EnquiryRepository enquiryRepository;

    @Autowired
    UserRepository userRepository;

    @Value("${host}")
    private String host;
    
    @Value("${root}")
    private String root;

    @Override
    public ResponseEntity<Object> addNewFeedbcak(FeedbackRequestDto dto) {

        Feedback feedback = new Feedback();
        feedback.setType(dto.getType());
        feedback.setDesciption(dto.getDesc());

        UserDto currentUser = (UserDto) userService.getCurrentUser().getBody();
        if (!currentUser.getRole().equals(CommonConstant.ROLE_JRADMIN)) {
            feedbackRepository.save(feedback);
            return ResponseEntity.ok().body(new MessageResponse("Your Feedback Valuable For Us, Thank you!"));
        }
        return ResponseEntity.badRequest().body(new MessageResponse("Sorry You Don't Have Access!"));

    }

    @Override
    public ResponseEntity<Object> getFeedbcakPage(String search, Integer pageNo) {
        UserDto currentUser = (UserDto) userService.getCurrentUser().getBody();
        Long totalCount = 0L;
        List<FeedbackResponseDto> list = new ArrayList<>();
        Pageable page = PageRequest.of(pageNo - 1, CommonConstant.PAGE_SIZE);

        if (currentUser.getRole().equals(CommonConstant.ROLE_ADMIN) || currentUser.getRole().equals(CommonConstant.ROLE_JRADMIN)) {
            if (search != null && !search.isEmpty()) {
                list = feedbackRepository.getFeedbackWithSearch(search, page);
                totalCount = feedbackRepository.getFeedbackWithSearchCount(search);
            } else {
                list = feedbackRepository.getFeedbackWithOutSearch(page);
                totalCount = feedbackRepository.getFeedbackWithOutSearchCount();
            }

            PageDto pageDto = new PageDto();

            pageDto.setList(list);
            pageDto.setTotalCount(totalCount);
            return ResponseEntity.ok().body(pageDto);
        } else {
            ResponseEntity.badRequest().body(new MessageResponse("You Don't Have Access"));
        }
        return null;
    }

    @Override
    public ResponseEntity<Object> changeAnnouncement(MultipartFile multipartFile) {
        String originalFileName = "";
        Announcement announcement = new Announcement();
        String basePath = root + CommonConstant.ANNOUNCEMENT_FILE_PATH;
        String extention = FilenameUtils.getExtension(multipartFile.getOriginalFilename());
        if (!Arrays.asList(CommonConstant.ANNOUNCEMENT_FILE_TYPE).contains(extention)) {
            announcementRepository.deleteAll();
            return ResponseEntity.ok().body(new ErrorMessage("Please upload jpg, jpeg or png file file"));
        }
        originalFileName = "Announcement_" + new Date().getTime() + "." + extention;
        File baseFile = new File(basePath);
        if (!baseFile.exists()) {
            baseFile.mkdirs();
        }
        String filePath = basePath + originalFileName;
        if (multipartFile != null) {
            try {
                File f = new File(filePath);
                OutputStream out = new FileOutputStream(f);
                if (multipartFile.getBytes() != null || multipartFile.getBytes().length != 0) {
                    out.write(multipartFile.getBytes());
                    out.close();
                    announcementRepository.deleteAll();
                    announcement.setName(originalFileName);
                    announcementRepository.save(announcement);
                } else {
                    announcementRepository.deleteAll();
                    return ResponseEntity.badRequest().body(new ErrorMessage("File is empty"));
                }

            } catch (IOException e) {
                return ResponseEntity.badRequest().body(new ErrorMessage("File is Not uploaded"));
            }

        } else {
            announcementRepository.deleteAll();
            return ResponseEntity.badRequest().body(new ErrorMessage("File is empty"));
        }
        return ResponseEntity.ok().body(announcement);
    }

    @Override
    public ResponseEntity<Object> downloadAnnouncement() {
        List<Announcement> announcements = announcementRepository.findAll();
        if (announcements.isEmpty()) {
            return ResponseEntity.ok().body(null);
        }
        Announcement announcement = announcements.get(0);
        if (announcement.getName().isEmpty() || announcement.getName().isBlank() || announcement.getName() == null) {
            return ResponseEntity.badRequest().body(new ErrorMessage("File Is Not Uploaded By Admin"));
        }
        String filePath = CommonConstant.ANNOUNCEMENT_FILE_PATH + announcement.getName();
        File file = new File(filePath);
        Map<String, String> m = new HashMap<>();
        m.put("imageUrl", host + "doc/resources/announcement/" + announcement.getName());
        return ResponseEntity.ok().body(m);
    }

    @Override
    public ResponseEntity<Object> getDashBoardData() {
        return null;
    }

    @Override
    public ResponseEntity<Object> getDashBoardDataForPartner() {
        return null;
    }

}
