import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Trees,
  Users,
  Sparkles,
  ArrowRight,
  Compass
} from 'lucide-react';
import { districtsData } from '../../data/districts';
import { District } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import odishaSvgData from '../../data/odisha-districts-svg.json';

interface DistrictSvgItem {
  name: string;
  code: string;
  path: string;
  centroid: { x: number; y: number };
}

export const OdishaInteractiveMap: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<District>(
    () => districtsData.find((d) => d.id === 'koraput') || districtsData[0]
  );
  const [hoveredDistrictName, setHoveredDistrictName] = useState<string | null>(null);
  const [highlightPVTGOnly, setHighlightPVTGOnly] = useState(false);
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('All');

  const { language } = useLanguage();

  // Helper to resolve District data from name
  const getDistrictInfo = (name: string): District | undefined => {
    const norm = name.toLowerCase().replace(/[^a-z]/g, '');
    return districtsData.find((d) => {
      const dNorm = d.name.toLowerCase().replace(/[^a-z]/g, '');
      const idNorm = d.id.toLowerCase().replace(/[^a-z]/g, '');
      return (
        dNorm === norm ||
        idNorm === norm ||
        (norm.includes('kendujhar') && (dNorm.includes('keonjhar') || dNorm.includes('kendujhar'))) ||
        (norm.includes('keonjhar') && (dNorm.includes('keonjhar') || dNorm.includes('kendujhar'))) ||
        (norm.includes('nabarangap') && dNorm.includes('nabarang')) ||
        (norm.includes('subarna') && dNorm.includes('subarna'))
      );
    });
  };

  // Check if district is heavily tribal (>30%)
  const isHighTribal = (dist: District | undefined) => {
    if (!dist) return false;
    const num = parseFloat(dist.tribalPopulationPercent);
    return num >= 30;
  };

  // Color logic for SVG vector polygons
  const getFillColor = (item: DistrictSvgItem) => {
    const dist = getDistrictInfo(item.name);
    const isSelected = dist && selectedDistrict.id === dist.id;
    const isHovered = hoveredDistrictName === item.name;

    if (isSelected) return '#713B27'; // Dark earth brown for selected
    if (isHovered) return '#A65332'; // Terracotta on hover

    if (activeRegionFilter !== 'All' && dist && dist.region !== activeRegionFilter) {
      return '#FAF5EA'; // Faded out
    }

    if (!dist) return '#FAF5EA';

    const stPercent = parseFloat(dist.tribalPopulationPercent) || 0;

    if (highlightPVTGOnly) {
      const hasPVTG = dist.indigenousCommunities.some((c) =>
        ['Dongria Kondh', 'Lanjia Saora', 'Bonda (Remo)', 'Juang (PVTG)', 'Chuktia Bhunjia (PVTG)', 'Kutia Kondh'].includes(c)
      );
      return hasPVTG ? '#A65332' : '#F5EFE2';
    }

    // Earthy choropleth based on tribal demographics
    if (stPercent >= 50) return '#C47A50'; // Rich red-ochre
    if (stPercent >= 30) return '#D49B74'; // Muted terracotta
    if (stPercent >= 15) return '#E3CBB5'; // Warm sand
    return '#EFE6D8'; // Light ivory-cream
  };

  const hoveredDistInfo = hoveredDistrictName ? getDistrictInfo(hoveredDistrictName) : null;

  return (
    <div className="bg-earth-ivory rounded-3xl border-2 border-earth-sand/80 shadow-earth-lg p-6 lg:p-8">
      
      {/* Top Map Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-earth-sand gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-earth-terracotta">
              Geographical Cartography
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-earth-forest/15 text-earth-forest font-bold">
              30 Districts
            </span>
          </div>
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-earth-soil mt-0.5">
            Actual District Map of Odisha
          </h3>
        </div>

        {/* PVTG Highlight Toggle */}
        <button
          onClick={() => setHighlightPVTGOnly(!highlightPVTGOnly)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border shadow-sm ${
            highlightPVTGOnly
              ? 'bg-earth-soil text-earth-sand border-earth-soil'
              : 'bg-earth-cream text-earth-mud border-earth-sand hover:bg-earth-sand/40 hover:text-earth-soil'
          }`}
        >
          {highlightPVTGOnly ? 'Showing PVTG Belts' : 'Highlight PVTGs (13 Groups)'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* MAP DISPLAY (COL 1 to 7) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* EXACT GEOJSON VECTOR MAP WITH ALL 30 DISTRICTS */}
          <div className="w-full relative aspect-[1.08/1] max-w-2xl bg-earth-cream/90 rounded-2xl border-2 border-earth-sand/80 p-3 shadow-inner flex flex-col justify-between overflow-hidden">
            
            {/* Compass Rose & Cardinal Markers */}
            <div className="absolute top-4 right-4 z-10 flex flex-col items-center text-[10px] font-bold text-earth-mud/80 bg-earth-ivory/80 backdrop-blur-sm p-1.5 rounded-xl border border-earth-sand/60">
              <span className="text-earth-terracotta font-black text-xs">N</span>
              <Compass className="w-5 h-5 text-earth-terracotta animate-pulse" />
              <span>Odisha</span>
            </div>

            {/* Neighboring States Legend Markers */}
            <div className="absolute top-2 left-1/3 text-[9px] uppercase font-bold text-earth-mud/60 tracking-wider pointer-events-none">
              ↑ Jharkhand
            </div>
            <div className="absolute top-1/4 right-3 text-[9px] uppercase font-bold text-earth-mud/60 tracking-wider pointer-events-none">
              ↗ West Bengal
            </div>
            <div className="absolute top-1/2 left-2 text-[9px] uppercase font-bold text-earth-mud/60 tracking-wider pointer-events-none">
              ← Chhattisgarh
            </div>
            <div className="absolute bottom-6 left-1/4 text-[9px] uppercase font-bold text-earth-mud/60 tracking-wider pointer-events-none">
              ↓ Andhra Pradesh
            </div>

            {/* SVG Canvas for all 30 actual geographic districts */}
            <svg
              viewBox="0 0 800 750"
              className="w-full h-full drop-shadow-sm select-none focus:outline-none outline-none"
              style={{ outline: 'none' }}
            >
              <defs>
                {/* Water pattern for Bay of Bengal */}
                <pattern id="bayWaves" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0,10 Q 5,5 10,10 T 20,10" fill="none" stroke="#71834E" strokeWidth="0.8" opacity="0.3" />
                </pattern>

                {/* Drop shadow filter for active district */}
                <filter id="activeDistrictGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#302019" floodOpacity="0.35" />
                </filter>
              </defs>

              {/* Bay of Bengal Coast Area indication */}
              <path
                d="M 640,140 Q 750,300 680,480 Q 540,640 460,680 L 800,750 L 800,0 L 720,0 Z"
                fill="url(#bayWaves)"
                opacity="0.7"
              />
              <text
                x="700"
                y="450"
                fill="#435C3B"
                fontSize="13"
                fontWeight="600"
                fontStyle="italic"
                opacity="0.8"
                transform="rotate(65, 700, 450)"
                className="pointer-events-none select-none font-sans"
              >
                Bay of Bengal (ବଙ୍ଗୋପସାଗର)
              </text>

              {/* All 30 Districts Polygons */}
              <g className="transition-all duration-200">
                {(odishaSvgData as DistrictSvgItem[]).map((item) => {
                  const dist = getDistrictInfo(item.name);
                  const isSelected = dist && selectedDistrict.id === dist.id;
                  const isHovered = hoveredDistrictName === item.name;
                  const fillColor = getFillColor(item);

                  return (
                    <g
                      key={item.name}
                      onClick={() => dist && setSelectedDistrict(dist)}
                      onMouseEnter={() => setHoveredDistrictName(item.name)}
                      onMouseLeave={() => setHoveredDistrictName(null)}
                      className="cursor-pointer transition-all duration-150 focus:outline-none outline-none"
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${item.name}`}
                      style={{ outline: 'none' }}
                    >
                      {/* District Boundary Polygon */}
                      <path
                        d={item.path}
                        fill={fillColor}
                        stroke={isSelected ? '#FFFFFF' : isHovered ? '#FAF5EA' : '#8A4A30'}
                        strokeWidth={isSelected ? 2.8 : isHovered ? 2 : 0.8}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        filter={isSelected ? 'url(#activeDistrictGlow)' : undefined}
                        className="transition-colors duration-150 focus:outline-none outline-none"
                        style={{ outline: 'none' }}
                      />

                      {/* District Centroid Dot */}
                      <circle
                        cx={item.centroid.x}
                        cy={item.centroid.y}
                        r={isSelected ? 4 : isHighTribal(dist) ? 2.5 : 1.8}
                        fill={isSelected ? '#FAF5EA' : isHighTribal(dist) ? '#713B27' : '#8A4A30'}
                        stroke={isSelected ? '#713B27' : '#FAF5EA'}
                        strokeWidth={isSelected ? 1.5 : 0.6}
                        className="pointer-events-none"
                      />

                      {/* District Label Text */}
                      <text
                        x={item.centroid.x}
                        y={item.centroid.y - 4}
                        fontSize={isSelected ? '12' : isHighTribal(dist) ? '9.5' : '8.5'}
                        fontWeight={isSelected ? '900' : isHighTribal(dist) ? '700' : '500'}
                        fill={isSelected ? '#FFFFFF' : isHovered ? '#FFFFFF' : '#302019'}
                        textAnchor="middle"
                        className="pointer-events-none select-none font-sans drop-shadow-sm transition-all"
                      >
                        {item.name}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Selected District Highlight Marker Pin */}
              <g
                transform={`translate(${selectedDistrict.coordinates.x}, ${selectedDistrict.coordinates.y})`}
                className="pointer-events-none animate-bounce"
              >
                <circle cx="0" cy="0" r="10" fill="#A65332" opacity="0.3" className="animate-ping" />
                <circle cx="0" cy="0" r="4" fill="#A65332" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
            </svg>

            {/* Dynamic Hover Tooltip Preview Bar */}
            <div className="pt-2 px-3 pb-1 border-t border-earth-sand/60 flex items-center justify-between text-xs bg-earth-ivory/90 rounded-xl">
              {hoveredDistInfo ? (
                <div className="flex items-center gap-3">
                  <span className="font-bold text-earth-soil">{hoveredDistInfo.name}:</span>
                  <span className="text-earth-terracotta font-semibold">
                    Tribal Pop: {hoveredDistInfo.tribalPopulationPercent}
                  </span>
                  <span className="text-earth-mud text-[11px] hidden sm:inline">
                    Tribes: {hoveredDistInfo.indigenousCommunities.slice(0, 3).join(', ')}
                  </span>
                </div>
              ) : (
                <span className="text-earth-mud text-[11px] italic">
                  Hover or click any of the 30 districts to inspect indigenous heritage & demographics
                </span>
              )}
              <span className="text-[10px] text-earth-forest font-bold uppercase">
                {selectedDistrict.name} Selected
              </span>
            </div>

          </div>

          {/* Choropleth Legend */}
          <div className="mt-4 w-full max-w-2xl bg-earth-cream p-3 rounded-xl border border-earth-sand flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-bold text-earth-mud text-[11px] uppercase tracking-wider">
              Tribal Population:
            </span>
            <div className="flex items-center gap-3 flex-wrap text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-[#C47A50] border border-earth-mud/40" />
                <span>&gt; 50% (High ST)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-[#D49B74] border border-earth-mud/40" />
                <span>30% – 50%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-[#E3CBB5] border border-earth-mud/40" />
                <span>15% – 30%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-[#EFE6D8] border border-earth-mud/40" />
                <span>&lt; 15%</span>
              </div>
            </div>
          </div>

        </div>

        {/* SELECTED DISTRICT DETAILS PANE (COL 8 to 12) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5 bg-earth-cream p-6 sm:p-7 rounded-2xl border border-earth-sand/80 shadow-sm">
          <div>
            
            {/* Header info */}
            <div className="flex items-start justify-between pb-3 border-b border-earth-sand">
              <div>
                <span className="text-xs uppercase tracking-wider text-earth-terracotta font-bold">
                  {selectedDistrict.region}
                </span>
                <h4 className="font-serif font-black text-3xl sm:text-4xl text-earth-soil mt-0.5">
                  {selectedDistrict.name}
                </h4>
                <div className="font-odia text-xl text-earth-mud font-semibold mt-0.5">
                  {selectedDistrict.nativeName}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-earth-mud block uppercase font-bold">ST Population</span>
                <span className="text-sm font-black text-white bg-earth-terracotta px-2.5 py-1 rounded-lg shadow-sm">
                  {selectedDistrict.tribalPopulationPercent}
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 my-4 py-3 px-4 rounded-xl bg-earth-sand/30 border border-earth-sand/60">
              <div className="flex items-center gap-2">
                <Trees className="w-4 h-4 text-earth-forest flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-earth-mud uppercase">Forest Cover</div>
                  <div className="text-xs font-bold text-earth-soil">{selectedDistrict.forestCoverPercent}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-earth-terracotta flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-earth-mud uppercase">Headquarters</div>
                  <div className="text-xs font-bold text-earth-soil">{selectedDistrict.headquarters}</div>
                </div>
              </div>
            </div>

            {/* Geographical description */}
            <p className="text-xs text-earth-soil/90 leading-relaxed mb-4">
              {selectedDistrict.landscapeDescription}
            </p>

            {/* Indigenous Tribes Living Here */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-earth-brown uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Indigenous Communities:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedDistrict.indigenousCommunities.map((c) => (
                  <Link
                    key={c}
                    to={`/communities?search=${encodeURIComponent(c)}`}
                    className="text-xs bg-earth-ivory text-earth-soil hover:bg-earth-terracotta hover:text-white px-2.5 py-1 rounded-lg border border-earth-sand font-medium transition-colors"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cultural highlights */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-earth-forest uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sacred Groves & Weekly Haats:</span>
              </div>
              <div className="space-y-2">
                {selectedDistrict.culturalCentres.map((cc, idx) => (
                  <div key={idx} className="bg-earth-ivory p-3 rounded-xl border border-earth-sand/60 text-xs">
                    <div className="font-bold text-earth-soil flex items-center justify-between">
                      <span>{cc.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-earth-sand/40 text-earth-mud font-normal">
                        {cc.type}
                      </span>
                    </div>
                    <div className="text-earth-mud mt-1 leading-normal">{cc.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action button */}
          <Link
            to={`/explore?district=${selectedDistrict.id}`}
            className="w-full py-3 px-4 rounded-xl bg-earth-terracotta text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-earth-soil transition-colors shadow-sm"
          >
            <span>Explore All Cultural Sites in {selectedDistrict.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </div>

    </div>
  );
};
