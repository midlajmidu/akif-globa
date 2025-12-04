import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Newspaper } from 'lucide-react';

const StreetBuzz = () => {
  return (
    <Layout>
      <PageHeader title="Street Buzz" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'Street Buzz' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Newspaper className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">Street Buzz</h2>
            <p className="text-body mb-8">
              Student journalism and reporting program that covers campus events, community stories, and student achievements.
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

export default StreetBuzz;