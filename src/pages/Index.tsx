import React, { Suspense, useEffect, useState, useRef } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import SEO from '@/components/SEO';
import { useIsMobile } from '@/hooks/use-mobile';

// Lazy load components for mobile optimization
const AboutSection = React.lazy(() => import('@/components/home/AboutSection'));
const LogoSlider = React.lazy(() => import('@/components/home/LogoSlider'));
const FeaturesSection = React.lazy(() => import('@/components/home/FeaturesSection'));
const VisionMissionSection = React.lazy(() => import('@/components/home/VisionMissionSection'));
const NewsEventsSection = React.lazy(() => import('@/components/home/NewsEventsSection'));
const TestimonialsSection = React.lazy(() => import('@/components/home/TestimonialsSection'));
const ProgramsSection = React.lazy(() => import('@/components/home/ProgramsSection'));
const GallerySection = React.lazy(() => import('@/components/home/GallerySection'));

// Intersection Observer wrapper for lazy rendering components
const LazySection = ({ children, minHeight = "400px" }: { children: React.ReactNode, minHeight?: string }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load slightly before it enters viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: shouldRender ? 'auto' : minHeight }}>
      {shouldRender ? (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <Layout>
      <SEO
        title="Home"
        description="Alif Global School is a premier residential school in Kerala offering world-class education with a focus on holistic development, moral values, and academic excellence. CBSE affiliated."
        canonical="/"
        breadcrumbs={[
          { name: 'Home', path: '/' }
        ]}
      />
      <HeroSection />

      {/* 
        On mobile, we lazy-render below-the-fold sections to:
        1. Reduce initial DOM size
        2. Defer JS execution (Main thread cleanup)
        3. Improve LCP by prioritizing the Hero
      */}
      {isMobile ? (
        <>
          <LazySection minHeight="400px"><AboutSection /></LazySection>
          <LazySection minHeight="150px"><LogoSlider /></LazySection>
          <LazySection minHeight="600px"><FeaturesSection /></LazySection>
          <LazySection minHeight="500px"><VisionMissionSection /></LazySection>
          <LazySection minHeight="600px"><NewsEventsSection /></LazySection>
          <LazySection minHeight="500px"><TestimonialsSection /></LazySection>
          <LazySection minHeight="600px"><ProgramsSection /></LazySection>
          <LazySection minHeight="500px"><GallerySection /></LazySection>
        </>
      ) : (
        <Suspense fallback={<div className="min-h-screen" />}>
          <AboutSection />
          <LogoSlider />
          <FeaturesSection />
          <VisionMissionSection />
          <NewsEventsSection />
          <TestimonialsSection />
          <ProgramsSection />
          <GallerySection />
        </Suspense>
      )}
    </Layout>
  );
};

export default Index;

