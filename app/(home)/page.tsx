import { getAgeFilter, getBestSeller, getLandList } from "@/services/ticket-services"
import HomeClient from "./components/HomeClient"

export default async function Home() {
  const [
    bestSellerResponse,
    bestComboSellerResponse,
    landResponse,
    ageFilterResponse
  ] = await Promise.all([
    getBestSeller(),
    getBestSeller(
      { ticketType: 'combo' }
    ),
    getLandList(),
    getAgeFilter(),
  ])

  return (
    <HomeClient
      bestSellerData={bestSellerResponse?.data}
      bestComboSellerData={bestComboSellerResponse?.data}
      landData={landResponse.data}
      ageFilterData={ageFilterResponse?.age}
    />
  )
}

