import { Button } from "@/components/ui/button"

export function VisionSection() {
  return (
    <section className="pt-10 bg-[#1a1f3a] relative overflow-hidden">

      <div className="container mx-auto max-w-none px-4 pt-15 relative z-10 bg-white rounded-tr-[200px]">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* right text cell */}
          <div className="z-20 md:ml-6 md:mb-30">
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
              We believe success is a shared journey. 
              <br/>
              When we empower our clients, partners, and teams to succeed,
              success follows naturally.
            </p>
            <Button className="bg-radial from-[#525AFF] from-10% to-[#0900FF] to-90% text-white rounded-2xl px-8">Let&apos;s Talk
              <img
                src="/vision-talk.svg"
                alt="toggle"
                width={19}
                height={19}
                className="inline-block transition-transform duration-300 ease-in-out group-hover:-rotate-180"
              />
            </Button>
          </div>
          {/* left boy image cell */}
          <div className="flex justify-center md:mr-15 md:mb-25 lg:mr-20 lg:mb-30">
            {/* 3D rotating circle */}
            <img
              src="/vision-rotate-ball.png"
              alt="3D rotating circle"
              className="
                absolute
                sm:w-100 sm:h-100
                md:w-110 md:h-110
                lg:w-120 lg:h-120
                object-contain
                animate-[rotate-drift_8s_linear_infinite]
                origin-center
              "
            />
            <img src="/vision-boy.png" alt="3D Character" className="sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 object-contain z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}