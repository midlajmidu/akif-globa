import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import VisionMissionSection from '@/components/home/VisionMissionSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import GallerySection from '@/components/home/GallerySection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <VisionMissionSection />
      <TestimonialsSection />
      <ProgramsSection />
      <WhyChooseSection />
      <GallerySection />
    </Layout>
  );
};

export default Index;
