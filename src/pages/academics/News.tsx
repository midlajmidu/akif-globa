import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';

import paletteImg from '@/assets/ags news/pallete news.webp';
import alifinityImg from '@/assets/ags news/alifinity.webp';
import kheloImg from '@/assets/ags news/khelo news.webp';
import aplImg from '@/assets/ags news/premier league.webp';
import wonderPopImg from '@/assets/ags news/wonder pop news.webp';

export const newsItems = [
  {
    date: 'Dec 20, 2025',
    title: 'Wonder Pop – One Day Camp',
    desc: 'Wonder Pop was a fun-filled one-day camp organized for up grade students aged 3 to 10 years. The camp featured interactive learning sessions, creative activities, and exciting games, giving students a joyful and enriching experience beyond the classroom.',
    image: wonderPopImg
  },
  {
    date: 'Dec 02, 2025',
    title: 'APL – Alif Premier League',
    desc: 'APL (Alif Premier League) is AGS\'s exciting football program designed to encourage a spirit of sportsmanship and healthy competition. The program provided students with an opportunity to showcase their football skills while learning teamwork, discipline, and leadership on the field.',
    image: aplImg
  },
  {
    date: 'Nov 19, 2025',
    title: 'Khelo Alif – Sports Program',
    desc: 'Khelo Alif is a dynamic sports program aimed at promoting physical fitness and healthy habits among students. The program helped students develop teamwork, coordination, and sportsmanship through fun and engaging activities.',
    image: kheloImg
  },
  {
    date: 'Nov 01, 2025',
    title: 'Alifinity – Grand Exhibition',
    desc: 'The Alifinity Grand Exhibition was a grand celebration of creativity, innovation, and learning at AGS. Students proudly displayed their projects, artworks, and performances, making the event a memorable experience for parents, teachers, and visitors.',
    image: alifinityImg
  },
  {
    date: 'Aug 30, 2025',
    title: 'Palette – Arts Program',
    desc: 'Palette is AGS\'s vibrant arts program that nurtures creativity and self-expression among students. The program included drawing, painting, craft work, singing, Oppana, and other expressive art forms, encouraging students to explore and showcase their talents in a joyful environment.',
    image: paletteImg
  },
];

const News = () => {
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