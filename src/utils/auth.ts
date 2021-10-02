import Cookie from 'js-cookie'

const COOKIE_KEY = 'access_token'

// 获取cookie值
export const getCookie = (name?: string): string => {
  if (name) {
    return Cookie.get(name)
  }
  return Cookie.get(COOKIE_KEY)
}
// 设置新的cookie
export const setCookie = (value: string, params = { expires: 1 }): void => {
  Cookie.set(COOKIE_KEY, value, params)
}
// 删除cookie
export const removeCookie = (name = COOKIE_KEY, config?: Record<string, any>): void => {
  Cookie.remove(name, config)
}
