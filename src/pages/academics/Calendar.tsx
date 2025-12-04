import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar = () => {
  return (
    <Layout>
      <PageHeader title="Academic Calendar" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Academic Calendar' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Academic Calendar 2024-25</h2>
            <div className="bg-card p-8 rounded-xl shadow-soft mb-8">
              <div className="flex items-center gap-4 mb-6">
                <CalendarIcon className="w-10 h-10 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground">Download Calendar</h3>
                  <p className="text-sm text-muted-foreground">Get the complete academic calendar</p>
                </div>
              </div>
              <button className="btn-primary">Download PDF</button>
            </div>
            <div className="bg-secondary p-8 rounded-xl">
              <p className="text-muted-foreground text-center">Calendar preview placeholder...</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calendar;