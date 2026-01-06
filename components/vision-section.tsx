import { Button } from "@/components/ui/button"

export function VisionSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent rounded-l-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              OUR{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
                VISION
              </span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Abhiwan, we strive to become a global leader in game development, immersive technologies, and
              interactive innovation. Through continuous creativity, excellence, and technical mastery, we aim to build
              world-class products that reach millions of users across platforms.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We believe success is a shared journey. When we empower our clients, partners, and teams to succeed,
              success follows naturally.
            </p>

            <Button className="bg-[#3b5bff] hover:bg-[#2a4bef] text-white px-8">Let&apos;s Talk</Button>
          </div>

          <div className="flex justify-center">
            <img src="/3d-character-jumping-excited.jpg" alt="3D Character" className="w-96 h-96 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
