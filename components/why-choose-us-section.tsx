export function WhyChooseUsSection() {
  const features = [
    {
      number: "01",
      title: "EXPERIENCE",
      description: "Over 5 years of delivering high-quality games.",
    },
    {
      number: "02",
      title: "FULL DEVELOPMENT",
      description: "Complete in-house production from start to finish.",
    },
    {
      number: "03",
      title: "ART & DESIGN",
      description: "Top-tier 2D, 3D, UI, and animation expertise.",
    },
    {
      number: "04",
      title: "LIVEOPS",
      description: "Monetization, updates, and continuous support.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          WHY CHOOSE{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
            US?
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="text-sm text-gray-500">{feature.number}.</div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Developer Character"
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
