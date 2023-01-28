import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'
import { createHmac } from 'crypto'

interface FalabellaSellerCenterParams {
  Action: string
  Format: string
  Timestamp: string
  UserID: string
  Version: string
  Signature: string
  Filter: string
}

export default class Wrapper {
  defaultTimeout: number = 5000
  defaultURL: string = 'https://sellercenter-api.falabella.com'
  apiKey: string
  userId: string
  axiosInstance: AxiosInstance
  format: string = 'JSON'
  version: string = '1.0'

  constructor(apiKey: string, userId: string, baseURL?: string, timeout?: number) {
    this.apiKey = apiKey
    this.userId = userId

    this.axiosInstance = axios.create({
      baseURL: baseURL || this.defaultURL,
      timeout: timeout || this.defaultTimeout
    })

    this.setRequestInterceptors()
  }

  setRequestInterceptors() {
    this.axiosInstance.interceptors.request.use(async config => {
      const params: FalabellaSellerCenterParams = {
        Format: this.format,
        Timestamp: this.generateTimestamp(),
        UserID: this.userId,
        Version: this.version,
        ...config.params
      }

      config.params = {
        ...params,
        Signature: this.generateSignature(params)
      }

      return config
    })
  }

  generateTimestamp() {
    const currentDate = new Date()
    return currentDate.toISOString()
  }

  /**
   * Documentation: https://developers.falabella.com/v400.0.0/reference/signing-requests#calcular-el-par%C3%A1metro-signature
   */
  generateSignature(params: FalabellaSellerCenterParams) {
    const sortedKeys = Object.keys(params).sort()

    const str = []
    for (const key of sortedKeys) {
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    }

    const result = str.join('&')

    return createHmac('sha256', this.apiKey).update(result).digest('hex')
  }
}
