/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.capstone.jrdaycare.location.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author group2
 */
@Entity
@Table(name = "state_location")
public class StateLocation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "state_id", nullable = false)
    private Long stateId;

    @Column(name = "state_title", nullable = false)
    private String stateTitle;

    @Column(name = "state_description", nullable = false)
    private String stateDescription;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "code")
    private String code;

    public Long getStateId() {
        return stateId;
    }

    public void setStateId(Long stateId) {
        this.stateId = stateId;
    }

    public String getStateTitle() {
        return stateTitle;
    }

    public void setStateTitle(String stateTitle) {
        this.stateTitle = stateTitle;
    }

    public String getStateDescription() {
        return stateDescription;
    }

    public void setStateDescription(String stateDescription) {
        this.stateDescription = stateDescription;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
