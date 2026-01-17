import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Youtube, Instagram, ArrowRight } from 'lucide-react';
import logo from '@/assets/alif-logo.webp';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Admission', path: '/admission' },
  { name: 'Academics', path: '/academics' },
  { name: 'Programs', path: '/programs' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Contact Us', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Alif Global School" className="h-16 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              a top-notch international school in Kozhikode, we believe that every child has the potential to succeed.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/AlifGlobalSchool/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://x.com/AlifGloblschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/channel/UCM0nmgTXk2ZMiiz7CYWEvBQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="YouTube">
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/alifglobalschool/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold relative inline-block">
              Quick Contact
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-accent rounded-full" />
            </h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm opacity-80">
                  Markaz Knowledge City, Unnikulam,<br />
                  Kozhikode, Kerala 673574
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <p className="text-sm opacity-80">+91 8012800100, 8012600400</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <p className="text-sm opacity-80">info@alifglobalschool.com</p>
              </div>
            </div>
          </div>

          {/* Office Timing */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold relative inline-block">
              Office Timing
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-accent rounded-full" />
            </h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm opacity-80">
                  <p className="font-medium text-primary-foreground">Monday - Saturday</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <p className="text-sm opacity-60">Closed on Sundays & Public Holidays</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-accent rounded-full" />
            </h3>
            <div className="space-y-2 mt-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Alif School. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm opacity-60">
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
