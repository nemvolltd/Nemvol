import { Suspense, lazy } from 'react'
import '../../theme.css'
import SEO from '../../components/SEO'
import { seoData } from '../../utils/seoData'
import PageTransition from '../../components/ui/PageTransition'
import HeroSection from '../../components/home/HeroSection'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

// Lazy Load Section Components
const AnimatedShowcase = lazy(() => import('../../components/home/AnimatedShowcase'))
const Ecosystem = lazy(() => import('../../components/home/Ecosystem'))
const BuiltForEveryBusiness = lazy(() => import('../../components/home/BuiltForEveryBusiness'))
const WhyNemvol = lazy(() => import('../../components/home/WhyNemvol'))
const Showdown = lazy(() => import('../../components/home/Showdown'))
const FooterCTA = lazy(() => import('../../components/home/FooterCTA'))
const TargetAudience = lazy(() => import('../../components/home/TargetAudience'))
const StrategicEngagement = lazy(() => import('../../components/home/StrategicEngagement'))
const BusinessToday = lazy(() => import('../../components/home/BusinessToday'))
const TrustSection = lazy(() => import('../../components/home/TrustSection'))

const Home = () => {
  return (
    <PageTransition>
      <SEO {...seoData.home} />

      {/* Hero Section - Loaded Immediately for FCP/LCP */}
      <HeroSection />

      {/* The current fragmented landscape */}
      <Suspense fallback={<SectionSkeleton />}>
        <BusinessToday />
      </Suspense>

      {/* Social Proof & Ecosystem Connections */}
      <Suspense fallback={<SectionSkeleton />}>
        <TrustSection />
      </Suspense>

      {/* Animated Feature Showcase */}
      <Suspense fallback={<SectionSkeleton />}>
        <AnimatedShowcase />
      </Suspense>

      {/* The Product Ecosystem */}
      <Suspense fallback={<SectionSkeleton />}>
        <Ecosystem />
      </Suspense>

      {/* Scalability / Adaptability */}
      <Suspense fallback={<SectionSkeleton />}>
        <BuiltForEveryBusiness />
      </Suspense>

      {/* Below the Fold Content - Lazy Loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <WhyNemvol />
      </Suspense>

      {/* The Showdown Comparison */}
      <Suspense fallback={<SectionSkeleton />}>
        <Showdown />
      </Suspense>

      {/* Final Call to Action */}
      <Suspense fallback={<SectionSkeleton />}>
        <FooterCTA />
      </Suspense>
    </PageTransition>
  )
}

export default Home