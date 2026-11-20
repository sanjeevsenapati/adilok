import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, Shield, BookOpen, ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-earth-soil text-earth-ivory relative border-t-4 border-earth-terracotta overflow-hidden">
      
      {/* Decorative Tribal Top Border */}
      <div className="w-full h-3 bg-repeat-x opacity-40" style={{ backgroundImage: "url('/assets/decorative/borders/saura-border.svg')" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-earth-mud/50">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-earth-terracotta p-0.5 border border-earth-sand/40">
                <img src="/assets/brand/adilok-symbol.svg" alt="ADILOK Emblem" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif font-black text-2xl tracking-wider text-earth-sand">ADILOK</span>
            </div>
            <p className="text-earth-sand/80 text-sm leading-relaxed pr-6">
              {language === 'or'
                ? 'ଓଡ଼ିଶାର ୬୨ଟି ସ୍ୱାଭିମାନୀ ଜନଜାତିଙ୍କ ଜୀବନ୍ତ ପରମ୍ପରା, ସାକ୍ରେଡ୍ କଳା, ମୌଖିକ ଇତିହାସ ଏବଂ ପ୍ରାକୃତିକ ଜ୍ଞାନର ଡିଜିଟାଲ୍ ସଂରକ୍ଷଣ ମଞ୍ଚ।'
                : 'A dedicated digital cultural sanctuary celebrating the living heritage, sacred art, songs, ecological wisdom, and oral histories of the 62 indigenous tribes of Odisha, India.'}
            </p>
            <div className="flex items-center gap-3 text-xs text-earth-ochre pt-2">
              <Shield className="w-4 h-4 text-earth-terracotta" />
              <span>Culturally verified & ethical indigenous preservation</span>
            </div>
          </div>

          {/* Quick Links: Communities & Culture */}
          <div>
            <h4 className="font-serif font-semibold text-earth-sand text-sm uppercase tracking-wider mb-4 border-b border-earth-terracotta/40 pb-2">
              {t('navCommunities')}
            </h4>
            <ul className="space-y-2 text-sm text-earth-ivory/80">
              <li><Link to="/communities?filter=dongria-kondh" className="hover:text-earth-sand transition-colors">Dongria Kondh</Link></li>
              <li><Link to="/communities?filter=lanjia-saora" className="hover:text-earth-sand transition-colors">Lanjia Saora</Link></li>
              <li><Link to="/communities?filter=bonda" className="hover:text-earth-sand transition-colors">Bonda (Remo)</Link></li>
              <li><Link to="/communities?filter=santal" className="hover:text-earth-sand transition-colors">Santal</Link></li>
              <li><Link to="/communities?filter=gadaba" className="hover:text-earth-sand transition-colors">Gadaba</Link></li>
              <li><Link to="/communities?filter=pvtg" className="hover:text-earth-sand transition-colors text-earth-ochre font-medium">13 PVTGs of Odisha</Link></li>
            </ul>
          </div>

          {/* Discover & Explore */}
          <div>
            <h4 className="font-serif font-semibold text-earth-sand text-sm uppercase tracking-wider mb-4 border-b border-earth-terracotta/40 pb-2">
              {t('navCulture')}
            </h4>
            <ul className="space-y-2 text-sm text-earth-ivory/80">
              <li><Link to="/culture?category=dance" className="hover:text-earth-sand transition-colors">Dhemsa & Folk Dances</Link></li>
              <li><Link to="/culture?category=art" className="hover:text-earth-sand transition-colors">Saura Idital Paintings</Link></li>
              <li><Link to="/culture?category=clothing" className="hover:text-earth-sand transition-colors">Kapdaganda GI Weaves</Link></li>
              <li><Link to="/explore" className="hover:text-earth-sand transition-colors">Interactive Odisha Map</Link></li>
              <li><Link to="/museum" className="hover:text-earth-sand transition-colors">Digital Museum Gallery</Link></li>
              <li><Link to="/research" className="hover:text-earth-sand transition-colors">Research Monographs</Link></li>
            </ul>
          </div>

          {/* Digital Museum & Kiosk */}
          <div>
            <h4 className="font-serif font-semibold text-earth-sand text-sm uppercase tracking-wider mb-4 border-b border-earth-terracotta/40 pb-2">
              {language === 'or' ? 'ଅଭିଲେଖାଗାର' : 'Museum & Kiosk'}
            </h4>
            <p className="text-xs text-earth-sand/70 mb-4 leading-normal">
              Designed for public museums, touchscreens, and schools.
            </p>
            <Link
              to="/exhibition"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-earth-terracotta text-white text-xs font-semibold hover:bg-earth-mud transition-colors mb-4"
            >
              <span>{t('navExhibition')}</span>
            </Link>
            <div className="pt-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
                className="flex items-center gap-1.5 text-xs text-earth-sand/90 hover:text-white"
              >
                <Globe className="w-3.5 h-3.5 text-earth-ochre" />
                <span>Switch to {language === 'en' ? 'ଓଡ଼ିଆ' : 'English'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-earth-sand/60 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ADILOK (https://adilok.co.in). Built with reverence for Odisha's indigenous heritage.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-earth-sand transition-colors">Ethical Guidelines</Link>
            <Link to="/research" className="hover:text-earth-sand transition-colors">Sources & Citations</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-full bg-earth-mud/40 hover:bg-earth-terracotta text-earth-sand hover:text-white transition-colors"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
