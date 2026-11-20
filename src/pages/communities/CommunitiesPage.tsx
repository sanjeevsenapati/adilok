import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ShieldCheck, Grid, List, Users, Compass, Languages, RotateCcw } from 'lucide-react';
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

  const filteredCommunities = useMemo(() => {
    return communitiesData.filter(c => {
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
  }, [searchTerm, selectedRegion, selectedPVTG, selectedLanguageFamily, selectedLetter]);

  return (
    <div className="bg-earth-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-terracotta/20 text-earth-terracotta text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Living Ethnographic Directory</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            Tribal Communities of Odisha
          </h1>
          <p className="text-sm sm:text-base text-earth-mud mt-2 leading-relaxed">
            Odisha is home to 62 officially recognized Scheduled Tribes, including 13 Particularly Vulnerable Tribal Groups (PVTGs)—the highest concentration of distinct indigenous lineages in India.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-earth-ivory p-6 rounded-2xl border border-earth-sand shadow-earth mb-8 space-y-4">
          
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

            {/* PVTG Filter Pills */}
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
                <span>PVTGs Only (13 Groups)</span>
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
              onChange={setSelectedRegion}
              options={regions}
              icon={Compass}
            />

            {/* Language Family Earth-themed Dropdown */}
            <EarthSelect
              label="Language Family"
              value={selectedLanguageFamily}
              onChange={setSelectedLanguageFamily}
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
                onClick={() => setSelectedLetter(char)}
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
        <div className="flex items-center justify-between text-xs text-earth-mud mb-6 px-1">
          <span>
            Showing <strong className="text-earth-soil">{filteredCommunities.length}</strong> indigenous communities
          </span>
          {selectedPVTG === 'pvtg' && (
            <span className="text-earth-terracotta font-semibold">
              Filter Active: Particularly Vulnerable Tribal Groups
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
    </div>
  );
};
