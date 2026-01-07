import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist. Return to Alif Global School homepage."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: '404', path: location.pathname }
        ]}
      />
      <div className="min-h-[60vh] flex items-center justify-center section-padding">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-bold text-accent/20 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
