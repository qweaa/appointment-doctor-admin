import request from '@/utils/request'

const name = 'doctor'

export function getDoctorList() {
    return request({
        url: `/${name}/getDoctorList`,
        method: 'get',
    //   params: { id }
    })
}

export function updateDoctorStatus({doctorID, status}){
    return request({
        url: `/${name}/updateDoctorStatus`,
        method: 'post',
        data: {doctorID, status}
    })
}

//添加医师
export function addDoctor({
    doctorID,
    password,
    NickName,
    realName,
    age,
    gender = 1,
    recommend = 0,
    province,
    city,
    country,
    info,
    status = 1,
}){
    return request({
        url: `/${name}/addDoctor`,
        method: 'post',
        data: {
            doctorID,
            password,
            NickName,
            realName,
            age,
            gender,
            recommend,
            province,
            city,
            country,
            info,
            status,
        }
    })
}


//添加医师
export function updateDoctor({
    id,
    doctorID,
    NickName,
    realName,
    age,
    gender = 1,
    recommend = 0,
    province,
    city,
    country,
    info,
    status = 1,
}){
    return request({
        url: `/${name}/updateDoctor`,
        method: 'post',
        data: {
            id,
            doctorID,
            NickName,
            realName,
            age,
            gender,
            recommend,
            province,
            city,
            country,
            info,
            status,
        }
    })
}