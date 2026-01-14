import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';

import principalImg from '@/assets/about/principle.webp';

const Principal = () => {
    return (
        <Layout>
            <SEO
                title="Principal's Message"
                description="Read the message from the Principal of Alif Global School, Shanavas KT. Learn about our commitment to academic excellence, character building, and holistic student development."
                canonical="/about/principal"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: "Principal's Message", path: '/about/principal' }
                ]}
            />
            <PageHeader title="Principal's Message" breadcrumb={[{ name: 'About', path: '/about' }, { name: "Principal's Message" }]} />
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="rounded-2xl overflow-hidden shadow-strong border-4 border-white">
                                <img src={principalImg} alt="Shanavas KT - Principal of Alif Global School" className="w-full h-auto object-cover" />
                            </div>
                            <div>
                                <h2 className="heading-secondary mb-6">Message from the Principal</h2>
                                <div className="text-body mb-8 leading-relaxed space-y-4">
                                    <p>Greetings from Alif Global School…!</p>
                                    <p>
                                        Learning is not a process limited to schools and colleges only, but boundless for all aspirants. It’s indeed a lifelong process which makes man a perpetual learner. Our curriculum and practices are consistently reviewed to ensure that we are following the most updated best practices, meeting all regulations, and addressing the future needs of our students. The students are encouraged to take part in all the internal and external events and are given enough guidance and practice before being exposed to the competitions.
                                    </p>
                                    <p>
                                        Alif Global School strives to create a unique atmosphere for learning in a happy, caring, secure, value-based stimulating environment, with a creative and effective integration of technology across the whole curriculum, to prepare citizens of tomorrow, who are intellectually sharp, physically sound, socially responsible, and morally and ethically upright.
                                    </p>
                                    <p>
                                        We look forward to a long association with you. Let’s join hands in promoting the young minds so that they may prepare themselves to build up a future in flying colours.
                                    </p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-border">
                                    <p className="font-bold text-2xl text-primary">Shanavas KT</p>
                                    <p className="text-accent font-semibold text-lg">Principal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Principal;
