"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const portfolioItems = [
    { image: "/port-1.png", title: "Racing Game" },
    { image: "/port-2.png", title: "Mobile App" },
    { image: "/port-3.png", title: "Nitro Racing" },
    { image: "/port-4.png", title: "Product Design" },
    { image: "/port-5.png", title: "Theme Park Games" },
  ]

  const portfolioHoverImages = [
    { image: "/port-1.5.png", title: "Racing Game" },
    { image: "/port-2.5.png", title: "Mobile App" },
    { image: "/port-3.5.png", title: "Nitro Racing" },
    { image: "/port-4.5.png", title: "Product Design" },
    { image: "/port-5.5.png", title: "Theme Park Games" },
  ]

  const shouldShiftLeft = hoveredIndex !== null && hoveredIndex >= 3

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          WHAT WE&apos;VE{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
            BUILT?
          </span>
        </h2>

        {/* FLEX STRIP container */}
        <div className="relative overflow-hidden ">
          {/* STRIP */}
          <div
            className="
              max-w-none px-0
              grid grid-cols-2 gap-2
              md:flex md:gap-4 xl:gap-6
              transition-transform duration-500 ease-in-out
            "
            style={{
              transform: shouldShiftLeft ? "translateX(-300px)" : "translateX(0)",
            }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="
                  relative
                  group
                  aspect-3/5
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  md:transition-all md:duration-500 md:ease-in-out

                  h-65
                  md:h-90
                  xl:h-120

                  md:flex-[0_0_135px]
                  lg:flex-[0_0_180px]
                  xl:flex-[0_0_230px]
                  2xl:flex-[0_0_280px]

                  /* expand on hover */
                  md:hover:flex-[0_0_384px]
                  lg:hover:flex-[0_0_582px]
                "
              >
                {/* Base image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition-opacity duration-300
                    group-hover:opacity-0
                  "
                />

                {/* Hover image */}
                <img
                  src={portfolioHoverImages[index].image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    rounded-2xl
                    opacity-0
                    transition-opacity duration-300 delay-100
                    group-hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-2 rounded-2xl border-black text-black hover:bg-black hover:text-white bg-transparent"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}