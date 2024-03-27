import { type $Fetch } from 'nitropack'
import { STORAGE_KEYS } from '~/types/storage.types'

class HttpFactory {
  private readonly $fetch: $Fetch

  constructor (fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  /**
   * method - GET, POST, PUT
   * URL
   **/
  async call<T> (method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: object, extras?: Record<string, any>): Promise<T> {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
    return await this.$fetch(url, {
      method,
      body: data,
      ...extras,
      ...(accessToken && !extras?.noAuth
        ? {
            headers: {
              ...extras?.headers,
              Authorization: `Bearer ${accessToken}`
            }
          }
        : {})
    })
  }

  async get<T> (url: string, data?: object, extras = {}): Promise<T> {
    return await this.call('GET', url, data, extras)
  }

  async post<T> (url: string, data?: object, extras = {}): Promise<T> {
    return await this.call('POST', url, data, extras)
  }

  async put<T> (url: string, data?: object, extras = {}): Promise<T> {
    return await this.call('PUT', url, data, extras)
  }
}

export default HttpFactory
