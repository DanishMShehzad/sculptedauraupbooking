"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function BookingHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-menu")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50/5 via-zinc-900 to-zinc-800 pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      </div>

      {/* Enhanced particles effect with gold theme */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-amber-400 rounded-full animate-pulse sparkle"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-300 rounded-full animate-pulse delay-1000 sparkle"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse delay-2000 sparkle"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-3000 sparkle"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-4000 sparkle"></div>
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-5000 sparkle"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 mb-6 tracking-wide">
            ✨ Book Your Sculpted Aura Experience ✨
          </h1>

          <p className="font-open-sans text-xl md:text-2xl text-amber-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Luxury beauty services designed to sculpt, glow, and transform your aura.
          </p>

          <Button
            onClick={scrollToServices}
            className="luxury-button bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-montserrat font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 gold-glow"
          >
            Reserved My Spot
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
