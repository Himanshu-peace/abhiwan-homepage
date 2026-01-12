"use client"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  const portfolioImages = [
    // Row 1 - 12 images
    "/Rectangle 1.png",
    // "/Rectangle 2.png",
    "/Rectangle 3.png",
    "/Rectangle 4.png",
    "/Rectangle 5.png",
    "/Rectangle 6.png",
    "/Rectangle 7.png",
    "/Rectangle 1.png",
    // "/Rectangle 2.png",
    "/Rectangle 3.png",
    "/Rectangle 4.png",
    "/Rectangle 5.png",

    // Row 2 - 12 images
    "/Rectangle 8.png",
    "/Rectangle 9.png",
    "/Rectangle 10.png",
    "/Rectangle 11.png",
    "/Rectangle 12.png",
    "/Rectangle 13.png",
    "/Rectangle 14.png",
    "/Rectangle 8.png",
    "/Rectangle 9.png",
    "/Rectangle 10.png",
    "/Rectangle 11.png",
    "/Rectangle 12.png",

      // Row 3 - 12 images
    "/Rectangle 15.png",
    "/Rectangle 16.png",
    "/Rectangle 17.png",
    "/Rectangle 18.png",
    "/Rectangle 19.png",
    "/Rectangle 20.png",
    "/Rectangle 21.png",
    "/Rectangle 15.png",
    "/Rectangle 16.png",
    "/Rectangle 17.png",
    "/Rectangle 18.png",
    "/Rectangle 19.png",
  
    //row 4
    "/Rectangle 22.png",
    "/Rectangle 23.png",
    "/Rectangle 24.png",
    "/Rectangle 25.png",
    "/Rectangle 26.png",
    "/Rectangle 27.png",
    "/Rectangle 28.png",
    "/Rectangle 22.png",
    "/Rectangle 23.png",
    "/Rectangle 24.png",
    "/Rectangle 25.png",
    "/Rectangle 26.png",

    //row 5
    "/Rectangle 29.png",
    "/Rectangle 30.png",
    "/Rectangle 31.png",
    "/Rectangle 32.png",
    "/Rectangle 33.png",
    "/Rectangle 34.png",
    "/Rectangle 35.png",
    "/Rectangle 29.png",
    "/Rectangle 30.png",
    "/Rectangle 31.png",
    "/Rectangle 32.png",
    "/Rectangle 33.png",
  ]

  useEffect(() => {
    let scrollPosition = 0
    const animateScroll = () => {
      scrollPosition += 4.0

      rowRefs.current.forEach((row) => {
        if (row) {
          row.style.transform = `translateX(-${scrollPosition}px)`
          // Reset when scrolled halfway through (seamless loop)
          if (scrollPosition >= row.scrollWidth / 2) {
            scrollPosition = 0
          }
        }
      })

      requestAnimationFrame(animateScroll)
    }

    const animation = requestAnimationFrame(animateScroll)
    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <section className="relative z-10 -mt-5 h-screen  flex items-center justify-center overflow-hidden bg-[#19001C] text-white">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden flex items-center">
        <div className="flex flex-col gap-3 w-full">
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              ref={(el) => {
                rowRefs.current[rowIndex] = el
              }}
              className="flex gap-3 whitespace-nowrap"
            >
              {/* Duplicate images for seamless loop */}
              {[
                ...portfolioImages.slice(rowIndex * 12, (rowIndex + 1) * 12),
                ...portfolioImages.slice(rowIndex * 12, (rowIndex + 1) * 12),
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-sm shrink-0"
                  style={{ width: "280px", height: `calc((100vh - 100px) / 5)` }}
                >
                  <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#1a1f3a]/40 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content – grid-anchored, responsive */}
      <div
        className="
          absolute inset-x-0 z-10 pointer-events-auto
          top-[calc(((100vh-100px)/5)*1.2)]
          h-[calc(((100vh-100px)/5)*3.2)]
          md:top-[calc(((100vh-100px)/5)*1.4)]
          md:h-[calc(((100vh-100px)/5)*3)]
          lg:top-[calc(((100vh-100px)/5)*1.5)]
          lg:h-[calc(((100vh-100px)/5)*3)]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1200px]
            px-4 sm:px-6
            h-full
            flex flex-col
            justify-between
            text-center
          "
        >
          {/* Headline */}
          <h1
            className="
              font-bold leading-tight
              text-[clamp(26px,6vw,36px)]
              sm:text-[clamp(28px,5.5vw,44px)]
              lg:text-[clamp(32px,5vw,72px)]
            "
          >
            WHERE IMAGINATION BECOMES <br />
            <span
              className="
                font-extrabold text-white
                text-[clamp(40px,9vw,64px)]
                sm:text-[clamp(48px,8vw,88px)]
                lg:text-[clamp(48px,8vw,144px)]
              "
            >
              INNOVATION
            </span>
          </h1>

          {/* Body */}
          <p
            className="
              mx-auto max-w-4xl leading-relaxed text-gray-200
              text-[13px]
              sm:text-[14px]
              md:text-[15px]
              lg:text-[clamp(14px,1.4vw,18px)]
            "
          >
            We build next-generation digital experiences powered by cutting-edge technology —
            from immersive worlds and interactive content to AI-driven solutions and AR/VR innovation.
            Our work is crafted to elevate brands, enhance engagement, and deliver seamless experiences
            across every platform.
          </p>

          {/* CTA – never crosses row 5 */}
          <div className="flex justify-center pb-[clamp(4px,2vh,12px)]">
            <button
              className="
                px-6 py-3 sm:px-8 sm:py-4
                text-sm sm:text-base
                font-medium
                bg-white/10 backdrop-blur-md
                border border-white/20
                rounded-full
                hover:bg-white/20
                transition-all
                text-white
              "
            >
              Let&apos;s Build Something Epic
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}
