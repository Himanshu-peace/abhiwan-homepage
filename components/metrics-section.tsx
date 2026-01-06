export function MetricsSection() {
  const metrics = [
    { value: "6+", label: "YEARS OF\nEXPERIENCE", color: "#3b5bff" },
    { value: "100+", label: "TEAM\nMEMBERS", color: "#3b5bff" },
    { value: "400+", label: "HAPPY\nCLIENTS", color: "#3b5bff" },
    { value: "450+", label: "SUCCESSFUL\nPROJECTS", color: "#3b5bff" },
  ]

  return (
    <section className="py-20 bg-white border-t-4 border-[#3b5bff]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          KEY{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
            METRICS
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-sm font-bold text-gray-800 whitespace-pre-line">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
