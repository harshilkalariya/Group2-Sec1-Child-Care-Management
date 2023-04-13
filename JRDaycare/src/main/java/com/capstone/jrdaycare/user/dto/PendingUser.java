package com.capstone.jrdaycare.user.dto;

import java.sql.Timestamp;

public interface PendingUser {

    public Long getUserId();

    public String getEmail();

    public String getBusinessName();

    public String getBusinessId();

    public String getMobileNumber();

    public Long getRoleId();

    public String getCityTitle();

    public String getStateTitle();

    public String getDistrictTitle();

    public String getRole();

    public Boolean getIsEnabled();

    public Timestamp getCreatedAt();

    public String getSecondNumber();

    public String getThirdNumber();

    public Long getParent();

    public String getBrochureName();

}
