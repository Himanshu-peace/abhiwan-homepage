import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/office-interior-modern.jpg" alt="Office Interior" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 bg-[#3b5bff] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
              <span className="text-4xl font-bold">7+</span>
              <span className="text-xs text-center">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">CREATING DIGITAL</span>
              <br />
              <span className="text-black">EXPERIENCES THAT FEEL</span>
              <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600"
                style={{ WebkitTextStroke: "1px black" }}
              >
                ALIVE
              </span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Abhiwan Technology, we bring ideas to life through cutting-edge design, technology, and creativity.
              From immersive 3D worlds to intelligent AI systems, interactive environments, mobile apps, and
              enterprise-grade solutions — our team delivers products that are built to scale and designed to impress.
              With presence across India, UK, USA, Canada and UAE, we combine global standards with innovative thinking
              to help businesses create the future.
            </p>

            <Button variant="link" className="text-[#3b5bff] p-0 text-lg font-semibold">
              Know More About Us →
            </Button>
          </div>

          <div className="md:hidden flex justify-center">
            <img src="/3d-character-mascot-tree.jpg" alt="3D Character" className="w-64 h-64 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
