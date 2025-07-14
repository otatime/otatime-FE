// 상수를 선언한다.

export const PRODUCTION: string = 'production'

export const Method: {
  [key: string]: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'
} = {
  DELETE: 'DELETE',
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT',
}

export const TYPE_QUERY: string = '?type='

export const TOKEN_EXPIRE: number = 6 * 60 * 60 * 1000

export const REFRESH_TOKEN_EXPIRE: number = 604800000
