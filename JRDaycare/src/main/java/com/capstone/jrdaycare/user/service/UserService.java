package com.capstone.jrdaycare.user.service;

import com.capstone.jrdaycare.location.entity.StateLocation;
import com.capstone.jrdaycare.payload.request.AddUserRequest;
import com.capstone.jrdaycare.user.dto.ParentNameAndIdDto;
import com.capstone.jrdaycare.user.dto.UserDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {

    public ResponseEntity<Object> getCurrentUser();

    public ResponseEntity<Object> getPendingUserList(Integer pageNo, String searchString);

    public ResponseEntity<Object> getAllUser(Integer pageNo, String searchString);

    public ResponseEntity<Object> getAllUserWithoutPage();

    public ResponseEntity<Object> changeNewUserStatus(String status, Long userId);

    public ResponseEntity<Object> changeUserStatus(String status, Long userId);

    public String generateBusinessId(UserDetails user, StateLocation location);

    public UserDetails getUserById(Long userId);

    public ResponseEntity<Object> updateUserById(Long userId, AddUserRequest addUserRequest);

    public ParentNameAndIdDto findDealerOrDestributorId(Long Id);

    public ResponseEntity<Object> addDeviceId(String deviceId);

    public ResponseEntity<Object> addUserBrocher(Long userId, MultipartFile file);

    public ResponseEntity<Object> downloadUserBrochure(Long userId);

}
