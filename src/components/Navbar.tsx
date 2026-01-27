import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/alif-logo.webp';

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    name: 'About',
    path: '/about/',
    children: [
      { name: 'About Alif', path: '/about/' },
      { name: 'Markaz Knowledge City', path: '/mkc/' },
      { name: 'Alif Edu Trust', path: '/alif-edu-trust/' },
      { name: 'Alif International School, Riyadh', path: '/alif-international-school-riyadh-ksa/' },
      { name: "Principal's Message", path: '/principal-message/' },
      { name: 'Alif Residence', path: '/alif-residence/' },
      { name: 'Testimonials', path: '/testimonials/' },
      { name: 'Virtual Tour', path: '/virtual-tour/' },
    ],
  },
  {
    name: 'Admission',
    path: '/admissions/',
    children: [
      { name: 'Admission Test', path: '/admission-test/' },
      { name: 'Apply Online', path: '/apply-online/' },
      { name: 'Scholarships', path: '/scholarships/' },
    ],
  },
  {
    name: 'Academics',
    path: '/learning-zone/',
    children: [
      { name: 'Alif Zeeque Intl', path: '/alif-zeeque-intl/' },
      { name: 'Academic Calendar', path: '/academic-calendar/' },
      { name: 'Learning Zone', path: '/learning-zone/' },
      { name: 'News', path: '/news/' },
      { name: 'Gallery', path: '/gallery/' },
      { name: 'Career', path: '/career/' },
      { name: 'Transfer Certificate Download', path: '/downloads/' },
      { name: 'Summer Camp', path: '/summer-camp/' },
    ],
  },
  {
    name: 'Programs',
    path: '/ags-talks/',
    children: [
      { name: 'AGS Talks', path: '/ags-talks/' },
      { name: 'Palette', path: '/palette/' },
      { name: 'Connected', path: '/connect-ed/' },
      { name: 'Rankkhel', path: '/rankhel/' },
      { name: 'Skill Surge', path: '/skill-surge/' },
      { name: 'Khelo', path: '/khelo/' },
      { name: 'Cross Roads', path: '/cross-roads/' },
      { name: 'Qitaf Fiesta', path: '/qitaf-fiesta/' },
    ],
  },
  { name: 'Facilities', path: '/facilities/' },
  { name: 'Mandatory Public Disclosure', path: '/mandatory-public-disclosure/' },
  { name: 'Contact', path: '/contact-us/' },
  { name: 'Join Our Alumni', path: '/join-our-alumni/' },
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
            <img src={logo} alt="Alif Global School" className="h-16 w-auto object-contain" />
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
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
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