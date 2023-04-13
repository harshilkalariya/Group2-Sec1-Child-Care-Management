package com.capstone.jrdaycare.feedback.dto;

import java.util.Date;

/**
 *
 * @author group2
 */
public interface FeedbackResponseDto {

    public String getBusinessName();

    public String getType();

    public String getDescription();

    public Date getCreatedOn();
}
