import React from 'react';
import { MuseumArtefact } from '../../types';
import { Sparkles, MapPin, Maximize2 } from 'lucide-react';

interface ArtefactCardProps {
  artefact: MuseumArtefact;
  onOpenViewer: (artefact: MuseumArtefact) => void;
}

export const ArtefactCard: React.FC<ArtefactCardProps> = ({ artefact, onOpenViewer }) => {
  return (
    <div
      onClick={() => onOpenViewer(artefact)}
      className="group cursor-pointer bg-earth-ivory rounded-2xl overflow-hidden border border-earth-sand shadow-earth hover:shadow-earth-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-earth-sand/30">
        <img
          src={artefact.image}
          alt={artefact.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-earth-soil/80 backdrop-blur-md text-earth-sand text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-earth-sand/30">
          {artefact.category}
        </span>

        {/* Zoom trigger icon */}
        <div className="absolute top-3 right-3 p-1.5 rounded-full bg-earth-soil/60 text-white group-hover:bg-earth-terracotta transition-colors shadow">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>

        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="text-[11px] text-earth-sand font-medium block">
            {artefact.community} · {artefact.periodOrEra}
          </span>
          <h3 className="font-serif font-bold text-lg leading-snug drop-shadow-sm">
            {artefact.title}
          </h3>
        </div>
      </div>

      <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
        <p className="text-xs text-earth-soil/80 line-clamp-2 leading-relaxed">
          {artefact.curatorNotes}
        </p>

        <div className="pt-2 border-t border-earth-sand/60 flex items-center justify-between text-[11px] text-earth-mud">
          <span className="font-medium text-earth-terracotta truncate">{artefact.material}</span>
          <div className="flex items-center gap-1 flex-shrink-0">
            <MapPin className="w-3 h-3 text-earth-forest" />
            <span>{artefact.originDistrict}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
