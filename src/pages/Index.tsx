import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import LogoSlider from '@/components/home/LogoSlider';
import FeaturesSection from '@/components/home/FeaturesSection';
import VisionMissionSection from '@/components/home/VisionMissionSection';
import NewsEventsSection from '@/components/home/NewsEventsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import GallerySection from '@/components/home/GallerySection';

import SEO from '@/components/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Alif Global School is a premier residential school in Kerala offering world-class education with a focus on holistic development, moral values, and academic excellence. CBSE affiliated."
        canonical="/"
      />
      <HeroSection />
      <AboutSection />
      <LogoSlider />
      <FeaturesSection />
      <VisionMissionSection />
      <NewsEventsSection />
      <TestimonialsSection />
      <ProgramsSection />
      <GallerySection />
    </Layout>
  );
};

export default Index;
