export default function BookingPolicies() {
  const policies = [
    {
      title: "Deposits",
      description: "Non-refundable, applied toward service total.",
    },
    {
      title: "Late Policy",
      description: "10-minute grace period. After that, appointment may be rescheduled.",
    },
    {
      title: "Cancellations/No-Shows",
      description: "24-hour notice required. No-shows forfeit deposit.",
    },
    {
      title: "Preparation",
      description: "Please arrive with clean lashes, no makeup, and bare skin for facials.",
    },
  ]

  return (
    <section id="Booking-Policies" className="py-20 px-4 bg-gradient-to-b from-amber-50/5 to-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-amber-100/10 to-rose-100/10 rounded-3xl p-8 md:p-12 border border-amber-400/20">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-amber-400">
            ✨ Our Booking Policies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-amber-300">{policy.title}</h3>
                <p className="text-gray-300 font-open-sans leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
