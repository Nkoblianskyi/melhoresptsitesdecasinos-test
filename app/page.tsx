import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { AboutUsSection } from "@/components/about-us-section"
import { SafeGamingSection } from "@/components/safe-gaming-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <div className="space-y-2.5">
      <Header />
      <Hero />
      <RatingSection />
      <AboutUsSection />
      <SafeGamingSection />
      <FAQSection />
    </div>
  )
}
