/*
 * 用户信息接口
 */
import Http, { ResponseData } from '@/api/http'
import { LoginParams } from '@/types/user'

export function login (data: LoginParams): Promise<ResponseData> {
  return Http.create({
    method: 'post',
    url: '/api/login',
    data: data
  })
}

export function getUser (): Promise<ResponseData> {
  return Http.create({
    method: 'get',
    url: '/api/sys/user',
    params: {
      name: 'admin'
    }
  })
}
