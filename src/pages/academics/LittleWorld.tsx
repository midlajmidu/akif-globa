import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Heart, Star, Smile, Sparkles, CheckCircle2, Music, Palette, Sun } from 'lucide-react';

const LittleWorld = () => {
  return (
    <Layout>
      <PageHeader title="Alif Little World" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Alif Little World' }]} />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-accent/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Sun className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Alif Little World</h1>
                <p className="text-xl text-body leading-relaxed mb-8">
                  A magical place where early childhood dreams take flight. We provide a safe, loving, and stimulating environment for our youngest learners to begin their educational journey.
                </p>
                <div className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg">
                  Nurturing Future Leaders
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                    alt="Alif Little World"
                    className="rounded-3xl shadow-strong border-8 border-white"
                  />
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                    <Smile className="w-12 h-12 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-primary mb-4">Our Little World</h2>
              <p className="text-body max-w-2xl mx-auto">
                We believe every child is unique and deserves a foundation built on love, care, and creative exploration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  title: 'Caring Environment',
                  desc: 'A safe and loving space where children feel at home and secure.',
                  icon: Heart,
                  color: 'bg-red-50 text-red-500'
                },
                {
                  title: 'Play-Based Learning',
                  desc: 'Learning through fun activities that spark curiosity and imagination.',
                  icon: Star,
                  color: 'bg-yellow-50 text-yellow-500'
                },
                {
                  title: 'Holistic Growth',
                  desc: 'Focusing on physical, emotional, and cognitive development.',
                  icon: Smile,
                  color: 'bg-green-50 text-green-500'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-10 rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 text-center group">
                  <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2070&auto=format&fit=crop" alt="Activity 1" className="rounded-2xl shadow-medium" />
                <img src="https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop" alt="Activity 2" className="rounded-2xl shadow-medium mt-8" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="heading-primary mb-6">Creative Learning Spaces</h2>
                <p className="text-body mb-8">
                  Our facilities are designed specifically for early learners, featuring colorful classrooms, safe play areas, and specialized zones for art and music.
                </p>
                <div className="space-y-6">
                  {[
                    { title: 'Music & Movement', icon: Music, desc: 'Developing rhythm and coordination through song and dance.' },
                    { title: 'Art & Expression', icon: Palette, desc: 'Encouraging creativity through painting, clay, and crafts.' },
                    { title: 'Sensory Play', icon: Sparkles, desc: 'Exploring the world through touch, sight, and sound.' }
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LittleWorld;