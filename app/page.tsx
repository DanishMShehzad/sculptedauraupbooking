// import Navigation from "@/components/navigation"
// import HeroSection from "@/components/hero-section"
// import ServicesOverview from "@/components/services-overview"
// import CTASection from "@/components/cta-section"
// import Footer from "@/components/footer"

// export default function HomePage() {
//   return (
//     <main className="min-h-screen">
//       <Navigation />
//       <HeroSection />
//       <ServicesOverview />
//       <CTASection />
//       <Footer />
//     </main>
//   )
// }
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingHero from "@/components/booking-hero"
import HowItWorks from "@/components/how-it-works"
import ServiceMenu from "@/components/service-menu"
import BookingPolicies from "@/components/booking-policies"
import TestimonialHighlight from "@/components/testimonial-highlight"
import BookingCTA from "@/components/booking-cta"
import WhatsAppFloat from "@/components/whatsAppIcon";

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
      <WhatsAppFloat
        phone="19543932634" // <-- apna number yahan daalain (country code + number, no + or spaces)
        text={encodeURIComponent("Hello! 👋 I’m interested in your services. Could you please share more details with me?.")} // optional: customize message
      />
    </main>
  )
}
