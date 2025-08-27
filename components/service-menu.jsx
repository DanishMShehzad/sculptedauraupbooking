'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import toast from "react-hot-toast"
import { id } from "date-fns/locale"

export default function ServiceMenu() {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  })

  const serviceCategories = [
    // {
    //   title: "💫 Lash Extensions",
    //   services: [
    //     {
    //       name: "Classic Lashes",
    //       duration: "2 hrs",
    //       price: "$140",
    //       description: "Natural, timeless elegance with a clean and defined look.",
    //       image:
    //         "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    //     },
    //     {
    //       name: "Hybrid Lashes",
    //       duration: "2.5 hrs",
    //       price: "$160",
    //       description: "A flawless blend of classic and volume lashes for a wispy, full finish.",
    //       image: "/HybridLashes.jpeg",
    //     },
    //     {
    //       name: "Volume Lashes",
    //       duration: "2.5 hrs",
    //       price: "$180",
    //       description: "Soft, fluffy, and glamorous for maximum dimension and bold beauty.",
    //       image: "/Volumelashes.jpeg",
    //     },
    //     {
    //       name: "Mega Volume",
    //       duration: "3 hrs",
    //       price: "$200",
    //       description: "The ultimate drama—intensely full, luxurious lashes for a striking aura.",
    //       image: "MegaVolume.jpeg",
    //     },
    //   ],
    // },
    // {
    //   title: "✨ Skin Treatments",
    //   services: [
    //     {
    //       name: "Glow Facial",
    //       duration: "60 min",
    //       price: "$120",
    //       description: "Hydrating facial designed to refresh, brighten & rejuvenate your skin.",
    //       image:
    //         "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    //     },
    //     {
    //       name: "Acne Healing Facial",
    //       duration: "75 min",
    //       price: "$140",
    //       description: "Targeted treatment to detox, soothe, and clear acne-prone skin.",
    //       image: "AcneHealingFacial.jpeg",
    //     },
    //     {
    //       name: "Luxury Sculpt Facial",
    //       duration: "90 min",
    //       price: "$160",
    //       description: "Sculpt, lift, and contour your natural features for a radiant glow.",
    //       image:
    //         "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    //     },
    //   ],
    // },
    // {
    //   title: "🌹 Brows",
    //   services: [
    //     {
    //       name: "Brow Lamination",
    //       duration: "45 min",
    //       price: "$80",
    //       description: "Sleek, lifted brows with a polished, fuller look.",
    //       image: "BrowLamination.jpeg",
    //     },
    //     {
    //       name: "Brow Shaping & Tinting",
    //       duration: "45 min",
    //       price: "$70",
    //       description: "Defined arches and a natural tint for perfect everyday brows.",
    //       image: "BrowshapingTinting.jpeg",
    //     },
    //   ],
    // },
    {
      title: "💎 Body Sculpting Treatments",
      description: "Non-invasive, safe, and effective solutions for a snatched silhouette.",
      id: "Body-Sculpting-Treatments",
      services: [
        {
          name: "Ultrasonic Cavitation",
          duration: "45 min",
          price: "$85",
          description: "Advanced ultrasonic technology to break down fat cells for body contouring.",
          image:
            "ultrasonic.jpg",
        },
        {
          name: "Lipo Light Therapy",
          duration: "45 min",
          price: "$95",
          description: "LED light therapy to stimulate fat cells and promote natural body sculpting.",
          image:
            "lipolaser.jpg",
        },
        {
          name: "Wood Therapy",
          duration: "45 min",
          price: "$75",
          description: "Traditional wooden tools massage to contour and tone your silhouette.",
          image:
            "Wood-Therapy.jpg",
        },
      ],
    },
    {
      title: "🌿 Massage Therapy",
      description: "Luxury massage treatments designed to heal, relax, and sculpt.",
      id: "Massage-Therapy",
      services: [
        {
          name: "Lymphatic Drainage Massage",
          duration: "60 min",
          price: "$120",
          description: "Specialized massage to reduce swelling and improve lymphatic circulation.",
          image:
            "Drainage.jpg",
        },
        {
          name: "Body Sculpting Massage",
          duration: "60 min",
          price: "$120",
          description: "Targeted massage techniques to contour and define your body shape.",
          image:
            "BodySculptingMassage.jpg",
        },
        {
          name: "Luxury Relaxation Massage (Women)",
          duration: "60 min",
          price: "$130",
          description: "Ultimate relaxation experience with premium oils and techniques for women.",
          image:
            "Luxury-Relaxation-Massage-Women.webp",
        },
        {
          name: "Luxury Relaxation Massage (Men)",
          duration: "60 min",
          price: "$200",
          description: "Premium relaxation massage tailored specifically for men's needs.",
          image:
            "Luxury-Relaxation-Massage-Men.jpg",
        },
      ],
    },
    // {
    //   title: "👁 Beauty Enhancements – Cluster Lashes",
    //   description: "Enhance your look with soft, lightweight, and glamorous lash sets.",
    //   services: [
    //     {
    //       name: "Natural Volume Set",
    //       duration: "45 min",
    //       price: "$65",
    //       description: "Soft, everyday look perfect for natural enhancement.",
    //       image:
    //         "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    //     },
    //     {
    //       name: "Glam Volume Set",
    //       duration: "60 min",
    //       price: "$85",
    //       description: "Fuller & more defined look for special occasions and events.",
    //       image: "/HybridLashes.jpeg",
    //     },
    //     {
    //       name: "Mega Volume Set",
    //       duration: "75 min",
    //       price: "$100",
    //       description: "Dramatic, bold & luxe look for maximum impact and glamour.",
    //       image: "/Volumelashes.jpeg",
    //     },
    //   ],
    // },
    // {
    //   title: "🔥 Body Contouring",
    //   services: [
    //     {
    //       name: "Sculpt Session",
    //       duration: "60 min",
    //       price: "$120",
    //       description: "Non-invasive sculpting to contour and define your silhouette.",
    //       image:
    //         "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    //     },
    //     {
    //       name: "Glow Package (3 Sessions)",
    //       duration: "Package",
    //       price: "$300",
    //       description: "Bundle & save—designed for visible, lasting results.",
    //       image:
    //         "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    //     },
    //   ],
    // },
    {
      title: "✨ Sculpted Aura Packages",
      description: "Save & sculpt more with bundled sessions.",
      id: "Sculpted-Aura-Packages",
      services: [
        {
          name: "Snatched Waist Package",
          duration: "Package",
          price: "$450",
          description: "3 Cavitation + 3 Wood Therapy sessions for targeted waist sculpting.",
          image:
            "snatchedwaist.jpg",
        },
        {
          name: "Glow & Contour Package",
          duration: "Package",
          price: "$850",
          description: "5 Cavitation + 5 Lipo Light sessions for comprehensive body contouring.",
          image:
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        },
        {
          name: "Total Transformation Package",
          duration: "Package",
          price: "$1,500",
          description: "10 sessions mix of Cavitation, Lipo Light, and Wood Therapy for complete transformation.",
          image:
            "Total-Transformation-Package.jpg",
        },
      ],
    },
  ]

  const bookService = (service) => {
    setSelectedService(service)
    setOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const bookingData = { ...formData, service: selectedService }

    try {
      const res = await fetch("/api/bookings/route.php", {   // 👈 point to PHP file instead of /api/bookings
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      })

      const data = await res.json()
      if (res.ok) {
        toast.success("Booking confirmed ✅")
        setOpen(false)
        setFormData({ name: "", email: "", date: "", time: "" })
      } else {
        toast.error(data.error || "Booking failed ❌")
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong")
    }
  }


  return (
    <section id="services-menu" className="py-20 px-4 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto">
        {serviceCategories.map((category, categoryIndex) => (
          <div id={category.id} key={categoryIndex} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-4 text-amber-400">
              {category.title}
            </h2>

            {category.description && (
              <p className="text-amber-100 text-center mb-12 font-open-sans text-lg max-w-2xl mx-auto">
                {category.description}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="luxury-card bg-zinc-800/80 border-amber-400/20 hover:border-amber-400/40 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-300 font-montserrat">{service.name}</CardTitle>
                    <CardDescription className="text-amber-100 font-open-sans">
                      {service.duration} | {service.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-open-sans mb-4 leading-relaxed">{service.description}</p>
                    <Button
                      onClick={() => bookService(service)}
                      className="w-full luxury-button bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-semibold rounded-full"
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {open && (
        <div className="h-[100vh] sticky top-[0px] inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              Book {selectedService?.name}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-2 border rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-2 border rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Select Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full p-2 border rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Select Time</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="w-full p-2 border rounded-lg mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-semibold rounded-full"
              >
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}