import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Bike } from 'lucide-react';

const Khelo = () => {
  return (
    <Layout>
      <PageHeader title="Khelo" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'Khelo' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Bike className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">Khelo</h2>
            <p className="text-body mb-8">
              Comprehensive sports program promoting physical fitness, teamwork, and sportsmanship across various athletic disciplines.
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

export default Khelo;