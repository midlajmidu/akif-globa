import { Mail, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-white text-primary py-2 px-4 border-b border-border">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between text-sm gap-2">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>info@alifglobalschool.com</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>+91 8012800100</span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs opacity-80">CBSE Affiliation No: 931455</span>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/AlifGlobalSchool/" className="hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://x.com/AlifGloblschool" className="hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/channel/UCM0nmgTXk2ZMiiz7CYWEvBQ" className="hover:text-accent transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/alifglobalschool/" className="hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
