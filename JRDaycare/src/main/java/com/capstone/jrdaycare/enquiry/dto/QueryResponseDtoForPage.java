package com.capstone.jrdaycare.enquiry.dto;

import java.util.Date;

/**
 *
 * @author group2
 */
public interface QueryResponseDtoForPage {

    public Long getEnquiryId();

    public String getFirstName();

    public String getLastName();

    public String getMobileNumber();

    public String getSecondNumber();

    public String getHouseDetail();

    public String getAreaDetail();

    public String getPincode();

    public String getInteriorName();

    public String getDescription();

    public String getStatus();

    public Date getCreatedOn();

    public String getBusinessName();

    public Long getCityId();

    public Long getDistrictId();

    public Long getStateId();

    public String getCityTitle();

    public String getDistrictTitle();

    public String getStateTitle();

    public Long getOwner();

    public String getOwnerName();

    public String getInquiryType();

}
