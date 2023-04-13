/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.capstone.jrdaycare.location.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author group2
 */
@Entity
@Table(name = "district_location")
public class DistrictLocation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "district_id", nullable = false)
    private Long districtId;

    @Column(name = "district_title", nullable = false)
    private String districtTitle;

    @Column(name = "district_description", nullable = false)
    private String districtDescription;

    @Column(name = "state_id", nullable = false)
    private Long stateId;

    @Column(name = "status", nullable = false)
    private String status;

    public Long getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Long districtId) {
        this.districtId = districtId;
    }

    public String getDistrictTitle() {
        return districtTitle;
    }

    public void setDistrictTitle(String districtTitle) {
        this.districtTitle = districtTitle;
    }

    public String getDistrictDescription() {
        return districtDescription;
    }

    public void setDistrictDescription(String districtDescription) {
        this.districtDescription = districtDescription;
    }

    public Long getStateId() {
        return stateId;
    }

    public void setStateId(Long stateId) {
        this.stateId = stateId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
