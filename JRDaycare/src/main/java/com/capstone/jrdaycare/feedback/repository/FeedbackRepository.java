package com.capstone.jrdaycare.feedback.repository;

import com.capstone.jrdaycare.feedback.dto.FeedbackResponseDto;
import com.capstone.jrdaycare.feedback.entity.Feedback;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author group2
 */
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    @Query(value = "SELECT FB.TYPE AS \"type\",\n"
            + "	FB.DESCRIPTION AS \"description\",\n"
            + "	FB.CREATED_ON AS \"createdOn\",\n"
            + "	US.BUSINESS_NAME AS \"businessName\"\n"
            + "FROM FEEDBACK AS FB\n"
            + "LEFT JOIN USERS AS US ON FB.CREATED_BY = US.ID\n"
            + "ORDER BY FB.CREATED_ON DESC ", nativeQuery = true)
    List<FeedbackResponseDto> getFeedbackWithOutSearch(Pageable page);

    @Query(value = "SELECT COUNT(*)\n"
            + "FROM FEEDBACK", nativeQuery = true)
    Long getFeedbackWithOutSearchCount();

    @Query(value = "SELECT FB.TYPE AS \"type\",\n"
            + "	FB.DESCRIPTION AS \"description\",\n"
            + "	FB.CREATED_ON AS \"createdOn\",\n"
            + "	US.BUSINESS_NAME AS \"businessName\"\n"
            + "FROM FEEDBACK AS FB\n"
            + "LEFT JOIN USERS AS US ON FB.CREATED_BY = US.ID\n"
            + "WHERE FB.TYPE ILIKE %:search%\n"
            + "	OR FB.DESCRIPTION ILIKE %:search%\n"
            + "	OR US.BUSINESS_NAME ILIKE %:search%\n"
            + "ORDER BY FB.CREATED_ON DESC ", nativeQuery = true)
    List<FeedbackResponseDto> getFeedbackWithSearch(@Param(value = "search") String search, Pageable page);

    @Query(value = "SELECT COUNT(*)\n"
            + "FROM FEEDBACK AS FB\n"
            + "LEFT JOIN USERS AS US ON FB.CREATED_BY = US.ID\n"
            + "WHERE FB.TYPE ILIKE %:search%\n"
            + "	OR FB.DESCRIPTION ILIKE %:search%\n"
            + "	OR US.BUSINESS_NAME ILIKE %:search%", nativeQuery = true)
    Long getFeedbackWithSearchCount(@Param(value = "search") String search);

}
