import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServiceHero />
      <ServiceDetails />
      <Footer />
    </main>
  )
}
