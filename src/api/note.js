import request from '@/utils/request'

const name = 'note'

export function getNotesList(used = -1) {
    return request({
        url: `/${name}/getNotesList`,
        method: 'get',
        params: { used }
    })
}


export function updateNoteStatus({id, used}) {
  return request({
      url: `/${name}/updateNoteStatus`,
      method: 'post',
      data: {id, used}
  })
}

export function addNote({title, NoticeContent, used}) {
  return request({
      url: `/${name}/addNote`,
      method: 'post',
      data: {title, NoticeContent, used}
  })
}
export function updateNote({id, title, NoticeContent, used}) {
  return request({
      url: `/${name}/updateNote`,
      method: 'post',
      data: {id, title, NoticeContent, used}
  })
}