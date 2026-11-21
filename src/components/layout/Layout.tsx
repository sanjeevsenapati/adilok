import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Globe } from 'lucide-react';
import { Sidebar } from '../navigation/Sidebar';
import { SearchModal } from '../navigation/SearchModal';
import { useLanguage } from '../../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('adilok_sidebar_collapsed') === 'true';
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    localStorage.setItem('adilok_sidebar_collapsed', String(collapsed));
  }, [collapsed]);

  return (
    <div className="min-h-screen bg-earth-cream text-earth-soil selection:bg-earth-terracotta selection:text-white flex flex-col">
      
      {/* Left Collapsible Sidebar with Integrated Footer & Ethic Links */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page Content Wrapper (Padded on desktop based on sidebar collapsed state) */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${
          collapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        
        {/* Mobile Slim Top Bar (Visible only on lg:hidden) */}
        <header className="lg:hidden sticky top-0 z-30 h-16 bg-earth-ivory/95 backdrop-blur-md border-b border-earth-sand px-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-xl text-earth-soil hover:bg-earth-sand/50 transition-colors"
              aria-label="Open navigation sidebar"
            >
              <Menu className="w-6 h-6 text-earth-terracotta" />
            </button>

            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-earth-terracotta p-0.5 border border-earth-sand">
                <img
                  src="./assets/brand/adilok-symbol.svg"
                  alt="ADILOK"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-black text-xl text-earth-soil tracking-wide">
                ADILOK
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl text-earth-soil hover:bg-earth-sand/50"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-earth-terracotta" />
            </button>

            <button
              onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-earth-sand/40 text-earth-soil border border-earth-sand/70 flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-earth-terracotta" />
              <span>{language === 'en' ? 'ଓଡ଼ି' : 'EN'}</span>
            </button>
          </div>
        </header>

        {/* Dynamic Main Body Content */}
        <main className="flex-grow">
          {children}
        </main>

      </div>

      {/* Global Universal Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

    </div>
  );
};
