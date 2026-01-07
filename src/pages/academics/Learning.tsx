import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { BookOpen, Video, FileText, Laptop } from 'lucide-react';
import SEO from '@/components/SEO';

const resources = [
  { icon: BookOpen, title: 'E-Books', desc: 'Digital library access' },
  { icon: Video, title: 'Video Lessons', desc: 'Recorded lectures' },
  { icon: FileText, title: 'Study Materials', desc: 'Notes and worksheets' },
  { icon: Laptop, title: 'Online Portal', desc: 'LMS access' },
];

const Learning = () => {
  return (
    <Layout>
      <SEO
        title="Learning Zone"
        description="Access digital learning resources at Alif Global School. Explore e-books, video lessons, study materials, and our online student portal."
        canonical="/academics/learning-zone"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academics', path: '/academics' },
          { name: 'Learning Zone', path: '/academics/learning-zone' }
        ]}
      />
      <PageHeader title="Learning Zone" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Learning Zone' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Student Learning Zone</h2>
            <p className="text-body mb-8">
              Access all your learning resources in one place. Login to explore e-books, video lessons, and more.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {resources.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft card-hover text-center cursor-pointer">
                  <item.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Learning;