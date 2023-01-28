import Wrapper from './Wrapper'
import SDK from './SDK'

export default class FalabellaSellerCenter {
  sdk: SDK

  constructor(apiKey: string, userId: string) {
    const { axiosInstance } = new Wrapper(apiKey, userId)
    this.sdk = new SDK(axiosInstance)
  }
}
