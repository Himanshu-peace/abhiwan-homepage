import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 bg-[#1a1f3a] text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">READY TO CREATE THE NEXT DIMENSION?</h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              We get it. Your ideas are priceless. That&apos;s why we ensure every interaction is safe and secure. For
              your trust and peace of mind, you can count on us.
            </p>

            <Button className="bg-[#3b5bff] hover:bg-[#2a4bef] text-white px-8">Request a Quote</Button>
          </div>

          <div className="flex justify-center">
            <img src="/placeholder.svg?height=500&width=500" alt="VR Character" className="w-96 h-96 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
