import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Languages, ArrowRight, ShieldCheck } from 'lucide-react';
import { Community } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface CommunityCardProps {
  community: Community;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({ community }) => {
  const { language } = useLanguage();

  return (
    <div className="group bg-earth-ivory rounded-2xl overflow-hidden border border-earth-sand/70 shadow-earth hover:shadow-earth-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      
      {/* Portrait / Image Header */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-earth-sand/30">
        <img
          src={community.portraitImage}
          alt={community.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/85 via-earth-soil/20 to-transparent" />
        
        {/* PVTG Badge */}
        {community.isPVTG && (
          <div className="absolute top-3 left-3 bg-earth-terracotta text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PVTG</span>
          </div>
        )}

        {/* Region Badge */}
        <div className="absolute top-3 right-3 bg-earth-soil/70 backdrop-blur-md text-earth-ivory text-[11px] font-medium px-2.5 py-1 rounded-full">
          {community.region}
        </div>

        {/* Community Name & Native Script */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif font-bold text-2xl text-white tracking-wide drop-shadow-sm">
              {community.name}
            </h3>
            {language === 'or' && (
              <span className="font-odia text-base text-earth-sand font-medium">
                {community.nativeName}
              </span>
            )}
          </div>
          <p className="text-xs text-earth-sand/90 line-clamp-1 italic mt-0.5">
            "{community.tagline}"
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        
        {/* Key Indicators */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-earth-mud">
            <MapPin className="w-3.5 h-3.5 text-earth-terracotta flex-shrink-0" />
            <span className="truncate">{community.districts.join(', ')}</span>
          </div>
          <div className="flex items-center gap-1.5 text-earth-mud">
            <Languages className="w-3.5 h-3.5 text-earth-forest flex-shrink-0" />
            <span className="truncate">{community.languages.join(', ')}</span>
          </div>
        </div>

        {/* Short Excerpt */}
        <p className="text-sm text-earth-soil/85 line-clamp-3 leading-relaxed">
          {community.introduction}
        </p>

        {/* Key Craft or Tradition Tag */}
        <div className="pt-2 border-t border-earth-sand/60">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-earth-terracotta block mb-1">
            Signature Heritage:
          </span>
          <span className="text-xs font-medium text-earth-soil bg-earth-sand/30 px-2 py-1 rounded inline-block">
            {community.artAndCraft.title}
          </span>
        </div>

        {/* CTA Link */}
        <Link
          to={`/communities/${community.slug}`}
          className="mt-2 w-full py-2.5 px-4 rounded-xl bg-earth-terracotta text-white text-xs font-bold text-center flex items-center justify-center gap-2 group-hover:bg-earth-mud transition-colors shadow-sm"
        >
          <span>Explore Heritage & Profile</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};
