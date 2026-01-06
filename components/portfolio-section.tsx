import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const portfolioItems = [
    { image: "/racing-game-colorful.jpg", title: "Racing Game" },
    { image: "/placeholder.svg?height=400&width=300", title: "Mobile App" },
    { image: "/placeholder.svg?height=400&width=300", title: "Night Racing" },
    { image: "/placeholder.svg?height=400&width=300", title: "Product Design" },
    { image: "/placeholder.svg?height=400&width=300", title: "Theme Park" },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          WHAT WE&apos;VE{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
            BUILT?
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
