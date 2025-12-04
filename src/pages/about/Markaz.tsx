import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Markaz = () => {
  return (
    <Layout>
      <PageHeader title="Markaz Knowledge City" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Markaz Knowledge City' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">About Markaz Knowledge City</h2>
            <p className="text-body mb-6">
              Markaz Knowledge City is a premier educational hub that houses world-class institutions dedicated to fostering academic excellence and holistic development.
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

export default Markaz;