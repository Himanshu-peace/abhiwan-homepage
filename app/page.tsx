import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { CertificationsSection } from "@/components/certifications-section"
import { VisionSection } from "@/components/vision-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { BrandsSection } from "@/components/brands-section"
import { MetricsSection } from "@/components/metrics-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CertificationsSection />
      <VisionSection />
      <PortfolioSection />
      <BrandsSection />
      <MetricsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
      {/* <Footer /> */}
    </main>
  )
}
