export default function HowItWorks() {
  const steps = [
    {
      icon: "✨",
      title: "Choose Your Service",
      description: "Select your desired beauty treatment.",
    },
    {
      icon: "💆🏽‍♀️",
      title: "Pick a Time",
      description: "Find an appointment that works best for you.",
    },
    {
      icon: "💳",
      title: "Secure Deposit",
      description: "Lock in your spot with a small deposit.",
    },
    {
      icon: "💖",
      title: "Glow Up",
      description: "Arrive, relax, and experience your aura transformation.",
    },
  ]

  return (
    <section id="How-it-Works" className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-amber-400">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center luxury-card bg-zinc-800/50 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/40"
            >
              <div className="text-6xl mb-6 block">{step.icon}</div>
              <h3 className="text-xl font-montserrat font-semibold mb-4 text-amber-300">{step.title}</h3>
              <p className="text-gray-300 font-open-sans leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
