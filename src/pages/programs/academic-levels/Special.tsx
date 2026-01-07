import Layout from '@/components/Layout';
import { BookOpen, CheckCircle2, Sparkles, Heart, Globe, Star } from 'lucide-react';
import SEO from '@/components/SEO';

const MahfilulQuran = () => {
    return (
        <Layout>
            <SEO
                title="Mahfilul Quran"
                description="Alif Global School's Mahfilul Quran is a specialized program for Quranic studies, Hifz (memorization), and Tajweed, integrated with modern academic excellence."
                canonical="/programs/academic-levels/special"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Programs', path: '/programs' },
                    { name: 'Mahfilul Quran', path: '/programs/academic-levels/special' }
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
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Mahfilul Quran</h1>
                                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                    A specialized program dedicated to Quranic studies, Hifz (memorization), and Tajweed, integrated with modern academic excellence.
                                </p>
                                <div className="mt-8 inline-block px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold">
                                    Grades: All Grades
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src="https://images.unsplash.com/photo-1585036156171-3839efc229b7?q=80&w=2070&auto=format&fit=crop"
                                    alt="Mahfilul Quran Program Students"
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
                                    Spiritual Excellence
                                </span>
                                <h2 className="heading-primary mb-6">Nurturing Hearts & Minds</h2>
                                <p className="text-body mb-6">
                                    Mahfilul Quran is Alif Global School's flagship spiritual program. We believe in providing a balanced education where spiritual growth goes hand-in-hand with academic success.
                                </p>
                                <p className="text-body mb-8">
                                    Our program is designed to help students memorize the Holy Quran with proper Tajweed while understanding its meanings and applying its values in their daily lives.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Hifz-ul-Quran',
                                        'Tajweed Excellence',
                                        'Quranic Arabic',
                                        'Islamic Values'
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
                                        title: 'Hifz Program',
                                        desc: 'Systematic memorization of the Quran with personalized tracking.',
                                        icon: Star
                                    },
                                    {
                                        title: 'Tajweed Rules',
                                        desc: 'Mastering the art of recitation with proper pronunciation.',
                                        icon: Sparkles
                                    },
                                    {
                                        title: 'Spiritual Mentoring',
                                        desc: 'One-on-one guidance to build character and moral values.',
                                        icon: Heart
                                    },
                                    {
                                        title: 'Integrated Learning',
                                        desc: 'Balancing Quranic studies with mainstream academic subjects.',
                                        icon: Globe
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

export default MahfilulQuran;
