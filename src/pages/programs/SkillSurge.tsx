import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Zap } from 'lucide-react';

const SkillSurge = () => {
  const imageModules = import.meta.glob('@/assets/programs/skill surge/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);


  return (
    <ProgramPageTemplate
      title="Skill Surge"
      description="Empowering students with practical skills and workshops that prepare them for future challenges and opportunities. Skill Surge focuses on hands-on learning, innovation, and the development of essential life skills."
      images={images}
      icon={<Zap className="w-16 h-16 text-accent" />}
    />
  );
};

export default SkillSurge;