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
                  Greetings from Alif Global School…!
                  Learning is not a process limited to schools and colleges only, but boundless for all aspirants. It’s indeed a lifelong process which makes man a perpetual learner. Our curriculum and practices are consistently reviewed to ensure that we are following the most updated best practices, meeting all regulations, and addressing the future needs of our students. The students are encouraged to take part in all the internal and external events and are given enough guidance and practice before being exposed to the competitions. Alif Global School strives to create a unique atmosphere for learning in a happy, caring , secure, value-based stimulating environment, with a creative and effective integration of technology across the whole curriculum, to prepare citizens of tomorrow, who are intellectually sharp, physically sound, socially responsible, and morally and ethically upright.
                  We look forward to a long association with you. Let’s join hands in promoting the young minds so that they may prepare themselves to build up a future in flying colours.

                </p>
                <p className="text-body mb-4">
                  [Placeholder for detailed principal's message...]
                </p>
                <p className="font-semibold text-foreground">Shanavas KT, Principal
                </p>
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