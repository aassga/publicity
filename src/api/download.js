import request from '@/utils/axios'
// import { getFormData } from '@/utils/axiosTools'

export function GetAndroidVersion (params) {
  return request({
    url: '/api/version/getAndroidVersion',
    method: 'get',
  })
}