"use client"

import { Button } from "@/components/ui/button"

export default function BookingCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-amber-400">
          Your aura deserves sculpting. Secure your glow today.
        </h2>
        <Button
          onClick={scrollToTop}
          className="luxury-button bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Reserve My Spots
        </Button>
      </div>
    </section>
  )
}
