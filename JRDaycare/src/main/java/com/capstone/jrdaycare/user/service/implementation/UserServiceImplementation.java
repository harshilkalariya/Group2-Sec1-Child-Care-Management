package com.capstone.jrdaycare.user.service.implementation;

import com.capstone.jrdaycare.common.CommonConstant;
import com.capstone.jrdaycare.common.ErrorMessage;
import com.capstone.jrdaycare.common.PageDto;
import com.capstone.jrdaycare.location.entity.CityLocation;
import com.capstone.jrdaycare.location.entity.StateLocation;
import com.capstone.jrdaycare.location.repository.CityRepository;
import com.capstone.jrdaycare.location.repository.StateRepository;
import com.capstone.jrdaycare.models.ERole;
import com.capstone.jrdaycare.models.Role;
import com.capstone.jrdaycare.models.User;
import com.capstone.jrdaycare.payload.request.AddUserRequest;
import com.capstone.jrdaycare.payload.response.MessageResponse;
import com.capstone.jrdaycare.repository.RoleRepository;
import com.capstone.jrdaycare.repository.UserRepository;
import com.capstone.jrdaycare.security.services.UserDetailsImpl;
import com.capstone.jrdaycare.user.Entity.UserBrochure;
import com.capstone.jrdaycare.user.dto.ParentNameAndIdDto;
import com.capstone.jrdaycare.user.dto.PendingUser;
import com.capstone.jrdaycare.user.dto.PendingUserList;
import com.capstone.jrdaycare.user.dto.UserDetails;
import com.capstone.jrdaycare.user.dto.UserDto;
import com.capstone.jrdaycare.user.mapper.UserMapper;
import com.capstone.jrdaycare.user.repository.UserFileRepository;
import com.capstone.jrdaycare.user.service.UserService;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.*;
import java.util.stream.Collectors;
import javax.transaction.Transactional;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Transactional
@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    CityRepository cityRepository;

    @Autowired
    StateRepository stateRepository;

    @Autowired
    UserService userService;

    @Autowired
    UserFileRepository fileRepository;

    @Value("${root}")
    private String root;

    @Override
    public ResponseEntity<Object> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        Long userId = userDetails.getId();

        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorMessage("Error: User don't have access!"));
        }

        Optional<CityLocation> location = cityRepository.findById(user.get().getLocationId());
        if (location.isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorMessage("Error: User location not found!"));
        }

        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());

        UserDto userDto = UserMapper.getUserDto(user.get(), location.get(), roles.get(0));

        switch (userDto.getRole()) {
            case CommonConstant.ROLE_ADMIN:
            case CommonConstant.ROLE_JRADMIN:
            case CommonConstant.ROLE_INSTRUCTOR: {
                userDto.setOwnerBusinessName(userDto.getBusinessName());
                userDto.setOwnerId(userDto.getUserId());
                break;
            }
            case CommonConstant.ROLE_PARENT: {
                List<ParentNameAndIdDto> dlList = userRepository.getParentDealer(userId);
                List<ParentNameAndIdDto> dbList = userRepository.getParentDestributor(userId);
                if (!dlList.isEmpty()) {
                    userDto.setOwnerBusinessName(dlList.get(0).getBusinessName());
                    userDto.setOwnerId(dlList.get(0).getId());
                    break;
                } else if (!dbList.isEmpty()) {
                    userDto.setOwnerBusinessName(dbList.get(0).getBusinessName());
                    userDto.setOwnerId(dbList.get(0).getId());
                    break;
                } else {
                    User parentUser = userRepository.findById(user.get().getParent()).get();
                    userDto.setOwnerBusinessName(parentUser.getBusinessName());
                    userDto.setOwnerId(parentUser.getId());
                    break;
                }

            }

        }
        UserBrochure brochure = fileRepository.findByUserId(userId);
        if (brochure != null) {
            userDto.setBrochure(brochure.getName());
        }

        return ResponseEntity.ok(userDto);
    }

    @Override
    public ResponseEntity<Object> getPendingUserList(Integer pageNo, String searchString) {

        List<PendingUser> pendingUsers = new ArrayList<>();
        List<PendingUserList> pendingUsersList = new ArrayList<>();
        Integer limit = CommonConstant.PAGE_SIZE;
        Integer offset = (pageNo - 1) * CommonConstant.PAGE_SIZE;
        Long totalCount = 0L;
        if (searchString != null && !searchString.isEmpty()) {
            pendingUsers = userRepository.getPendingUserListByPageWithSearch(searchString, offset, limit);
            totalCount = userRepository.getPendingUserListTotalCountWithSearch(searchString);
        } else {
            pendingUsers = userRepository.getPendingUserListByPage(offset, limit);
            totalCount = userRepository.getPendingUserListTotalCount();
        }

        for (PendingUser pendingUser : pendingUsers) {
            if (pendingUser.getParent() == null) {
                pendingUsersList.add(UserMapper.getPendingUserList(pendingUser, null));
            } else {
                pendingUsersList.add(UserMapper.getPendingUserList(pendingUser, getUserById(pendingUser.getParent())));
            }
        }

        PageDto pageDto = new PageDto();

        pageDto.setList(pendingUsersList);
        pageDto.setTotalCount(totalCount);
        return ResponseEntity.ok(pageDto);
    }

    @Override
    public ResponseEntity<Object> getAllUser(Integer pageNo, String searchString) {
        UserDto loggedInUser = (UserDto) getCurrentUser().getBody();
        List<Long> childUserIds = userRepository.getAllChildIds(loggedInUser.getUserId());
        String role = loggedInUser.getRole();
        List<PendingUser> pendingUsers = new ArrayList<>();
        List<PendingUserList> pendingUsersList = new ArrayList<>();
        Integer limit = CommonConstant.PAGE_SIZE;
        Integer offset = (pageNo - 1) * CommonConstant.PAGE_SIZE;
        Long totalCount = 0L;
        switch (role) {
            case "ROLE_JRADMIN":
            case "ROLE_ADMIN": {
                if (searchString != null && !searchString.isEmpty()) {
                    pendingUsers = userRepository.getAllUserListByPageWithSearch(searchString, offset, limit);
                    totalCount = userRepository.getAllUserListTotalCountWithSearch(searchString);
                } else {
                    pendingUsers = userRepository.getAllUserListByPage(offset, limit);
                    totalCount = userRepository.getAllUserListTotalCount();
                }
                break;
            }
            case "ROLE_DEALER":
            case "ROLE_INSTRUCTOR": {
                if (searchString != null && !searchString.isEmpty()) {
                    pendingUsers = userRepository.getAllUserListByPageWithSearchForOtherUser(searchString, childUserIds, offset, limit);
                    totalCount = userRepository.getAllUserListTotalCountWithSearchForOtherUser(searchString, childUserIds);
                } else {
                    pendingUsers = userRepository.getAllUserListByPageForOtherUser(offset, limit, childUserIds);
                    totalCount = userRepository.getAllUserListTotalCountForOtherUser(childUserIds);
                }
                break;
            }
        }
        for (PendingUser pendingUser : pendingUsers) {
            if (pendingUser.getParent() == null) {
                pendingUsersList.add(UserMapper.getPendingUserList(pendingUser, null));
            } else {
                pendingUsersList.add(UserMapper.getPendingUserList(pendingUser, getUserById(pendingUser.getParent())));
            }
        }

        PageDto pageDto = new PageDto();

        pageDto.setList(pendingUsersList);
        pageDto.setTotalCount(totalCount);
        return ResponseEntity.ok(pageDto);
    }

    @Override
    public ResponseEntity<Object> getAllUserWithoutPage() {
        return ResponseEntity.ok(userRepository.getAllUser());
    }

    @Override
    public ResponseEntity<Object> changeNewUserStatus(String status, Long userId) {
        UserDto loggedInUser = (UserDto) getCurrentUser().getBody();
        Long loggedInUserId = loggedInUser.getUserId();
        UserDetails user = userRepository.getUserById(userId);
        CityLocation cityLocation = cityRepository.findById(user.getLocationId()).get();
        StateLocation location = stateRepository.findById(cityLocation.getStateId()).get();
        System.out.println(user.getParent());
        if (Objects.equals(status, CommonConstant.APPROVE_USER)) {
            if (user.getParent() == null) {
                userRepository.updateUserAsApproveForFirstTimeWithoutParent(userId, loggedInUserId, generateBusinessId(user, location));
            } else {
                userRepository.updateUserAsApproveForFirstTime(userId, generateBusinessId(user, location));
            }
            return ResponseEntity.ok().body(new MessageResponse("Success: User Approved Successfully!"));
        } else if (Objects.equals(status, CommonConstant.HOLD_USER)) {
            if (user.getParent() == null) {
                userRepository.updateUserAsHoltForFirstTimeForWithoutParent(userId, loggedInUserId, generateBusinessId(user, location));
            } else {
                userRepository.updateUserAsHoltForFirstTime(userId, generateBusinessId(user, location));
            }
            return ResponseEntity.ok().body(new MessageResponse("Success: User Is Now On Holt!"));
        } else if (Objects.equals(status, CommonConstant.REJECT_USER)) {
            userRepository.deleteUserRoles(userId);
            userRepository.deleteById(userId);
            return ResponseEntity.ok().body(new MessageResponse("Success: User Rejected Successfully!"));
        } else {
            return ResponseEntity.badRequest().body(new ErrorMessage("Error: User Action Not Found"));
        }
    }

    @Override
    public ResponseEntity<Object> changeUserStatus(String status, Long userId) {
        if (Objects.equals(status, CommonConstant.ACTIVE)) {
            userRepository.updateUserStatus(userId, true);
            return ResponseEntity.ok().body(new MessageResponse("Success: User Activated Successfully!"));
        } else if (Objects.equals(status, CommonConstant.INACTIVE)) {
            userRepository.updateUserStatus(userId, false);
            return ResponseEntity.ok().body(new MessageResponse("Success: User Deactivated Successfully!"));
        } else {
            return ResponseEntity.badRequest().body(new ErrorMessage("Error: User Action Not Found"));
        }
    }

    @Override
    public UserDetails getUserById(Long userId) {
        return userRepository.getUserById(userId);
    }

    @Override
    public ResponseEntity<Object> updateUserById(Long userId, AddUserRequest addUserRequest) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorMessage("User Not Found!"));
        } else {
            User oldUser = optionalUser.get();

            Set<Role> roles = new HashSet<>();

            switch (addUserRequest.getRole()) {
                case "ROLE_JRADMIN":
                    Role jrAdminRole = roleRepository.findByName(ERole.ROLE_JRADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(jrAdminRole);

                    break;
                case "ROLE_ADMIN":
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(adminRole);

                    break;
                case "ROLE_DEALER":
                    Role dealerRole = roleRepository.findByName(ERole.ROLE_DEALER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(dealerRole);

                    break;
                case "ROLE_INSTRUCTOR":
                    Role distributorRole = roleRepository.findByName(ERole.ROLE_INSTRUCTOR)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(distributorRole);

                    break;
                case "ROLE_RETAILER":
                    Role retailerRole = roleRepository.findByName(ERole.ROLE_RETAILER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(retailerRole);

                    break;
                case "ROLE_TECHNICIAN":
                    Role technicianRole = roleRepository.findByName(ERole.ROLE_TECHNICIAN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(technicianRole);

                    break;
                case "ROLE_PARENT":
                    Role marketingRole = roleRepository.findByName(ERole.ROLE_PARENT)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(marketingRole);

                    break;
            }
            oldUser.setRoles(roles);
            oldUser.setEmail(addUserRequest.getEmail());
            oldUser.setParent(addUserRequest.getParent());
            oldUser.setBusinessName(addUserRequest.getBusinessName());
            oldUser.setLocationId(addUserRequest.getLocationId());
            oldUser.setMobileNumber(addUserRequest.getMobileNumber());
            oldUser.setSecondNumber(addUserRequest.getSecondNumber());
            oldUser.setThirdNumber(addUserRequest.getThirdNumber());
            oldUser.setUsername(addUserRequest.getEmail());

            User savedUser = userRepository.save(oldUser);

            UserDetails user = userRepository.getUserById(userId);
            CityLocation cityLocation = cityRepository.findById(savedUser.getLocationId()).get();
            StateLocation location = stateRepository.findById(cityLocation.getStateId()).get();

            userRepository.updateUserAsApproveForFirstTime(userId, generateBusinessId(user, location));
        }
        return ResponseEntity.ok().body(new MessageResponse("Updated Successfully!"));
    }

    @Override
    public String generateBusinessId(UserDetails user, StateLocation location) {
        String gstCode = location.getCode();
        String cityName = user.getCityTitle().substring(0, 3).toUpperCase();
        String roleCode = "";
        switch (user.getRole()) {
            case CommonConstant.ROLE_JRADMIN:
                roleCode = CommonConstant.ROLE_JRADMIN_SHORT;
                break;
            case CommonConstant.ROLE_ADMIN:
                roleCode = CommonConstant.ROLE_ADMIN_SHORT;
                break;
            case CommonConstant.ROLE_INSTRUCTOR:
                roleCode = CommonConstant.ROLE_INSTRUCTOR_SHORT;
                break;
            case CommonConstant.ROLE_PARENT:
                roleCode = CommonConstant.ROLE_PARENT_SHORT;
                break;
        }
        String userId = user.getUserId().toString();
        if (userId.length() == 1) {
            userId = "000" + userId;
        }
        switch (userId.length()) {
            case 1:
                userId = "000" + userId;
                break;
            case 2:
                userId = "00" + userId;
                break;
            case 3:
                userId = "0" + userId;
                break;
        }
        return gstCode + cityName + "-" + roleCode + userId;
    }

    @Override
    public ParentNameAndIdDto findDealerOrDestributorId(Long Id) {
        List<ParentNameAndIdDto> dlMap = userRepository.getParentDealer(Id);
        List<ParentNameAndIdDto> dbMap = userRepository.getParentDestributor(Id);

        if (dlMap.isEmpty()) {
            return dbMap.get(0);
        } else {
            return dlMap.get(0);
        }
    }

    @Override
    @Transactional
    public ResponseEntity<Object> addDeviceId(String deviceId) {
        UserDto loggedInUser = (UserDto) getCurrentUser().getBody();
        if ("null".equals(deviceId)) {
            deviceId = null;
        }
        userRepository.addUserDeviceId(loggedInUser.getUserId(), deviceId);
        return ResponseEntity.ok().body(new MessageResponse("Updated Successfully!"));
    }

    @Override
    public ResponseEntity<Object> addUserBrocher(Long userId, MultipartFile file) {
        UserDetails userDetails = userService.getUserById(userId);
        UserBrochure brochure = fileRepository.findByUserId(userId);
        brochure = brochure == null ? new UserBrochure(null, userId, null) : brochure;
        String originalFileName = "";
        String basePath = root + CommonConstant.USER_BROCHURE_FILE_PATH;
        String extention = FilenameUtils.getExtension(file.getOriginalFilename());
        if (!CommonConstant.ORDER_FILE_EXTENTION.equalsIgnoreCase(extention)) {
            return ResponseEntity.badRequest().body(new ErrorMessage("Please upload pdf file"));
        }

        originalFileName = userId + "." + extention;
        File baseFile = new File(basePath);
        if (!baseFile.exists()) {
            baseFile.mkdirs();
        }
        String filePath = basePath + originalFileName;
        if (file != null) {
            try {
                File f = new File(filePath);
                OutputStream out = new FileOutputStream(f);
                if (file.getBytes() != null || file.getBytes().length != 0) {
                    out.write(file.getBytes());
                    out.close();
                    brochure.setName(originalFileName);
                    fileRepository.save(brochure);
                } else {
                    return ResponseEntity.badRequest().body(new ErrorMessage("File is empty"));
                }

            } catch (IOException e) {
                return ResponseEntity.badRequest().body(new ErrorMessage("File is Not uploaded"));
            }

        }
        return ResponseEntity.ok().body(brochure);
    }

    @Override
    public ResponseEntity<Object> downloadUserBrochure(Long userId) {
        UserBrochure brochure = fileRepository.findByUserId(userId);
        if (brochure == null || brochure.getName().isEmpty() || brochure.getName().isBlank() || brochure.getName() == null) {
            return ResponseEntity.badRequest().body(new ErrorMessage("File Is Not Uploaded By User"));
        }
        String filePath = root + CommonConstant.USER_BROCHURE_FILE_PATH + brochure.getName();
        File file = new File(filePath);
        try {
            InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
            String contentType = "application/octet-stream";
            String headerValue = "attachment; filename=\"" + file.getName() + "\"";
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION, headerValue)
                    .body(resource);

        } catch (FileNotFoundException e) {
            return ResponseEntity.badRequest().body(new ErrorMessage("File Is Not Fount In Server"));
        }
    }
}
