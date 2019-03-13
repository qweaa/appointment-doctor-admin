import request from '@/utils/request'

const name = 'admin'

//修改密码
export function changePassword({ID, password}) {
    return request({
      url: `/${name}/changePassword`,
      method: 'post',
      data: {ID, password}
    })
}

//添加管理员
export function addAdmin({Name, NickName}) {
    return request({
      url: `/${name}/addAdmin`,
      method: 'post',
      data: {Name, NickName}
    })
}
//修改管理员信息
export function updateAdmin({ID, Name, NickName}) {
    return request({
      url: `/${name}/updateAdmin`,
      method: 'post',
      data: {ID, Name, NickName}
    })
}
