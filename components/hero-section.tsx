import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1a1f3a] text-white pt-20">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26, 31, 58, 0.8), rgba(26, 31, 58, 0.8)), url(/placeholder.svg?height=1080&width=1920&query=gaming+tech+portfolio+grid)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          WHERE IMAGINATION BECOMES{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">INNOVATION</span>
        </h1>

        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed text-gray-300">
          We build next-generation digital experiences powered by cutting-edge technology — from immersive worlds and
          interactive content to AI-driven solutions and AR/VR innovation. Our work is crafted to elevate brands,
          enhance engagement, and deliver seamless experiences across every platform.
        </p>

        <Button size="lg" className="bg-[#3b5bff] hover:bg-[#2a4bef] text-white px-8 py-6 text-lg">
          Let&apos;s Build Something Epic
        </Button>
      </div>
    </section>
  )
}
