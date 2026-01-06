export function ServicesSection() {
  const services = [
    "GAME DEVELOPMENT",
    "METAVERSE DEVELOPMENT",
    "3D ARCH-VIZ",
    "INTERACTIVE SERVICES",
    "WEB & APP DEVELOPMENT",
    "GAME ART",
    "AI DEVELOPMENT",
    "DIGITAL TWIN",
    "EXTENDED REALITY",
    "BLOCKCHAIN",
  ]

  return (
    <section id="services" className="py-20 bg-[#1a1f3a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          OUR{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
            SERVICES
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {services.slice(0, 5).map((service, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-pointer">
                <span className="text-[#3b5bff] text-2xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-lg group-hover:text-[#3b5bff] transition-colors">{service}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img src="/3d-pirate-character-game.jpg" alt="3D Character" className="w-96 h-96 object-contain" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="flex justify-center order-2 md:order-1">
            <img src="/3d-dragon-character-game.jpg" alt="3D Dragon Character" className="w-96 h-96 object-contain" />
          </div>

          <div className="space-y-4 order-1 md:order-2">
            {services.slice(5).map((service, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-pointer">
                <span className="text-[#3b5bff] text-2xl font-bold">{String(index + 6).padStart(2, "0")}</span>
                <span className="text-lg group-hover:text-[#3b5bff] transition-colors">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
