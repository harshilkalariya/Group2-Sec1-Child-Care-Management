package com.capstone.jrdaycare.user.controller;

import com.capstone.jrdaycare.payload.request.AddUserRequest;
import com.capstone.jrdaycare.user.service.UserService;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/current")
    public ResponseEntity<Object> getCurrentUser() {
        return userService.getCurrentUser();
    }

    @GetMapping("/pending/invitation")
    public ResponseEntity<Object> getPendingUserInvitation(@RequestParam(value = "pageNo") Integer pageNo, @Nullable @RequestParam(value = "search", required = false) String searchString) {
        return userService.getPendingUserList(pageNo, searchString);
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllUser(@RequestParam(value = "pageNo") Integer pageNo, @Nullable @RequestParam(value = "search", required = false) String searchString) {
        return userService.getAllUser(pageNo, searchString);
    }

    @GetMapping("/invite/status")
    public ResponseEntity<Object> changeNewUserStatus(@RequestParam(value = "status") String status, @RequestParam(value = "id") Long userId) {
        return userService.changeNewUserStatus(status, userId);
    }

    @GetMapping("/change/status")
    public ResponseEntity<Object> changeUserStatus(@RequestParam(value = "status") String status, @RequestParam(value = "id") Long userId) {
        return userService.changeUserStatus(status, userId);
    }

    @GetMapping("/all/search")
    public ResponseEntity<Object> getAllUserWithOutPage() {
        return userService.getAllUserWithoutPage();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Object> getUserById(@PathVariable(value = "userId") Long userId) {
        return ResponseEntity.ok().body(userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Object> updateUserById(@PathVariable(value = "userId") Long userId, @Valid @RequestBody AddUserRequest addUserRequest) {
        return userService.updateUserById(userId, addUserRequest);
    }

    @GetMapping("/add/device_id/{deviceId}")
    public ResponseEntity<Object> addDeviceId(@PathVariable(value = "deviceId") String deviceId) {
        return ResponseEntity.ok().body(userService.addDeviceId(deviceId));
    }

    @PostMapping("/add/brochure/{id}")
    public ResponseEntity<Object> addUserBrochure(@RequestParam(value = "file") MultipartFile file, @PathVariable(value = "id") Long id) {
        return ResponseEntity.ok().body(userService.addUserBrocher(id, file));
    }

    @GetMapping("/download/brochure/{userId}")
    private ResponseEntity<Object> downloadUserBrochure(@PathVariable(name = "userId") Long userId) {
        return userService.downloadUserBrochure(userId);
    }
}
