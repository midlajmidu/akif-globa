import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Calendar } from 'lucide-react';

const events = [
  { date: 'Jan 15', title: 'Annual Day', desc: 'Annual day celebrations with cultural performances' },
  { date: 'Feb 20', title: 'Sports Day', desc: 'Inter-house sports competition' },
  { date: 'Mar 10', title: 'Science Fair', desc: 'Student science project exhibition' },
  { date: 'Apr 5', title: 'Parent Meet', desc: 'Parent-teacher meeting' },
];

const Events = () => {
  return (
    <Layout>
      <PageHeader title="Events" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Events' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft flex gap-4 items-start card-hover">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center min-w-[80px]">
                    <Calendar className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.desc}</p>
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