import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Zap } from 'lucide-react';
import SEO from '@/components/SEO';

const SkillSurge = () => {
  const imageModules = import.meta.glob('@/assets/programs/skill surge/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  
  // Sort images: Untitled-1-* first, then others
  const images = Object.entries(imageModules)
    .sort(([pathA], [pathB]) => {
      const isAUntitled = pathA.includes('Untitled-1-');
      const isBUntitled = pathB.includes('Untitled-1-');
      
      if (isAUntitled && !isBUntitled) return -1;
      if (!isAUntitled && isBUntitled) return 1;
      
      // Secondary sort by filename
      return pathA.toLowerCase().localeCompare(pathB.toLowerCase());
    })
    .map(([_, mod]: [string, any]) => mod.default);

  return (
    <>
      <SEO
        title="Skill Surge Program"
        description="Skill Surge at Alif Global School empowers students with practical skills and workshops, focusing on hands-on learning, innovation, and life skills."
        canonical="/programs/skill-surge"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: 'Skill Surge', path: '/programs/skill-surge' }
        ]}
      />
      <ProgramPageTemplate
        title="Skill Surge"
        description="Empowering students with practical skills and workshops that prepare them for future challenges and opportunities. Skill Surge focuses on hands-on learning, innovation, and the development of essential life skills."
        images={images}
        icon={<Zap className="w-16 h-16 text-accent" />}
      />
    </>
  );
};

export default SkillSurge;