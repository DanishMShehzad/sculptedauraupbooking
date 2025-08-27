"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // const navLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/services", label: "Services" },
  //   { href: "/pricing", label: "Pricing" },
  //   { href: "/faq", label: "FAQ" },
  //   { href: "/contact", label: "Contact" },
  // ]

  const navLinks = [
    { href: "#How-it-Works", label: "How it Works" },
    { href: "#Body-Sculpting-Treatments", label: "Body Sculpting" },
    { href: "#Massage-Therapy", label: "Massage Therapy" },
    { href: "#Sculpted-Aura-Packages", label: "Sculpted Aura" },
    { href: "#Booking-Policies", label: "Booking Policies" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-zinc-900/95 backdrop-blur-md border-b border-yellow-600/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 group">
              <img
                src="https://sculptedauras.com/logo.png"
                alt="Sculpted Aura Logo"
                width={60}
                height={60}
                className="float group-hover:scale-110 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-amber-100 hover:text-yellow-400 transition-colors duration-300 font-body font-medium group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Book Button */}
            <Link href="#Body-Sculpting-Treatments" className="hidden md:block">
              <Button className="luxury-button bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold px-6 py-2 shimmer">
                Book Now
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-amber-100 hover:text-yellow-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-zinc-900/95 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-0 right-0 bg-zinc-800/95 backdrop-blur-md border-b border-yellow-600/20 mobile-menu-enter-active">
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-amber-100 hover:text-yellow-400 transition-colors duration-300 font-body font-medium text-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#Body-Sculpting-Treatments" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full luxury-button bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold py-3 shimmer">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
