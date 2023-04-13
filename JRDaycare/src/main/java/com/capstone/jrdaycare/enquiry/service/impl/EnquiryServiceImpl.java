package com.capstone.jrdaycare.enquiry.service.impl;

import com.capstone.jrdaycare.common.CommonConstant;
import com.capstone.jrdaycare.common.ErrorMessage;
import com.capstone.jrdaycare.common.NotificationConstant;
import com.capstone.jrdaycare.common.PageDto;
import com.capstone.jrdaycare.enquiry.dto.CompleteRequestDto;
import com.capstone.jrdaycare.enquiry.dto.EnquiryRequestDto;
import com.capstone.jrdaycare.enquiry.dto.QueryResponseDtoForPage;
import com.capstone.jrdaycare.enquiry.dto.UpdateStatusDto;
import com.capstone.jrdaycare.enquiry.entity.Enquiry;
import com.capstone.jrdaycare.enquiry.mapper.EnquiryMapper;
import com.capstone.jrdaycare.enquiry.repository.EnquiryRepository;
import com.capstone.jrdaycare.enquiry.service.EnquiryService;
import com.capstone.jrdaycare.notification.entity.Notification;
import com.capstone.jrdaycare.notification.service.NotificationService;
import com.capstone.jrdaycare.payload.response.MessageResponse;
import com.capstone.jrdaycare.repository.UserRepository;
import com.capstone.jrdaycare.user.dto.ParentNameAndIdDto;
import com.capstone.jrdaycare.user.dto.UserDto;
import com.capstone.jrdaycare.user.service.UserService;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 *
 * @author group2
 */
@Service
public class EnquiryServiceImpl implements EnquiryService {

    @Autowired
    EnquiryRepository enquiryRepository;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    NotificationService notificationService;

    @Override
    public ResponseEntity<Object> createNewEnquiry(EnquiryRequestDto enquiry) {
        List<Enquiry> duplicateEnquiry = enquiryRepository.getDuplicateEnquiry(
                enquiry.getFirstName(),
                enquiry.getLastName(),
                enquiry.getMobileNumber(),
                enquiry.getHouseDetail(),
                enquiry.getAreaDetail(),
                enquiry.getPincode());
        if (!duplicateEnquiry.isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorMessage("This Enquiry Allready Taken By JR Daycare"));
        }
        UserDto currentUser = (UserDto) userService.getCurrentUser().getBody();
        Enquiry newEnquiry = EnquiryMapper.getEnquiryEntity(enquiry);
        switch (currentUser.getRole()) {
            case CommonConstant.ROLE_JRADMIN:
            case CommonConstant.ROLE_ADMIN:
            case CommonConstant.ROLE_INSTRUCTOR:
            case CommonConstant.ROLE_PARENT:{
                newEnquiry.setOwner(currentUser.getUserId());
                newEnquiry.setOwnerName(currentUser.getBusinessName());
                break;
            }
        }
        Enquiry e = enquiryRepository.save(newEnquiry);

        String content = NotificationConstant.NEW_ENQUIRY_CREATE + currentUser.getBusinessName();
        List<Long> ids = userRepository.getAllParentIds(currentUser.getUserId());
        List<Notification> notifications = new ArrayList<>();
        ids.forEach(id -> {
            notifications.add(notificationService.makeNotification(NotificationConstant.TYPE_ENQUIRY, content, id));
        });
        notificationService.createNewNotifications(notifications);

        return ResponseEntity.ok().body(e);
    }

    @Override
    public ResponseEntity<Object> getEnquiryPageList(Integer pageNo, String searchString) {
        UserDto currentUser = (UserDto) userService.getCurrentUser().getBody();
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("User Not Found"));
        }

        Integer limit = CommonConstant.PAGE_SIZE;
        Integer offset = (pageNo - 1) * CommonConstant.PAGE_SIZE;
        Long totalCount = 0L;
        String currentUserRole = currentUser.getRole();
        List<QueryResponseDtoForPage> dtoForPages = new ArrayList<>();
        List<Long> adminIds = userRepository.getAdminRoleId();
        if ((currentUserRole.equals(CommonConstant.ROLE_PARENT)) && adminIds.contains(currentUser.getParent())) {
            currentUserRole = CommonConstant.ROLE_JRADMIN;
        }
        switch (currentUserRole) {
            case CommonConstant.ROLE_JRADMIN:
            case CommonConstant.ROLE_ADMIN: {
                if (searchString != null && !searchString.isEmpty()) {
                    dtoForPages = enquiryRepository.getAllEnquiryPageWith(offset, limit, searchString);
                    totalCount = enquiryRepository.getAllEnquiryPageWithCount(searchString);
                } else {
                    dtoForPages = enquiryRepository.getAllEnquiryPageWithoutSearch(offset, limit);
                    totalCount = enquiryRepository.getAllEnquiryPageWithoutSearchCount();
                }
                break;
            }
            case CommonConstant.ROLE_INSTRUCTOR:
            case CommonConstant.ROLE_PARENT: {
                List<Long> childUserIds = userRepository.getAllChildIds(currentUser.getUserId());
                if (currentUserRole.equals(CommonConstant.ROLE_PARENT)) {
                    childUserIds = userRepository.getAllChildIds(currentUser.getParent());
                }
                childUserIds.add(currentUser.getOwnerId());
                if (searchString != null && !searchString.isEmpty()) {
                    dtoForPages = enquiryRepository.getAllEnquiryPageWithForDl(offset, limit, searchString, childUserIds);
                    totalCount = enquiryRepository.getAllEnquiryPageWithCountForDl(searchString, childUserIds);
                } else {
                    dtoForPages = enquiryRepository.getAllEnquiryPageWithoutSearchForDl(offset, limit, childUserIds);
                    totalCount = enquiryRepository.getAllEnquiryPageWithoutSearchCountForDl(childUserIds);
                }
                break;
            }
        }

        PageDto pageDto = new PageDto();

        pageDto.setList(dtoForPages);
        pageDto.setTotalCount(totalCount);
        return ResponseEntity.ok().body(pageDto);
    }

    @Override
    public ResponseEntity<Object> getPendingEnquiryPageList(Integer pageNo, String searchString) {
        UserDto currentUser = (UserDto) userService.getCurrentUser().getBody();
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("User Not Found"));
        }

        Integer limit = CommonConstant.PAGE_SIZE;
        Integer offset = (pageNo - 1) * CommonConstant.PAGE_SIZE;
        Long totalCount = 0L;
        String currentUserRole = currentUser.getRole();
        List<QueryResponseDtoForPage> dtoForPages = new ArrayList<>();
        if (currentUserRole.equals(CommonConstant.ROLE_JRADMIN) || currentUserRole.equals(CommonConstant.ROLE_ADMIN)) {
            if (searchString != null && !searchString.isEmpty()) {
                dtoForPages = enquiryRepository.getPendinfEnquiryPageWithSearch(offset, limit, searchString);
                totalCount = enquiryRepository.getPendingEnquiryPageWithSearchCount(searchString);
            } else {
                dtoForPages = enquiryRepository.getPendingEnquiryPageWithoutSearch(offset, limit);
                totalCount = enquiryRepository.getPendingEnquiryPageWithoutSearchCount();
            }
            PageDto pageDto = new PageDto();

            pageDto.setList(dtoForPages);
            pageDto.setTotalCount(totalCount);
            return ResponseEntity.ok().body(pageDto);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("You can not access"));
        }
    }

    @Override
    public ResponseEntity<Object> updateEnquiryStatus(UpdateStatusDto statusDto) {
        UserDto currentUser = (UserDto) userService.getCurrentUser().getBody();
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("User Not Found"));
        }

        Enquiry enquiry = enquiryRepository.findById(statusDto.getId()).orElseThrow();

        switch (statusDto.getStatus()) {
            case CommonConstant.ENQUIRY_APPROVED_BY_JR:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_PENDING)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_APPROVED_BY_JR);
                    enquiry.setApproveRejectDateByAdmin(new Date());
                    enquiry.setJrDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationSender(enquiry.getFirstName(), enquiry.getLastName(), " is approved", enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_REJECTED_BY_JR:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_PENDING)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_REJECTED_BY_JR);
                    enquiry.setApproveRejectDateByAdmin(new Date());
                    enquiry.setJrDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationSender(enquiry.getFirstName(), enquiry.getLastName(), " is rejected", enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_CONFIRMED_BY_CLIENT:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_APPROVED_BY_JR)
                        || enquiry.getStatus().equals(CommonConstant.ENQUIRY_HOLD_BY_CLIENT)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_CONFIRMED_BY_CLIENT);
                    enquiry.setApproveRejectDateBySiteManager(new Date());
                    enquiry.setClientDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationsSender(enquiry.getFirstName(), enquiry.getLastName(), " is confirmed", currentUser.getUserId(), enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_HOLD_BY_CLIENT:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_APPROVED_BY_JR)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_HOLD_BY_CLIENT);
                    enquiry.setApproveRejectDateBySiteManager(new Date());
                    enquiry.setClientDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationsSender(enquiry.getFirstName(), enquiry.getLastName(), " is on hold", currentUser.getUserId(), enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_CANCEL_BY_CLIENT:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_APPROVED_BY_JR)
                        || enquiry.getStatus().equals(CommonConstant.ENQUIRY_HOLD_BY_CLIENT)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_CANCEL_BY_CLIENT);
                    enquiry.setApproveRejectDateBySiteManager(new Date());
                    enquiry.setClientDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationsSender(enquiry.getFirstName(), enquiry.getLastName(), " is cancel", currentUser.getUserId(), enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_PROVISIONING:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_CONFIRMED_BY_CLIENT)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_PROVISIONING);
                    enquiry.setProvisioningDate(new Date());
                    enquiry.setProvisioningDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationsSender(enquiry.getFirstName(), enquiry.getLastName(), " is in provisioning", currentUser.getUserId(), enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_REQUIREMENT:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_PROVISIONING)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_REQUIREMENT);
                    enquiry.setRequirementDate(new Date());
                    enquiry.setRequirementDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationsSender(enquiry.getFirstName(), enquiry.getLastName(), " is in requirement phase", currentUser.getUserId(), enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_INSTALLATION:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_REQUIREMENT)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_INSTALLATION);
                    enquiry.setInstallationDate(new Date());
                    enquiry.setInstallationDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationsSender(enquiry.getFirstName(), enquiry.getLastName(), " is in installation phase", currentUser.getUserId(), enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            case CommonConstant.ENQUIRY_COMMISSIONING:
                if (enquiry.getStatus().equals(CommonConstant.ENQUIRY_INSTALLATION)) {
                    enquiry.setStatus(CommonConstant.ENQUIRY_COMMISSIONING);
                    enquiry.setCommissioningDate(new Date());
                    enquiry.setCommissionindDesc(statusDto.getDesc());
                    enquiryRepository.save(enquiry);
                    notificationsSender(enquiry.getFirstName(), enquiry.getLastName(), " is in commissionig phase", currentUser.getUserId(), enquiry.getCreatedBy());
                    return ResponseEntity.ok().body(new MessageResponse(" Status Successfully Changed!"));
                } else {
                    return ResponseEntity.badRequest().body(new MessageResponse(" You Can't Change Status!"));
                }
            default:
                return ResponseEntity.badRequest().body(new MessageResponse("Status not found"));
        }
    }

    private void notificationSender(String firstName, String lastName, String status, Long senderId) {
        String content = NotificationConstant.ENQUIRY_CHANGED_STATUS + " " + firstName + " " + lastName + status;
        List<Long> ids = new ArrayList<>();
        ids.add(senderId);
        List<Notification> notifications = new ArrayList<>();
        ids.forEach(id -> {
            notifications.add(notificationService.makeNotification(NotificationConstant.TYPE_ENQUIRY, content, id));
        });
        List<String> deviceIds = userRepository.getDeviceId(ids);
        notificationService.sendMobileNotifications(deviceIds, NotificationConstant.TYPE_ENQUIRY, content);
        notificationService.createNewNotifications(notifications);

    }

    private void notificationsSender(String firstName, String lastName, String status, Long senderId, Long actualId) {
        String content = NotificationConstant.ENQUIRY_CHANGED_STATUS + " " + firstName + " " + lastName + status;
        List<Long> ids = getAllUserIdsRelateduser(senderId, actualId);
        List<Notification> notifications = new ArrayList<>();
        ids.forEach(id -> {
            notifications.add(notificationService.makeNotification(NotificationConstant.TYPE_ENQUIRY, content, id));
        });
        List<String> deviceIds = userRepository.getDeviceId(ids);
        for (String deviceId : deviceIds) {
            System.out.println("\n" + deviceId);
        }
        notificationService.sendMobileNotifications(deviceIds, NotificationConstant.TYPE_ENQUIRY, content);
        notificationService.createNewNotifications(notifications);
    }

    @Override
    public ResponseEntity<Object> getEnquiryById(Long enquiryid) {
        Optional<Enquiry> e = enquiryRepository.findById(enquiryid);
        if (e.isPresent()) {
            return ResponseEntity.ok().body(e.get());
        }
        return ResponseEntity.badRequest().body(new MessageResponse("Inquiry not Found"));
    }

    @Override
    public ResponseEntity<Object> getEnquiryDetails(Long enquiryid) {
        return null;
    }

    @Override
    public ResponseEntity<Object> getEnquiryDetailsByUUID(String UUID) {
        return null;
    }

    @Override
    public ResponseEntity<Object> getFinishedEnquiryPageList(Integer pageNo, String searchString) {
        UserDto currentUser = (UserDto) userService.getCurrentUser().getBody();
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("User Not Found"));
        }

        Integer limit = CommonConstant.PAGE_SIZE;
        Integer offset = (pageNo - 1) * CommonConstant.PAGE_SIZE;
        Long totalCount = 0L;
        String currentUserRole = currentUser.getRole();
        List<QueryResponseDtoForPage> dtoForPages = new ArrayList<>();
        List<Long> adminIds = userRepository.getAdminRoleId();
        if ((currentUserRole.equals(CommonConstant.ROLE_PARENT)) && adminIds.contains(currentUser.getParent())) {
            currentUserRole = CommonConstant.ROLE_JRADMIN;
        }
        switch (currentUserRole) {
            case CommonConstant.ROLE_JRADMIN:
            case CommonConstant.ROLE_ADMIN: {
                if (searchString != null && !searchString.isEmpty()) {
                    dtoForPages = enquiryRepository.getAllFinishedEnquiryPageWith(offset, limit, searchString);
                    totalCount = enquiryRepository.getAllFinishedEnquiryPageWithCount(searchString);
                } else {
                    dtoForPages = enquiryRepository.getFinishedEnquiryPageWithoutSearch(offset, limit);
                    totalCount = enquiryRepository.getFinishedEnquiryPageWithoutSearchCount();
                }
                break;
            }
            case CommonConstant.ROLE_INSTRUCTOR:
            case CommonConstant.ROLE_PARENT: {
                List<Long> childUserIds = userRepository.getAllChildIds(currentUser.getUserId());
                if (currentUserRole.equals(CommonConstant.ROLE_PARENT)) {
                    childUserIds = userRepository.getAllChildIds(currentUser.getParent());
                }
                childUserIds.add(currentUser.getOwnerId());
                if (searchString != null && !searchString.isEmpty()) {
                    dtoForPages = enquiryRepository.getFinishedEnquiryPageWithForDl(offset, limit, searchString, childUserIds);
                    totalCount = enquiryRepository.getFinishedEnquiryPageWithCountForDl(searchString, childUserIds);
                } else {
                    dtoForPages = enquiryRepository.getFinishedEnquiryPageWithoutSearchForDl(offset, limit, childUserIds);
                    totalCount = enquiryRepository.getFinishedEnquiryPageWithoutSearchCountForDl(childUserIds);
                }
                break;
            }
        }

        PageDto pageDto = new PageDto();

        pageDto.setList(dtoForPages);
        pageDto.setTotalCount(totalCount);
        return ResponseEntity.ok().body(pageDto);
    }

    @Override
    public ResponseEntity<Object> completeEnquiryWithItems(CompleteRequestDto completeRequestDto) {
        return null;
    }

    private List<Long> getAllUserIdsRelateduser(Long actionUser, Long actualUser) {
        List<Long> ids = userRepository.getAllParentIds(actionUser);
        List<Long> finalIds = new ArrayList<>();
        finalIds.addAll(ids);
        List<Long> sameLineUserIds = userRepository.getSameLineUser(ids);
        if (sameLineUserIds != null && !sameLineUserIds.isEmpty()) {
            finalIds.addAll(sameLineUserIds);
        }
        List<Long> adminIds = userRepository.getAdminRoleId();
        finalIds.addAll(adminIds);
        List<Long> sameLineForAdmin = userRepository.getSameLineUser(adminIds);
        if (sameLineForAdmin != null && !sameLineForAdmin.isEmpty()) {
            finalIds.addAll(sameLineForAdmin);
        }
        if (actionUser != null) {
            finalIds.add(actualUser);
        }
        Set<Long> nonDuplicate = new HashSet<>();
        nonDuplicate.addAll(finalIds);
        List<Long> list = new ArrayList<>();
        list.addAll(nonDuplicate);
        return list;
    }

}
