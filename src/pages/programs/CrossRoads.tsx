import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Compass } from 'lucide-react';

const CrossRoads = () => {
  const imageModules = import.meta.glob('@/assets/programs/crossroad/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);


  return (
    <ProgramPageTemplate
      title="Cross Roads"
      description="Guiding students through critical career and academic decisions with expert advice and resources. Cross Roads provides mentorship, workshops, and information to help students navigate their future paths with confidence."
      images={images}
      icon={<Compass className="w-16 h-16 text-accent" />}
    />
  );
};

export default CrossRoads;