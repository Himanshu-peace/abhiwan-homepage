export function CertificationsSection() {
  const certifications = [
    { name: "ISO", image: "/cer-iso-1.png" },
    { name: "clutch", image: "/cer-clutch-2.png" },
    { name: "zee", image: "/cer-zee-3.png" },
    { name: "goodFirms", image: "/cer-Goodfirms-4.png" },
    { name: "appfutura", image: "/cer-appfutura-5.png" },
    { name: "theManifest", image: "/cer-themanifest-6.png" },
    { name: "selectedFirms", image: "/cer-selected firms-7.png" },
    { name: "delhi", image: "/cer-themanifest-delhi-8.png" },
    { name: "itRate", image: "/cer-itRate-9.png" },
  ]

  return (
    <section className="py-16 bg-[#1a1f3a] text-white overflow-visible">
      <div className="container mx-auto max-w-none px-0">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center mb-12">
          CERTIFIED.{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            RECOGNIZED
          </span>
          . TRUSTED.
        </h2>

        {/* STRIP */}
        <div className="bg-[#161627] overflow-hidden">
          {/* Desktop layout */}
          <div className="hidden md:flex justify-between items-center gap-8 px-6 lg:px-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="w-20 h-20 my-6 flex items-center justify-center"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Mobile marquee */}
          <div className="md:hidden">
            <div
              className="
                flex w-max
                animate-[marquee_18s_linear_infinite]
              "
            >
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={index}
                  className="w-20 h-20 mx-6 my-6 flex items-center justify-center shrink-0"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
