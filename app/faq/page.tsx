import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FAQHero from "@/components/faq-hero"
import FAQSection from "@/components/faq-section"

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FAQHero />
      <FAQSection />
      <Footer />
    </main>
  )
}
