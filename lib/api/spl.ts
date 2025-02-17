import { cookies } from "next/headers"
import Cookies from "js-cookie"

import createAxiosInstance from "./axiosClient"
import { DEFAULT_LANGUAGE } from "@/utils"

const splApi = createAxiosInstance({
  baseURL: process.env.NEXT_PUBLIC_SPL_URL,
  interceptors: {
    async requestSuccess(requestConfig) {
      const language =
        (typeof window !== undefined
          ? Cookies.get("language")
          : (await cookies()).get("language")) ?? DEFAULT_LANGUAGE
      requestConfig.url = `/${language}/api/${requestConfig.url}`
    },
  },
})

const splApiCMS = createAxiosInstance({
  baseURL: process.env.NEXT_PUBLIC_SPL_CMS_URL,
  interceptors: {
    async requestSuccess(requestConfig) {
      const language =
        (typeof window !== undefined
          ? Cookies.get("language")
          : (await cookies()).get("language")) ?? DEFAULT_LANGUAGE
      requestConfig.url = `/${language}/api/${requestConfig.url}`
    },
  },
})

export { splApi, splApiCMS }
