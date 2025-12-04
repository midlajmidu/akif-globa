import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const newsItems = [
  { date: 'Dec 1, 2024', title: 'Students Excel in Science Olympiad', desc: 'Our students secured top positions in the state-level science olympiad.' },
  { date: 'Nov 25, 2024', title: 'New Computer Lab Inaugurated', desc: 'State-of-the-art computer lab with latest equipment now open.' },
  { date: 'Nov 15, 2024', title: 'Annual Sports Meet Announced', desc: 'Registration open for the upcoming annual sports meet.' },
];

const News = () => {
  return (
    <Layout>
      <PageHeader title="News" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'News' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Latest News</h2>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft card-hover">
                  <span className="text-xs text-accent font-medium">{item.date}</span>
                  <h3 className="font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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