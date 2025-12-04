import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumb: string | BreadcrumbItem[];
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
  const breadcrumbItems = typeof breadcrumb === 'string' 
    ? [{ name: breadcrumb }] 
    : breadcrumb;

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container-custom text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70 animate-fade-in-up animation-delay-200 flex-wrap">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          {breadcrumbItems.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              {item.path ? (
                <Link to={item.path} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-accent">{item.name}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;