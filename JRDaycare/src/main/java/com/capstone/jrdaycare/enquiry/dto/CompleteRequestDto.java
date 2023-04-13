package com.capstone.jrdaycare.enquiry.dto;

import java.util.List;

/**
 *
 * @author group2
 */
public class CompleteRequestDto {

    private String status;
    private String desc;
    private Long id;
    private List<Long> items;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Long> getItems() {
        return items;
    }

    public void setItems(List<Long> items) {
        this.items = items;
    }

}
