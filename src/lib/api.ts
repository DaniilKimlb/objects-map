import { request } from '@/lib/request'
import { API_URL } from '@/config'

export const api = request.create(API_URL)

export async function fetcher<T, P extends Record<string, unknown>>(
  url: string,
  params?: P,
): Promise<T> {
  const { data } = await api.get<T>(
    url + ((params && `?${mapSearchParams(params)}`) ?? ''),
  )
  return data
}

function mapSearchParams(q: Record<string, unknown>) {
  const query = q
  const params = new URLSearchParams()
  for (const queryKey in query) {
    if (Object.prototype.hasOwnProperty.call(query, queryKey)) {
      if (Array.isArray(query[queryKey])) {
        const array = query[queryKey] as []
        array.forEach((a) => {
          params.append(queryKey, a)
        })
      } else if (query[queryKey] || query[queryKey] === 0) {
        params.append(queryKey, query[queryKey] as string)
      }
    }
  }
  return params
}
