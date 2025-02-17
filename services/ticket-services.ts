import { splApi, splApiCMS } from "@/lib/api/spl"

interface getBestSellerParams {
  page?: number
  limit?: number
  channel?: string
  ticketType?: string
  land?: string
}

export const getBestSeller = async (params?: getBestSellerParams) => {
  "use server"

  const {
    page = 1,
    limit = 8,
    channel = "b2c",
    ticketType = "single",
    land = "sunparadiselandPhuQuoc",
  } = params ?? {}

  try {
    const { data } = await splApi.get(`spl/show/best-seller`, {
      params: {
        page,
        limit,
        channel,
        ticketType,
        land,
      },
    })
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getLandList = async () => {
  "use server"

  try {
    const { data } = await splApiCMS.get(`sunparadiseland/listing`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getAgeFilter = async () => {
  "use server"

  try {
    const { data } = await splApi.get(`spl/filter/age`)
    return data
  } catch (error) {
    console.error(error)
  }
}
