import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Trust = () => {
  return (
    <Layout>
      <PageHeader title="Alif Edu Trust" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Alif Edu Trust' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">About Alif Edu Trust</h2>
            <p className="text-body mb-6">
              Alif Edu Trust is committed to providing quality education and empowering communities through educational initiatives.
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

export default Trust;