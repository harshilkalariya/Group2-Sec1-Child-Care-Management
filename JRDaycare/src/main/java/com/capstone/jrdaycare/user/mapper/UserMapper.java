package com.capstone.jrdaycare.user.mapper;

import com.capstone.jrdaycare.location.entity.CityLocation;
import com.capstone.jrdaycare.models.User;
import com.capstone.jrdaycare.user.dto.PendingUser;
import com.capstone.jrdaycare.user.dto.PendingUserList;
import com.capstone.jrdaycare.user.dto.UserDetails;
import com.capstone.jrdaycare.user.dto.UserDto;

public class UserMapper {

    public static UserDto getUserDto(User user, CityLocation location, String role) {
        UserDto userDto = new UserDto();

        userDto.setUserId(user.getId());
        userDto.setBusinessName(user.getBusinessName());
        userDto.setEmail(user.getEmail());
        userDto.setLocation(location);
        userDto.setMobileNumber(user.getMobileNumber());
        userDto.setLocationId(user.getLocationId());
        userDto.setBusinessId(user.getBusinessId());
        userDto.setRole(role);
        userDto.setParent(user.getParent());

        return userDto;
    }

    public static PendingUserList getPendingUserList(PendingUser user, UserDetails parentUser) {
        PendingUserList pendingUserList = new PendingUserList();

        pendingUserList.setParentUser(parentUser);
        pendingUserList.setParent(user.getParent());
        pendingUserList.setUserId(user.getUserId());
        pendingUserList.setRoleId(user.getRoleId());
        pendingUserList.setRole(user.getRole());
        pendingUserList.setCreatedAt(user.getCreatedAt());
        pendingUserList.setCityTitle(user.getCityTitle());
        pendingUserList.setBusinessName(user.getBusinessName());
        pendingUserList.setBusinessId(user.getBusinessId());
        pendingUserList.setEmail(user.getEmail());
        pendingUserList.setDistrictTitle(user.getDistrictTitle());
        pendingUserList.setStateTitle(user.getStateTitle());
        pendingUserList.setSecondNumber(user.getSecondNumber());
        pendingUserList.setThirdNumber(user.getThirdNumber());
        pendingUserList.setMobileNumber(user.getMobileNumber());
        pendingUserList.setIsEnabled(user.getIsEnabled());
        pendingUserList.setBrochure(user.getBrochureName());

        return pendingUserList;
    }

}
