import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Dribbble } from 'lucide-react';
import SEO from '@/components/SEO';

const Khelo = () => {
  const imageModules = import.meta.glob('@/assets/programs/khelo/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);

  return (
    <>
      <SEO
        title="Khelo Sports Program"
        description="Khelo is an inclusive sports program at Alif Global School designed to encourage physical activity, teamwork, and a healthy lifestyle among all students."
        canonical="/programs/khelo"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: 'Khelo', path: '/programs/khelo' }
        ]}
      />
      <ProgramPageTemplate
        title="Khelo"
        description="An inclusive sports program designed to encourage participation and physical activity among all students. Khelo promotes a healthy lifestyle, teamwork, and the joy of playing sports in a supportive environment."
        images={images}
        icon={<Dribbble className="w-16 h-16 text-accent" />}
      />
    </>
  );
};

export default Khelo;