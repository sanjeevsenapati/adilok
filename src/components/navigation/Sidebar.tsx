import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Sparkles,
  Compass,
  Landmark,
  BookOpen,
  Info,
  Search,
  Globe,
  Eye,
  ChevronLeft,
  ChevronRight,
  MonitorPlay,
  X
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAccessibility } from '../../context/AccessibilityContext';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onOpenSearch: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  onCloseMobile,
  onOpenSearch
}) => {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const {
    fontScale,
    setFontScale,
    highContrast,
    setHighContrast,
    reducedMotion,
    setReducedMotion,
    resetAccessibility
  } = useAccessibility();

  // Close mobile drawer on route change
  useEffect(() => {
    onCloseMobile();
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t('navHome'), odia: 'ମୂଳପୃଷ୍ଠା', icon: Home },
    { to: '/communities', label: t('navCommunities'), odia: 'ଆଦିବାସୀ ସମୁଦାୟ', icon: Users },
    { to: '/culture', label: t('navCulture'), odia: 'ସଂସ୍କୃତି ଓ ପରମ୍ପରା', icon: Sparkles },
    { to: '/explore', label: t('navExplore'), odia: 'ଓଡ଼ିଶା ଦର୍ଶନ', icon: Compass },
    { to: '/museum', label: t('navMuseum'), odia: 'ଡିଜିଟାଲ୍ ସଂଗ୍ରହାଳୟ', icon: Landmark },
    { to: '/research', label: t('navResearch'), odia: 'ଗବେଷଣା ଅଭିଲେଖାଗାର', icon: BookOpen },
    { to: '/about', label: t('navAbout'), odia: 'ଆଦିଲୋକ ବିଷୟରେ', icon: Info }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-earth-soil/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-earth-ivory border-r border-earth-sand shadow-earth-lg transition-all duration-300 ease-in-out select-none ${
          // Desktop sizing: collapsed vs expanded
          collapsed ? 'lg:w-20' : 'lg:w-64'
        } ${
          // Mobile drawer slide-in
          mobileOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        
        {/* Brand Header & Toggle */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-earth-sand/80 bg-earth-cream/60">
          
          <Link
            to="/"
            className="flex items-center gap-3 overflow-hidden group focus:outline-none"
            title="ADILOK - Home"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-earth-terracotta p-0.5 border border-earth-sand shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="/assets/brand/adilok-symbol.svg"
                alt="ADILOK Emblem"
                className="w-full h-full object-contain"
              />
            </div>

            {(!collapsed || mobileOpen) && (
              <div className="flex flex-col truncate">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-black text-xl tracking-wider text-earth-soil">
                    ADILOK
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-earth-terracotta/10 text-earth-terracotta font-bold border border-earth-terracotta/20">
                    ODISHA
                  </span>
                </div>
                <span className="text-[9px] font-sans font-semibold uppercase tracking-widest text-earth-mud truncate">
                  {t('tagline')}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Collapse / Expand Toggle Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-1.5 rounded-lg text-earth-mud hover:text-earth-terracotta hover:bg-earth-sand/50 transition-colors focus:outline-none"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-2 rounded-lg text-earth-mud hover:text-earth-terracotta hover:bg-earth-sand/50"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

        {/* Quick Search Button in Sidebar */}
        <div className="p-3 border-b border-earth-sand/50">
          <button
            onClick={onOpenSearch}
            className={`w-full flex items-center rounded-xl bg-earth-cream hover:bg-earth-sand/40 border border-earth-sand text-earth-mud hover:text-earth-soil transition-all group ${
              collapsed && !mobileOpen ? 'justify-center p-2.5' : 'gap-3 px-3.5 py-2.5 text-xs'
            }`}
            title="Search Cultural Archive (Ctrl + K)"
          >
            <Search className="w-4 h-4 text-earth-terracotta group-hover:scale-110 transition-transform flex-shrink-0" />
            {(!collapsed || mobileOpen) && (
              <>
                <span className="font-medium text-earth-mud/80 text-left flex-grow truncate">
                  {language === 'or' ? 'ଅନୁସନ୍ଧାନ କରନ୍ତୁ...' : 'Search archive...'}
                </span>
                <kbd className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-earth-sand/60 text-earth-soil">
                  ⌘K
                </kbd>
              </>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow overflow-y-auto px-3 py-4 space-y-1.5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative flex items-center rounded-xl transition-all group ${
                  collapsed && !mobileOpen
                    ? 'justify-center p-3'
                    : 'gap-3 px-3.5 py-2.5 text-xs font-semibold'
                } ${
                  active
                    ? 'bg-earth-terracotta text-white shadow-md'
                    : 'text-earth-soil hover:text-earth-terracotta hover:bg-earth-sand/35'
                }`}
                title={collapsed && !mobileOpen ? link.label : undefined}
              >
                {/* Active left indicator bar */}
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-earth-sand" />
                )}

                <Icon
                  className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-105 ${
                    active ? 'text-white' : 'text-earth-terracotta'
                  }`}
                />

                {(!collapsed || mobileOpen) && (
                  <div className="flex flex-col truncate">
                    <span className="leading-tight truncate">{link.label}</span>
                    {language === 'or' && (
                      <span className={`text-[10px] font-odia font-normal ${active ? 'text-earth-sand' : 'text-earth-mud'}`}>
                        {link.odia}
                      </span>
                    )}
                  </div>
                )}

                {/* Collapsed Tooltip on hover */}
                {collapsed && !mobileOpen && (
                  <div className="absolute left-full ml-3 px-3 py-1.5 bg-earth-soil text-earth-ivory text-xs font-medium rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                    {link.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Utility Controls */}
        <div className="p-3 border-t border-earth-sand/80 bg-earth-cream/40 space-y-2">
          
          {/* Exhibition Mode Link */}
          <Link
            to="/exhibition"
            className={`flex items-center rounded-xl bg-earth-forest text-earth-sand hover:bg-earth-forest/90 font-bold transition-all shadow-sm ${
              collapsed && !mobileOpen ? 'justify-center p-2.5' : 'gap-2.5 px-3.5 py-2.5 text-xs'
            }`}
            title="Launch 4K Large Touchscreen Exhibition Mode"
          >
            <MonitorPlay className="w-4 h-4 text-earth-sand flex-shrink-0" />
            {(!collapsed || mobileOpen) && (
              <span className="truncate">{t('navExhibition')}</span>
            )}
          </Link>

          {/* Language Switcher Button */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
            className={`w-full flex items-center rounded-xl bg-earth-sand/40 hover:bg-earth-sand/70 text-earth-soil text-xs font-semibold transition-colors border border-earth-sand/80 ${
              collapsed && !mobileOpen ? 'justify-center p-2.5' : 'gap-2.5 px-3.5 py-2'
            }`}
            title="Switch Language (English / ଓଡ଼ିଆ)"
          >
            <Globe className="w-4 h-4 text-earth-terracotta flex-shrink-0" />
            {(!collapsed || mobileOpen) && (
              <span className="truncate">
                {language === 'en' ? 'ଓଡ଼ିଆ ଭାଷା' : 'English Mode'}
              </span>
            )}
          </button>

          {/* Accessibility Settings Toggle */}
          <div className="relative">
            <button
              onClick={() => setAccessibilityOpen(!accessibilityOpen)}
              className={`w-full flex items-center rounded-xl text-xs font-semibold transition-colors ${
                accessibilityOpen
                  ? 'bg-earth-terracotta text-white'
                  : 'bg-earth-sand/30 hover:bg-earth-sand/60 text-earth-soil'
              } ${collapsed && !mobileOpen ? 'justify-center p-2.5' : 'gap-2.5 px-3.5 py-2'}`}
              title="Accessibility Tools"
            >
              <Eye className="w-4 h-4 flex-shrink-0" />
              {(!collapsed || mobileOpen) && (
                <span className="truncate">Accessibility</span>
              )}
            </button>

            {/* Accessibility Popover */}
            {accessibilityOpen && (
              <div
                className={`absolute bottom-full mb-2 w-64 bg-earth-ivory border border-earth-sand rounded-2xl shadow-earth-lg p-4 z-50 animate-in fade-in slide-in-from-bottom-2 ${
                  collapsed && !mobileOpen ? 'left-full ml-2' : 'left-0'
                }`}
              >
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-earth-sand">
                  <span className="font-semibold text-xs text-earth-soil uppercase tracking-wider">
                    Accessibility Settings
                  </span>
                  <button
                    onClick={resetAccessibility}
                    className="text-[11px] text-earth-terracotta hover:underline font-medium"
                  >
                    Reset
                  </button>
                </div>

                {/* Font Scaling */}
                <div className="mb-3">
                  <label className="text-xs text-earth-mud block mb-1">Text Sizing</label>
                  <div className="grid grid-cols-3 gap-1 bg-earth-sand/30 p-1 rounded-lg">
                    {(['sm', 'base', 'lg'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setFontScale(size)}
                        className={`py-1 text-xs rounded font-medium transition-colors ${
                          fontScale === size
                            ? 'bg-earth-terracotta text-white'
                            : 'text-earth-soil hover:bg-earth-sand/50'
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

        </div>

      </aside>
    </>
  );
};
