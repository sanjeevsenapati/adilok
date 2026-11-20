import React from 'react';
import { CulturalItem } from '../../types';
import { Sparkles, Calendar, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface CultureCardProps {
  item: CulturalItem;
  onOpenImage?: (imageUrl: string, title: string, caption?: string) => void;
}

export const CultureCard: React.FC<CultureCardProps> = ({ item, onOpenImage }) => {
  const { language } = useLanguage();

  return (
    <div className="group bg-earth-ivory rounded-2xl overflow-hidden border border-earth-sand shadow-earth hover:shadow-earth-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      
      {/* Visual Asset Container */}
      <div
        className="relative aspect-[16/10] overflow-hidden bg-earth-sand/40 cursor-pointer"
        onClick={() => onOpenImage && onOpenImage(item.image, item.title, item.culturalSignificance)}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/80 via-transparent to-transparent" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-earth-soil/75 backdrop-blur-md text-earth-sand text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-earth-sand/30">
          {item.category}
        </div>

        {/* Community tag */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-xs font-semibold text-earth-sand/90 block">
            {item.community}
          </span>
          <h3 className="font-serif font-bold text-xl text-white drop-shadow-sm">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
        <p className="text-xs text-earth-soil/90 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {item.seasonOrOccasion && (
          <div className="flex items-center gap-1.5 text-xs text-earth-mud pt-2 border-t border-earth-sand/60">
            <Calendar className="w-3.5 h-3.5 text-earth-terracotta flex-shrink-0" />
            <span className="font-medium text-earth-soil">{item.seasonOrOccasion}</span>
          </div>
        )}

        {item.materialsOrElements && (
          <div className="flex items-start gap-1.5 text-xs text-earth-mud">
            <Layers className="w-3.5 h-3.5 text-earth-forest flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">{item.materialsOrElements.join(' · ')}</span>
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={() => onOpenImage && onOpenImage(item.image, item.title, item.culturalSignificance)}
            className="w-full py-2 px-3 rounded-lg bg-earth-sand/40 hover:bg-earth-terracotta hover:text-white text-earth-soil text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>View Cultural Context</span>
          </button>
        </div>
      </div>

    </div>
  );
};
