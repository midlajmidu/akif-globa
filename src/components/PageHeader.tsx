import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container-custom text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70 animate-fade-in-up animation-delay-200">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-accent">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
