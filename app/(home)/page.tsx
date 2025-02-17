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
      bestSellerServerData={bestSellerResponse?.data}
      bestComboSellerServerData={bestComboSellerResponse?.data}
      landServerData={landResponse.data}
      ageFilterServerData={ageFilterResponse?.age}
    />
  )
}

