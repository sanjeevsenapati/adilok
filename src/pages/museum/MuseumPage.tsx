import React, { useState } from 'react';
import { Sparkles, Maximize2, MapPin, Volume2, Info, Layers, X } from 'lucide-react';
import { museumArtefactsData } from '../../data/museum';
import { MuseumArtefact } from '../../types';
import { ArtefactCard } from '../../components/cards/ArtefactCard';

export const MuseumPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArtefact, setActiveArtefact] = useState<MuseumArtefact | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const categories = [
    'All',
    'Wall Paintings',
    'Textiles & Weaves',
    'Metal & Brass Craft',
    'Jewellery & Adornments',
    'Pottery & Woodwork'
  ];

  const filteredArtefacts = museumArtefactsData.filter((a) => {
    return selectedCategory === 'All' || a.category === selectedCategory;
  });

  const playCuratorAudio = (artefact: MuseumArtefact) => {
    setIsPlayingAudio(true);
    const speech = new SpeechSynthesisUtterance(
      `${artefact.title}. Origin: ${artefact.originDistrict}, ${artefact.community}. ${artefact.curatorNotes}`
    );
    speech.onend = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="bg-earth-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-terracotta/20 text-earth-terracotta text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Cultural Museum</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            The Living Museum of Odisha
          </h1>
          <p className="text-sm sm:text-base text-earth-mud mt-2 leading-relaxed">
            High-definition digital repository preserving sacred murals, lost-wax bronze castings, GI-certified geometric embroideries, and ceremonial brass jewellery.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-earth-sand">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-earth-terracotta text-white shadow-sm'
                  : 'bg-earth-ivory text-earth-soil hover:bg-earth-sand/50 border border-earth-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artefacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtefacts.map((artefact) => (
            <ArtefactCard
              key={artefact.id}
              artefact={artefact}
              onOpenViewer={(a) => setActiveArtefact(a)}
            />
          ))}
        </div>

      </div>

      {/* Artefact Detailed Modal */}
      {activeArtefact && (
        <div
          className="fixed inset-0 z-50 bg-earth-soil/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => {
            setActiveArtefact(null);
            window.speechSynthesis.cancel();
          }}
        >
          <div
            className="bg-earth-ivory rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border-2 border-earth-terracotta flex flex-col md:flex-row my-8 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="md:w-1/2 relative bg-black/95 flex items-center justify-center min-h-[350px] md:min-h-full">
              <img
                src={activeArtefact.image}
                alt={activeArtefact.title}
                className="w-full h-full object-contain max-h-[60vh] select-none"
              />
              <span className="absolute top-4 left-4 bg-earth-terracotta text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                {activeArtefact.category}
              </span>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-5 max-h-[80vh] overflow-y-auto">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-earth-sand">
                  <span className="text-xs uppercase font-bold text-earth-terracotta">
                    {activeArtefact.community}
                  </span>
                  <button
                    onClick={() => {
                      setActiveArtefact(null);
                      window.speechSynthesis.cancel();
                    }}
                    className="p-1 rounded-full text-earth-mud hover:bg-earth-sand/50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-serif font-black text-2xl text-earth-soil mt-2">
                  {activeArtefact.title}
                </h3>
                <div className="font-odia text-sm text-earth-mud mt-0.5 font-medium">
                  {activeArtefact.nativeTitle}
                </div>

                {/* Curator commentary */}
                <div className="mt-4 p-4 rounded-2xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase tracking-wider text-earth-mud block mb-1">
                    Curator's Ethnographic Analysis
                  </span>
                  <p className="text-xs sm:text-sm text-earth-soil/90 leading-relaxed">
                    {activeArtefact.curatorNotes}
                  </p>
                </div>

                {/* Technical Metadata */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                  <div>
                    <span className="text-earth-mud uppercase block text-[10px]">Material</span>
                    <span className="font-semibold text-earth-soil">{activeArtefact.material}</span>
                  </div>
                  <div>
                    <span className="text-earth-mud uppercase block text-[10px]">Dimensions</span>
                    <span className="font-semibold text-earth-soil">{activeArtefact.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-earth-mud uppercase block text-[10px]">Period</span>
                    <span className="font-semibold text-earth-soil">{activeArtefact.periodOrEra}</span>
                  </div>
                  <div>
                    <span className="text-earth-mud uppercase block text-[10px]">Origin District</span>
                    <span className="font-semibold text-earth-soil">{activeArtefact.originDistrict}</span>
                  </div>
                </div>

                <div className="mt-4 text-xs text-earth-mud">
                  <strong className="text-earth-soil">Provenance:</strong> {activeArtefact.provenance}
                </div>
              </div>

              {/* Audio narrative button */}
              <div className="pt-4 border-t border-earth-sand">
                <button
                  onClick={() => playCuratorAudio(activeArtefact)}
                  className="w-full py-3 px-4 rounded-xl bg-earth-terracotta hover:bg-earth-mud text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse text-earth-sand' : ''}`} />
                  <span>{isPlayingAudio ? 'Playing Curator Commentary...' : 'Play Audio Curator Guide'}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
