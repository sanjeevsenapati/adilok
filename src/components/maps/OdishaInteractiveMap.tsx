import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Trees, Users, Sparkles, ArrowRight } from 'lucide-react';
import { districtsData } from '../../data/districts';
import { District } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export const OdishaInteractiveMap: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<District>(districtsData[0]); // Default to Koraput
  const { language } = useLanguage();

  return (
    <div className="bg-earth-ivory rounded-3xl border-2 border-earth-sand/80 shadow-earth-lg p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Interactive Map Visual */}
        <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
          <div className="w-full relative aspect-[1.15/1] max-w-lg bg-earth-cream/70 rounded-2xl border border-earth-sand p-4 shadow-inner flex items-center justify-center">
            
            {/* SVG Outline Representation of Odisha with clickable nodes */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              <defs>
                <radialGradient id="odishaGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E9D8BD" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C47A50" stopOpacity="0.3" />
                </radialGradient>
              </defs>

              {/* Stylized Geographic Outline of Odisha State */}
              <path
                d="M38,18 
                   C48,15 65,12 80,18 
                   C88,24 88,32 82,42 
                   C86,52 80,62 72,70 
                   C64,78 52,86 42,92 
                   C32,96 22,94 18,84 
                   C14,74 24,65 30,55 
                   C34,45 32,30 38,18 Z"
                fill="url(#odishaGrad)"
                stroke="#A65332"
                strokeWidth="1.2"
                strokeDasharray="2,1"
                className="transition-colors"
              />

              {/* Bay of Bengal Shoreline marker */}
              <path
                d="M80,24 C86,40 76,64 64,80"
                fill="none"
                stroke="#435C3B"
                strokeWidth="1.5"
                strokeDasharray="1,2"
                opacity="0.6"
              />
              <text x="82" y="55" fontSize="3" fill="#435C3B" fontStyle="italic" opacity="0.75" transform="rotate(62, 82, 55)">
                Bay of Bengal Coast
              </text>

              {/* District Hotspot Pins */}
              {districtsData.map((d) => {
                const isSelected = selectedDistrict.id === d.id;
                return (
                  <g
                    key={d.id}
                    onClick={() => setSelectedDistrict(d)}
                    className="cursor-pointer group"
                    role="button"
                    tabIndex={0}
                    aria-label={`Select district ${d.name}`}
                  >
                    {/* Pulsing ring for selected */}
                    {isSelected && (
                      <circle
                        cx={d.coordinates.x}
                        cy={d.coordinates.y}
                        r="6"
                        fill="#A65332"
                        opacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer node */}
                    <circle
                      cx={d.coordinates.x}
                      cy={d.coordinates.y}
                      r={isSelected ? "4" : "3"}
                      fill={isSelected ? "#713B27" : "#A65332"}
                      stroke="#FAF5EA"
                      strokeWidth="1"
                      className="group-hover:scale-125 transition-transform origin-center"
                    />

                    {/* District Label Tag */}
                    <text
                      x={d.coordinates.x}
                      y={d.coordinates.y - 4.5}
                      fontSize={isSelected ? "3.6" : "3"}
                      fontWeight={isSelected ? "bold" : "600"}
                      fill={isSelected ? "#302019" : "#713B27"}
                      textAnchor="middle"
                      className="select-none pointer-events-none drop-shadow-sm font-sans"
                    >
                      {d.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Instruction badge */}
            <div className="absolute bottom-3 left-4 bg-earth-ivory/90 backdrop-blur-sm px-3 py-1 rounded-full border border-earth-sand text-[11px] text-earth-mud">
              Click any district pin to inspect heritage
            </div>
          </div>
        </div>

        {/* Selected District Details Pane */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5 bg-earth-cream p-6 rounded-2xl border border-earth-sand/80">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-earth-sand">
              <div>
                <span className="text-xs uppercase tracking-wider text-earth-terracotta font-bold">
                  {selectedDistrict.region}
                </span>
                <h3 className="font-serif font-black text-3xl text-earth-soil mt-0.5">
                  {selectedDistrict.name}{' '}
                  {language === 'or' && (
                    <span className="font-odia text-xl text-earth-mud font-semibold">
                      ({selectedDistrict.nativeName})
                    </span>
                  )}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-earth-mud block">Tribal Pop.</span>
                <span className="text-sm font-bold text-earth-terracotta bg-earth-terracotta/10 px-2 py-0.5 rounded border border-earth-terracotta/20">
                  {selectedDistrict.tribalPopulationPercent}
                </span>
              </div>
            </div>

            {/* Forest and terrain stats */}
            <div className="grid grid-cols-2 gap-3 my-4 py-3 px-4 rounded-xl bg-earth-sand/30 border border-earth-sand/60">
              <div className="flex items-center gap-2">
                <Trees className="w-4 h-4 text-earth-forest" />
                <div>
                  <div className="text-[10px] text-earth-mud uppercase">Forest Cover</div>
                  <div className="text-xs font-bold text-earth-soil">{selectedDistrict.forestCoverPercent}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-earth-terracotta" />
                <div>
                  <div className="text-[10px] text-earth-mud uppercase">Headquarters</div>
                  <div className="text-xs font-bold text-earth-soil">{selectedDistrict.headquarters}</div>
                </div>
              </div>
            </div>

            {/* Landscape text */}
            <p className="text-xs text-earth-soil/85 leading-relaxed mb-4">
              {selectedDistrict.landscapeDescription}
            </p>

            {/* Indigenous Communities here */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-earth-brown uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Indigenous Communities Present:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedDistrict.indigenousCommunities.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-earth-ivory text-earth-soil px-2.5 py-1 rounded-full border border-earth-sand font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Key cultural centres */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-earth-forest uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cultural Highlights & Sacred Sites:</span>
              </div>
              <div className="space-y-2">
                {selectedDistrict.culturalCentres.slice(0, 2).map((cc, idx) => (
                  <div key={idx} className="bg-earth-ivory p-2.5 rounded-lg border border-earth-sand/60 text-xs">
                    <div className="font-semibold text-earth-soil">{cc.name}</div>
                    <div className="text-earth-mud line-clamp-1">{cc.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* District Explore Button */}
          <Link
            to={`/explore?district=${selectedDistrict.id}`}
            className="w-full py-3 px-4 rounded-xl bg-earth-terracotta text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-earth-soil transition-colors shadow-sm"
          >
            <span>Explore All Sites in {selectedDistrict.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
