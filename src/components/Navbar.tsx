import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    name: 'About',
    path: '/about',
    children: [
      { name: 'About Alif', path: '/about' },
      { name: 'Markaz Knowledge City', path: '/about/markaz' },
      { name: 'Alif Edu Trust', path: '/about/trust' },
      { name: 'Alif International School, Riyadh', path: '/about/riyadh' },
      { name: 'Alif Residence', path: '/about/residence' },
      { name: 'Testimonials', path: '/about/testimonials' },
      { name: 'Virtual Tour', path: '/about/virtual-tour' },
    ],
  },
  {
    name: 'Admission',
    path: '/admission',
    children: [
      { name: 'Admission Test', path: '/admission/test' },
      { name: 'Apply Online', path: '/admission/apply' },
      { name: 'Scholarships', path: '/admission/scholarships' },
    ],
  },
  {
    name: 'Academics',
    path: '/academics',
    children: [
      { name: "Principal's Message", path: '/academics/principal' },
      { name: 'Alif Zeeque Intl', path: '/academics/zeeque' },
      { name: 'Academic Calendar', path: '/academics/calendar' },
      { name: 'Learning Zone', path: '/academics/learning' },
      { name: 'Events', path: '/academics/events' },
      { name: 'News', path: '/academics/news' },
      { name: 'Gallery', path: '/academics/gallery' },
      { name: 'Alif Little World', path: '/academics/little-world' },
      { name: 'Career', path: '/academics/career' },
      { name: 'Transfer Certificate Download', path: '/academics/tc-download' },
      { name: 'Summer Camp', path: '/academics/summer-camp' },
    ],
  },
  {
    name: 'Programs',
    path: '/programs',
    children: [
      { name: 'AGS Talks', path: '/programs/ags-talks' },
      { name: 'Street Buzz', path: '/programs/street-buzz' },
      { name: 'Palette', path: '/programs/palette' },
      { name: 'Connected', path: '/programs/connected' },
      { name: 'Rankkhel', path: '/programs/rankkhel' },
      { name: 'Skill Surge', path: '/programs/skill-surge' },
      { name: 'Khelo', path: '/programs/khelo' },
      { name: 'Cross Roads', path: '/programs/cross-roads' },
    ],
  },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Mandatory Public Disclosure', path: '/disclosure' },
  { name: 'Contact', path: '/contact' },
  { name: 'Join Our Alumni', path: '/alumni' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleMobileExpand = (name: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/src/assets/alif-logo.png" alt="Alif Global School" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-all duration-300 relative group",
                location.pathname === '/'
                  ? "text-accent"
                  : "text-primary-foreground/90 hover:text-accent"
              )}
            >
              Home
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300",
                  location.pathname === '/' ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center gap-1",
                    location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                      ? "text-accent"
                      : "text-primary-foreground/90 hover:text-accent"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300",
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-0 w-64 bg-primary border-t border-white/10 rounded-b-lg shadow-xl overflow-hidden transition-all duration-300 origin-top",
                      activeDropdown === item.name
                        ? "opacity-100 scale-y-100 translate-y-0"
                        : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-primary-foreground/80 hover:text-accent hover:bg-white/5 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "xl:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[80vh] pb-4 overflow-y-auto" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                location.pathname === '/'
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground/90 hover:bg-white/10"
              )}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <div key={item.path}>
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    onClick={() => !item.children && setIsOpen(false)}
                    className={cn(
                      "flex-1 px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? "bg-accent text-accent-foreground"
                        : "text-primary-foreground/90 hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleMobileExpand(item.name)}
                      className="p-3 text-primary-foreground/80 hover:text-accent"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          mobileExpandedItems.includes(item.name) && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpandedItems.includes(item.name) && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;