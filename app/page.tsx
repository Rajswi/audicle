import HeroSection from '../components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import FeaturesSection2 from '@/components/FeatureSection2'
import DownloadSection from '@/components/DowloadSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturesSection2 />
      <DownloadSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQ />
      <Footer />
    </>
  )
}
