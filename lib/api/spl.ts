import createAxiosInstance from "./axiosClient"
import { DEFAULT_LANGUAGE } from "@/utils"

const splApi = createAxiosInstance({
  baseURL: process.env.NEXT_PUBLIC_SPL_URL,
  interceptors: {
    async requestSuccess(requestConfig) {
      let language
      const isServer = typeof window === "undefined"

      if (isServer) {
        const { cookies } = await import("next/headers")
        language = (await cookies()).get("language") ?? DEFAULT_LANGUAGE
      } else {
        const { default: Cookies } = await import("js-cookie")
        language = Cookies.get("language") ?? DEFAULT_LANGUAGE
      }
      requestConfig.url = `/${language}/api/${requestConfig.url}`
    },
  },
})

const splApiCMS = createAxiosInstance({
  baseURL: process.env.NEXT_PUBLIC_SPL_CMS_URL,
  interceptors: {
    async requestSuccess(requestConfig) {
      let language
      const isServer = typeof window === "undefined"

      if (isServer) {
        const { cookies } = await import("next/headers")
        language = (await cookies()).get("language") ?? DEFAULT_LANGUAGE
      } else {
        const { default: Cookies } = await import("js-cookie")
        language = Cookies.get("language") ?? DEFAULT_LANGUAGE
      }
      requestConfig.url = `/${language}/api/${requestConfig.url}`
    },
  },
})

export { splApi, splApiCMS }
