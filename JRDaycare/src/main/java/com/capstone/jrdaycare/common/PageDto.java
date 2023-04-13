package com.capstone.jrdaycare.common;

import java.util.List;

public class PageDto {

    private List<?> list;
    private Long totalCount;


    public List<?> getList() {
        return list;
    }

    public void setList(List<?> list) {
        this.list = list;
    }

    public Long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Long totalCount) {
        this.totalCount = totalCount;
    }
}
