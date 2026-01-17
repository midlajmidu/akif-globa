import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Mic } from 'lucide-react';
import SEO from '@/components/SEO';

const AGSTalks = () => {
  const allImages = Object.values(
    import.meta.glob('@/assets/programs/AGS TALKS/*.{png,jpg,jpeg,svg,webp}', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  ) as string[];

  // Prioritize WhatsApp images (usually newer) and sort newest first
  const images = [...allImages].sort((a, b) => {
    const aIsNew = a.includes('WhatsApp');
    const bIsNew = b.includes('WhatsApp');
    if (aIsNew && !bIsNew) return -1;
    if (!aIsNew && bIsNew) return 1;
    return b.localeCompare(a);
  });

  const videos = [
    "UoM2BxzXtI8",
    "uHjO204JXIs",
    "rln0Joex21U"
  ];

  return (
    <>
      <SEO
        title="AGS Talks"
        description="AGS Talks is a platform for students at Alif Global School to share ideas and insights. It encourages public speaking, critical thinking, and diverse perspectives."
        canonical="/ags-talks/"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/ags-talks/' },
          { name: 'AGS Talks', path: '/ags-talks/' }
        ]}
      />
      <ProgramPageTemplate
        title="AGS Talks"
        description="A platform for students to share their ideas, insights, and inspirations through engaging presentations and discussions. AGS Talks encourages public speaking, critical thinking, and the sharing of diverse perspectives within our school community."
        images={images}
        videos={videos}
        icon={<Mic className="w-16 h-16 text-accent" />}
      />
    </>
  );
};

export default AGSTalks;