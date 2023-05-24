import '../global'
import { Body, Title } from '../function'

Title('exemplo de feth de uma api copm uso de generics')

interface fetehRespinse<T> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

const fetch = async <T>(url: string): Promise<fetehRespinse<T>> => {
  const response = await window.fetch(url)
  const headers: Record<string, string> = {}

  response.headers.forEach((value, key) => {
    headers[key] = value
  })

  const data = await response.json()

  return {
    data: data as T,
    status: response.status,
    statusText: response.statusText,
    headers
  }
}
