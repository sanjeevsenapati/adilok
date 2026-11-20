import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  MapPin, Trees, Users, Sparkles, Filter, Navigation, Mountain, 
  Store, ArrowUp, Compass, Calendar, Layers, CheckCircle
} from 'lucide-react';
import { districtsData } from '../../data/districts';
import { OdishaInteractiveMap } from '../../components/maps/OdishaInteractiveMap';
import { District } from '../../types';

export const ExplorePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const districtParam = searchParams.get('district');

  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedHaat, setSelectedHaat] = useState<string | null>(null);

  const regions = ['All', 'Southern Highlands', 'Northern Plateau', 'Central Hills', 'Coastal & Delta'];

  // Famous Weekly Haats (Tribal Highland Markets)
  const famousHaats = [
    { name: 'Chatikona Haat', day: 'Wednesdays', district: 'Rayagada', tribe: 'Dongria Kondh', desc: 'Famous for mountain pineapples, wild honey, and Kapdaganda hand shawls.' },
    { name: 'Onukudelli Haat', day: 'Thursdays', district: 'Malkangiri', tribe: 'Bonda & Didayi', desc: 'Remote gathering where Bonda women trade forest roots for dry fish and brass beads.' },
    { name: 'Kunduli Haat', day: 'Fridays', district: 'Koraput', tribe: 'Paraja & Gadaba', desc: 'The largest tribal vegetable and organic indigenous millet market in south Odisha.' },
  ];

  const filteredDistricts = districtsData.filter((d) => {
    if (selectedHaat) {
      return d.name.toLowerCase().includes(selectedHaat.toLowerCase());
    }
    return selectedRegion === 'All' || d.region === selectedRegion;
  });

  const scrollToMap = () => {
    const el = document.getElementById('odisha-map-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToDistricts = () => {
    const el = document.getElementById('districts-directory');
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-forest/20 text-earth-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Territory, Topography & Sacred Ecology</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            Explore Tribal Odisha
          </h1>
          <p className="text-sm sm:text-base text-earth-mud mt-2 leading-relaxed">
            Navigate through the Eastern Ghats mountains, the Similipal biosphere, sacred hill shrines, weekly tribal haats, and indigenous homelands across Odisha's 30 districts.
          </p>
        </div>

        {/* ========================================================
            INTERACTIVE WEEKLY HAATS & SACRED TOPOGRAPHY ACCORDION
            ======================================================== */}
        <div className="bg-earth-ivory p-6 rounded-3xl border border-earth-sand shadow-earth space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-earth-sand/60 pb-3">
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-earth-terracotta" />
              <h3 className="font-serif font-bold text-lg text-earth-soil">
                Famous Weekly Tribal Haats & Highland Markets
              </h3>
            </div>
            <span className="text-xs text-earth-mud">
              Click a weekly market to jump to its home district:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {famousHaats.map((haat) => {
              const isSelected = selectedHaat === haat.district;
              return (
                <button
                  key={haat.name}
                  onClick={() => {
                    setSelectedHaat(isSelected ? null : haat.district);
                    scrollToDistricts();
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-earth-soil text-white border-earth-terracotta shadow-earth'
                      : 'bg-earth-cream text-earth-soil border-earth-sand/80 hover:border-earth-terracotta/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-earth-ochre' : 'text-earth-terracotta'}`}>
                      {haat.day}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-earth-terracotta/20 font-semibold">
                      {haat.district} Dist
                    </span>
                  </div>
                  <h4 className="font-serif font-black text-base mt-1">{haat.name}</h4>
                  <div className={`text-xs font-medium mt-0.5 ${isSelected ? 'text-earth-sand' : 'text-earth-forest'}`}>
                    Tribal Gathering: {haat.tribe}
                  </div>
                  <p className={`text-[11px] mt-2 leading-relaxed ${isSelected ? 'text-earth-sand/80' : 'text-earth-mud'}`}>
                    {haat.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {selectedHaat && (
            <div className="flex justify-end pt-1">
              <button
                onClick={() => setSelectedHaat(null)}
                className="text-xs font-bold text-earth-terracotta hover:underline"
              >
                Clear Haat Filter (Show All Districts)
              </button>
            </div>
          )}
        </div>

        {/* Master Interactive Map Component */}
        <section id="odisha-map-section">
          <OdishaInteractiveMap />
        </section>

        {/* District Directory & Cultural Centres */}
        <section id="districts-directory" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-earth-sand">
            <div>
              <h2 className="font-serif font-bold text-2xl text-earth-soil">
                Tribal Districts & Cultural Landscapes
              </h2>
              <p className="text-xs text-earth-mud mt-1">
                Official demographic baseline data from the Scheduled Castes and Scheduled Tribes Research Institute (SCSTRTI).
              </p>
            </div>

            {/* Region Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-earth-mud">Region:</span>
              <div className="flex flex-wrap gap-1">
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => {
                      setSelectedRegion(reg);
                      setSelectedHaat(null);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                      selectedRegion === reg && !selectedHaat
                        ? 'bg-earth-terracotta text-white shadow-sm'
                        : 'bg-earth-sand/30 text-earth-soil hover:bg-earth-sand/60'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDistricts.map((d) => (
              <div
                key={d.id}
                id={d.id}
                className="bg-earth-ivory rounded-2xl border border-earth-sand p-6 shadow-earth space-y-4 hover:shadow-earth-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-earth-terracotta">
                      {d.region}
                    </span>
                    <h3 className="font-serif font-black text-2xl text-earth-soil">
                      {d.name} <span className="font-odia text-lg text-earth-mud font-normal">({d.nativeName})</span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-earth-mud block uppercase font-mono">ST Population</span>
                    <span className="text-sm font-bold text-earth-brown bg-earth-terracotta/10 px-2 py-0.5 rounded border border-earth-terracotta/20">
                      {d.tribalPopulationPercent}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-earth-mud py-2 px-3 bg-earth-cream rounded-xl border border-earth-sand/60">
                  <div className="flex items-center gap-1">
                    <Trees className="w-3.5 h-3.5 text-earth-forest" />
                    <span>Forest: <strong className="text-earth-soil">{d.forestCoverPercent}</strong></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-earth-terracotta" />
                    <span>HQ: <strong className="text-earth-soil">{d.headquarters}</strong></span>
                  </div>
                </div>

                <p className="text-xs text-earth-soil/85 leading-relaxed">
                  {d.landscapeDescription}
                </p>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-earth-mud block mb-1">
                    Indigenous Tribes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {d.indigenousCommunities.map((c) => (
                      <span key={c} className="text-xs bg-earth-sand/30 text-earth-soil px-2 py-0.5 rounded font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-earth-sand/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-earth-forest block mb-2">
                    Key Sacred Sites & Weekly Haats:
                  </span>
                  <div className="space-y-2">
                    {d.culturalCentres.map((cc, i) => (
                      <div key={i} className="text-xs bg-earth-cream p-2.5 rounded-lg border border-earth-sand/50">
                        <div className="font-semibold text-earth-soil">{cc.name}</div>
                        <div className="text-earth-mud mt-0.5">{cc.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ========================================================
          FLOATING BOTTOM MENU / NAVIGATION DOCK
          ======================================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-max">
        <div className="bg-earth-soil/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-earth-terracotta/50 p-1.5 flex items-center space-x-1 overflow-x-auto scrollbar-none animate-in fade-in slide-in-from-bottom-3 duration-300">
          
          {/* Button: Jump to Map */}
          <button
            onClick={scrollToMap}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 bg-earth-terracotta text-white shadow-lg"
          >
            <Compass className="w-3.5 h-3.5 text-white" />
            <span>Map View</span>
          </button>

          {/* Button: All Districts */}
          <button
            onClick={() => {
              setSelectedRegion('All');
              setSelectedHaat(null);
              scrollToDistricts();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              selectedRegion === 'All' && !selectedHaat
                ? 'bg-earth-terracotta text-white shadow-lg'
                : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
            }`}
          >
            <span>All (30)</span>
          </button>

          {/* Button: Highlands */}
          <button
            onClick={() => {
              setSelectedRegion('Southern Highlands');
              setSelectedHaat(null);
              scrollToDistricts();
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

          {/* Button: Plateau */}
          <button
            onClick={() => {
              setSelectedRegion('Northern Plateau');
              setSelectedHaat(null);
              scrollToDistricts();
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

          {/* Button: Central */}
          <button
            onClick={() => {
              setSelectedRegion('Central Hills');
              setSelectedHaat(null);
              scrollToDistricts();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
              selectedRegion === 'Central Hills'
                ? 'bg-earth-terracotta text-white shadow-lg'
                : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Central</span>
          </button>

          <div className="h-4 w-px bg-earth-terracotta/40 mx-1" />

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
