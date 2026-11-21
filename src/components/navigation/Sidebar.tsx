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
  Shield,
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

  const isMini = collapsed && !mobileOpen;

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
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col justify-between bg-earth-ivory border-r border-earth-sand shadow-earth-lg transition-all duration-300 ease-in-out select-none overflow-hidden h-screen ${
          // Desktop sizing: collapsed vs expanded
          isMini ? 'lg:w-20' : 'lg:w-64'
        } ${
          // Mobile drawer slide-in
          mobileOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        
        {/* Top Brand & Logo Area */}
        <div className="relative h-18 flex-shrink-0 flex items-center border-b border-earth-sand/80 bg-earth-cream/70 px-3">
          
          {isMini ? (
            /* Perfectly Centered Logo on top when collapsed */
            <Link
              to="/"
              className="w-full flex items-center justify-center group focus:outline-none py-1"
              title="ADILOK - The Living Heritage of Odisha"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-earth-terracotta p-0.5 border-2 border-earth-sand shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src="./assets/brand/adilok-symbol.svg"
                  alt="ADILOK Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          ) : (
            /* Full Expanded Brand Bar */
            <div className="w-full flex items-center justify-between overflow-hidden">
              <Link
                to="/"
                className="flex items-center gap-3 overflow-hidden group focus:outline-none"
                title="ADILOK - Home"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-earth-terracotta p-0.5 border border-earth-sand shadow-sm group-hover:scale-105 transition-transform">
                  <img
                    src="./assets/brand/adilok-symbol.svg"
                    alt="ADILOK Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>

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
              </Link>

              {/* Mobile Close Button */}
              <button
                onClick={onCloseMobile}
                className="lg:hidden p-2 rounded-lg text-earth-mud hover:text-earth-terracotta hover:bg-earth-sand/50"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Floating Edge Collapse / Expand Toggle Button on the Right Border */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-50 w-7 h-7 rounded-full bg-earth-terracotta text-white hover:bg-earth-soil border-2 border-earth-ivory shadow-md items-center justify-center transition-all hover:scale-110 focus:outline-none"
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

        </div>

        {/* Quick Search Button */}
        <div className="p-2 flex-shrink-0 border-b border-earth-sand/50">
          <button
            onClick={onOpenSearch}
            className={`flex items-center rounded-xl bg-earth-cream hover:bg-earth-sand/40 border border-earth-sand text-earth-mud hover:text-earth-soil transition-all group ${
              isMini
                ? 'w-12 h-9 mx-auto justify-center'
                : 'w-full gap-2.5 px-3 py-2 text-xs'
            }`}
            title="Search Cultural Archive (Ctrl + K)"
          >
            <Search className="w-4 h-4 text-earth-terracotta group-hover:scale-110 transition-transform flex-shrink-0" />
            {!isMini && (
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

        {/* Main Navigation Links (No scrolling, cleanly spaced) */}
        <nav className="flex-1 overflow-hidden px-2 py-1.5 space-y-1 flex flex-col justify-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative flex items-center rounded-xl transition-all group ${
                  isMini
                    ? 'w-12 h-10 mx-auto justify-center'
                    : 'w-full gap-2.5 px-3 py-2 text-xs font-semibold'
                } ${
                  active
                    ? 'bg-earth-terracotta text-white shadow-md'
                    : 'text-earth-soil hover:text-earth-terracotta hover:bg-earth-sand/40'
                }`}
                title={isMini ? link.label : undefined}
              >
                {/* Active left indicator bar */}
                {active && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-earth-sand" />
                )}

                <Icon
                  className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-110 ${
                    active ? 'text-white' : 'text-earth-terracotta'
                  }`}
                />

                {!isMini && (
                  <div className="flex flex-col truncate">
                    <span className="leading-tight truncate">{link.label}</span>
                    {language === 'or' && (
                      <span className={`text-[9px] font-odia font-normal ${active ? 'text-earth-sand' : 'text-earth-mud'}`}>
                        {link.odia}
                      </span>
                    )}
                  </div>
                )}

                {/* Collapsed Tooltip on hover */}
                {isMini && (
                  <div className="absolute left-full ml-3.5 px-3 py-1.5 bg-earth-soil text-earth-ivory text-xs font-medium rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                    {link.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Area: Controls + Integrated Footer Elements */}
        <div className="p-2.5 flex-shrink-0 border-t border-earth-sand/80 bg-earth-cream/50 space-y-1.5">
          
          {/* Exhibition Mode Link */}
          <Link
            to="/exhibition"
            className={`flex items-center rounded-xl bg-earth-forest text-earth-sand hover:bg-earth-forest/90 font-bold transition-all shadow-sm ${
              isMini
                ? 'w-12 h-9 mx-auto justify-center'
                : 'w-full gap-2 px-3 py-1.5 text-xs'
            }`}
            title="Launch 4K Large Touchscreen Exhibition Mode"
          >
            <MonitorPlay className="w-3.5 h-3.5 text-earth-sand flex-shrink-0" />
            {!isMini && (
              <span className="truncate">{t('navExhibition')}</span>
            )}
          </Link>

          {/* Language Switcher Button */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
            className={`flex items-center rounded-xl bg-earth-sand/40 hover:bg-earth-sand/70 text-earth-soil text-xs font-semibold transition-colors border border-earth-sand/80 ${
              isMini
                ? 'w-12 h-9 mx-auto justify-center'
                : 'w-full gap-2 px-3 py-1.5'
            }`}
            title="Switch Language (English / ଓଡ଼ିଆ)"
          >
            <Globe className="w-3.5 h-3.5 text-earth-terracotta flex-shrink-0" />
            {!isMini && (
              <span className="truncate">
                {language === 'en' ? 'ଓଡ଼ିଆ ଭାଷା' : 'English Mode'}
              </span>
            )}
          </button>

          {/* Accessibility Settings Toggle */}
          <div className="relative">
            <button
              onClick={() => setAccessibilityOpen(!accessibilityOpen)}
              className={`flex items-center rounded-xl text-xs font-semibold transition-colors ${
                accessibilityOpen
                  ? 'bg-earth-terracotta text-white'
                  : 'bg-earth-sand/30 hover:bg-earth-sand/60 text-earth-soil'
              } ${
                isMini
                  ? 'w-12 h-9 mx-auto justify-center'
                  : 'w-full gap-2 px-3 py-1.5'
              }`}
              title="Accessibility Tools"
            >
              <Eye className="w-3.5 h-3.5 flex-shrink-0" />
              {!isMini && (
                <span className="truncate">Accessibility</span>
              )}
            </button>

            {/* Accessibility Popover */}
            {accessibilityOpen && (
              <div
                className={`absolute bottom-full mb-2 w-64 bg-earth-ivory border border-earth-sand rounded-2xl shadow-earth-lg p-4 z-50 animate-in fade-in slide-in-from-bottom-2 ${
                  isMini ? 'left-full ml-3' : 'left-0'
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

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-earth-soil">High Contrast</span>
                  <input
                    type="checkbox"
                    checked={highContrast}
                    onChange={(e) => setHighContrast(e.target.checked)}
                    className="accent-earth-terracotta w-4 h-4 cursor-pointer"
                  />
                </div>

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

          {/* INTEGRATED FOOTER SECTION */}
          {isMini ? (
            /* Collapsed Footer: Shield Icon Tooltip */
            <Link
              to="/about"
              className="w-12 h-8 mx-auto flex items-center justify-center rounded-xl text-earth-mud hover:text-earth-terracotta hover:bg-earth-sand/30 transition-colors"
              title="Ethical Cultural Preservation & Academic Sources"
            >
              <Shield className="w-3.5 h-3.5" />
            </Link>
          ) : (
            /* Expanded Footer: Ethical Badge, Links & Copyright */
            <div className="pt-2 border-t border-earth-sand/60 space-y-1.5 text-[10px] text-earth-mud">
              <div className="flex items-center justify-between font-semibold">
                <Link to="/about" className="hover:text-earth-terracotta transition-colors">
                  Ethical Charter
                </Link>
                <span>·</span>
                <Link to="/research" className="hover:text-earth-terracotta transition-colors">
                  Sources
                </Link>
                <span>·</span>
                <Link to="/communities?filter=pvtg" className="text-earth-terracotta hover:underline">
                  13 PVTGs
                </Link>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] text-earth-ochre">
                <Shield className="w-3 h-3 text-earth-terracotta flex-shrink-0" />
                <span className="truncate">Culturally verified & authentic archive</span>
              </div>

              <div className="text-[9px] text-earth-mud/70 pt-0.5 truncate">
                © {new Date().getFullYear()} ADILOK · adilok.co.in
              </div>
            </div>
          )}

        </div>

      </aside>
    </>
  );
};
