import request from '@/utils/request'

export default {
    getDistrictPageList(current,limit,districtQuery) {
        return request({
            url:`ailifeshow/district/getDistrictPageList/${current}/${limit}`,
            method:'get',
            data:districtQuery
        })
    }
}