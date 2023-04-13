package com.capstone.jrdaycare.feedback.dto;

import com.capstone.jrdaycare.enquiry.dto.QueryResponseDtoForPage;
import java.util.List;
import java.util.Map;

/**
 *
 * @author group2
 */
public class AdminDashboardDto {

    List<QueryResponseDtoForPage> enquiryList;
    List<Map<String, Object>> series;
    List<Map<String, Object>> frameTypes;
    Map<String, Long> enquiries;
    Map<String, Long> partners;

    public List<QueryResponseDtoForPage> getEnquiryList() {
        return enquiryList;
    }

    public void setEnquiryList(List<QueryResponseDtoForPage> enquiryList) {
        this.enquiryList = enquiryList;
    }

    public List<Map<String, Object>> getSeries() {
        return series;
    }

    public void setSeries(List<Map<String, Object>> series) {
        this.series = series;
    }

    public List<Map<String, Object>> getFrameTypes() {
        return frameTypes;
    }

    public void setFrameTypes(List<Map<String, Object>> frameTypes) {
        this.frameTypes = frameTypes;
    }

    public Map<String, Long> getEnquiries() {
        return enquiries;
    }

    public void setEnquiries(Map<String, Long> enquiries) {
        this.enquiries = enquiries;
    }

    public Map<String, Long> getPartners() {
        return partners;
    }

    public void setPartners(Map<String, Long> partners) {
        this.partners = partners;
    }

}
