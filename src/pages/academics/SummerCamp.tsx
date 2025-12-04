import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Sun, Palette, Music, Dumbbell } from 'lucide-react';

const activities = [
  { icon: Palette, title: 'Arts & Crafts', desc: 'Creative expression through art' },
  { icon: Music, title: 'Music & Dance', desc: 'Rhythm and movement activities' },
  { icon: Dumbbell, title: 'Sports', desc: 'Swimming, cricket, football & more' },
  { icon: Sun, title: 'Outdoor Adventures', desc: 'Nature walks and exploration' },
];

const SummerCamp = () => {
  return (
    <Layout>
      <PageHeader title="Summer Camp" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Summer Camp' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Summer Camp 2025</h2>
              <p className="text-body">
                An exciting summer filled with fun activities, learning experiences, and new friendships!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {activities.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft text-center card-hover">
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">Registrations Opening Soon!</h3>
              <p className="opacity-80 mb-4">Stay tuned for dates and registration details</p>
              <button className="btn-accent">Notify Me</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SummerCamp;