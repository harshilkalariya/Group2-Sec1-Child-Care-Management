package com.capstone.jrdaycare.feedback.dto;

import java.util.List;
import java.util.Map;

/**
 *
 * @author group2
 */
public class PartnerDashboardDto {

    List<Map<String, Object>> series;
    List<Map<String, Object>> frameTypes;
    Map<String, Long> enquiries;
    Map<String, String> support;

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

    public Map<String, String> getSupport() {
        return support;
    }

    public void setSupport(Map<String, String> support) {
        this.support = support;
    }

}
