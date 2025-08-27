"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="font-heading font-black text-4xl text-shimmer">SCULPTED AURA</h1>
          <p className="font-body text-amber-200 text-lg">Beauty & Aesthetics</p>
          <div className="loading-spinner mx-auto"></div>
        </div>
      </div>
    </div>
  )
}
