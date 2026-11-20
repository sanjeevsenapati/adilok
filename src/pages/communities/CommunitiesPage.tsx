import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, ShieldCheck, Grid, List, Users, Compass, Languages, RotateCcw, 
  Sparkles, ArrowUp, Trees, Mountain, Eye, Flame, HeartHandshake
} from 'lucide-react';
import { communitiesData } from '../../data/communities';
import { CommunityCard } from '../../components/cards/CommunityCard';
import { EarthSelect } from '../../components/common/EarthSelect';
import { LanguageFamily, OdishaRegion } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export const CommunitiesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedPVTG, setSelectedPVTG] = useState<string>(initialFilter === 'pvtg' ? 'pvtg' : 'all');
  const [selectedLanguageFamily, setSelectedLanguageFamily] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [activeTotem, setActiveTotem] = useState<string | null>(null);

  const { language } = useLanguage();

  const regions: ('All' | OdishaRegion)[] = [
    'All',
    'Southern Highlands',
    'Northern Plateau',
    'Central Hills'
  ];

  const languageFamilies: ('All' | LanguageFamily)[] = [
    'All',
    'Dravidian',
    'Austroasiatic (Munda)'
  ];

  const letters = ['All', ...Array.from(new Set(communitiesData.map(c => c.name[0]))).sort()];

  // Totemic clan filters
  const totems = [
    { id: 'dongria-kondh', label: '🐅 Niyam Raja Tiger (Dongria)', slug: 'dongria-kondh' },
    { id: 'lanjia-saora', label: '🦚 Ransang / Peacock (Saora)', slug: 'lanjia-saora' },
    { id: 'bonda', label: '☀️ Sing Bonga Sun (Bonda)', slug: 'bonda' },
    { id: 'santal', label: '🌳 Marang Buru Sal (Santal)', slug: 'santal' },
    { id: 'gadaba', label: '🌊 Macchya River Clan (Gadaba)', slug: 'gadaba' },
    { id: 'juang', label: '🌿 Dharam Devata (Juang)', slug: 'juang' },
  ];

  const filteredCommunities = useMemo(() => {
    return communitiesData.filter(c => {
      // Totem quick selection
      if (activeTotem && c.slug !== activeTotem) {
        return false;
      }

      // Search text
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.nativeName.includes(searchTerm) ||
        c.districts.some(d => d.toLowerCase().includes(searchTerm.toLowerCase())) ||
        c.languages.some(l => l.toLowerCase().includes(searchTerm.toLowerCase()));

      // Region
      const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;

      // PVTG
      const matchesPVTG =
        selectedPVTG === 'all' ||
        (selectedPVTG === 'pvtg' && c.isPVTG);

      // Language Family
      const matchesLangFamily =
        selectedLanguageFamily === 'All' || c.languageFamily === selectedLanguageFamily;

      // Letter
      const matchesLetter = selectedLetter === 'All' || c.name.startsWith(selectedLetter);

      return matchesSearch && matchesRegion && matchesPVTG && matchesLangFamily && matchesLetter;
    });
  }, [searchTerm, selectedRegion, selectedPVTG, selectedLanguageFamily, selectedLetter, activeTotem]);

  const pvtgCount = useMemo(() => communitiesData.filter(c => c.isPVTG).length, []);

  const scrollToGrid = () => {
    const el = document.getElementById('communities-results');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-earth-cream min-h-screen py-12 pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-terracotta/20 text-earth-terracotta text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Living Ethnographic Directory</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            Tribal Communities of Odisha
          </h1>
          <p className="text-sm sm:text-base text-earth-mud mt-2 leading-relaxed">
            Odisha is home to 62 officially recognized Scheduled Tribes, including 13 Particularly Vulnerable Tribal Groups (PVTGs)—the highest concentration of distinct indigenous lineages anywhere in India.
          </p>
        </div>

        {/* ========================================================
            INTERACTIVE ETHNOGRAPHIC INSIGHTS BAR (CLICKABLE KPIS)
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: All 62 Tribes */}
          <button
            onClick={() => {
              setSelectedPVTG('all');
              setSelectedRegion('All');
              setSelectedLanguageFamily('All');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`p-5 rounded-2xl border text-left transition-all group ${
              selectedPVTG === 'all' && selectedRegion === 'All' && selectedLanguageFamily === 'All' && !activeTotem
                ? 'bg-earth-soil text-white border-earth-terracotta shadow-earth-lg'
                : 'bg-earth-ivory text-earth-soil border-earth-sand hover:border-earth-terracotta/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold tracking-wider opacity-75">All Recognized</span>
              <Users className="w-5 h-5 text-earth-ochre group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-serif font-black text-3xl">62 Tribes</div>
            <p className="text-xs mt-1.5 opacity-80 leading-relaxed">
              22.85% of Odisha's population across 30 administrative districts.
            </p>
            <div className="mt-3 text-[11px] font-bold text-earth-terracotta group-hover:underline flex items-center gap-1">
              <span>View All 62</span>
              <span>→</span>
            </div>
          </button>

          {/* Card 2: 13 PVTGs */}
          <button
            onClick={() => {
              setSelectedPVTG('pvtg');
              setSelectedRegion('All');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`p-5 rounded-2xl border text-left transition-all group ${
              selectedPVTG === 'pvtg'
                ? 'bg-earth-soil text-white border-earth-terracotta shadow-earth-lg'
                : 'bg-earth-ivory text-earth-soil border-earth-sand hover:border-earth-terracotta/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-earth-terracotta font-mono">High Priority</span>
              <ShieldCheck className="w-5 h-5 text-earth-terracotta group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-serif font-black text-3xl">13 PVTGs</div>
            <p className="text-xs mt-1.5 opacity-80 leading-relaxed">
              Particularly Vulnerable Groups: Bonda, Dongria, Saora, Kutia, Juang, Paudi Bhuyan.
            </p>
            <div className="mt-3 text-[11px] font-bold text-earth-terracotta group-hover:underline flex items-center gap-1">
              <span>Filter PVTGs Only</span>
              <span>→</span>
            </div>
          </button>

          {/* Card 3: 2 Language Stocks */}
          <button
            onClick={() => {
              setSelectedLanguageFamily(selectedLanguageFamily === 'Austroasiatic (Munda)' ? 'Dravidian' : 'Austroasiatic (Munda)');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`p-5 rounded-2xl border text-left transition-all group ${
              selectedLanguageFamily !== 'All'
                ? 'bg-earth-soil text-white border-earth-terracotta shadow-earth-lg'
                : 'bg-earth-ivory text-earth-soil border-earth-sand hover:border-earth-terracotta/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold tracking-wider opacity-75">Language Families</span>
              <Languages className="w-5 h-5 text-earth-forest group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-serif font-black text-3xl">2 Ancient Roots</div>
            <p className="text-xs mt-1.5 opacity-80 leading-relaxed">
              Pre-Aryan Austroasiatic (Munda, Kui) and Dravidian linguistic heritages.
            </p>
            <div className="mt-3 text-[11px] font-bold text-earth-forest group-hover:underline flex items-center gap-1">
              <span>{selectedLanguageFamily === 'All' ? 'Filter Languages' : `Active: ${selectedLanguageFamily}`}</span>
              <span>→</span>
            </div>
          </button>

          {/* Card 4: 3 Physiographic Zones */}
          <button
            onClick={() => {
              setSelectedRegion(selectedRegion === 'Southern Highlands' ? 'Northern Plateau' : 'Southern Highlands');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`p-5 rounded-2xl border text-left transition-all group ${
              selectedRegion !== 'All'
                ? 'bg-earth-soil text-white border-earth-terracotta shadow-earth-lg'
                : 'bg-earth-ivory text-earth-soil border-earth-sand hover:border-earth-terracotta/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold tracking-wider opacity-75">Geography</span>
              <Mountain className="w-5 h-5 text-earth-mud group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-serif font-black text-3xl">3 Hill Belts</div>
            <p className="text-xs mt-1.5 opacity-80 leading-relaxed">
              Eastern Ghats Highlands, Similipal Iron Ranges, and Central River Basin valleys.
            </p>
            <div className="mt-3 text-[11px] font-bold text-earth-mud group-hover:underline flex items-center gap-1">
              <span>{selectedRegion === 'All' ? 'Filter Regions' : `Active: ${selectedRegion}`}</span>
              <span>→</span>
            </div>
          </button>

        </div>

        {/* ========================================================
            INTERACTIVE TOTEMIC CLAN BADGES
            ======================================================== */}
        <div className="bg-earth-ivory p-4 sm:p-5 rounded-2xl border border-earth-sand shadow-earth space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-earth-terracotta" />
              <span className="text-xs font-bold uppercase tracking-wider text-earth-soil">
                Interactive Clan Totem Explorer
              </span>
            </div>
            <span className="text-[11px] text-earth-mud">
              Click a sacred clan emblem to instantly inspect their lineage:
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {totems.map((t) => {
              const isSelected = activeTotem === t.slug;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTotem(isSelected ? null : t.slug);
                    scrollToGrid();
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-earth-terracotta text-white shadow-md scale-105'
                      : 'bg-earth-cream text-earth-soil border border-earth-sand/80 hover:bg-earth-sand/50'
                  }`}
                >
                  <span>{t.label}</span>
                </button>
              );
            })}
            {activeTotem && (
              <button
                onClick={() => setActiveTotem(null)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-earth-terracotta hover:underline"
              >
                Clear Totem
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            FILTERS AND SEARCH BAR CONTAINER
            ======================================================== */}
        <div className="bg-earth-ivory p-6 rounded-2xl border border-earth-sand shadow-earth space-y-4">
          
          {/* Top Row: Search and Quick Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-earth-mud/70" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by tribe name, native Odia name, district, or language..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-earth-cream border border-earth-sand text-earth-soil placeholder-earth-mud/60 text-sm focus:outline-none focus:ring-2 focus:ring-earth-terracotta"
              />
            </div>

            {/* PVTG Filter Pills & View Mode */}
            <div className="md:col-span-4 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedPVTG(selectedPVTG === 'pvtg' ? 'all' : 'pvtg')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedPVTG === 'pvtg'
                    ? 'bg-earth-terracotta text-white shadow'
                    : 'bg-earth-sand/30 text-earth-soil hover:bg-earth-sand/60'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>PVTGs Only ({pvtgCount})</span>
              </button>

              {/* View Mode Toggle */}
              <div className="flex bg-earth-sand/30 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg ${viewMode === 'grid' ? 'bg-earth-terracotta text-white' : 'text-earth-mud'}`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg ${viewMode === 'list' ? 'bg-earth-terracotta text-white' : 'text-earth-mud'}`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Secondary Filters: Region & Language Family */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-3 border-t border-earth-sand/60">
            
            {/* Region Earth-themed Dropdown */}
            <EarthSelect
              label="Filter by Region"
              value={selectedRegion}
              onChange={(val) => {
                setSelectedRegion(val);
                setActiveTotem(null);
              }}
              options={regions}
              icon={Compass}
            />

            {/* Language Family Earth-themed Dropdown */}
            <EarthSelect
              label="Language Family"
              value={selectedLanguageFamily}
              onChange={(val) => {
                setSelectedLanguageFamily(val);
                setActiveTotem(null);
              }}
              options={languageFamilies}
              icon={Languages}
            />

            {/* Quick Reset */}
            <div className="flex flex-col justify-end">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedRegion('All');
                  setSelectedPVTG('all');
                  setSelectedLanguageFamily('All');
                  setSelectedLetter('All');
                  setActiveTotem(null);
                }}
                className="w-full py-2.5 px-3.5 rounded-xl bg-earth-sand/30 hover:bg-earth-sand/60 border border-earth-sand text-xs font-semibold text-earth-soil transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5 text-earth-terracotta" />
                <span>Reset All Filters</span>
              </button>
            </div>

          </div>

          {/* Alphabetical Jump Bar */}
          <div className="flex items-center gap-1 overflow-x-auto pt-2 border-t border-earth-sand/40 pb-1">
            <span className="text-[10px] font-bold uppercase text-earth-mud mr-1">Index:</span>
            {letters.map((char) => (
              <button
                key={char}
                onClick={() => {
                  setSelectedLetter(char);
                  setActiveTotem(null);
                }}
                className={`px-2.5 py-0.5 rounded text-xs font-bold transition-colors ${
                  selectedLetter === char
                    ? 'bg-earth-terracotta text-white'
                    : 'text-earth-mud hover:bg-earth-sand/50'
                }`}
              >
                {char}
              </button>
            ))}
          </div>

        </div>

        {/* Result Statistics */}
        <div id="communities-results" className="flex items-center justify-between text-xs text-earth-mud px-1">
          <span>
            Showing <strong className="text-earth-soil">{filteredCommunities.length}</strong> indigenous communities
          </span>
          {selectedPVTG === 'pvtg' && (
            <span className="text-earth-terracotta font-semibold">
              Filter Active: Particularly Vulnerable Tribal Groups
            </span>
          )}
          {activeTotem && (
            <span className="text-earth-forest font-semibold">
              Filter Active: Clan Totem Selection
            </span>
          )}
        </div>

        {/* Communities Grid / List */}
        {filteredCommunities.length === 0 ? (
          <div className="py-20 text-center bg-earth-ivory rounded-2xl border border-earth-sand">
            <Users className="w-12 h-12 mx-auto text-earth-mud/50 mb-3" />
            <h3 className="font-serif font-bold text-xl text-earth-soil">No matching communities</h3>
            <p className="text-xs text-earth-mud mt-1">Try resetting the filters or modifying your search query.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-4'}>
            {filteredCommunities.map((c) => (
              <CommunityCard key={c.id} community={c} />
            ))}
          </div>
        )}

      </div>

      {/* ========================================================
          FLOATING BOTTOM MENU / NAVIGATION DOCK
          ======================================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-max">
        <div className="bg-earth-soil/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-earth-terracotta/50 p-1.5 flex items-center space-x-1 overflow-x-auto scrollbar-none animate-in fade-in slide-in-from-bottom-3 duration-300">
          
          {/* Button: All Tribes */}
          <button
            onClick={() => {
              setSelectedPVTG('all');
              setSelectedRegion('All');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              selectedPVTG === 'all' && selectedRegion === 'All' && !activeTotem
                ? 'bg-earth-terracotta text-white shadow-lg'
                : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>All (62)</span>
          </button>

          {/* Button: PVTGs */}
          <button
            onClick={() => {
              setSelectedPVTG('pvtg');
              setSelectedRegion('All');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              selectedPVTG === 'pvtg'
                ? 'bg-earth-terracotta text-white shadow-lg'
                : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-earth-ochre" />
            <span>PVTG (13)</span>
          </button>

          {/* Button: Southern Highlands */}
          <button
            onClick={() => {
              setSelectedRegion('Southern Highlands');
              setSelectedPVTG('all');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              selectedRegion === 'Southern Highlands'
                ? 'bg-earth-terracotta text-white shadow-lg'
                : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
            }`}
          >
            <Mountain className="w-3.5 h-3.5" />
            <span>Highlands</span>
          </button>

          {/* Button: Northern Plateau */}
          <button
            onClick={() => {
              setSelectedRegion('Northern Plateau');
              setSelectedPVTG('all');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              selectedRegion === 'Northern Plateau'
                ? 'bg-earth-terracotta text-white shadow-lg'
                : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
            }`}
          >
            <Trees className="w-3.5 h-3.5" />
            <span>Plateau</span>
          </button>

          {/* Button: Central Hills */}
          <button
            onClick={() => {
              setSelectedRegion('Central Hills');
              setSelectedPVTG('all');
              setActiveTotem(null);
              scrollToGrid();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              selectedRegion === 'Central Hills'
                ? 'bg-earth-terracotta text-white shadow-lg'
                : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Central</span>
          </button>

          <div className="h-4 w-px bg-earth-terracotta/40 mx-1" />

          {/* View Mode Toggle */}
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-bold text-earth-sand/80 hover:text-white hover:bg-earth-mud/50 transition-all"
            title="Toggle View Mode"
          >
            {viewMode === 'grid' ? <List className="w-3.5 h-3.5" /> : <Grid className="w-3.5 h-3.5" />}
          </button>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl text-earth-sand/80 hover:text-white hover:bg-earth-mud/50 transition-all active:scale-95"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

    </div>
  );
};
