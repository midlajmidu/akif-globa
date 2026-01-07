import Layout from '@/components/Layout';
import { GraduationCap, CheckCircle2, Award, BookOpen, Users, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';

const SeniorSecondary = () => {
    return (
        <Layout>
            <SEO
                title="Senior Secondary"
                description="Alif Global School's Senior Secondary (Grades 11 and 12) offers an integrated residential curriculum combining CBSE academics with specialized coaching for JEE and NEET."
                canonical="/programs/academic-levels/senior-secondary"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Programs', path: '/programs' },
                    { name: 'Senior Secondary', path: '/programs/academic-levels/senior-secondary' }
                ]}
            />
            <div className="pt-20">
                {/* Hero Section */}
                <section className="bg-primary py-20 text-primary-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="container-custom relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                                    <GraduationCap className="w-8 h-8 text-accent" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Senior Secondary</h1>
                                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                    A two-year integrated residential curriculum combining CBSE academics with specialized coaching for JEE and NEET.
                                </p>
                                <div className="mt-8 inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold">
                                    Grades: 11 and 12
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
                                    alt="Senior Secondary Students"
                                    className="rounded-3xl shadow-2xl border-8 border-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Details Section */}
                <section className="section-padding bg-background">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                                    Integrated Excellence
                                </span>
                                <h2 className="heading-primary mb-6">Academic & Competitive Success</h2>
                                <p className="text-body mb-6">
                                    Our Senior Secondary programme ensures students excel in both board exams and competitive tests like JEE and NEET. We provide personalized mentorship, regular doubt-clearing sessions, and performance tracking.
                                </p>
                                <p className="text-body mb-8">
                                    Beyond academics, we focus on holistic development through value education, life skills training, and leadership programmes, nurturing well-rounded individuals ready for global challenges.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'JEE/NEET Coaching',
                                        'CBSE Board Excellence',
                                        'Personalized Mentorship',
                                        'Leadership Training'
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent" />
                                            <span className="font-medium text-primary">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: 'Expert Faculty',
                                        desc: 'Personalized mentorship and regular doubt-clearing sessions.',
                                        icon: Users
                                    },
                                    {
                                        title: 'Strong Foundation',
                                        desc: 'Developing critical thinking and problem-solving skills.',
                                        icon: BookOpen
                                    },
                                    {
                                        title: 'Modern Facilities',
                                        desc: 'Smart classrooms, advanced labs, and sports infrastructure.',
                                        icon: Award
                                    },
                                    {
                                        title: 'Holistic Wellness',
                                        desc: 'Wellness programmes and on-campus healthcare support.',
                                        icon: ShieldCheck
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-cream p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-primary mb-3">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default SeniorSecondary;
