import { Calendar, ArrowRight, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { newsItems } from '@/pages/academics/News';
import { events } from '@/pages/academics/Events';

const NewsEventsSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="section-padding bg-cream/30">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Latest News - Slider/Scroller */}
                    <div className="lg:w-2/3">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Newspaper className="w-5 h-5" />
                                </div>
                                <h2 className="text-3xl font-bold text-primary">Latest News</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => scroll('left')}
                                        className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                                        aria-label="Previous news"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => scroll('right')}
                                        className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                                        aria-label="Next news"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                                <Link to="/academics/news" className="text-accent font-bold flex items-center gap-2 hover:underline group ml-4">
                                    View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
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
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold text-accent uppercase tracking-wider">{item.date}</span>
                                        <h3 className="text-lg font-bold text-primary mt-2 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-body text-sm line-clamp-2 mb-4">
                                            {item.desc}
                                        </p>
                                        <Link to="/academics/news" className="text-primary font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-widest">
                                            Read More <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events - Top 3 */}
                    <div className="lg:w-1/3">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <h2 className="text-3xl font-bold text-primary">Events</h2>
                            </div>
                            <Link to="/academics/events" className="text-accent font-bold flex items-center gap-2 hover:underline group">
                                View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {events.slice(0, 3).map((event, index) => (
                                <div key={index} className="flex gap-6 items-center p-4 bg-white rounded-2xl border border-border shadow-sm hover:shadow-medium transition-all duration-300 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-white group-hover:bg-accent transition-colors">
                                        <span className="text-xl font-bold leading-none">{event.date}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-tighter opacity-80">{event.month}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">{event.title}</h3>
                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{event.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-8 bg-primary rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                            <h3 className="text-xl font-bold mb-2 relative z-10">Academic Calendar</h3>
                            <p className="text-sm text-white/70 mb-6 relative z-10">Stay updated with our full academic schedule and important dates.</p>
                            <Link
                                to="/academics/calendar"
                                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-primary transition-all relative z-10"
                            >
                                Download PDF <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsEventsSection;
