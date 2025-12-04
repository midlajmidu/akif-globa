import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Riyadh = () => {
  return (
    <Layout>
      <PageHeader title="Alif International School, Riyadh" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Alif International School, Riyadh' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Alif International School, Riyadh</h2>
            <p className="text-body mb-6">
              Our Riyadh campus extends the Alif legacy of educational excellence to the Kingdom of Saudi Arabia.
            </p>
            <div className="bg-secondary p-8 rounded-xl">
              <p className="text-muted-foreground text-center">Content coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Riyadh;