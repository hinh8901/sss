'use client'

import { useTrans } from "@/components/providers/TranslationProvider"

const Demo = () => {
  const trans = useTrans()

  return <h1>{trans?.['b2c.action.failed']}</h1>
}

export default Demo