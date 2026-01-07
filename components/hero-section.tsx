"use client"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  const portfolioImages = [
    // Row 1 - 12 images
    "/3d-game-character-pirate-adventure.jpg",
    "/vr-gaming-headset-immersive-experience.jpg",
    "/mobile-app-colorful-interface-design.jpg",
    "/metaverse-virtual-city-digital-world.jpg",
    "/modern-architecture-3d-rendering.jpg",
    "/fantasy-game-magical-forest-environment.jpg",
    "/cartoon-mascot-3d-character-cute.jpg",
    "/blockchain-cryptocurrency-dashboard.jpg",
    "/augmented-reality-mobile-app-ar.jpg",
    "/digital-twin-factory-technology.jpg",
    "/futuristic-gaming-ui-hud-interface.jpg",
    "/nft-marketplace-digital-art-platform.jpg",
    // Row 2 - 12 images
    "/racing-game-street-scene-intense.jpg",
    "/mobile-banking-app-financial-interface.jpg",
    "/cyberpunk-city-neon-lights-futuristic.jpg",
    "/rpg-character-warrior-game-design.jpg",
    "/virtual-showroom-product-visualization.jpg",
    "/metaverse-vr-headset-virtual-reality.jpg",
    "/mobile-app-colorful-interface-design.jpg",
    "/metaverse-virtual-city-digital-world.jpg",
    "/modern-architecture-3d-rendering.jpg",
    "/fantasy-game-magical-forest-environment.jpg",
    "/cartoon-mascot-3d-character-cute.jpg",    
    "/blockchain-cryptocurrency-dashboard.jpg",    
      // Row 3 - 12 images
    "/mobile-app-colorful-interface-design.jpg",
    "/metaverse-virtual-city-digital-world.jpg",
    "/modern-architecture-3d-rendering.jpg",
    "/fantasy-game-magical-forest-environment.jpg",
    "/cartoon-mascot-3d-character-cute.jpg",
    "/blockchain-cryptocurrency-dashboard.jpg",
    "/augmented-reality-mobile-app-ar.jpg",    
    "/digital-twin-factory-technology.jpg",    
    "/futuristic-gaming-ui-hud-interface.jpg",    
    "/nft-marketplace-digital-art-platform.jpg",    
    "/3d-game-character-pirate-adventure.jpg",
    "/vr-gaming-headset-immersive-experience.jpg",
  
    //row 4
    "/augmented-reality-mobile-app-ar.jpg",
    "/digital-twin-factory-technology.jpg",
    "/futuristic-gaming-ui-hud-interface.jpg",
    "/nft-marketplace-digital-art-platform.jpg",    
    "/racing-game-street-scene-intense.jpg",    
    "/mobile-banking-app-financial-interface.jpg",    
    "/cyberpunk-city-neon-lights-futuristic.jpg",    
    "/rpg-character-warrior-game-design.jpg",    
    "/virtual-showroom-product-visualization.jpg",    
    "/metaverse-vr-headset-virtual-reality.jpg",    
    "/mobile-app-colorful-interface-design.jpg",    
    "/metaverse-virtual-city-digital-world.jpg",    
    //row 5
    "/modern-architecture-3d-rendering.jpg",    
    "/fantasy-game-magical-forest-environment.jpg",    
    "/cartoon-mascot-3d-character-cute.jpg",    
    "/blockchain-cryptocurrency-dashboard.jpg",    
    "/augmented-reality-mobile-app-ar.jpg",    
    "/digital-twin-factory-technology.jpg",    
    "/futuristic-gaming-ui-hud-interface.jpg",    
    "/nft-marketplace-digital-art-platform.jpg",    
    "/racing-game-street-scene-intense.jpg",    
    "/mobile-banking-app-financial-interface.jpg",    
    "/cyberpunk-city-neon-lights-futuristic.jpg",    
    "/rpg-character-warrior-game-design.jpg", 
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
    <section className="relative h-screen  flex items-center justify-center overflow-hidden bg-[#19001C] text-white">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden flex items-center mt-16">
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

      {/* Hero Content */}
      <div className="container mx-auto top-10 px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          WHERE IMAGINATION BECOMES <br />
          <span className="text-white md:text-9xl font-extrabold ">INNOVATION</span>
        </h1>

        <p className="text-base md:text-lg max-w-4xl mx-auto mb-10 leading-relaxed text-gray-200">
          We build next-generation digital experiences powered by cutting-edge technology — from immersive worlds and
          interactive content to AI-driven solutions and AR/VR innovation. Our work is crafted to elevate brands,
          enhance engagement, and deliver seamless experiences across every platform.
        </p>

        <button className="px-8 py-4 text-base font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-white">
          Let&apos;s Build Something Epic
        </button>
      </div>
    </section>
  )
}
