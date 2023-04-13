package com.capstone.jrdaycare.enquiry.dto;

/**
 *
 * @author group2
 */
public class UpdateStatusDto {

    private Long id;
    private String status;
    private String desc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

}
