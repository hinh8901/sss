"use client"

import { useState } from "react"
import clsx from "clsx"
import { useForm, FormProvider } from "react-hook-form"
import { format } from "date-fns"

import BestSeller from "./BestSeller"
import BestDealCombo from "./BestDealCombo"
import LandList from "./LandList"
import Header from "./Header"
import { getBestSeller } from "@/services/ticket-services"

interface HomeClientProps {
  bestSellerServerData: Record<string, any>[] | null
  bestComboSellerServerData: Record<string, any>[] | null
  landServerData: Record<string, any>[] | null
  ageFilterServerData: Record<string, any>[] | null
}

type JourneyFormValues = {
  sitecode: string
  date: string
  members: Record<string, number>[]
  flexiableDate: "1" | "0"
}

const HomeClient: React.FC<HomeClientProps> = (props) => {
  const { bestSellerServerData, bestComboSellerServerData, landServerData, ageFilterServerData } = props

  const [bestSellerData, setBestSellerData] = useState(bestSellerServerData)
  const [bestComboSellerData, setBestComboSellerData] = useState(bestComboSellerServerData)
  const [landData, setLandData] = useState(landServerData)

  const [isFetchingBestSellerData, setIsFetchingBestSellerData] = useState(false)
  const [isFetchingBestComboSellerData, setIsFetchingBestComboSellerData] = useState(false)

  const journeyForm = useForm<JourneyFormValues>({
    defaultValues: {
      sitecode: landServerData?.find(land => land?.default)?.sitecode,
      date: format(new Date(), 'yyyy-MM-dd'),
      members: ageFilterServerData?.map(item => ({
        label: item.name,
        code: item.code,
        amount: item.code === "1" ? 1 : 0,
      })),
      flexiableDate: "0",
    }
  })

  const onFetchingBestSellerData = async (land: string) => {
    try {
      setIsFetchingBestSellerData(true)
      const { data } = await getBestSeller({ land })
      setBestSellerData(data)
    } catch (error) {
    } finally {
      setIsFetchingBestSellerData(false)
    }
  }

  const onFetchingBestComnboSellerData = async (land: string) => {
    try {
      setIsFetchingBestComboSellerData(true)
      const { data } = await getBestSeller({ land, ticketType: 'combo' })
      setBestComboSellerData(data)
    } catch (error) {
    } finally {
      setIsFetchingBestComboSellerData(false)
    }
  }

  const onChangeLand = async (land: string) => {
    journeyForm.setValue('sitecode', land)
    onFetchingBestSellerData(land)
    onFetchingBestComnboSellerData(land)
    setLandData(landServerData?.filter(landServer => landServer.sitecode !== land) ?? [])
  }

  return (
    <div className={clsx(
      "bg-white mx-[auto]",
    )}>
      <FormProvider {...journeyForm}>
        <Header
          landData={landServerData}
          onChangeLand={onChangeLand}
        />
        {(isFetchingBestSellerData || !!bestSellerData?.length) && (
          <div className="py-5 md:py-12 lg:px-4">
            <BestSeller bestSellerData={bestSellerData} isLoading={isFetchingBestSellerData} />
          </div>
        )}

        {(isFetchingBestComboSellerData || !!bestComboSellerData?.length) && (
          <div className="py-5 md:py-12 lg:px-4">
            <BestDealCombo bestComboSellerData={bestComboSellerData} isLoading={isFetchingBestComboSellerData} />
          </div>
        )}

        <div className="py-5 md:py-12 lg:px-4">
          <LandList landData={landData} onChangeLand={onChangeLand} />
        </div>
      </FormProvider>
    </div>
  )
}

export default HomeClient