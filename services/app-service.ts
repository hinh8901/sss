import { appApi } from "@/lib/api/app"

export const getTranslation = async () => {
  try {
    const { data } = await appApi.get(`b2c/translator/listing`)
    return data
  } catch (error) {
    console.error("ERROR", error)
  }
}
