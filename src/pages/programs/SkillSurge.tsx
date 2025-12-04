import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Wrench } from 'lucide-react';

const SkillSurge = () => {
  return (
    <Layout>
      <PageHeader title="Skill Surge" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'Skill Surge' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">Skill Surge</h2>
            <p className="text-body mb-8">
              Hands-on skill development program covering coding, robotics, entrepreneurship, and practical life skills.
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

export default SkillSurge;