import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export const newsItems = [
  {
    date: 'Dec 1, 2024',
    title: 'Students Excel in Science Olympiad',
    desc: 'Our students secured top positions in the state-level science olympiad, showcasing their dedication and academic excellence.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    date: 'Nov 25, 2024',
    title: 'New Computer Lab Inaugurated',
    desc: 'State-of-the-art computer lab with latest equipment now open to enhance digital literacy and technical skills.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    date: 'Nov 15, 2024',
    title: 'Annual Sports Meet Announced',
    desc: 'Registration is now open for the upcoming annual sports meet. Prepare for a day of athletic excellence and team spirit.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    date: 'Nov 05, 2024',
    title: 'Inter-School Debate Championship',
    desc: 'Our debate team won the regional championship, discussing critical global issues with eloquence and logic.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    date: 'Oct 28, 2024',
    title: 'Art Exhibition: Creative Minds',
    desc: 'A showcase of stunning artworks created by our talented students, exploring various mediums and themes.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop'
  },
];

const News = () => {
  return (
    <Layout>
      <PageHeader title="News" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'News' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-secondary mb-12 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{item.date}</span>
                    <h3 className="text-xl font-bold text-primary mt-2 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body text-sm line-clamp-3 mb-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;