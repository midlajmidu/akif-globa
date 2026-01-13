import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

export const newsItems = []; // Keep export to avoid breaking other imports, but it's empty now

const News = () => {
  const [news, setNews] = useState<any[]>(() => {
    const cached = sessionStorage.getItem('news_data_v2');
    return cached ? JSON.parse(cached) : [];
  });
  const [loading, setLoading] = useState(!news.length);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwjANLBOP1mAudtHF5uYQ9ItQuWCqGkGLFS-9DALRJWAJ2aMo834VE-QY5uQk1LA0U/exec?action=news')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const sorted = data
            .filter((item: any) => item.status === 'PUBLISHED')
            .sort((a, b) => (b.id || 0) - (a.id || 0));
          setNews(sorted);
          sessionStorage.setItem('news_data_v2', JSON.stringify(sorted));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);
  return (
    <Layout>
      <SEO
        title="School News"
        description="Stay informed with the latest news and updates from Alif Global School. Read about our recent events, achievements, and school announcements."
        canonical="/academics/news"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academics', path: '/academics' },
          { name: 'News', path: '/academics/news' }
        ]}
      />
      <PageHeader title="News" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'News' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-secondary mb-12 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading && news.length === 0 ? (
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={`skeleton-${i}`} className="bg-white rounded-2xl overflow-hidden shadow-soft border border-border animate-pulse">
                    <div className="aspect-video bg-gray-200" />
                    <div className="p-6 space-y-4">
                      <div className="h-3 bg-gray-200 rounded w-1/4" />
                      <div className="h-6 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                ))
              ) : (
                news.map((item, index) => (
                  <Link to={`/news/${item.slug}`} key={index} className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={`https://drive.google.com/thumbnail?id=${item.image_url}&sz=w1000`}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{item.date}</span>
                      <h3 className="text-xl font-bold text-primary mt-2 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body text-sm line-clamp-3 mb-4">
                        {item.short_desc}
                      </p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;