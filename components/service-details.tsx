"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "body-sculpting",
    title: "Body Sculpting",
    description:
      "Our non-invasive body sculpting treatments help contour and shape your body by targeting stubborn fat and tightening skin. Using advanced technology, we create noticeable results without downtime.",
    price: "From $120 per session",
    duration: "45-60 minutes",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Reduce stubborn fat in targeted areas",
      "Enhance muscle tone",
      "Smooth and tighten skin",
      "No surgery, no downtime",
      "Visible results after first session",
    ],
    process: [
      "Consultation and body assessment",
      "Customized treatment plan",
      "Advanced sculpting technology application",
      "Post-treatment care guidance",
    ],
  },
  {
    id: "lash-extensions",
    title: "Lash Extensions",
    description:
      "Say goodbye to mascara and hello to effortlessly beautiful lashes. Our lash extensions are applied individually for a natural yet glamorous look.",
    price: "From $80 (Classic Set)",
    duration: "90-120 minutes",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Fuller, longer lashes",
      "Saves time in your beauty routine",
      "Custom styles to suit your eye shape",
      "Long-lasting results (4-6 weeks)",
      "Waterproof and smudge-proof",
    ],
    process: [
      "Eye shape analysis and consultation",
      "Lash selection and customization",
      "Individual lash application",
      "Aftercare instructions and maintenance tips",
    ],
  },
  {
    id: "facials",
    title: "Facials",
    description:
      "We offer customized facials for every skin type—whether you need deep cleansing, hydration, anti-aging, or acne treatment.",
    price: "From $75 per session",
    duration: "60-75 minutes",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Deeply cleanses and rejuvenates skin",
      "Improves texture and tone",
      "Reduces fine lines and blemishes",
      "Boosts hydration and glow",
      "Customized for your skin type",
    ],
    process: [
      "Skin analysis and consultation",
      "Deep cleansing and exfoliation",
      "Customized treatment application",
      "Relaxing facial massage and moisturizing",
    ],
  },
  {
    id: "brow-lamination",
    title: "Brow Lamination",
    description:
      "Achieve sleek, lifted, and fuller brows that stay in place all day. Brow lamination is the ultimate solution for unruly or sparse brows.",
    price: "From $60",
    duration: "45 minutes",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    benefits: [
      "Fuller, more defined brows",
      "Smooths and tames hair",
      "Lasts up to 6-8 weeks",
      "Perfect alternative to microblading",
      "Low maintenance daily routine",
    ],
    process: [
      "Brow mapping and shape consultation",
      "Lamination solution application",
      "Brow shaping and tinting",
      "Final styling and aftercare guidance",
    ],
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description:
      "Indulge in a personalized massage to release tension, improve circulation, and promote deep relaxation.",
    price: "From $90 per hour",
    duration: "60-90 minutes",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: [
      "Reduces stress and anxiety",
      "Relieves muscle tension",
      "Improves flexibility and circulation",
      "Promotes better sleep",
      "Enhances overall well-being",
    ],
    process: [
      "Health and preference consultation",
      "Customized massage technique selection",
      "Full body therapeutic massage",
      "Relaxation time and wellness advice",
    ],
  },
]

export default function ServiceDetails() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`mb-20 ${index !== services.length - 1 ? "border-b border-yellow-600/20 pb-20" : ""}`}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div className="bg-yellow-500 text-zinc-900 px-4 py-2 rounded-full font-heading font-bold">
                      {service.price}
                    </div>
                    <div className="bg-zinc-900/80 text-yellow-400 px-4 py-2 rounded-full font-body font-medium">
                      {service.duration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div>
                  <h2 className="font-heading font-black text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 mb-4 tracking-wide">
                    {service.title.toUpperCase()}
                  </h2>
                  <p className="font-body text-lg text-amber-100 leading-relaxed">{service.description}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-yellow-400 mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="font-body text-amber-100">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-yellow-400 mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-zinc-900 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="font-body text-amber-100 pt-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/booking" target="_blank">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold px-8 py-3 shimmer transform hover:scale-105 transition-all duration-300"
                  >
                    Book This Service
                  </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold px-8 py-3 transition-all duration-300 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mt-20">
        <Card className="bg-gradient-to-r from-zinc-800 to-zinc-700 border-yellow-600/30 p-8">
          <CardContent className="space-y-6">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 tracking-wide">
              READY TO BEGIN YOUR TRANSFORMATION?
            </h2>
            <p className="font-body text-lg text-amber-100 leading-relaxed">
              Book multiple treatments in one visit for the ultimate self-care experience. First-time clients receive
              10% off their first visit!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold px-8 py-4 text-lg shimmer transform hover:scale-105 transition-all duration-300"
              >
                Book Your Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                Call Us: +1 (954) 393-2634
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
