export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Hassan Naseri",
      title: "Sr. Manager at CT Games",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Abhiwan took us from invisible to ranking on Google's first page. Their SEO plan was smart, simple, and effective — we saw real traffic and real customers.",
    },
    {
      name: "Sarah John",
      title: "Co-Founder & CTO at VM Infotech",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Our social media finally feels alive! Engagements, followers, and leads all grew fast. Abhiwan understood our brand voice perfectly.",
    },
    {
      name: "Rishabh Gupta",
      title: "Sr. Manager at VX Games",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Abhiwan turned our outdated site into a stunning, high-performing experience. It looks amazing and converts better than ever.",
    },
  ]

  return (
    <section className="py-20 bg-[#1a1f3a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          WHAT OUR{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>
            CLIENTS SAY?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#242945] p-6 rounded-lg hover:bg-[#2a3050] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
