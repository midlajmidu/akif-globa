import { Mail, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between text-sm gap-2">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>info@yourschool.edu</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+91 1234 567 890</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs opacity-80">CBSE Affiliation No: 123456</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
