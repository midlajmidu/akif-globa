import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Mic } from 'lucide-react';

const AGSTalks = () => {
  const images = Object.values(
    import.meta.glob('@/assets/programs/AGS TALKS/*.{png,jpg,jpeg,svg,webp}', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  ) as string[];

  const videos = [
    "UoM2BxzXtI8",
    "uHjO204JXIs",
    "rln0Joex21U"
  ];

  return (
    <ProgramPageTemplate
      title="AGS Talks"
      description="A platform for students to share their ideas, insights, and inspirations through engaging presentations and discussions. AGS Talks encourages public speaking, critical thinking, and the sharing of diverse perspectives within our school community."
      images={images}
      videos={videos}
      icon={<Mic className="w-16 h-16 text-accent" />}
    />
  );
};

export default AGSTalks;