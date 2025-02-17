import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios"

interface AxiosClientConfig extends AxiosRequestConfig {
  interceptors?: {
    requestSuccess?: (
      requestConfig: InternalAxiosRequestConfig,
      config: AxiosClientConfig
    ) => void
    requestError?: (error: AxiosError) => void
    responseSuccess?: (response: AxiosResponse) => void
    responseError?: (error: AxiosError) => void
  }
}

const createAxiosInstance = (config: AxiosClientConfig = {}): AxiosInstance => {
  const { baseURL, timeout, headers, interceptors, ...restConfig } = config

  const instance = axios.create({
    baseURL,
    timeout: timeout || 12e4,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      ...headers,
    },
    ...restConfig,
  })

  instance.interceptors.request.use(
    async (requestConfig) => {
      await interceptors?.requestSuccess?.(requestConfig, config)
      return requestConfig
    },
    (error: AxiosError) => {
      interceptors?.requestError?.(error)
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      await interceptors?.responseSuccess?.(response)
      return response
    },
    (error: AxiosError) => {
      interceptors?.responseError?.(error)
      return Promise.reject(error)
    }
  )

  return instance
}

export default createAxiosInstance
