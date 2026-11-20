import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Eye, Menu, X, MonitorPlay } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAccessibility } from '../../context/AccessibilityContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { fontScale, setFontScale, highContrast, setHighContrast, reducedMotion, setReducedMotion, resetAccessibility } = useAccessibility();

  const navLinks = [
    { to: '/', label: t('navHome') },
    { to: '/communities', label: t('navCommunities') },
    { to: '/culture', label: t('navCulture') },
    { to: '/explore', label: t('navExplore') },
    { to: '/museum', label: t('navMuseum') },
    { to: '/research', label: t('navResearch') },
    { to: '/about', label: t('navAbout') }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-earth-ivory/95 backdrop-blur-md border-b border-earth-sand/60 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-earth-terracotta rounded-lg p-1">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-earth-terracotta p-0.5 border border-earth-sand shadow-inner group-hover:scale-105 transition-transform">
              <img src="/assets/brand/adilok-symbol.svg" alt="ADILOK Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-2xl tracking-wider text-earth-soil">ADILOK</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-earth-terracotta/10 text-earth-terracotta font-semibold tracking-wide border border-earth-terracotta/20">
                  {language === 'or' ? 'ଓଡ଼ିଶା' : 'ODISHA'}
                </span>
              </div>
              <p className="text-[10px] font-sans font-medium uppercase tracking-widest text-earth-mud">
                {t('tagline')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'bg-earth-terracotta text-white shadow-sm'
                    : 'text-earth-soil hover:text-earth-terracotta hover:bg-earth-sand/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="hidden sm:flex items-center space-x-2">
            
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg text-earth-soil hover:text-earth-terracotta hover:bg-earth-sand/40 transition-colors focus:outline-none focus:ring-2 focus:ring-earth-terracotta"
              title="Search (Ctrl + K)"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-earth-sand/40 hover:bg-earth-sand/70 text-earth-soil transition-colors border border-earth-sand/80 focus:outline-none focus:ring-2 focus:ring-earth-terracotta"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-earth-terracotta" />
              <span>{language === 'en' ? 'ଓଡ଼ିଆ' : 'English'}</span>
            </button>

            {/* Accessibility Options */}
            <div className="relative">
              <button
                onClick={() => setAccessibilityOpen(!accessibilityOpen)}
                className={`p-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-earth-terracotta ${
                  accessibilityOpen ? 'bg-earth-sand text-earth-terracotta' : 'text-earth-soil hover:bg-earth-sand/40'
                }`}
                title="Accessibility Tools"
                aria-label="Toggle accessibility tools"
              >
                <Eye className="w-5 h-5" />
              </button>

              {accessibilityOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-earth-ivory border border-earth-sand rounded-xl shadow-earth-lg p-4 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-earth-sand">
                    <span className="font-semibold text-xs text-earth-soil uppercase tracking-wider">Accessibility Settings</span>
                    <button onClick={resetAccessibility} className="text-[11px] text-earth-terracotta hover:underline">Reset</button>
                  </div>
                  
                  {/* Font Size */}
                  <div className="mb-3">
                    <label className="text-xs text-earth-mud block mb-1">Text Sizing</label>
                    <div className="grid grid-cols-3 gap-1 bg-earth-sand/30 p-1 rounded-lg">
                      {(['sm', 'base', 'lg'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => setFontScale(size)}
                          className={`py-1 text-xs rounded font-medium transition-colors ${
                            fontScale === size ? 'bg-earth-terracotta text-white' : 'text-earth-soil hover:bg-earth-sand/50'
                          }`}
                        >
                          {size === 'sm' ? 'A-' : size === 'base' ? 'A' : 'A+'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* High Contrast */}
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-xs text-earth-soil">High Contrast</span>
                    <input
                      type="checkbox"
                      checked={highContrast}
                      onChange={(e) => setHighContrast(e.target.checked)}
                      className="accent-earth-terracotta w-4 h-4 cursor-pointer"
                    />
                  </div>

                  {/* Reduced Motion */}
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-xs text-earth-soil">Reduce Motion</span>
                    <input
                      type="checkbox"
                      checked={reducedMotion}
                      onChange={(e) => setReducedMotion(e.target.checked)}
                      className="accent-earth-terracotta w-4 h-4 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Exhibition / Kiosk Mode link */}
            <Link
              to="/exhibition"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-earth-forest text-white hover:bg-earth-forest/90 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-earth-forest"
              title="Open Large Touchscreen Museum Mode"
            >
              <MonitorPlay className="w-3.5 h-3.5 text-earth-sand" />
              <span>{t('navExhibition')}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-earth-soil hover:bg-earth-sand/40"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
              className="px-2 py-1 text-xs font-bold bg-earth-sand/40 text-earth-soil rounded"
            >
              {language === 'en' ? 'ଓଡ଼ି' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-earth-soil hover:bg-earth-sand/40 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-earth-ivory border-b border-earth-sand px-4 pt-2 pb-6 space-y-2 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                isActive(link.to)
                  ? 'bg-earth-terracotta text-white'
                  : 'text-earth-soil hover:bg-earth-sand/40'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-earth-sand flex flex-col gap-2">
            <Link
              to="/exhibition"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-earth-forest text-white font-semibold text-sm"
            >
              <MonitorPlay className="w-4 h-4 text-earth-sand" />
              <span>{t('navExhibition')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
