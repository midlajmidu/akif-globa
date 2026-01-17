import Layout from '@/components/Layout';
import { Users, CheckCircle2, Compass, Award, MessageSquare, Brain } from 'lucide-react';
import SEO from '@/components/SEO';

import middleImg from '@/assets/programs(classes)/middle.jpg';

const Middle = () => {
    return (
        <Layout>
            <SEO
                title="Middle School"
                description="Alif Middle School (Grade 6 to 8) prepares students for higher academic challenges with a focus on subject expertise and critical inquiry."
                canonical="/middle-school/"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Programs', path: '/ags-talks/' },
                    { name: 'Middle School', path: '/middle-school/' }
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
                                    <Users className="w-8 h-8 text-accent" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Middle School</h1>
                                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                    A journey of self-exploration where students take increased responsibility for their learning in a supportive environment.
                                </p>
                                <div className="mt-8 inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold">
                                    Grades: 6 to 8
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src={middleImg}
                                    alt="Middle School Students"
                                    className="rounded-3xl shadow-2xl border-8 border-white/10 w-full h-auto object-cover"
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
                                    Self-Exploration
                                </span>
                                <h2 className="heading-primary mb-6">Nurturing Responsibility</h2>
                                <p className="text-body mb-6">
                                    Our Middle School provides a nurturing and supportive environment where students take guided and increased responsibility for their learning while they embark on a journey of self-exploration.
                                </p>
                                <p className="text-body mb-8">
                                    We focus on developing essential life skills, fostering initiative, and building a genuine desire to acquire knowledge through diverse learning experiences.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Critical Thinking',
                                        'Public Speaking',
                                        'Reflective Reading',
                                        'Creative Writing'
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
                                        title: 'Extensive Learning',
                                        desc: 'Co-curricular activities, excursions, workshops, and seminars.',
                                        icon: Compass
                                    },
                                    {
                                        title: 'Skill Development',
                                        desc: 'Focus on writing, reading, reflecting, and critical thinking.',
                                        icon: Brain
                                    },
                                    {
                                        title: 'Public Speaking',
                                        desc: 'Building confidence and fostering initiative among students.',
                                        icon: MessageSquare
                                    },
                                    {
                                        title: 'Talent Recognition',
                                        desc: 'Introducing young talents to numerous opportunities.',
                                        icon: Award
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

export default Middle;
