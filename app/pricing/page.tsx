import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PricingHero from "@/components/pricing-hero"
import PricingTable from "@/components/pricing-table"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PricingHero />
      <PricingTable />
      <Footer />
    </main>
  )
}
