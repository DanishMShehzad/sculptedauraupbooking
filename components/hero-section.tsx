"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Enhanced background particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full sparkle"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full sparkle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full sparkle"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full sparkle"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-1 h-1 bg-yellow-300 rounded-full sparkle"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-yellow-500 rounded-full sparkle"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

          <ScrollReveal delay={300}>
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-shimmer mb-6 tracking-wider mt-20">
              WHERE BEAUTY
              <br />
              MEETS SCULPTURE
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="font-body text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Tailored treatments for the art of your body. Experience luxury beauty services that enhance your natural
              elegance.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="luxury-button bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold px-8 py-4 text-lg shimmer transform hover:scale-105 transition-all duration-300"
              >
                Book Your Ritual
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="luxury-button border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                Explore Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center gold-glow">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
