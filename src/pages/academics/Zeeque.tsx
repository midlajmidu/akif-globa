import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Sparkles, CheckCircle2, Globe, Moon, BookOpen, Heart } from 'lucide-react';
import zeequeHeroImg from '@/assets/1-2.webp';

const Zeeque = () => {
  return (
    <Layout>
      <PageHeader title="Alif Zeeque Intl" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Alif Zeeque Intl' }]} />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mb-8">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">Alif ZeeQue International</h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                  A nurturing and stimulating environment where young learners build a strong foundation through activity-based learning and spiritual growth with the AZQ+ Program.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                    <span className="font-bold text-accent">Ages:</span> 3 to 6 Years
                  </div>
                  <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                    <span className="font-bold text-accent">Stages:</span> LZQ, MZQ, UZQ
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={zeequeHeroImg}
                    alt="ZeeQue International"
                    className="rounded-3xl shadow-2xl border-8 border-white/10"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl hidden md:block">
                    <p className="text-accent-foreground font-bold text-2xl">AZQ+ Program</p>
                    <p className="text-accent-foreground/80 text-sm">Spiritual & Academic Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="heading-primary mb-6">Preschool Excellence</h2>
                <p className="text-body mb-6">
                  Our ZeeQue International Preschool Program provides a nurturing and stimulating environment, where young learners build a strong foundation through activity-based learning and Qur'anic studies with the AZQ+ Program.
                </p>
                <p className="text-body mb-8">
                  The curriculum integrates a theme-based play method, guided by ECCE-trained educators, fostering a multilingual environment with Mother Tongue, Arabic, and English.
                </p>

                <div className="space-y-4">
                  {[
                    'Theme-based play method',
                    'ECCE-trained educators',
                    'Multilingual environment',
                    'Physical development activities',
                    'Spiritual enrichment with Adhkar',
                    'Progressive learning stages'
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
                    title: 'AZQ+ Program',
                    desc: 'Helping students learn the Qur’an and incorporate Adhkar into daily life.',
                    icon: Moon
                  },
                  {
                    title: 'Multilingual',
                    desc: 'Immersion in Mother Tongue, Arabic, and English for global readiness.',
                    icon: Globe
                  },
                  {
                    title: 'Activity Based',
                    desc: 'Learning through hands-on experiences and creative exploration.',
                    icon: BookOpen
                  },
                  {
                    title: 'Holistic Care',
                    desc: 'Focusing on physical, social, and emotional development.',
                    icon: Heart
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

export default Zeeque;