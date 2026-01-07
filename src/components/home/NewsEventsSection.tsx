import { ArrowRight, Newspaper, ChevronLeft, ChevronRight, Calendar, Leaf, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { newsItems } from '@/pages/academics/News';

const NewsEventsSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const stats = [
        {
            icon: Leaf,
            value: '100%',
            label: 'Green Campus',
            description: 'Eco-friendly infrastructure',
            color: 'bg-green-100 text-green-600',
        },
        {
            icon: Heart,
            value: '100%',
            label: 'Happiness Curriculum',
            description: 'Focus on well-being',
            color: 'bg-rose-100 text-rose-600',
        },
        {
            icon: Shield,
            value: '100%',
            label: 'Moral Values',
            description: 'Character development',
            color: 'bg-blue-100 text-blue-600',
        },
    ];

    return (
        <section className="section-padding bg-cream/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Latest News (Takes up 2/3 space) */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Newspaper className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary">Latest News & Updates</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => scroll('left')}
                                    className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                                    aria-label="Previous news"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                                    aria-label="Next news"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {newsItems.slice(0, 5).map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] snap-start group bg-white rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-medium transition-all duration-300"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            width={500}
                                            height={281}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <span className="text-xs font-bold text-accent uppercase tracking-wider">{item.date}</span>
                                        <h3 className="text-lg font-bold text-primary mt-2 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-body text-sm line-clamp-2 mb-4">
                                            {item.desc}
                                        </p>
                                        <Link
                                            to="/academics/news"
                                            className="text-primary font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-widest"
                                            aria-label={`Read more about ${item.title}`}
                                        >
                                            Read More <ArrowRight className="w-3 h-3" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            {/* Academic Calendar Card */}
                            <div className="flex-shrink-0 w-full md:w-[calc(50%-12px)] snap-start group bg-primary rounded-2xl overflow-hidden shadow-soft border border-border p-6 text-white flex flex-col justify-between relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                                <div>
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                                        <Calendar className="w-5 h-5 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Academic Calendar</h3>
                                    <p className="text-sm text-white/70 mb-6">
                                        Stay updated with our full academic schedule, holidays, and important dates for the year 2024-25.
                                    </p>
                                </div>
                                <Link
                                    to="/academics/calendar"
                                    className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white hover:text-primary transition-all self-start"
                                >
                                    View Calendar <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 text-center md:text-right">
                            <Link to="/academics/news" className="text-accent font-bold inline-flex items-center gap-2 hover:underline group text-sm">
                                View All News <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Why Choose Us (Takes up 1/3 space) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 border border-border shadow-soft h-full">
                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                    Our Values
                                </span>
                                <h2 className="text-2xl font-bold text-primary">Why Choose Us</h2>
                            </div>

                            <div className="space-y-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="text-2xl font-bold text-primary">{stat.value}</span>
                                                <h3 className="font-bold text-primary">{stat.label}</h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {stat.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-border">
                                <Link
                                    to="/about"
                                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all"
                                >
                                    Learn More About Us
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsEventsSection;
