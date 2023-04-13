package com.capstone.jrdaycare.enquiry.mapper;

import com.capstone.jrdaycare.common.CommonConstant;
import com.capstone.jrdaycare.enquiry.dto.EnquiryRequestDto;
import com.capstone.jrdaycare.enquiry.entity.Enquiry;

/**
 *
 * @author group2
 */
public class EnquiryMapper {

    public static Enquiry getEnquiryEntity(EnquiryRequestDto dto) {
        Enquiry enquiry = new Enquiry();

        enquiry.setFirstName(dto.getFirstName());
        enquiry.setLastName(dto.getLastName());
        enquiry.setMobileNumber(dto.getMobileNumber());
        enquiry.setAreaDetail(dto.getAreaDetail());
        enquiry.setDescription(dto.getDescription());
        enquiry.setHouseDetail(dto.getHouseDetail());
        enquiry.setInteriorName(dto.getInteriorName());
        enquiry.setPincode(dto.getPincode());
        enquiry.setSecondNumber(dto.getSecondNumber());
        enquiry.setCityId(dto.getCityId());
        enquiry.setDistrictId(dto.getDistrictId());
        enquiry.setStateId(dto.getStateId());
        enquiry.setStatus(CommonConstant.ENQUIRY_PENDING);
        enquiry.setInquiryType(dto.getInquiryType());
        return enquiry;
    }

}
