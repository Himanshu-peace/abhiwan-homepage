import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE – IMAGE STACK */}
          <div className="relative">

            {/* Top-left floating image */}
            <img
              src="/about-us-man.png"
              alt="Team at work"
              className="absolute -top-10 -left-10 w-48 rounded-2xl shadow-xl z-10"
            />

            {/* Main image */}
            {/* <img
              src="/office-interior-modern.jpg"
              alt="Office Interior"
              className="rounded-2xl shadow-2xl w-full"
            /> */}

            {/* Experience badge */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#3b5bff] text-white rounded-2xl flex flex-col items-center justify-center shadow-xl">
              <span className="text-4xl font-bold">7+</span>
              <span className="text-xs text-center leading-tight">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          {/* RIGHT SIDE – CONTENT */}
          <div className="relative">

            {/* Circular stamp */}
            <img
              src="/about-us-abhiwan-tech.svg"
              alt="Abhiwan Technology Stamp"
              className="absolute -top-14 right-0 w-24 opacity-90"
            />

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              CREATING DIGITAL
              <br />
              EXPERIENCES THAT FEEL
              <br />
              <span className="relative inline-block">
                ALIVE
                <span className="absolute inset-0 text-transparent stroke-black">
                  ALIVE
                </span>
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
              At Abhiwan Technology, we bring ideas to life through cutting-edge
              design, technology, and creativity. From immersive 3D worlds to
              intelligent AI systems, interactive environments, mobile apps,
              and enterprise-grade solutions — our team delivers products that
              are built to scale and designed to impress. With presence across
              India, UK, USA, Canada and UAE, we combine global standards with
              innovative thinking to help businesses create the future.
            </p>

            <Button
              variant="link"
              className="p-0 text-[#3b5bff] text-lg font-semibold"
            >
              Know More About Us 
              <span aria-hidden="true"> &#8599;</span>
            </Button>
          </div>
        </div>

        {/* BOTTOM-RIGHT MASCOT */}
        <img
          src="/about-us-oldStatue.png"
          alt="3D Mascot"
          className="hidden md:block absolute -bottom-24 right-0 w-[320px]"
        />
      </div>
    </section>
  )
}
