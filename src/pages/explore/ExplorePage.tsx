import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Trees, Users, Sparkles, Filter, Navigation } from 'lucide-react';
import { districtsData } from '../../data/districts';
import { OdishaInteractiveMap } from '../../components/maps/OdishaInteractiveMap';
import { District } from '../../types';

export const ExplorePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const districtParam = searchParams.get('district');

  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Southern Highlands', 'Northern Plateau', 'Central Hills'];

  const filteredDistricts = districtsData.filter((d) => {
    return selectedRegion === 'All' || d.region === selectedRegion;
  });

  return (
    <div className="bg-earth-cream min-h-screen py-12">
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
            Navigate through the Eastern Ghats mountains, the Similipal biosphere, sacred hill shrines, weekly haats, and tribal homelands across Odisha's 30 districts.
          </p>
        </div>

        {/* Master Interactive Map Component */}
        <section>
          <OdishaInteractiveMap />
        </section>

        {/* District Directory & Cultural Centres */}
        <section className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-earth-sand">
            <div>
              <h2 className="font-serif font-bold text-2xl text-earth-soil">
                Tribal Districts & Cultural Landscapes
              </h2>
              <p className="text-xs text-earth-mud mt-1">
                Geographic baseline data from the Scheduled Castes and Scheduled Tribes Research Institute (SCSTRTI).
              </p>
            </div>

            {/* Region Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-earth-mud">Region:</span>
              <div className="flex gap-1">
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      selectedRegion === reg
                        ? 'bg-earth-terracotta text-white'
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
                    <span className="text-[10px] text-earth-mud block uppercase">ST Population</span>
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
    </div>
  );
};
