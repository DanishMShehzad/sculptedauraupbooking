import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingHero from "@/components/booking-hero"
import HowItWorks from "@/components/how-it-works"
import ServiceMenu from "@/components/service-menu"
import BookingPolicies from "@/components/booking-policies"
import TestimonialHighlight from "@/components/testimonial-highlight"
import BookingCTA from "@/components/booking-cta"

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BookingHero />
      <HowItWorks />
      <ServiceMenu />
      <BookingPolicies />
      <TestimonialHighlight />
      <BookingCTA />
      <Footer />
    </main>
  )
}
