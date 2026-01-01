import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Calendar } from 'lucide-react';

export const events = [
  { date: '15', month: 'JAN', title: 'Annual Day', desc: 'Annual day celebrations with cultural performances' },
  { date: '20', month: 'FEB', title: 'Sports Day', desc: 'Inter-house sports competition' },
  { date: '10', month: 'MAR', title: 'Science Fair', desc: 'Student science project exhibition' },
  { date: '05', month: 'APR', title: 'Parent Meet', desc: 'Parent-teacher meeting' },
];

const Events = () => {
  return (
    <Layout>
      <PageHeader title="Events" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Events' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-12 text-center">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-soft flex gap-6 items-center border border-border hover:border-accent/30 transition-all group">
                  <div className="bg-primary text-white w-20 h-20 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <span className="text-2xl font-bold leading-none">{event.date}</span>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">{event.month}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
                    <p className="text-body text-sm">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;