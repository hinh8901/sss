import createAxiosInstance from "./axiosClient"
import { DEFAULT_LANGUAGE } from "@/utils"

const AIPM_TOKEN = process.env.NEXT_PUBLIC_AIPM_TOKEN

const appApi = createAxiosInstance({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  interceptors: {
    async requestSuccess(requestConfig) {
      let language
      const isServer = typeof window === 'undefined'

      if (isServer) {
        const { cookies } = await import("next/headers")
        language = ((await cookies()).get("language")) ?? DEFAULT_LANGUAGE
      } else {
        const { default: Cookies } = await import("js-cookie")
        language = Cookies.get("language") ?? DEFAULT_LANGUAGE
      }

      requestConfig.url = `/${language}/api/${requestConfig.url}`

      if (AIPM_TOKEN) requestConfig.headers.set("apim-sub-key", AIPM_TOKEN)
    },
  },
})

export { appApi }
