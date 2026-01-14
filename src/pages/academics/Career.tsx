import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Briefcase, Users, GraduationCap, CheckCircle2 } from 'lucide-react';
import { CareerForm } from '@/components/career/CareerForm';
import SEO from '@/components/SEO';
import { useState, useEffect } from 'react';

interface JobOpening {
  title: string;
  department: string;
  employment_type: string;
  status: string;
  order: number;
}

const benefits = [
  { title: "Professional Growth", desc: "Access to workshops, training, and career advancement." },
  { title: "Modern Facilities", desc: "Work in a tech-enabled, world-class teaching environment." },
  { title: "Collaborative Culture", desc: "Be part of a supportive team of international educators." },
  { title: "Impactful Work", desc: "Directly influence the lives of students in a meaningful way." }
];

const Career = () => {
  const [selectedRole, setSelectedRole] = useState<{ position: string, specialization: string } | undefined>();
  const [jobs, setJobs] = useState<JobOpening[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzxHQRS6FRiIWwGI9tVjW4jcURuM0du1r4Rhu2-Uj1P-V4lDUf4qhzhUQSz6ZTkL73y/exec?action=careers');
        const data = await response.json();
        const publishedJobs = data
          .filter((job: JobOpening) => job.status === 'PUBLISHED')
          .sort((a: JobOpening, b: JobOpening) => b.order - a.order);
        setJobs(publishedJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (job: JobOpening) => {
    const roleMap: Record<string, string> = {
      'Teacher': 'teaching',
      'Assistant': 'administration',
      'Manager': 'management',
      'Admin': 'administration'
    };

    let position = 'other';
    const jobTitle = job.title;
    for (const [key, value] of Object.entries(roleMap)) {
      if (jobTitle.includes(key)) {
        position = value;
        break;
      }
    }

    setSelectedRole({
      position,
      specialization: jobTitle
    });

    const element = document.getElementById('apply-now');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-secondary mb-6 gold-underline">Join Our Team</h2>
            <p className="text-body max-w-2xl mx-auto">
              We're looking for passionate educators and professionals to join the Alif School family.
              Be part of a community that values innovation, excellence, and character.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
            <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl text-center card-hover overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1 relative z-10">15+</p>
              <p className="text-sm font-medium text-muted-foreground relative z-10">Open Positions</p>
            </div>
            <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl text-center card-hover overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1 relative z-10">200+</p>
              <p className="text-sm font-medium text-muted-foreground relative z-10">Faculty Members</p>
            </div>
            <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl text-center card-hover overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1 relative z-10">25+</p>
              <p className="text-sm font-medium text-muted-foreground relative z-10">Years of Excellence</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3 space-y-16">
              {/* Why Join Us */}
              <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Join Alif Global School?</h3>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  At Alif, we believe our educators are our greatest asset. We provide an environment that fosters creativity, professional growth, and a commitment to shaping future leaders.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                        <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground leading-snug">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Openings */}
              <div>
                <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Current Openings</h3>
                    <p className="text-muted-foreground">Explore our latest job opportunities</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {jobs.map((job, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-border/50 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4 card-hover">
                      <div>
                        <h4 className="font-bold text-lg text-foreground">{job.title}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{job.department}</span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{job.employment_type}</span>
                        </div>
                      </div>
                      <button
                        className="btn-accent text-sm px-6 py-2.5 rounded-full"
                        onClick={() => handleApply(job)}
                      >
                        Apply For This Role
                      </button>
                    </div>
                  ))}
                  {jobs.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">No open positions at the moment. Please check back later.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div id="apply-now" className="lg:col-span-2 scroll-mt-24 lg:sticky lg:top-24">
              <CareerForm initialValues={selectedRole} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;