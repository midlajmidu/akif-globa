import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Users, School, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
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

  const programs = [
    {
      icon: Sparkles,
      title: 'Foundation School',
      grades: 'Pre-KG to UKG',
      age: 'Ages 3-5',
      description: 'Our early childhood program focuses on play-based learning, developing motor skills, social interaction, and foundational literacy and numeracy concepts in a nurturing environment.',
      features: ['Play-based Learning', 'Motor Skill Development', 'Language Development', 'Creative Expression'],
    },
    {
      icon: BookOpen,
      title: 'Preparatory School',
      grades: 'Grade 1 to 3',
      age: 'Ages 6-8',
      description: 'Building strong fundamentals in reading, writing, and arithmetic while fostering curiosity and a love for learning through interactive and engaging activities.',
      features: ['Strong Fundamentals', 'Reading Programs', 'Math Concepts', 'Science Exploration'],
    },
    {
      icon: Users,
      title: 'Middle School',
      grades: 'Grade 4 to 6',
      age: 'Ages 9-11',
      description: 'Developing critical thinking skills and subject expertise with increased academic rigor and opportunities for leadership and co-curricular participation.',
      features: ['Critical Thinking', 'Subject Specialization', 'Leadership Skills', 'Project-Based Learning'],
    },
    {
      icon: School,
      title: 'Secondary School',
      grades: 'Grade 7 to 10',
      age: 'Ages 12-15',
      description: 'Comprehensive education following CBSE curriculum with focus on board examination preparation and career guidance for future academic paths.',
      features: ['CBSE Curriculum', 'Board Preparation', 'Career Counseling', 'Skill Development'],
    },
    {
      icon: GraduationCap,
      title: 'Senior Secondary',
      grades: 'Grade 11 to 12',
      age: 'Ages 16-17',
      description: 'Specialized streams including Science, Commerce, and Humanities with focus on competitive exam preparation and college readiness.',
      features: ['Stream Specialization', 'JEE/NEET Preparation', 'College Guidance', 'Research Projects'],
    },
    {
      icon: Award,
      title: 'Special Programs',
      grades: 'All Grades',
      age: 'All Ages',
      description: 'Additional enrichment programs including Olympiad training, robotics, coding, foreign languages, and various skill development courses.',
      features: ['Olympiad Training', 'Robotics & Coding', 'Foreign Languages', 'Skill Workshops'],
    },
  ];

  return (
    <Layout>
      <PageHeader title="Programs" breadcrumb="Programs" />
      
      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Academic Programs
            </span>
            <h2 className="heading-primary mb-4">Programs for Every Stage</h2>
            <p className="text-body">
              From early childhood to senior secondary, our comprehensive programs are designed 
              to nurture every stage of your child's educational journey.
            </p>
          </div>
          
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`bg-cream rounded-2xl overflow-hidden transition-all duration-500`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-primary p-8 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                      <program.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">{program.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-primary-foreground/10 text-primary-foreground px-3 py-1 rounded-full">
                        {program.grades}
                      </span>
                      <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                        {program.age}
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-sm text-primary font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
