"use client"

import { createContext, ReactNode, useContext } from "react"

const TranslationContext = createContext<Record<string, string> | null | undefined>(null)

interface TranslationProviderProps {
  data: Record<string, string> | undefined | null
  children: ReactNode
}

const TranslationProvider: React.FC<TranslationProviderProps> = (props) => {
  const { data, children } = props

  return (
    <TranslationContext.Provider value={data}>
      {children}
    </TranslationContext.Provider>
  )
}

export default TranslationProvider

export const useTrans = () => {
  return useContext(TranslationContext)
}