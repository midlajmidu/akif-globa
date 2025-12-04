import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Mic } from 'lucide-react';

const AGSTalks = () => {
  return (
    <Layout>
      <PageHeader title="AGS Talks" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'AGS Talks' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Mic className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">AGS Talks</h2>
            <p className="text-body mb-8">
              A platform for students to share their ideas, insights, and inspirations through engaging presentations and discussions.
            </p>
            <div className="bg-secondary p-8 rounded-xl">
              <p className="text-muted-foreground">Content coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AGSTalks;