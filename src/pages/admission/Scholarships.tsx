import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Award, BookOpen, Trophy } from 'lucide-react';

const scholarships = [
  { icon: Award, title: 'Merit Scholarship', desc: 'For academically outstanding students with excellent performance.' },
  { icon: Trophy, title: 'Sports Scholarship', desc: 'For students excelling in sports and athletics at state/national level.' },
  { icon: BookOpen, title: 'Need-Based Aid', desc: 'Financial assistance for deserving students from economically weaker sections.' },
];

const Scholarships = () => {
  return (
    <Layout>
      <PageHeader title="Scholarships" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Scholarships' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Scholarship Programs</h2>
            <p className="text-body mb-8">
              Alif School offers various scholarship programs to support talented and deserving students.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {scholarships.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft card-hover text-center">
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarships;