import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Residence = () => {
  return (
    <Layout>
      <PageHeader title="Alif Residence" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Alif Residence' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Alif Residence</h2>
            <p className="text-body mb-6">
              Alif Residence provides comfortable and secure accommodation for students, fostering a supportive community environment.
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

export default Residence;