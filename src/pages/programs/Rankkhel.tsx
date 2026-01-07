import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Trophy } from 'lucide-react';
import SEO from '@/components/SEO';

const Rankkhel = () => {
  const imageModules = import.meta.glob('@/assets/programs/RANKHEL/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);

  return (
    <>
      <SEO
        title="Rankkhel Sports Program"
        description="Rankkhel is a competitive sports platform at Alif Global School that fosters teamwork, discipline, and physical excellence through various games and competitions."
        canonical="/programs/rankkhel"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: 'Rankkhel', path: '/programs/rankkhel' }
        ]}
      />
      <ProgramPageTemplate
        title="Rankkhel"
        description="A competitive sports and games platform that fosters teamwork, discipline, and physical excellence. Rankkhel provides students with the opportunity to showcase their athletic abilities and compete at various levels."
        images={images}
        icon={<Trophy className="w-16 h-16 text-accent" />}
      />
    </>
  );
};

export default Rankkhel;