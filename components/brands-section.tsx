export function BrandsSection() {
  const brands = [
    { name: "Bajaj Finserv", logo: "/brands-1.png" },
    { name: "Vaseline", logo: "/brands-2.png" },
    { name: "Coca Cola", logo: "/brands-3.png" },
    { name: "Striped", logo: "/brands-4.png" },
    { name: "Ogilvy", logo: "/brands-5.png" },
    { name: "Studio", logo: "/brands-6.png" },
    { name: "Pepsi", logo: "/brands-7.png" },
    { name: "Jio", logo: "/brands-8.png" },
    { name: "Cloud", logo: "/brands-9.png" },
  ]

  return (
    <section className="py-20 bg-[#171635] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          BRANDS WE HAVE{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            WORKED FOR
          </span>
        </h2>

        {/* GRID */}
        <div className="relative grid grid-cols-2 md:grid-cols-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center p-8 md:p-12 brand-cell"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain"
              />
            </div>
          ))}

          {/* GRID LINES */}
          <div className="pointer-events-none absolute inset-0">
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/3 w-px bg-linear-to-b from-transparent via-white/60 to-transparent hidden md:block" />
            <div className="absolute inset-y-0 left-2/3 w-px bg-linear-to-b from-transparent via-white/60 to-transparent hidden md:block" />

            {/* Horizontal lines */}
            <div className="absolute inset-x-0 top-1/3 h-px bg-linear-to-r from-transparent via-white/60 to-transparent hidden md:block" />
            <div className="absolute inset-x-0 top-2/3 h-px bg-linear-to-r from-transparent via-white/60 to-transparent hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
