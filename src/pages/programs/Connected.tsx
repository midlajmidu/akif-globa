import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Users } from 'lucide-react';

const Connected = () => {
  return (
    <Layout>
      <PageHeader title="Connected" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'Connected' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">Connected</h2>
            <p className="text-body mb-8">
              Building meaningful connections through community service, peer mentoring, and collaborative projects.
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

export default Connected;