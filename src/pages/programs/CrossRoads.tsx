import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Compass } from 'lucide-react';

const CrossRoads = () => {
  return (
    <Layout>
      <PageHeader title="Cross Roads" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'Cross Roads' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Compass className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">Cross Roads</h2>
            <p className="text-body mb-8">
              Career guidance and counseling program helping students navigate their educational and professional paths.
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

export default CrossRoads;