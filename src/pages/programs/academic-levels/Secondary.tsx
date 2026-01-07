import Layout from '@/components/Layout';
import { School, CheckCircle2, Target, Rocket, Users, Briefcase } from 'lucide-react';
import SEO from '@/components/SEO';

const Secondary = () => {
    return (
        <Layout>
            <SEO
                title="Secondary School"
                description="Alif Global School's Secondary School (Grades 9 to 10) prepares students for future academic and career paths through goal setting, career orientation, and academic excellence."
                canonical="/programs/academic-levels/secondary"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Programs', path: '/programs' },
                    { name: 'Secondary School', path: '/programs/academic-levels/secondary' }
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
                                    <School className="w-8 h-8 text-accent" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Secondary School</h1>
                                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                    Defining new goals and pursuing passions as students prepare for their future academic and career paths.
                                </p>
                                <div className="mt-8 inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold">
                                    Grades: 9 to 10
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                                    alt="Secondary School Students"
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
                                    Excellence & Passion
                                </span>
                                <h2 className="heading-primary mb-6">Defining Future Goals</h2>
                                <p className="text-body mb-6">
                                    Secondary School is a place where students can pursue their talents and passions as they prepare for graduation. We help them satisfy their curiosity and inquisitiveness while aiming for excellence.
                                </p>
                                <p className="text-body mb-8">
                                    Our approach provides students with an atmosphere to pursue individual interests and focus on their eventual career choices through specialized clubs and internship-like experiences.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Career Orientation',
                                        'Academic Excellence',
                                        'Skill Specialization',
                                        'Goal Setting'
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
                                        title: 'Goal Definition',
                                        desc: 'Helping students define new goals and pursue their passions.',
                                        icon: Target
                                    },
                                    {
                                        title: 'Career Focus',
                                        desc: 'Focusing on eventual career choices and individual interests.',
                                        icon: Briefcase
                                    },
                                    {
                                        title: 'Club Activities',
                                        desc: 'Various clubs arranged to give students intern-like experiences.',
                                        icon: Users
                                    },
                                    {
                                        title: 'Aiming Excellence',
                                        desc: 'Satisfying curiosity and aiming at excellence in all fields.',
                                        icon: Rocket
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

export default Secondary;
