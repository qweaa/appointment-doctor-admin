import request from '@/utils/request'

const name = 'order'

export function getOrderListforAdmin({status, page, rows}) {
    return request({
        url: `/${name}/getOrderListforAdmin`,
        method: 'get',
      params: {status, page, rows}
    })
}