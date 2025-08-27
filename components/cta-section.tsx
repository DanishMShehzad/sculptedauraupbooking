"use client"

import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="font-heading font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 mb-6 tracking-wide">
          BEGIN YOUR
          <br />
          TRANSFORMATION
        </h2>

        <p className="font-body text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed max-w-2xl mx-auto">
          At Sculpted Aura, we believe beauty is more than skin deep — it's about confidence, self-love, and feeling
          radiant inside and out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold px-8 py-4 text-lg shimmer transform hover:scale-105 transition-all duration-300"
          >
            Book Your Appointment Today
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold px-8 py-4 text-lg transition-all duration-300 bg-transparent"
          >
            Call Us Now
          </Button>
        </div>

        <p className="font-body text-amber-200 mt-6 text-lg">
          First-time clients get <span className="text-yellow-400 font-semibold">10% off</span> their first visit!
        </p>
      </div>
    </section>
  )
}
