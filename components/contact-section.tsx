"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-zinc-800/50 border-yellow-600/20">
              <CardHeader>
                <h2 className="font-heading font-bold text-2xl text-yellow-400">Send Us a Message</h2>
                <p className="font-body text-amber-100">
                  Whether you have questions about our treatments, want to discuss your beauty goals, or need help
                  booking your session, we're here for you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-amber-100 mb-2">First Name</label>
                    <Input
                      placeholder="Your first name"
                      className="bg-zinc-700/50 border-yellow-600/30 text-amber-100 placeholder:text-amber-200/50 focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-amber-100 mb-2">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      className="bg-zinc-700/50 border-yellow-600/30 text-amber-100 placeholder:text-amber-200/50 focus:border-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-amber-100 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-zinc-700/50 border-yellow-600/30 text-amber-100 placeholder:text-amber-200/50 focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block font-body text-amber-100 mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(954) 393-2634"
                    className="bg-zinc-700/50 border-yellow-600/30 text-amber-100 placeholder:text-amber-200/50 focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block font-body text-amber-100 mb-2">Service Interest</label>
                  <select className="w-full p-3 bg-zinc-700/50 border border-yellow-600/30 rounded-md text-amber-100 focus:border-yellow-400 focus:outline-none">
                    <option value="">Select a service</option>
                    <option value="body-sculpting">Body Sculpting</option>
                    <option value="lash-extensions">Lash Extensions</option>
                    <option value="facials">Facials</option>
                    <option value="brow-lamination">Brow Lamination</option>
                    <option value="massage-therapy">Massage Therapy</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-amber-100 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your beauty goals or any questions you have..."
                    rows={4}
                    className="bg-zinc-700/50 border-yellow-600/30 text-amber-100 placeholder:text-amber-200/50 focus:border-yellow-400"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold py-3 shimmer transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-zinc-800/50 border-yellow-600/20">
              <CardHeader>
                <h3 className="font-heading font-bold text-xl text-yellow-400">Get in Touch</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-amber-100">Phone</h4>
                    <p className="font-body text-amber-200">+1 (954) 393-2634</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-amber-100">Email</h4>
                    <p className="font-body text-amber-200">sculptedauraa@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-amber-100">Address</h4>
                    <p className="font-body text-amber-200">2831 W. Cypress Creek Rd., Fort Lauderdale, FL 33309</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-zinc-800/50 border-yellow-600/20">
              <CardHeader>
                <h3 className="font-heading font-bold text-xl text-yellow-400 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Business Hours
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-body text-amber-100">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-amber-200">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-amber-200">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-amber-200">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-zinc-800 to-zinc-700 border-yellow-600/30">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading font-bold text-xl text-yellow-400 text-center">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold shimmer transform hover:scale-105 transition-all duration-300"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold transition-all duration-300 bg-transparent"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-zinc-800/50 border-yellow-600/20">
              <CardContent className="p-0">
                <div className="h-48 bg-zinc-700/30 flex items-center justify-center border-2 border-dashed border-yellow-600/30 m-6 rounded-lg">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                    <p className="font-body text-amber-100">Google Maps Integration</p>
                    <p className="font-body text-amber-200 text-sm">Add your location map here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
