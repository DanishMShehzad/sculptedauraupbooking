"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    category: "Body Sculpting",
    questions: [
      {
        question: "Are body sculpting results permanent?",
        answer:
          "Results can be long-lasting with a healthy lifestyle, though maintenance sessions may be recommended. The treated fat cells are permanently eliminated, but maintaining a stable weight and healthy habits will help preserve your results.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "Most clients see optimal results after 3-6 sessions, spaced 2-4 weeks apart. During your consultation, we'll create a personalized treatment plan based on your goals and body type.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "No downtime is required! You can return to your normal activities immediately after treatment. Some clients experience mild redness or tenderness, which typically resolves within a few hours.",
      },
    ],
  },
  {
    category: "Lash Extensions",
    questions: [
      {
        question: "How long do lash extensions last?",
        answer:
          "Typically 4-6 weeks with proper care, with touch-ups recommended every 2-3 weeks. The longevity depends on your natural lash cycle and how well you follow aftercare instructions.",
      },
      {
        question: "Can I wear makeup with lash extensions?",
        answer:
          "Yes, but we recommend oil-free makeup and makeup remover. Avoid waterproof mascara and be gentle when cleansing around the eye area to preserve the extensions.",
      },
      {
        question: "Will lash extensions damage my natural lashes?",
        answer:
          "When applied correctly by our trained professionals, lash extensions will not damage your natural lashes. We use high-quality adhesives and proper application techniques to ensure lash health.",
      },
    ],
  },
  {
    category: "Facials & Skincare",
    questions: [
      {
        question: "How often should I get a facial?",
        answer:
          "Every 4-6 weeks for optimal skin health. This allows your skin to complete its natural renewal cycle and helps maintain the benefits of professional treatments.",
      },
      {
        question: "What should I expect during my first facial?",
        answer:
          "We'll start with a thorough skin analysis to determine your skin type and concerns. Then we'll customize the treatment with appropriate cleansing, exfoliation, extractions (if needed), and moisturizing steps.",
      },
      {
        question: "Can I get a facial if I have sensitive skin?",
        answer:
          "We offer gentle treatments specifically designed for sensitive skin. During consultation, we'll discuss your sensitivities and customize the facial accordingly.",
      },
    ],
  },
  {
    category: "Brow Services",
    questions: [
      {
        question: "Is brow lamination safe for sensitive skin?",
        answer:
          "Yes, but a patch test is recommended 24 hours before the procedure. We use gentle, professional-grade products and can adjust the treatment for sensitive skin types.",
      },
      {
        question: "How long does brow lamination last?",
        answer:
          "Brow lamination typically lasts 6-8 weeks. The longevity depends on your hair growth cycle and how well you follow aftercare instructions.",
      },
      {
        question: "Can I get my brows wet after lamination?",
        answer:
          "Avoid getting your brows wet for the first 24 hours after treatment. After that, you can resume normal activities, but gentle cleansing is recommended.",
      },
    ],
  },
  {
    category: "General Questions",
    questions: [
      {
        question: "Can I book multiple treatments in one visit?",
        answer:
          "Many clients combine treatments for the ultimate self-care day. We can schedule complementary services back-to-back for your convenience.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellations require at least 24 hours notice. Late arrivals may shorten your treatment time, and no-shows will be charged 50% of the service fee.",
      },
      {
        question: "Do you offer consultations?",
        answer:
          "Yes! We offer complimentary consultations for all services. This allows us to understand your goals, assess your needs, and create a personalized treatment plan.",
      },
      {
        question: "What should I do to prepare for my appointment?",
        answer:
          "Please arrive 10 minutes early for your appointment. Avoid caffeine before body sculpting treatments, and come with a clean face for facial services. We'll provide specific pre-care instructions when you book.",
      },
    ],
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {faqData.map((category, categoryIndex) => (
          <div key={category.category} className="mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 mb-8 tracking-wide text-center">
              {category.category.toUpperCase()}
            </h2>

            <div className="space-y-4">
              {category.questions.map((faq, questionIndex) => {
                const itemId = `${categoryIndex}-${questionIndex}`
                const isOpen = openItems.includes(itemId)

                return (
                  <Card
                    key={itemId}
                    className="bg-zinc-800/50 border-yellow-600/20 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-700/30 transition-colors duration-300"
                      >
                        <h3 className="font-heading font-bold text-lg text-yellow-400 pr-4">{faq.question}</h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="font-body text-amber-100 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-zinc-800 to-zinc-700 border-yellow-600/30 p-8">
            <CardContent className="space-y-6">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 tracking-wide">
                STILL HAVE QUESTIONS?
              </h2>
              <p className="font-body text-lg text-amber-100 leading-relaxed">
                Our team is here to help! Contact us for personalized answers about our treatments and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-zinc-900 font-heading font-bold px-8 py-4 text-lg shimmer transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-heading font-semibold px-8 py-4 text-lg transition-all duration-300 bg-transparent"
                >
                  Book Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
