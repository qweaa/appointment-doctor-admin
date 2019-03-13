import request from '@/utils/request'

export function login(NickName, password) {
  return request({
    url: '/auth/adminLogin',
    method: 'post',
    data: {
      NickName,
      password
    }
  })
}

export function getInfo(id) {
  return request({
    url: '/admin/getAdminModule',
    method: 'get',
    params: { id }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
