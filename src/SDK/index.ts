import { AxiosInstance, AxiosRequestConfig } from 'axios'

type Action = 'GetProducts' | 'ProductCreate' | 'FeedStatus' | 'GetBrands'

export default class SDK {
  axiosInstance: AxiosInstance

  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance
  }

  get(action: Action, params?: object, timeout?: number) {
    const config: AxiosRequestConfig = {
      ...(timeout && { timeout }),
      params: {
        ...params,
        Action: action
      }
    }

    return this.axiosInstance.get('', config)
  }

  post(action: Action, data: string, params?: object, timeout?: number) {
    const config: AxiosRequestConfig = {
      ...(timeout && { timeout }),
      params: {
        ...params,
        Action: action
      }
    }

    return this.axiosInstance.post('', data, config)
  }
}
