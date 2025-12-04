import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Zeeque = () => {
  return (
    <Layout>
      <PageHeader title="Alif Zeeque Intl" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Alif Zeeque Intl' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Alif Zeeque International</h2>
            <p className="text-body mb-6">
              Alif Zeeque International brings innovative educational methodologies and global perspectives to our curriculum.
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

export default Zeeque;