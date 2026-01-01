import Layout from '@/components/Layout';
import { Award, CheckCircle2, Sparkles, Cpu, Globe, Palette } from 'lucide-react';

const Special = () => {
    return (
        <Layout>
            <div className="pt-20">
                {/* Hero Section */}
                <section className="bg-primary py-20 text-primary-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="container-custom relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                                    <Award className="w-8 h-8 text-accent" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Special Programs</h1>
                                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                    Enrichment programs designed to challenge gifted students and develop specialized skills beyond the standard curriculum.
                                </p>
                                <div className="mt-8 inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold">
                                    Grades: All Grades
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                                    alt="Special Programs"
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
                                    Beyond Academics
                                </span>
                                <h2 className="heading-primary mb-6">Enrichment & Excellence</h2>
                                <p className="text-body mb-6">
                                    Our Special Programs are designed to go beyond the standard curriculum. We provide opportunities for students to excel in various fields, from academic competitions to creative arts and technical skills.
                                </p>
                                <p className="text-body mb-8">
                                    These programs are led by experts and are aimed at nurturing the unique talents and interests of our students, helping them stand out in their academic and professional journeys.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Olympiad Training',
                                        'Robotics & Coding',
                                        'Foreign Languages',
                                        'Creative Arts'
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
                                        title: 'Skill Development',
                                        desc: 'Workshops in Coding, Robotics, and emerging technologies.',
                                        icon: Cpu
                                    },
                                    {
                                        title: 'Competitive Edge',
                                        desc: 'Intensive training for Olympiads and competitive exams.',
                                        icon: Sparkles
                                    },
                                    {
                                        title: 'Global Languages',
                                        desc: 'Foreign language classes to build global communication skills.',
                                        icon: Globe
                                    },
                                    {
                                        title: 'Creative Arts',
                                        desc: 'Advanced programs in music, dance, and visual arts.',
                                        icon: Palette
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

export default Special;
