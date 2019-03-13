import request from '@/utils/request'

const name = 'student'

export function getStudentList() {
    return request({
        url: `/${name}/getStudentList`,
        method: 'get',
    //   params: { id }
    })
}

export function updateStudentStatus({studentID, status}){
    return request({
        url: `/${name}/updateStudentStatus`,
        method: 'post',
        data: {studentID, status}
    })
}