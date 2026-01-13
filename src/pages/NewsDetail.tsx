import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SEO from '@/components/SEO';

const NewsDetail = () => {
    const { slug } = useParams();
    const cacheKey = `news_detail_${slug}`;
    const [news, setNews] = useState<any>(() => {
        const cached = sessionStorage.getItem(cacheKey);
        return cached ? JSON.parse(cached) : null;
    });
    const [loading, setLoading] = useState(!news);

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbwjANLBOP1mAudtHF5uYQ9ItQuWCqGkGLFS-9DALRJWAJ2aMo834VE-QY5uQk1LA0U/exec?action=news&slug=${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data && !data.error) {
                    setNews(data);
                    sessionStorage.setItem(cacheKey, JSON.stringify(data));
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching news detail:", err);
                setLoading(false);
            });
    }, [slug, cacheKey]);

    if (loading && !news) {
        return (
            <Layout>
                <div className="container-custom section-padding">
                    <div className="max-w-4xl mx-auto animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-24 mb-6" />
                        <div className="h-12 bg-gray-200 rounded w-3/4 mb-8" />
                        <div className="aspect-video bg-gray-200 rounded-2xl mb-10" />
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-2/3" />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    if (!news || news.error || news.status !== 'PUBLISHED') {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-xl font-bold text-primary">News not found</p>
                </div>
            </Layout>
        );
    }

    const processContent = (content: string) => {
        if (!content) return "";
        // Replace Google Drive view links with thumbnail links
        return content.replace(
            /https:\/\/drive\.google\.com\/(?:uc\?export=view&id=|file\/d\/|open\?id=)([a-zA-Z0-9_-]+)(?:\/view)?/g,
            (match, id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`
        );
    };

    return (
        <Layout>
            <SEO
                title={news.title}
                description={news.short_desc}
                canonical={`/news/${slug}`}
            />
            <PageHeader title="School News" breadcrumb={[{ name: 'News', path: '/academics/news' }, { name: 'Article' }]} />

            <article className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                {news.date}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8">
                                {news.title}
                            </h1>
                            <div className="rounded-2xl overflow-hidden shadow-soft border border-border mb-10">
                                <img
                                    src={`https://drive.google.com/thumbnail?id=${news.image_url}&sz=w1000`}
                                    alt={news.title}
                                    loading="lazy"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        <div
                            className="prose prose-lg max-w-none text-body leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: processContent(news.content || news.short_desc) }}
                        />
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default NewsDetail;
