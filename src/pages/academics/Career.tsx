import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Briefcase, Users, GraduationCap } from 'lucide-react';
import { CareerForm } from '@/components/career/CareerForm';
import SEO from '@/components/SEO';

const openings = [
  { title: 'Mathematics Teacher', dept: 'Senior Secondary', type: 'Full-time' },
  { title: 'Physics Teacher', dept: 'Secondary', type: 'Full-time' },
  { title: 'Administrative Assistant', dept: 'Administration', type: 'Full-time' },
];

const Career = () => {
  return (
    <Layout>
      <SEO
        title="Careers"
        description="Join the Alif Global School team. Explore career opportunities for educators and professionals. Be part of a community that values innovation and excellence."
        canonical="/academics/career"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academics', path: '/academics' },
          { name: 'Career', path: '/academics/career' }
        ]}
      />
      <PageHeader title="Career" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Career' }]} />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-6">Join Our Team</h2>
              <p className="text-body max-w-2xl mx-auto">
                We're looking for passionate educators and professionals to join the Alif School family.
                Be part of a community that values innovation, excellence, and character.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl text-center card-hover">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">15+</p>
                <p className="text-sm font-medium text-muted-foreground">Open Positions</p>
              </div>
              <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl text-center card-hover">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">200+</p>
                <p className="text-sm font-medium text-muted-foreground">Faculty Members</p>
              </div>
              <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl text-center card-hover">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">25+</p>
                <p className="text-sm font-medium text-muted-foreground">Years of Excellence</p>
              </div>
            </div>

            <div className="mb-20">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Current Openings</h3>
                  <p className="text-muted-foreground">Explore our latest job opportunities</p>
                </div>
              </div>
              <div className="space-y-4">
                {openings.map((job, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-soft flex flex-col sm:flex-row justify-between sm:items-center gap-4 card-hover">
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{job.title}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">{job.dept}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </p>
                    </div>
                    <button className="btn-accent text-sm px-6">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>

            <div id="apply-now" className="scroll-mt-24">
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;