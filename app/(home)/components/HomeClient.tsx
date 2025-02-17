"use client"

import clsx from "clsx"
import { useForm, FormProvider } from "react-hook-form"
import { format } from "date-fns"

import BestSeller from "./BestSeller"
import BestDealCombo from "./BestDealCombo"
import LandList from "./LandList"
import Header from "./Header"

interface HomeClientProps {
  bestSellerData: Record<string, any>[] | null
  bestComboSellerData: Record<string, any>[] | null
  landData: Record<string, any>[] | null
  ageFilterData: Record<string, any>[] | null
}

type JourneyFormValues = {
  sitecode: string
  date: string
  members: Record<string, number>[]
  flexiableDate: "1" | "0"
}

const HomeClient: React.FC<HomeClientProps> = (props) => {
  const { bestSellerData, bestComboSellerData, landData, ageFilterData } = props

  const journeyForm = useForm<JourneyFormValues>({
    defaultValues: {
      sitecode: landData?.find(land => land?.default)?.sitecode,
      date: format(new Date(), 'yyyy-MM-dd'),
      members: ageFilterData?.map(item => ({
        label: item.name,
        code: item.code,
        amount: item.code === "1" ? 1 : 0,
      })),
      flexiableDate: "0",
    }
  })

  console.log('flow: journeyForm', journeyForm.getValues())

  return (
    <div className={clsx(
      "bg-white mx-[auto]",
    )}>
      <FormProvider {...journeyForm}>
        <Header
          landData={landData}
        />
        <div className="py-5 md:py-12 lg:px-4">
          <BestSeller bestSellerData={bestSellerData} />
        </div>

        <div className="py-5 md:py-12 lg:px-4">
          <BestDealCombo bestComboSellerData={bestComboSellerData} />
        </div>

        <div className="py-5 md:py-12 lg:px-4">
          <LandList landData={landData} />
        </div>
      </FormProvider>
    </div>
  )
}

export default HomeClient