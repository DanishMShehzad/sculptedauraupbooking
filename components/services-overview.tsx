"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

const services = [
  {
    title: "Body Sculpting",
    description: "Tone, contour, and define your dream silhouette with our advanced non-invasive treatments.",
    price: "From $120",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lash Extensions",
    description: "Wake up every morning with flawless, full lashes that enhance your natural beauty.",
    price: "From $80",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Facials",
    description: "Glow with treatments tailored to your skin's unique needs and concerns.",
    price: "From $75",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Brow Lamination",
    description: "Get perfectly shaped, fuller-looking brows that frame your face beautifully.",
    price: "From $60",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Massage Therapy",
    description: "Relax, unwind, and restore your body and mind with personalized massage treatments.",
    price: "From $90",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 mb-6 tracking-wide">
            SCULPTED RITUALS
          </h2>
          <p className="font-body text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Each service is a crafted ritual — designed to sculpt, enhance, and illuminate your natural elegance.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
              <Card className="luxury-card bg-zinc-800/50 border-yellow-600/20 hover:border-yellow-400/40 transition-all duration-500 group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-zinc-900 px-3 py-1 rounded-full font-heading font-bold text-sm gold-glow">
                    {service.price}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-2xl text-yellow-400 mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-body text-amber-100 mb-4 leading-relaxed">{service.description}</p>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full luxury-button border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold transition-all duration-300 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
