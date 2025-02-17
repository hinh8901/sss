"use client"

import { useState } from "react"
import { Popup } from "@/components/ui/popup"
import { Button } from "@/components/ui/button"

export default function PopupDemo() {
  const [openDefault, setOpenDefault] = useState(false)
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openWarning, setOpenWarning] = useState(false)
  const [openError, setOpenError] = useState(false)

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Popup Component</h1>

      <div className="space-y-4">
        <Button onClick={() => setOpenDefault(true)}>Show Default Popup</Button>
        <Button onClick={() => setOpenSuccess(true)}>Show Success Popup</Button>
        <Button onClick={() => setOpenWarning(true)}>Show Warning Popup</Button>
        <Button onClick={() => setOpenError(true)}>Show Error Popup</Button>
      </div>

      <Popup open={openDefault} onClose={() => setOpenDefault(false)}>
        This is a default popup message.
      </Popup>

      <Popup open={openSuccess} onClose={() => setOpenSuccess(false)} variant="success">
        Success! Your changes have been saved.
      </Popup>

      <Popup open={openWarning} onClose={() => setOpenWarning(false)} variant="warning">
        Warning: This action cannot be undone.
      </Popup>

      <Popup open={openError} onClose={() => setOpenError(false)} variant="error">
        Error: Something went wrong. Please try again.
      </Popup>
    </div>
  )
}

