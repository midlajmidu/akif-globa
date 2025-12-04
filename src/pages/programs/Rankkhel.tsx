import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Trophy } from 'lucide-react';

const Rankkhel = () => {
  return (
    <Layout>
      <PageHeader title="Rankkhel" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'Rankkhel' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">Rankkhel</h2>
            <p className="text-body mb-8">
              Competitive academic program that encourages excellence through quizzes, debates, and academic challenges.
            </p>
            <div className="bg-secondary p-8 rounded-xl">
              <p className="text-muted-foreground">Content coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rankkhel;