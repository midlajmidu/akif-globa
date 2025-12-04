import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Briefcase, Users, GraduationCap } from 'lucide-react';

const openings = [
  { title: 'Mathematics Teacher', dept: 'Senior Secondary', type: 'Full-time' },
  { title: 'Physics Teacher', dept: 'Secondary', type: 'Full-time' },
  { title: 'Administrative Assistant', dept: 'Administration', type: 'Full-time' },
];

const Career = () => {
  return (
    <Layout>
      <PageHeader title="Career" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Career' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Join Our Team</h2>
            <p className="text-body mb-8">
              We're looking for passionate educators and professionals to join the Alif School family.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-80">Open Positions</p>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">200+</p>
                <p className="text-sm opacity-80">Faculty Members</p>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm opacity-80">Years of Excellence</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Current Openings</h3>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft flex justify-between items-center card-hover">
                  <div>
                    <h4 className="font-semibold text-foreground">{job.title}</h4>
                    <p className="text-sm text-muted-foreground">{job.dept} • {job.type}</p>
                  </div>
                  <button className="btn-accent text-sm">Apply</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;