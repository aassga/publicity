import request from '@/utils/axios'
// import { getFormData } from '@/utils/axiosTools'

export function Register (data) {
  return request({
    url: '/api/sso/cnRegister',
    method: 'post',
    data: data
  })
}

export function GetAuthCode (params) {
  return request({
    url: '/api/sso/genCnPhoneAuthCode',
    method: 'get',
    params: params
  })
}
