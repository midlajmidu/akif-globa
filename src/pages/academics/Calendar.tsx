import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Calendar = () => {
  return (
    <Layout>
      <PageHeader title="Academic Calendar" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Academic Calendar' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="heading-primary mb-4">Academic Calendar 2024-25</h2>
              <p className="text-body">View our complete academic schedule, holidays, and important events for the current academic year.</p>
            </div>

            <div className="bg-white p-2 md:p-4 rounded-2xl shadow-strong border border-border/50 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1fhZqaAMBgdmk2CqB8jrtVkm63V3jddDl/preview"
                className="w-full h-[800px] md:h-[1200px] border-0 rounded-xl"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://drive.google.com/file/d/1fhZqaAMBgdmk2CqB8jrtVkm63V3jddDl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calendar;