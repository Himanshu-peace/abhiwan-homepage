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
    <section
      id="services"
      className="py-20 bg-[#1a1f3a] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold text-center">
          OUR{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            SERVICES
          </span>
        </h2>

        {/* grids wrapper */}
        <div className="mt-40 space-y-6 md:space-y-8">
          {/* top grid */}
          <div className="grid md:grid-cols-[70%_30%] items-center md:-mt-20 gap-10 md:gap-0 md:mr-20">
            <div className="flex justify-center order-1 md:order-0">
              <img
                src="/services-castel-boy.png"
                alt="3D Character"
                className="w-65 sm:w-[320px] md:w-180 h-auto object-contain"
              />
            </div>

            <div className="space-y-0 order-2 md:order-0">
              {services.slice(0, 5).map((service, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-4
                    py-4
                    border-b border-[#E88BFF]
                    ${index === 0 ? "border-t-3  border-[#E88BFF]" : ""}
                    group cursor-pointer
                  `}
                >
                  <span
                    className="min-w-9 text-2xl font-bold text-[#1a1f3a]"
                    style={{ WebkitTextStroke: "1px #E88BFF" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base sm:text-lg group-hover:text-[#3b5bff] transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* bottom grid – pulled up */}
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] md:gap-10 items-center gap-10 md:ml-20  ">
            {/* Services list */}
            <div className="space-y-0 md:ml-10 order-2 md:order-none">
              {services.slice(5).map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-4 border-b border-[#E88BFF] group cursor-pointer"
                >
                  <span
                    className="min-w-[36px] text-2xl font-bold text-[#1a1f3a]"
                    style={{ WebkitTextStroke: "1px #E88BFF" }}
                  >
                    {String(index + 6).padStart(2, "0")}
                  </span>

                  <span className="text-base sm:text-lg group-hover:text-[#3b5bff] transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex justify-center order-1 md:order-none">
              <img
                src="/services-dragon-ground.png"
                alt="3D Dragon Character"
                className="w-[260px] sm:w-[320px] md:w-180 h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
