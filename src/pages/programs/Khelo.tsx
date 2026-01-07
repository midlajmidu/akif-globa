import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Dribbble } from 'lucide-react';

const Khelo = () => {
  const imageModules = import.meta.glob('@/assets/programs/khelo/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);


  return (
    <ProgramPageTemplate
      title="Khelo"
      description="An inclusive sports program designed to encourage participation and physical activity among all students. Khelo promotes a healthy lifestyle, teamwork, and the joy of playing sports in a supportive environment."
      images={images}
      icon={<Dribbble className="w-16 h-16 text-accent" />}
    />
  );
};

export default Khelo;