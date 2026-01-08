import Layout from '@/components/Layout';
import { BookOpen, CheckCircle2, Search, Lightbulb, Map, Heart } from 'lucide-react';
import SEO from '@/components/SEO';

import preparatoryImg from '@/assets/programs(classes)/prepratory.jpeg';

const Preparatory = () => {
    return (
        <Layout>
            <SEO
                title="Preparatory School"
                description="Alif Global School's Preparatory School (Grades 3 to 5) encourages inquiry and exploration, developing core competencies in a caring and supportive environment."
                canonical="/programs/academic-levels/preparatory"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Programs', path: '/programs' },
                    { name: 'Preparatory School', path: '/programs/academic-levels/preparatory' }
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
                                    <BookOpen className="w-8 h-8 text-accent" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Preparatory School</h1>
                                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                    Encouraging inquiry and exploration while developing core competencies in a caring and supportive environment.
                                </p>
                                <div className="mt-8 inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold">
                                    Grades: 3 to 5
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src={preparatoryImg}
                                    alt="Preparatory School Students"
                                    className="rounded-3xl shadow-2xl border-8 border-white/10 w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Details Section */}
                <section className="section-padding bg-background">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                            <div>
                                <h2 className="heading-primary mb-6">Inquiry & Exploration</h2>
                                <p className="text-body mb-6">
                                    Our preparatory program is designed to develop children's competence in various essential skills, including reading, writing, listening, speaking, and problem-solving.
                                </p>
                                <p className="text-body mb-6">
                                    We emphasize observation, measurement, and the effective use of information and communications technology to prepare students for the modern world.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Reading & Writing Excellence',
                                        'Effective Communication',
                                        'Problem-Solving Skills',
                                        'ICT Integration'
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
                                        title: 'Conceptual Learning',
                                        desc: 'Nurturing curiosity and conceptual learning in young minds.',
                                        icon: Lightbulb
                                    },
                                    {
                                        title: 'Real-world Experience',
                                        desc: 'Creative activities and field trips for hands-on learning.',
                                        icon: Map
                                    },
                                    {
                                        title: 'Supportive Environment',
                                        desc: 'Optimal for learning, self-discovery, and awareness.',
                                        icon: Heart
                                    },
                                    {
                                        title: 'Skill Development',
                                        desc: 'Focus on observation and measurement competencies.',
                                        icon: Search
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-cream p-6 rounded-2xl shadow-soft">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                            <item.icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
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

export default Preparatory;
