import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Principal = () => {
  return (
    <Layout>
      <PageHeader title="Principal's Message" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: "Principal's Message" }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="bg-secondary aspect-[3/4] rounded-xl flex items-center justify-center">
                <span className="text-muted-foreground">Principal Photo</span>
              </div>
              <div className="md:col-span-2">
                <h2 className="heading-secondary mb-4">Message from the Principal</h2>
                <p className="text-body mb-4">
                  Dear Parents and Students,
                </p>
                <p className="text-body mb-4">
                  Welcome to Alif School. Our mission is to nurture young minds and prepare them for the challenges of tomorrow while instilling values that will last a lifetime.
                </p>
                <p className="text-body mb-4">
                  [Placeholder for detailed principal's message...]
                </p>
                <p className="font-semibold text-foreground">Principal Name</p>
                <p className="text-sm text-muted-foreground">Principal, Alif School</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Principal;