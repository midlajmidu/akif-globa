import Layout from '@/components/Layout';
import { Sparkles, CheckCircle2, BookOpen, Heart, Globe, Moon } from 'lucide-react';
import SEO from '@/components/SEO';

const Foundation = () => {
    return (
        <Layout>
            <SEO
                title="Foundation School"
                description="Alif Global School's Foundation School (LZQ to Grade 2) provides a nurturing environment with activity-based learning, spiritual growth, and foundational skills."
                canonical="/programs/academic-levels/foundation"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Programs', path: '/programs' },
                    { name: 'Foundation School', path: '/programs/academic-levels/foundation' }
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
                                    <Sparkles className="w-8 h-8 text-accent" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Foundation School</h1>
                                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                    A nurturing and stimulating environment where young learners build a strong foundation through activity-based learning and spiritual growth.
                                </p>
                                <div className="mt-8 inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold">
                                    Grades: LZQ to Grade 2
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                                    alt="Foundation School Students"
                                    className="rounded-3xl shadow-2xl border-8 border-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 1: ALIF ZeeQue International */}
                <section className="section-padding bg-background">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop"
                                    alt="ZeeQue International Preschool"
                                    className="rounded-3xl shadow-strong"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                                    Preschool Program
                                </span>
                                <h2 className="heading-primary mb-6">ALIF ZeeQue International</h2>
                                <p className="text-body mb-6">
                                    Our ZeeQue International Preschool Program provides a nurturing and stimulating environment, where young learners build a strong foundation through activity-based learning and Qur'anic studies with the AZQ+ Program.
                                </p>
                                <p className="text-body mb-8">
                                    Designed for children aged 3 to 6, the program follows a structured approach across the Lower, Middle, and Upper stages (LZQ, MZQ, UZQ), ensuring progressive learning and development.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                                            <Globe className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">Multilingual</h4>
                                            <p className="text-xs text-muted-foreground">Mother Tongue, Arabic, and English environment.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                                            <Moon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">AZQ+ Program</h4>
                                            <p className="text-xs text-muted-foreground">Integrating Qur'anic studies and daily Adhkar.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Grade 1 & 2 */}
                <section className="section-padding bg-cream">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="heading-primary mb-4">Grade 1 & 2</h2>
                            <p className="text-body max-w-2xl mx-auto">
                                Transitioning from preschool to primary with a focus on holistic well-being and foundational skills.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: 'Experiential Learning',
                                    desc: 'Integrating languages, numeracy, environmental studies, creative arts, and STEM through an experiential, play-based approach.',
                                    icon: Sparkles
                                },
                                {
                                    title: 'Foundational Skills',
                                    desc: 'Developing foundational literacy, numeracy, and life skills through interactive activities, storytelling, and problem-solving.',
                                    icon: BookOpen
                                },
                                {
                                    title: 'Holistic Growth',
                                    desc: 'Nurturing physical, social, and emotional growth through sports, yoga, mindfulness, music, dance, and theater.',
                                    icon: Heart
                                },
                                {
                                    title: 'Safe Environment',
                                    desc: 'Fostering curiosity, confidence, teamwork, and holistic well-being in a safe and inclusive learning environment.',
                                    icon: CheckCircle2
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-background p-8 rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                                        <item.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Foundation;
