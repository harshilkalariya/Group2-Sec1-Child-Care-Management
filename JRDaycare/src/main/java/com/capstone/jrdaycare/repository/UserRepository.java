package com.capstone.jrdaycare.repository;

import com.capstone.jrdaycare.models.User;
import com.capstone.jrdaycare.user.dto.AllUserForSearch;
import com.capstone.jrdaycare.user.dto.ParentNameAndIdDto;
import com.capstone.jrdaycare.user.dto.PendingUser;
import com.capstone.jrdaycare.user.dto.UserDetails;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    List<User> findByIdIn(List<Long> ids);

    Optional<User> findByMobileNumber(String mobileNumber);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Boolean existsByMobileNumber(String mobileNumber);

    @Query(value = "Select us.id as \"userId\",  us.is_enabled as \"isEnabled\", us.email as \"email\", us.business_name as \"businessName\", \n"
            + "us.mobile_number as \"mobileNumber\", us.parent as \"parent\", us.second_number as \"secondNumber\", us.third_number as \"thirdNumber\", us.created_at as \"createdAt\", ur.role_id as \"roleId\", rl.name as \"role\", cl.city_title as \"cityTitle\",sl.state_title as \"stateTitle\",dl.district_title as \"districtTitle\" from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "left join roles as rl on ur.role_id = rl.id\n"
            + "where us.first_time is true \n"
            + "and (us.mobile_number ilike %:search% or us.second_number ilike %:search% or us.third_number ilike %:search% or us.email ilike %:search% or us.business_name ilike %:search%  or cl.city_title ilike %:search% or dl.district_title ilike %:search% or sl.state_title ilike %:search%)\n"
            + "order by us.business_name ASC\n"
            + "offset :offset \n"
            + "limit :limit ;", nativeQuery = true)
    public List<PendingUser> getPendingUserListByPageWithSearch(
            @Param("search") String search,
            @Param("offset") Integer offset,
            @Param("limit") Integer limit);

    @Query(value = "Select count(*) from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is true \n"
            + "and (us.mobile_number ilike %:search% or us.email ilike %:search% or us.business_name ilike %:search%  or cl.city_title ilike %:search% or dl.district_title ilike %:search% or sl.state_title ilike %:search%);", nativeQuery = true)
    public Long getPendingUserListTotalCountWithSearch(
            @Param("search") String search);

    @Query(value = "Select us.id as \"userId\",  us.is_enabled as \"isEnabled\", us.email as \"email\", us.business_name as \"businessName\", \n"
            + "us.mobile_number as \"mobileNumber\",us.parent as \"parent\", us.second_number as \"secondNumber\", us.third_number as \"thirdNumber\", us.created_at as \"createdAt\",ur.role_id as \"roleId\", rl.name as \"role\", cl.city_title as \"cityTitle\",sl.state_title as \"stateTitle\",dl.district_title as \"districtTitle\" from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join roles as rl on ur.role_id = rl.id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is true \n"
            + "order by us.business_name ASC\n"
            + "offset :offset \n"
            + "limit :limit ;", nativeQuery = true)
    public List<PendingUser> getPendingUserListByPage(
            @Param("offset") Integer offset,
            @Param("limit") Integer limit);

    @Query(value = "Select count(*) from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "where us.first_time is true ;", nativeQuery = true)
    public Long getPendingUserListTotalCount();

    @Query(value = "Select us.id as \"userId\", us.is_enabled as \"isEnabled\", us.email as \"email\", us.business_name as \"businessName\", \n"
            + "us.mobile_number as \"mobileNumber\", ub.name as \"brochureName\", us.parent as \"parent\", us.second_number as \"secondNumber\", us.third_number as \"thirdNumber\", us.created_at as \"createdAt\", us.business_id as \"businessId\", ur.role_id as \"roleId\", rl.name as \"role\", cl.city_title as \"cityTitle\",sl.state_title as \"stateTitle\",dl.district_title as \"districtTitle\" from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join roles as rl on ur.role_id = rl.id\n"
            + "left join user_brochure as ub on ub.user_id = us.id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is false \n"
            + "and (us.mobile_number ilike %:search% or us.second_number ilike %:search% or us.third_number ilike %:search% or us.business_id ilike %:search% or us.email ilike %:search% or us.business_name ilike %:search%   or cl.city_title ilike %:search% or dl.district_title ilike %:search% or sl.state_title ilike %:search%)\n"
            + "order by us.business_name ASC\n"
            + "offset :offset \n"
            + "limit :limit ;", nativeQuery = true)
    public List<PendingUser> getAllUserListByPageWithSearch(
            @Param("search") String search,
            @Param("offset") Integer offset,
            @Param("limit") Integer limit);

    @Query(value = "Select count(*) from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is false \n"
            + "and (us.mobile_number ilike %:search% or us.business_id ilike %:search% or us.email ilike %:search% or us.business_name ilike %:search%  or cl.city_title ilike %:search% or dl.district_title ilike %:search% or sl.state_title ilike %:search%);", nativeQuery = true)
    public Long getAllUserListTotalCountWithSearch(
            @Param("search") String search);

    @Query(value = "Select us.id as \"userId\",  us.is_enabled as \"isEnabled\", us.email as \"email\", us.business_name as \"businessName\", \n"
            + "us.mobile_number as \"mobileNumber\", ub.name as \"brochureName\", us.parent as \"parent\", us.second_number as \"secondNumber\", us.third_number as \"thirdNumber\", us.created_at as \"createdAt\",  us.business_id as \"businessId\", ur.role_id as \"roleId\", rl.name as \"role\", cl.city_title as \"cityTitle\" ,sl.state_title as \"stateTitle\",dl.district_title as \"districtTitle\" from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join roles as rl on ur.role_id = rl.id\n"
            + "left join user_brochure as ub on ub.user_id = us.id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is false \n"
            + "order by us.business_name ASC\n"
            + "offset :offset \n"
            + "limit :limit ;", nativeQuery = true)
    public List<PendingUser> getAllUserListByPage(
            @Param("offset") Integer offset,
            @Param("limit") Integer limit);

    @Query(value = "Select count(*) from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "where us.first_time is false ;", nativeQuery = true)
    public Long getAllUserListTotalCount();

    @Modifying
    @Query(value = "delete from user_roles where user_id = :userId", nativeQuery = true)
    void deleteUserRoles(@Param("userId") Long userId);

    @Query(value = "Select\n"
            + "        us.id as \"userId\",\n"
            + "        us.email as \"email\",\n"
            + "        us.business_id as \"businessId\",\n"
            + "        us.business_name as \"businessName\",\n"
            + "        us.mobile_number as \"mobileNumber\",\n"
            + "        us.second_number as \"secondNumber\",\n"
            + "        us.third_number as \"thirdNumber\",\n"
            + "        ur.role_id as \"roleId\",\n"
            + "        us.location_id as \"locationId\",\n"
            + "        cl.city_title as \"cityTitle\",\n"
            + "        dl.district_title as \"districtTitle\",\n"
            + "        cl.district_id as \"districtId\",\n"
            + "        dl.state_id as \"stateId\",\n"
            + "        sl.state_title as \"stateTitle\",\n"
            + "        us.parent as \"parent\",\n"
            + "        rl.name as \"role\"\n"
            + "from users as us \n"
            + "left join user_roles as ur on us.id = ur.user_id \n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "left join roles as rl on ur.role_id = rl.id \n"
            + "    where us.id = :userId ", nativeQuery = true)
    UserDetails getUserById(@Param("userId") Long userId);

    @Modifying
    @Query(value = "update users set first_time = false, is_enabled = true, business_id = :businessId where id = :userId", nativeQuery = true)
    void updateUserAsApproveForFirstTime(
            @Param("userId") Long userId,
            @Param("businessId") String businessId);

    @Modifying
    @Query(value = "update users set first_time = false, is_enabled = true, parent = :parent, business_id = :businessId where id = :userId", nativeQuery = true)
    void updateUserAsApproveForFirstTimeWithoutParent(
            @Param("userId") Long userId,
            @Param("parent") Long parent,
            @Param("businessId") String businessId);

    @Modifying
    @Query(value = "update users set first_time = false, is_enabled = false, parent = :parent, business_id = :businessId where id = :userId", nativeQuery = true)
    void updateUserAsHoltForFirstTimeForWithoutParent(
            @Param("userId") Long userId,
            @Param("parent") Long parent,
            @Param("businessId") String businessId);

    @Modifying
    @Query(value = "update users set first_time = false, is_enabled = false, business_id = :businessId where id = :userId", nativeQuery = true)
    void updateUserAsHoltForFirstTime(
            @Param("userId") Long userId,
            @Param("businessId") String businessId);

    @Modifying
    @Query(value = "update users set is_enabled = :status where id = :userId", nativeQuery = true)
    void updateUserStatus(
            @Param("userId") Long userId,
            @Param("status") boolean status);

    @Query(value = "Select us.id as \"userId\", us.email as \"email\", us.business_name as \"businessName\", us.business_id as \"businessId\", rl.name as \"role\" from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join roles as rl on ur.role_id = rl.id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is false and us.is_enabled = true \n"
            + "order by us.business_name ASC;", nativeQuery = true)
    public List<AllUserForSearch> getAllUser();

    @Query(value = "Select us.id as \"userId\", us.is_enabled as \"isEnabled\", us.email as \"email\", us.business_name as \"businessName\", \n"
            + "us.mobile_number as \"mobileNumber\",us.parent as \"parent\", us.second_number as \"secondNumber\", us.third_number as \"thirdNumber\", us.created_at as \"createdAt\", us.business_id as \"businessId\", ur.role_id as \"roleId\", rl.name as \"role\", cl.city_title as \"cityTitle\",sl.state_title as \"stateTitle\",dl.district_title as \"districtTitle\" from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join roles as rl on ur.role_id = rl.id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is false and us.id in :ids  \n"
            + "and (us.mobile_number ilike %:search% or us.second_number ilike %:search% or us.third_number ilike %:search% or us.business_id ilike %:search% or us.email ilike %:search% or us.business_name ilike %:search%   or cl.city_title ilike %:search% or dl.district_title ilike %:search% or sl.state_title ilike %:search%)\n"
            + "order by us.business_name ASC\n"
            + "offset :offset \n"
            + "limit :limit ;", nativeQuery = true)
    public List<PendingUser> getAllUserListByPageWithSearchForOtherUser(
            @Param("search") String search,
            @Param("ids") List<Long> ids,
            @Param("offset") Integer offset,
            @Param("limit") Integer limit);

    @Query(value = "Select count(*) from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is false and us.id in :ids \n"
            + "and (us.mobile_number ilike %:search% or us.business_id ilike %:search% or us.email ilike %:search% or us.business_name ilike %:search%  or cl.city_title ilike %:search% or dl.district_title ilike %:search% or sl.state_title ilike %:search%);", nativeQuery = true)
    public Long getAllUserListTotalCountWithSearchForOtherUser(
            @Param("search") String search,
            @Param("ids") List<Long> ids);

    @Query(value = "Select us.id as \"userId\",  us.is_enabled as \"isEnabled\", us.email as \"email\", us.business_name as \"businessName\", \n"
            + "us.mobile_number as \"mobileNumber\", us.parent as \"parent\", us.second_number as \"secondNumber\", us.third_number as \"thirdNumber\", us.created_at as \"createdAt\",  us.business_id as \"businessId\", ur.role_id as \"roleId\", rl.name as \"role\", cl.city_title as \"cityTitle\" ,sl.state_title as \"stateTitle\",dl.district_title as \"districtTitle\" from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "left join roles as rl on ur.role_id = rl.id\n"
            + "left join state_location as sl on cl.state_id = sl.state_id\n"
            + "left join district_location as dl on cl.district_id = dl.district_id\n"
            + "where us.first_time is false and us.id in :ids \n"
            + "order by us.business_name ASC\n"
            + "offset :offset \n"
            + "limit :limit ;", nativeQuery = true)
    public List<PendingUser> getAllUserListByPageForOtherUser(
            @Param("offset") Integer offset,
            @Param("limit") Integer limit,
            @Param("ids") List<Long> ids);

    @Query(value = "Select count(*) from users as us\n"
            + "left join user_roles as ur on us.id = ur.user_id\n"
            + "left join city_location as cl on us.location_id = cl.city_id\n"
            + "where us.first_time is false and us.id in :ids ;", nativeQuery = true)
    public Long getAllUserListTotalCountForOtherUser(@Param("ids") List<Long> ids);

    @Query(value = "WITH RECURSIVE child AS \n"
            + "(SELECT * FROM users WHERE parent = :id or id = :id \n"
            + "UNION SELECT l.* FROM users l\n"
            + "INNER JOIN child s ON s.id = l.parent)\n"
            + "SELECT ch.id FROM child as ch \n"
            + "left join users as ulm  on ch.id = ulm.id;", nativeQuery = true)
    public List<Long> getAllChildIds(@Param("id") Long id);

    @Query(value = "SELECT US.ID\n"
            + "FROM USERS AS US\n"
            + "LEFT JOIN USER_ROLES AS URS ON US.ID = URS.USER_ID\n"
            + "LEFT JOIN ROLES AS RL ON URS.ROLE_ID = RL.ID\n"
            + "WHERE RL.NAME = 'ROLE_JRADMIN'\n"
            + "	OR RL.NAME = 'ROLE_ADMIN';", nativeQuery = true)
    public List<Long> getAdminRoleId();

    @Query(value = "WITH RECURSIVE CHILD AS\n"
            + "	(SELECT *\n"
            + "		FROM USERS\n"
            + "		WHERE ID = :id \n"
            + "		UNION SELECT L.*\n"
            + "		FROM USERS L\n"
            + "		INNER JOIN CHILD S ON S.PARENT = L.ID)\n"
            + "SELECT DISTINCT CH.ID\n"
            + "FROM CHILD AS CH\n"
            + "LEFT JOIN USERS AS ULM ON CH.PARENT = ULM.PARENT;", nativeQuery = true)
    public List<Long> getAllParentIds(@Param("id") Long id);

    @Query(value = "SELECT USERS.ID \n"
            + "FROM USERS AS USERS\n"
            + "LEFT JOIN USER_ROLES AS URS ON USERS.ID = URS.USER_ID\n"
            + "LEFT JOIN ROLES AS RLS ON RLS.ID = URS.ROLE_ID\n"
            + "WHERE USERS.PARENT in :ids \n"
            + "	AND RLS.NAME in ('ROLE_PARENT','ROLE_TECHNICIAN')", nativeQuery = true)
    public List<Long> getSameLineUser(@Param("ids") List<Long> ids);

    @Query(value = "select id from users;", nativeQuery = true)
    public List<Long> getAllUserIds();

    @Query(value = "WITH RECURSIVE CHILD AS\n"
            + "	(SELECT *\n"
            + "		FROM PUBLIC.USERS\n"
            + "		WHERE ID = :id\n"
            + "		UNION SELECT L.*\n"
            + "		FROM USERS L\n"
            + "		INNER JOIN CHILD S ON S.PARENT = L.ID)\n"
            + "SELECT DISTINCT CH.ID,CH.BUSINESS_NAME as \"BusinessName\"\n"
            + "FROM CHILD AS CH\n"
            + "LEFT JOIN USERS AS ULM ON CH.PARENT = ULM.PARENT\n"
            + "LEFT JOIN USER_ROLES UR ON UR.USER_ID = CH.ID\n"
            + "LEFT JOIN ROLES RL ON RL.ID = UR.ROLE_ID\n"
            + "WHERE RL.NAME = 'ROLE_INSTRUCTOR';", nativeQuery = true)
    public List<ParentNameAndIdDto> getParentDestributor(@Param("id") Long id);

    @Query(value = "WITH RECURSIVE CHILD AS\n"
            + "	(SELECT *\n"
            + "		FROM PUBLIC.USERS\n"
            + "		WHERE ID = :id\n"
            + "		UNION SELECT L.*\n"
            + "		FROM USERS L\n"
            + "		INNER JOIN CHILD S ON S.PARENT = L.ID)\n"
            + "SELECT DISTINCT CH.ID,CH.BUSINESS_NAME as \"BusinessName\"\n"
            + "FROM CHILD AS CH\n"
            + "LEFT JOIN USERS AS ULM ON CH.PARENT = ULM.PARENT\n"
            + "LEFT JOIN USER_ROLES UR ON UR.USER_ID = CH.ID\n"
            + "LEFT JOIN ROLES RL ON RL.ID = UR.ROLE_ID\n"
            + "WHERE RL.NAME = 'ROLE_DEALER';", nativeQuery = true)
    public List<ParentNameAndIdDto> getParentDealer(@Param("id") Long id);

    @Modifying
    @Query(value = "update users set device_id = :deviceId where id = :userId", nativeQuery = true)
    void addUserDeviceId(
            @Param("userId") Long userId,
            @Param("deviceId") String deviceId);

    @Query(value = "select distinct(device_id) from users where id in :ids and device_id is not null;", nativeQuery = true)
    public List<String> getDeviceId(@Param("ids") List<Long> ids);

    @Query(value = "SELECT COUNT(*)\n"
            + "FROM USERS US\n"
            + "LEFT JOIN USER_ROLES AS RL ON US.ID = RL.USER_ID\n"
            + "LEFT JOIN ROLES AS RO ON RL.ROLE_ID = RO.ID\n"
            + "WHERE RO.NAME = :role AND US.IS_ENABLED = true", nativeQuery = true)
    Long countByUserRole(@Param("role") String role);

}
