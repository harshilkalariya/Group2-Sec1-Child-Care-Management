package com.capstone.jrdaycare.controllers;

import com.capstone.jrdaycare.common.CommonConstant;
import com.capstone.jrdaycare.common.ErrorMessage;
import com.capstone.jrdaycare.common.NotificationConstant;
import com.capstone.jrdaycare.location.entity.CityLocation;
import com.capstone.jrdaycare.location.entity.StateLocation;
import com.capstone.jrdaycare.location.repository.CityRepository;
import com.capstone.jrdaycare.location.repository.StateRepository;
import com.capstone.jrdaycare.models.ERole;
import com.capstone.jrdaycare.models.Role;
import com.capstone.jrdaycare.models.User;
import com.capstone.jrdaycare.notification.entity.Notification;
import com.capstone.jrdaycare.notification.service.NotificationService;
import com.capstone.jrdaycare.otp.dto.VerificationRequestOTP;
import com.capstone.jrdaycare.otp.entity.OTP;
import com.capstone.jrdaycare.otp.repository.OTPRepository;
import com.capstone.jrdaycare.otp.service.OTPService;
import com.capstone.jrdaycare.payload.request.AddUserRequest;
import com.capstone.jrdaycare.payload.request.LoginRequest;
import com.capstone.jrdaycare.payload.request.PasswordResetRequest;
import com.capstone.jrdaycare.payload.request.SignupRequest;
import com.capstone.jrdaycare.payload.response.JwtResponse;
import com.capstone.jrdaycare.payload.response.MessageResponse;
import com.capstone.jrdaycare.repository.RoleRepository;
import com.capstone.jrdaycare.repository.UserRepository;
import com.capstone.jrdaycare.security.jwt.JwtUtils;
import com.capstone.jrdaycare.security.services.UserDetailsImpl;
import com.capstone.jrdaycare.user.dto.UserDetails;
import com.capstone.jrdaycare.user.dto.UserDto;
import com.capstone.jrdaycare.user.service.UserService;
import java.sql.Timestamp;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    NotificationService notificationService;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    CityRepository cityRepository;

    @Autowired
    StateRepository stateRepository;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    OTPService otpService;

    @Autowired
    OTPRepository otpRepository;

    @Value("${hosturl}")
    private String host;

    @PostMapping("/_w/signin")
    public ResponseEntity<?> authenticateWebUser(@Valid @RequestBody LoginRequest loginRequest) {
        User user = null;
        Boolean isEmail = true;
        if (loginRequest.getUsername().contains("@")) {
            isEmail = true;
        } else {
            isEmail = false;
        }

        if (isEmail) {
            Optional<User> dbUser = userRepository.findByUsername(loginRequest.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Email Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        } else {
            Optional<User> dbUser = userRepository.findByMobileNumber(loginRequest.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Mobile Number Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        }

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
    }

    @PostMapping("/_m/signin")
    public ResponseEntity<?> authenticateMobileUser(@Valid @RequestBody LoginRequest loginRequest) {
        User user = null;
        Boolean isEmail = true;
        if (loginRequest.getUsername().contains("@")) {
            isEmail = true;
        } else {
            isEmail = false;
        }

        if (isEmail) {
            Optional<User> dbUser = userRepository.findByUsername(loginRequest.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Email Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        } else {
            Optional<User> dbUser = userRepository.findByMobileNumber(loginRequest.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Mobile Number Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        }

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());

        if (roles.contains("ROLE_JRADMIN") || roles.contains("ROLE_ADMIN") || roles.contains("ROLE_DEALER") || roles.contains("ROLE_INSTRUCTOR")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ErrorMessage("Error: You don't have sufficient authority to access!"));
        }

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
    }

    @GetMapping("/current")
    public ResponseEntity<Object> getCurrentUser() {
        return userService.getCurrentUser();
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByMobileNumber(signUpRequest.getMobileNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Mobile number is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getEmail(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getLocationId(),
                signUpRequest.getBusinessName(),
                signUpRequest.getMobileNumber(),
                true,
                true,
                "",
                signUpRequest.getSecondNumber(),
                signUpRequest.getThirdNumber(),
                new Timestamp(new Date().getTime()),
                null);

        String strRole = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        switch (strRole) {
            case "ROLE_JRADMIN":
                Role jrAdminRole = roleRepository.findByName(ERole.ROLE_JRADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(jrAdminRole);

                break;
            case "ROLE_ADMIN":
                Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(adminRole);

                break;
            case "ROLE_DEALER":
                Role dealerRole = roleRepository.findByName(ERole.ROLE_DEALER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(dealerRole);

                break;
            case "ROLE_INSTRUCTOR":
                Role distributorRole = roleRepository.findByName(ERole.ROLE_INSTRUCTOR).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(distributorRole);

                break;
            case "ROLE_RETAILER":
                Role retailerRole = roleRepository.findByName(ERole.ROLE_RETAILER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(retailerRole);

                break;
            case "ROLE_TECHNICIAN":
                Role technicianRole = roleRepository.findByName(ERole.ROLE_TECHNICIAN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(technicianRole);

                break;
            case "ROLE_PARENT":
                Role marketingRole = roleRepository.findByName(ERole.ROLE_PARENT).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(marketingRole);

                break;
        }

        if (roles.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error : User role is not provided!"));
        }
        if (!roles.stream().filter(u -> u.getName().equals(ERole.ROLE_JRADMIN)).findFirst().isPresent()) {
            user.setIsEnabled(false);
        }
        user.setRoles(roles);
        userRepository.save(user);

//        CompletableFuture.runAsync(() -> {
        String content = user.getBusinessName() + "" + NotificationConstant.TYPE_SIGNUP_CONTENT;
        List<Long> ids = userRepository.getAdminRoleId();
        List<Notification> notifications = new ArrayList<>();
        ids.forEach(id -> {
            notifications.add(notificationService.makeNotification(NotificationConstant.TYPE_SIGNUP, content, id));
        });
        notificationService.createNewNotifications(notifications);
//        });

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @Transactional
    @PostMapping("/add/user")
    public ResponseEntity<?> addUser(@Valid @RequestBody AddUserRequest addUserRequest) {
        if (userRepository.existsByMobileNumber(addUserRequest.getMobileNumber())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Mobile number is already taken!"));
        }

        if (userRepository.existsByEmail(addUserRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
        }

        UserDto loggedInUser = (UserDto) getCurrentUser().getBody();
        String password = generatePassword();
        User user = new User();
        if (loggedInUser.getRole() == "ROLE_JRADMIN" || loggedInUser.getRole() == "ROLE_ADMIN") {
            user = new User(addUserRequest.getEmail(),
                    addUserRequest.getEmail(),
                    encoder.encode(password),
                    addUserRequest.getLocationId(),
                    addUserRequest.getBusinessName(),
                    addUserRequest.getMobileNumber(),
                    true,
                    false,
                    "",
                    addUserRequest.getSecondNumber(),
                    addUserRequest.getThirdNumber(),
                    new Timestamp(new Date().getTime()),
                    addUserRequest.getParent());

        } else {
            user = new User(addUserRequest.getEmail(),
                    addUserRequest.getEmail(),
                    encoder.encode(password),
                    addUserRequest.getLocationId(),
                    addUserRequest.getBusinessName(),
                    addUserRequest.getMobileNumber(),
                    false,
                    true,
                    "",
                    addUserRequest.getSecondNumber(),
                    addUserRequest.getThirdNumber(),
                    new Timestamp(new Date().getTime()),
                    addUserRequest.getParent());
        }
        // Create new user's account

        String strRole = addUserRequest.getRole();
        Set<Role> roles = new HashSet<>();

        switch (strRole) {
            case "ROLE_JRADMIN":
                Role jrAdminRole = roleRepository.findByName(ERole.ROLE_JRADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(jrAdminRole);

                break;
            case "ROLE_ADMIN":
                Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(adminRole);

                break;
            case "ROLE_DEALER":
                Role dealerRole = roleRepository.findByName(ERole.ROLE_DEALER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(dealerRole);

                break;
            case "ROLE_INSTRUCTOR":
                Role distributorRole = roleRepository.findByName(ERole.ROLE_INSTRUCTOR).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(distributorRole);

                break;
            case "ROLE_RETAILER":
                Role retailerRole = roleRepository.findByName(ERole.ROLE_RETAILER).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(retailerRole);

                break;
            case "ROLE_TECHNICIAN":
                Role technicianRole = roleRepository.findByName(ERole.ROLE_TECHNICIAN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(technicianRole);

                break;
            case "ROLE_PARENT":
                Role marketingRole = roleRepository.findByName(ERole.ROLE_PARENT).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(marketingRole);

                break;
        }

        if (roles.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error : User role is not provided!"));
        }
        user.setRoles(roles);
        User savedUser = userRepository.save(user);

        if (loggedInUser.getRole() == "ROLE_JRADMIN" || loggedInUser.getRole() == "ROLE_ADMIN") {
            UserDetails userDetails = userService.getUserById(savedUser.getId());
            CityLocation cityLocation = cityRepository.findById(addUserRequest.getLocationId()).get();
            StateLocation stateLocation = stateRepository.findById(cityLocation.getStateId()).get();
            String businessId = userService.generateBusinessId(userDetails, stateLocation);
            userRepository.updateUserAsApproveForFirstTime(savedUser.getId(), businessId);
        }
        String content = user.getBusinessName() + " " + NotificationConstant.TYPE_ADD_USER_CONTENT;
        List<Long> adminIds = userRepository.getAdminRoleId();
        List<Long> parentIds = userRepository.getAllParentIds(addUserRequest.getParent());
        adminIds.addAll(parentIds);
        HashSet<Long> ids = new HashSet<>(adminIds);
        List<Notification> notifications = new ArrayList<>();
        ids.forEach(id -> {
            notifications.add(notificationService.makeNotification(NotificationConstant.TYPE_ADD_USER, content, id));
        });
        notificationService.createNewNotifications(notifications);
        
        if (loggedInUser.getRole() == "ROLE_JRADMIN" || loggedInUser.getRole() == "ROLE_ADMIN") {
            String addUserMailTemplate = "<div style=\"font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2\">\n"
                    + "  <div style=\"margin:15px auto;width:70%;padding:20px 0\">\n"
                    + "    <div style=\"border-bottom:1px solid #eee\">\n"
                    + "      <a href=\"\" style=\"font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600\">JR </a>\n"
                    + "    </div>\n"
                    + "    <p style=\"font-size:1.1em\"> Welcome, " + addUserRequest.getBusinessName() + " to the JR  Family.</p>\n"
                    + "    <p>You have been added as a " + getRoleName(strRole) + ". Please find below username and temporary password.</p>\n"
                    + "    <p>You can set your password by forgot password from <a href=\"" + host + "\">JR Web</a>.</p> \n"
                    + "    <h2 style=\"background: #000;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px; text-decoration:none\">" + addUserRequest.getEmail() + "</h2>\n"
                    + "    <h2 style=\"background: #000;margin: 10px auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;\"> Password: " + password + "</h2>\n"
                    + "    <p style=\"font-size:0.9em;\">Regards,<br />JR </p>\n"
                    + "    <hr style=\"border:none;border-top:1px solid #eee\" />\n"
                    + "    <div style=\"float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300\">\n"
                    + "      <p>JR  Technology</p>\n"
                    + "      <p>info@jrdaycare.com</p>\n"
                    + "      <p>523, 5th floor, I Square corporate park,</p>\n"
                    + "      <p>Science City Rd, Near CIMS Hospital, Sola,</p>\n"
                    + "      <p>Ahmedabad, Gujarat (380060)</p>\n"
                    + "    </div>\n"
                    + "  </div>\n"
                    + "</div>";

            notificationService.sendMail(addUserRequest.getEmail(), addUserMailTemplate, CommonConstant.MAIL_SUBJECT_WELCOME);
        }   
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @GetMapping("/reset")
    public ResponseEntity<?> resetPassword(@RequestParam(value = "username") String username) {
        User user = null;
        Boolean isEmail = true;
        if (username.contains("@")) {
            isEmail = true;
        } else {
            isEmail = false;
        }

        if (isEmail) {
            Optional<User> dbUser = userRepository.findByUsername(username);
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Email Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        } else {
            Optional<User> dbUser = userRepository.findByMobileNumber(username);
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Mobile Number Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        }

        return otpService.generateOtpForUser(user.getId(), user);
    }

    @PostMapping("/otp/verify")
    public ResponseEntity<?> verificationOTP(@RequestBody VerificationRequestOTP verificationRequestOTP) {
        User user = null;
        Boolean isEmail = true;
        if (verificationRequestOTP.getUsername().contains("@")) {
            isEmail = true;
        } else {
            isEmail = false;
        }

        if (isEmail) {
            Optional<User> dbUser = userRepository.findByUsername(verificationRequestOTP.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Email Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        } else {
            Optional<User> dbUser = userRepository.findByMobileNumber(verificationRequestOTP.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Mobile Number Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        }

        return otpService.verifyOTP(user.getId(), verificationRequestOTP.getOtp());
    }

    @PostMapping("/reset/password")
    public ResponseEntity<?> changePassword(@RequestBody PasswordResetRequest passwordResetRequest) {
        User user = null;
        Boolean isEmail = true;
        if (passwordResetRequest.getUsername().contains("@")) {
            isEmail = true;
        } else {
            isEmail = false;
        }

        if (isEmail) {
            Optional<User> dbUser = userRepository.findByUsername(passwordResetRequest.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Email Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        } else {
            Optional<User> dbUser = userRepository.findByMobileNumber(passwordResetRequest.getUsername());
            if (dbUser.isEmpty()) {
                return ResponseEntity.badRequest().body(new ErrorMessage("This Mobile Number Is Not Registered with JR Daycare, Please Signup"));
            } else {
                if (!dbUser.get().getIsEnabled()) {
                    return ResponseEntity.badRequest().body(new ErrorMessage("Verification Is Not Completed For This Id!"));
                }
                user = dbUser.get();
            }
        }
        Optional<OTP> otp = otpRepository.findByUserIdAndOtpAndVerified(user.getId(), passwordResetRequest.getOtp(), true);
        if (otp.isEmpty()) {
            return ResponseEntity.badRequest().body(new ErrorMessage("Something Went Wrong Please Try After Some Time!"));
        } else {
            Long timeDiffSecond = TimeUnit.MILLISECONDS.toSeconds(new Timestamp(new Date().getTime()).getTime() - otp.get().getCreatedAt().getTime());
            if (timeDiffSecond > 300) {
                return ResponseEntity.badRequest().body(new ErrorMessage("Your Reset Password Link is Expire"));
            } else {
                user.setPassword(encoder.encode(passwordResetRequest.getPassword()));
                userRepository.save(user);
                return ResponseEntity.ok(new MessageResponse("Password Reset Successfully!"));
            }
        }
    }

    private String generatePassword() {
        String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        String specialCharacters = "!@#$";
        String numbers = "1234567890";
        String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
        Random random = new Random();
        char[] password = new char[8];

        password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
        password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
        password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
        password[3] = numbers.charAt(random.nextInt(numbers.length()));

        for (int i = 4; i < 8; i++) {
            password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
        }
//        return "123456";
        return String.valueOf(password);
    }

    private String getRoleName(String role) {
        String roleName = "";
        switch (role) {
            case CommonConstant.ROLE_JRADMIN:
                roleName = "JR Admin";
                break;
            case CommonConstant.ROLE_ADMIN:
                roleName = "Admin";
                break;
            case CommonConstant.ROLE_INSTRUCTOR:
                roleName = "Instructor";
                break;
            case CommonConstant.ROLE_PARENT:
                roleName = "Parent";
                break;
        }
        return roleName;
    }
}
