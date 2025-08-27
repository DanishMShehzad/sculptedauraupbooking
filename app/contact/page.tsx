import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactSection from "@/components/contact-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  )
}
