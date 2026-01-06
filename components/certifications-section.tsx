export function CertificationsSection() {
  const certifications = [
    { name: "ISO 9001", image: "/iso-certification-badge.jpg" },
    { name: "Unity", image: "/unity-certified-badge.jpg" },
    { name: "Meta", image: "/meta-partner-badge.jpg" },
    { name: "AWS", image: "/aws-partner-badge.jpg" },
    { name: "Google", image: "/google-partner-badge.jpg" },
    { name: "Microsoft", image: "/microsoft-certified-badge.jpg" },
    { name: "Unreal", image: "/unreal-engine-badge.jpg" },
    { name: "Stripe", image: "/stripe-partner-badge.jpg" },
    { name: "Azure", image: "/azure-certified-badge.jpg" },
  ]

  return (
    <section className="py-16 bg-[#1a1f3a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          CERTIFIED.{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
            RECOGNIZED
          </span>
          . TRUSTED.
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="w-20 h-20 flex items-center justify-center">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
