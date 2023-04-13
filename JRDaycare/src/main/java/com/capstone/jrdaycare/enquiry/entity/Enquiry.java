package com.capstone.jrdaycare.enquiry.entity;

import com.capstone.jrdaycare.common.model.EntityAuditInfo;
import java.io.Serializable;
import java.util.Date;
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
@Table(name = "enquiry")
public class Enquiry extends EntityAuditInfo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "inquiry_id", nullable = false)
    private Long enquiryId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "mobile_number", nullable = false)
    private String mobileNumber;

    @Column(name = "second_number")
    private String secondNumber;

    @Column(name = "house_detail", nullable = false)
    private String houseDetail;

    @Column(name = "area_detail", nullable = false)
    private String areaDetail;

    @Column(name = "city_id", nullable = false)
    private Long cityId;

    @Column(name = "district_id", nullable = false)
    private Long districtId;

    @Column(name = "state_id", nullable = false)
    private Long stateId;

    @Column(name = "pincode", nullable = false)
    private String pincode;

    @Column(name = "interior_name")
    private String interiorName;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "approve_reject_date_admin")
    private Date approveRejectDateByAdmin;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "approve_reject_date_site_manager")
    private Date approveRejectDateBySiteManager;

    @Column(name = "owner")
    private Long owner;

    @Column(name = "owner_name")
    private String ownerName;

    @Column(name = "provisioning_date")
    private Date provisioningDate;

    @Column(name = "provisionind_desc", columnDefinition = "TEXT")
    private String provisioningDesc;

    @Column(name = "requirement_date")
    private Date requirementDate;

    @Column(name = "requirement_desc", columnDefinition = "TEXT")
    private String requirementDesc;

    @Column(name = "installation_date")
    private Date installationDate;

    @Column(name = "installation_desc", columnDefinition = "TEXT")
    private String installationDesc;

    @Column(name = "commissioning_date")
    private Date commissioningDate;

    @Column(name = "commissioning_desc", columnDefinition = "TEXT")
    private String commissionindDesc;

    @Column(name = "completed_date")
    private Date completedDate;

    @Column(name = "completed_desc", columnDefinition = "TEXT")
    private String completedDesc;

    @Column(name = "jr_desc", columnDefinition = "TEXT")
    private String jrDesc;

    @Column(name = "client_desc", columnDefinition = "TEXT")
    private String clientDesc;

    @Column(name = "inquiry_type", columnDefinition = "TEXT")
    private String inquiryType;

    public Long getEnquiryId() {
        return enquiryId;
    }

    public void setEnquiryId(Long enquiryId) {
        this.enquiryId = enquiryId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getSecondNumber() {
        return secondNumber;
    }

    public void setSecondNumber(String secondNumber) {
        this.secondNumber = secondNumber;
    }

    public String getHouseDetail() {
        return houseDetail;
    }

    public void setHouseDetail(String houseDetail) {
        this.houseDetail = houseDetail;
    }

    public String getAreaDetail() {
        return areaDetail;
    }

    public void setAreaDetail(String areaDetail) {
        this.areaDetail = areaDetail;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }

    public Long getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Long districtId) {
        this.districtId = districtId;
    }

    public Long getStateId() {
        return stateId;
    }

    public void setStateId(Long stateId) {
        this.stateId = stateId;
    }

    public String getInteriorName() {
        return interiorName;
    }

    public void setInteriorName(String interiorName) {
        this.interiorName = interiorName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public Date getApproveRejectDateByAdmin() {
        return approveRejectDateByAdmin;
    }

    public void setApproveRejectDateByAdmin(Date approveRejectDateByAdmin) {
        this.approveRejectDateByAdmin = approveRejectDateByAdmin;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getApproveRejectDateBySiteManager() {
        return approveRejectDateBySiteManager;
    }

    public void setApproveRejectDateBySiteManager(Date approveRejectDateBySiteManager) {
        this.approveRejectDateBySiteManager = approveRejectDateBySiteManager;
    }

    public String getJrDesc() {
        return jrDesc;
    }

    public void setJrDesc(String jrDesc) {
        this.jrDesc = jrDesc;
    }

    public String getClientDesc() {
        return clientDesc;
    }

    public void setClientDesc(String clientDesc) {
        this.clientDesc = clientDesc;
    }

    public Date getProvisioningDate() {
        return provisioningDate;
    }

    public void setProvisioningDate(Date provisioningDate) {
        this.provisioningDate = provisioningDate;
    }

    public Date getRequirementDate() {
        return requirementDate;
    }

    public void setRequirementDate(Date requirementDate) {
        this.requirementDate = requirementDate;
    }

    public Date getInstallationDate() {
        return installationDate;
    }

    public void setInstallationDate(Date installationDate) {
        this.installationDate = installationDate;
    }

    public Date getCommissioningDate() {
        return commissioningDate;
    }

    public void setCommissioningDate(Date commissioningDate) {
        this.commissioningDate = commissioningDate;
    }

    public Date getCompletedDate() {
        return completedDate;
    }

    public void setCompletedDate(Date completedDate) {
        this.completedDate = completedDate;
    }

    public String getProvisioningDesc() {
        return provisioningDesc;
    }

    public void setProvisioningDesc(String provisioningDesc) {
        this.provisioningDesc = provisioningDesc;
    }

    public String getRequirementDesc() {
        return requirementDesc;
    }

    public void setRequirementDesc(String requirementDesc) {
        this.requirementDesc = requirementDesc;
    }

    public String getInstallationDesc() {
        return installationDesc;
    }

    public void setInstallationDesc(String installationDesc) {
        this.installationDesc = installationDesc;
    }

    public String getCommissionindDesc() {
        return commissionindDesc;
    }

    public void setCommissionindDesc(String commissionindDesc) {
        this.commissionindDesc = commissionindDesc;
    }

    public String getCompletedDesc() {
        return completedDesc;
    }

    public void setCompletedDesc(String completedDesc) {
        this.completedDesc = completedDesc;
    }

    public Long getOwner() {
        return owner;
    }

    public void setOwner(Long owner) {
        this.owner = owner;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getInquiryType() {
        return inquiryType;
    }

    public void setInquiryType(String inquiryType) {
        this.inquiryType = inquiryType;
    }

}
