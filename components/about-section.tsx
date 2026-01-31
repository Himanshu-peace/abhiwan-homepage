import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className=" relative bg-white overflow-visible ">
      {/* Inverted curve – About to Hero */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-30 -translate-y-full">
        <svg
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          className="w-full h-[300px]"
        >
          <path
            d="
              M0 260
              C480 200 960 200 1440 260
              L1440 301
              L0 301
              Z
            "
            fill="#ffffff"
          />
        </svg>
      </div>

      {/*Main content wrapper  */}
      <div   
        className="
          mx-auto
          w-full max-w-[1440px]
          flex flex-col lg:flex-row
          items-start
          gap-8 sm:gap-10 lg:gap-[20px]
          px-6 lg:px-0
        "
      >
        {/* LEFT COLUMN */}
        <div
          className="
            w-full lg:m-10
            md:flex md:justify-center
            lg:block lg:w-[307.2px]
            pt-8 sm:pt-10 md:pt-12 lg:pt-[41px]
          "
        >
          <div
            className="
              relative
              h-[300px] sm:h-[320px] md:h-[360px] lg:h-[400px]
              w-[240px] sm:w-[260px] md:w-[300px] lg:w-full
            "
          >
            <img
              src="/about-us-man.png"
              alt="Man working"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

            {/* Experience badge */}
            <div
              className="
                absolute
                w-[180px] h-[160px]
                sm:w-[200px] sm:h-[180px]
                lg:w-[270px] lg:h-[240px]
                bg-[#2C72FF] text-white
                rounded-3xl
                flex flex-col items-center justify-center
                shadow-xl
                -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-[170px]
                -left-4 sm:-left-6 lg:-left-[35px]
              "
            >
              <span className="text-5xl sm:text-6xl lg:text-8xl font-bold">
                7+
              </span>
              <span className="text-base sm:text-lg lg:text-2xl text-center leading-tight">
                Years of Experience
              </span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN */}
        <div
          className="
            w-full
            max-w-[680px] md:max-w-[720px]
            lg:w-[652px]
            pt-14 sm:pt-16 md:pt-20 lg:pt-[86px]
            text-center lg:text-left
            mx-auto lg:mx-0
          "
        >
          <h2
            className="
              text-[32px] sm:text-[36px]
              md:text-[42px]
              xl:text-[50px]
              font-extrabold
              leading-tight
              mb-6
            "
          >
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

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
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
            className="
              p-0 text-[#1A1A1A]
              text-lg font-semibold
              flex items-center gap-2
              justify-center lg:justify-start
            "
          >
            Know More About Us
            <img
              src="/about-us-toparrow.svg"
              alt="Arrow Right"
              className="w-4 h-4"
            />
          </Button>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="
            relative
            w-full
            h-[380px] sm:h-[420px]
            lg:w-[374px] lg:h-[659px] 
            flex justify-center
            lg:block
            lg:mt-35 lg:right-17 sm:mt-12 lg:mt-10
          "
        >
          {/* Statue wrapper */}
          <div className="relative">
            {/* Abhiwan stamp */}
            <img
              src="/about-us-abhiwan-tech.png"
              alt="Abhiwan Technology"
              className="
                absolute
                -top-4 sm:-top-6 lg:-top-20 lg:left-15
                -left-4 sm:-left-6 lg:-left-10
                w-[80px] sm:w-[90px] md:w-[90px] lg:w-[90px]
                h-auto
                z-10
                origin-center
                animate-[spin_20s_linear_infinite]
              "
            />

            {/* Old statue */}
            <img
              src="/about-us-oldStatue.png"
              alt="3D mascot"
              className="
                w-[260px] sm:w-[280px] md:w-[300px] lg:w-[374px]
                h-auto
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
