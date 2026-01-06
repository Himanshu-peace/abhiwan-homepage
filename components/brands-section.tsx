export function BrandsSection() {
  const brands = [
    { name: "Bajaj Finserv", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Vaseline", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Coca Cola", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Striped", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Ogilvy", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Studio", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Pepsi", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Jio", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Cloud", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20 bg-[#1a1f3a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          BRANDS WE HAVE{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
            WORKED FOR
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 hover:bg-white/5 rounded-lg transition-colors"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="max-w-full h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
