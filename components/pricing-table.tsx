"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const pricingData = [
  {
    service: "Body Sculpting",
    price: "$120",
    unit: "per session",
    description: "Non-invasive body contouring and fat reduction",
    features: [
      "45-60 minute session",
      "Advanced technology",
      "No downtime required",
      "Visible results",
      "Consultation included",
    ],
    popular: false,
  },
  {
    service: "Lash Extensions",
    price: "$80",
    unit: "Classic Set",
    description: "Individual lash extensions for natural glamour",
    features: [
      "90-120 minute application",
      "Custom eye shape styling",
      "Lasts 4-6 weeks",
      "Touch-ups available",
      "Aftercare kit included",
    ],
    popular: true,
  },
  {
    service: "Facials",
    price: "$75",
    unit: "per session",
    description: "Customized facial treatments for all skin types",
    features: [
      "60-75 minute treatment",
      "Skin analysis included",
      "Deep cleansing & exfoliation",
      "Relaxing facial massage",
      "Personalized skincare advice",
    ],
    popular: false,
  },
  {
    service: "Brow Lamination",
    price: "$60",
    unit: "per treatment",
    description: "Fuller, lifted brows that last 6-8 weeks",
    features: [
      "45 minute session",
      "Brow mapping & shaping",
      "Lamination & tinting",
      "Lasts 6-8 weeks",
      "Low maintenance",
    ],
    popular: false,
  },
  {
    service: "Massage Therapy",
    price: "$90",
    unit: "per hour",
    description: "Therapeutic massage for relaxation and wellness",
    features: [
      "60-90 minute sessions",
      "Customized techniques",
      "Stress relief & relaxation",
      "Improved circulation",
      "Wellness consultation",
    ],
    popular: false,
  },
]

export default function PricingTable() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((item, index) => (
            <Card
              key={item.service}
              className={`relative bg-zinc-800/50 border-yellow-600/20 hover:border-yellow-400/40 transition-all duration-500 group hover:transform hover:scale-105 overflow-hidden ${
                item.popular ? "ring-2 ring-yellow-400/50" : ""
              }`}
            >
              {item.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-zinc-900 px-4 py-1 rounded-full font-heading font-bold text-sm flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="font-heading font-bold text-2xl text-yellow-400 mb-2 tracking-wide">{item.service}</h3>
                <div className="mb-4">
                  <span className="font-heading font-black text-4xl text-amber-100">{item.price}</span>
                  <span className="font-body text-amber-200 ml-2">/{item.unit}</span>
                </div>
                <p className="font-body text-amber-100 text-sm leading-relaxed">{item.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="font-body text-amber-100 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

<Link href="/booking" target="_blank">
                <Button
                  className={`w-full font-heading font-bold py-3 transition-all duration-300 ${
                    item.popular
                      ? "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 shimmer transform hover:scale-105"
                      : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 bg-transparent"
                  }`}
                  variant={item.popular ? "default" : "outline"}
                >
                  Book This Service
                </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-zinc-800 to-zinc-700 border-yellow-600/30 p-8 max-w-4xl mx-auto">
            <CardContent className="space-y-6">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 tracking-wide">
                SPECIAL OFFERS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-yellow-400">First-Time Clients</h3>
                  <p className="font-body text-amber-100">Get 10% off your first visit to any service</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-yellow-400">Package Deals</h3>
                  <p className="font-body text-amber-100">Combine multiple treatments for additional savings</p>
                </div>
              </div>
              <p className="font-body text-amber-200 text-sm">
                *Prices vary based on package, customization, and add-ons. Contact us for detailed quotes.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold px-8 py-4 text-lg shimmer transform hover:scale-105 transition-all duration-300"
              >
                Contact for Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
