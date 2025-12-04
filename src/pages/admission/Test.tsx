import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Calendar, Clock, FileText } from 'lucide-react';

const Test = () => {
  return (
    <Layout>
      <PageHeader title="Admission Test" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Admission Test' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Admission Test Information</h2>
            <p className="text-body mb-8">
              Our admission test evaluates students' aptitude and readiness for academic excellence at Alif School.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-xl shadow-soft text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Test Dates</h3>
                <p className="text-sm text-muted-foreground">To be announced</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-sm text-muted-foreground">2-3 Hours</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft text-center">
                <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Subjects</h3>
                <p className="text-sm text-muted-foreground">English, Math, GK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Test;