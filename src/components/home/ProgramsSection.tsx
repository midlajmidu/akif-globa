import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, School, Award, Sparkles, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Sparkles,
    title: 'Foundation School',
    description: 'Early childhood education with play-based learning for ages 3-7',
    grades: 'LZQ to Grade 2',
    link: '/foundation-school/',
  },
  {
    icon: BookOpen,
    title: 'Preparatory School',
    description: 'Building strong fundamentals in literacy and numeracy',
    grades: 'Grade 3 to 5',
    link: '/preparatory-school/',
  },
  {
    icon: Users,
    title: 'Middle School',
    description: 'Developing critical thinking and subject expertise',
    grades: 'Grade 6 to 8',
    link: '/middle-school/',
  },
  {
    icon: School,
    title: 'Secondary School',
    description: 'Comprehensive education preparing for board examinations',
    grades: 'Grade 9 to 10',
    link: '/secondary-school/',
  },
  {
    icon: GraduationCap,
    title: 'Senior Secondary',
    description: 'Specialized streams for future academic and career paths',
    grades: 'Grade 11 to 12',
    link: '/senior-secondary-school/',
  },
  {
    icon: BookOpen,
    title: 'Mahfilul Quran',
    description: 'Specialized Quranic studies and Hifz program integrated with academics',
    grades: 'All Grades',
    link: '/programs/mahfilul-quran/',
  },
];

const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Academic Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Comprehensive educational programs designed to nurture every stage of your child's development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group bg-background rounded-2xl p-6 transition-all duration-500 hover:shadow-strong hover:-translate-y-1`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <program.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{program.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {program.grades}
                </span>
                <Link
                  to={program.link}
                  className="text-primary font-medium text-sm flex items-center gap-1 group-hover:text-accent transition-colors"
                  aria-label={`Learn more about our ${program.title} program`}
                >
                  Explore {program.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
