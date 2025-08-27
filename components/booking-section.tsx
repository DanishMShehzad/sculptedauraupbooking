"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Gift, AlertCircle } from "lucide-react"

export default function BookingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form/Calendly */}
          <div className="lg:col-span-2">
            <Card className="bg-zinc-800/50 border-yellow-600/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-zinc-800 to-zinc-700 border-b border-yellow-600/20">
                <h2 className="font-heading font-bold text-2xl text-yellow-400 text-center">
                  Schedule Your Appointment
                </h2>
              </CardHeader>
              <CardContent className="p-0">
                {/* Calendly Embed Placeholder */}
                <div className="h-96 bg-zinc-700/30 flex items-center justify-center border-2 border-dashed border-yellow-600/30 m-6 rounded-lg">
                  <div className="text-center space-y-4">
                    <Calendar className="w-16 h-16 text-yellow-400 mx-auto" />
                    <div>
                      <h3 className="font-heading font-bold text-xl text-yellow-400 mb-2">Calendly Integration</h3>
                      <p className="font-body text-amber-100 mb-4">
                        Replace this section with your Calendly embed code:
                      </p>
                      <code className="bg-zinc-800 text-yellow-300 px-3 py-1 rounded text-sm">
                        {
                          '<iframe src="https://calendly.com/your-username" width="100%" height="100%" frameborder="0"></iframe>'
                        }
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Information */}
          <div className="space-y-6">
            {/* Special Offer */}
            <Card className="bg-gradient-to-r from-yellow-600 to-yellow-500 border-0 text-zinc-900">
              <CardContent className="p-6 text-center">
                <Gift className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-xl mb-2">First-Time Special</h3>
                <p className="font-body font-medium">10% off your first visit!</p>
              </CardContent>
            </Card>

            {/* Appointment Policies */}
            <Card className="bg-zinc-800/50 border-yellow-600/20">
              <CardHeader>
                <h3 className="font-heading font-bold text-xl text-yellow-400 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Appointment Policies
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 font-body text-amber-100">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Please arrive 10 minutes early for your appointment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Cancellations require at least 24 hours notice</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Late arrivals may shorten your treatment time</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>No-shows will be charged 50% of the service fee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Service Selection */}
            <Card className="bg-zinc-800/50 border-yellow-600/20">
              <CardHeader>
                <h3 className="font-heading font-bold text-xl text-yellow-400">Popular Services</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Lash Extensions", price: "From $80", duration: "90-120 min" },
                  { name: "Body Sculpting", price: "From $120", duration: "45-60 min" },
                  { name: "Facials", price: "From $75", duration: "60-75 min" },
                  { name: "Brow Lamination", price: "From $60", duration: "45 min" },
                ].map((service) => (
                  <div key={service.name} className="flex justify-between items-center p-3 bg-zinc-700/30 rounded-lg">
                    <div>
                      <h4 className="font-heading font-semibold text-yellow-400">{service.name}</h4>
                      <p className="font-body text-amber-200 text-sm">{service.duration}</p>
                    </div>
                    <span className="font-body text-amber-100 font-medium">{service.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact for Help */}
            <Card className="bg-zinc-800/50 border-yellow-600/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading font-bold text-lg text-yellow-400 mb-3">Need Help Booking?</h3>
                <p className="font-body text-amber-100 mb-4 text-sm">
                  Call us directly and we'll help you schedule the perfect appointment
                </p>
                <Button
                  variant="outline"
                  className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold transition-all duration-300 bg-transparent"
                >
                  Call (XXX) XXX-XXXX
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
