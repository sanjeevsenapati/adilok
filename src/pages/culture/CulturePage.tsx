import React, { useState, useRef } from 'react';
import { 
  Sparkles, Filter, Music, Palette, Calendar, Shirt, Utensils, Volume2, 
  VolumeX, Play, Pause, Compass, ArrowUp, CheckCircle, Info, ChevronRight, Eye
} from 'lucide-react';
import { culturalItemsData } from '../../data/culture';
import { CultureCard } from '../../components/cards/CultureCard';
import { ImageLightbox } from '../../components/gallery/ImageLightbox';
import { CulturalItem } from '../../types';

export const CulturePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeMotifIndex, setActiveMotifIndex] = useState<number>(0);
  const [isPlayingRhythm, setIsPlayingRhythm] = useState<boolean>(false);
  const [currentRhythmName, setCurrentRhythmName] = useState<string>('Dhemsa Madal & Ghungroo');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorTimerRef = useRef<number | null>(null);

  const [activeLightbox, setActiveLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: ''
  });

  const categories = [
    { id: 'all', label: 'All Traditions', icon: Sparkles, count: culturalItemsData.length },
    { id: 'dance', label: 'Dances (Dhemsa)', icon: Music, count: culturalItemsData.filter(i => i.category === 'dance').length },
    { id: 'art', label: 'Sacred Art (Idital)', icon: Palette, count: culturalItemsData.filter(i => i.category === 'art').length },
    { id: 'festivals', label: 'Festivals & Rites', icon: Calendar, count: culturalItemsData.filter(i => i.category === 'festivals').length },
    { id: 'clothing', label: 'Weaves & Attire', icon: Shirt, count: culturalItemsData.filter(i => i.category === 'clothing').length },
    { id: 'food', label: 'Culinary & Millets', icon: Utensils, count: culturalItemsData.filter(i => i.category === 'food').length },
  ];

  // Interactive Sacred Motifs Data
  const motifs = [
    {
      title: 'Sacred Hill Triangles',
      craft: 'Kapdaganda Shawl (Dongria Kondh GI)',
      color: 'bg-red-800 text-amber-100',
      description: 'The sharp triangular rows embroidered in red and yellow mirror the holy hill crests of Niyamgiri, home to supreme mountain deity Niyam Raja.',
      symbolism: 'Sacred geography, mountain sovereignty, and ancestral courage.'
    },
    {
      title: 'The Cosmic Tree of Life',
      craft: 'Idital Wall Pictogram (Lanjia Saora)',
      color: 'bg-amber-800 text-amber-50',
      description: 'Central pillar painted in pure rice paste and red ochre wash representing the world axis connecting human dwellers, ancestral spirits (Sonum), and celestial guardians.',
      symbolism: 'Kinship continuity, spiritual sanctuary, and nature reverence.'
    },
    {
      title: 'Lost-Wax Spiral Filigree',
      craft: 'Dhokra Brass Art (Kondh & Kharuda)',
      color: 'bg-stone-800 text-amber-200',
      description: 'Clay cores wrapped in beeswax threads and cast in fiery charcoal pits. The winding spirals symbolize the cosmic river of time and clan fertility.',
      symbolism: 'Metallurgical mastery, elemental transformation, and tribal totems.'
    },
    {
      title: 'Natural Madder Bark Dyework',
      craft: 'Kotpad Tribal Handloom (Mirgan / Gadaba)',
      color: 'bg-orange-950 text-orange-200',
      description: 'Dyed using the roots of the wild Aal tree (Morinda citrifolia), producing earth-toned rusts and deep maroons unreplicable by industrial chemicals.',
      symbolism: 'Symbiosis with forest plants, non-toxic craft, and slow heritage.'
    }
  ];

  // Procedural Web Audio Synthesis for Tribal Drums & Chants
  const toggleTribalRhythm = (rhythmName: string) => {
    if (isPlayingRhythm) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      if (oscillatorTimerRef.current) {
        window.clearInterval(oscillatorTimerRef.current);
        oscillatorTimerRef.current = null;
      }
      setIsPlayingRhythm(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      setCurrentRhythmName(rhythmName);
      setIsPlayingRhythm(true);

      // Procedural rhythmic drum pattern (Madal tempo 110 BPM)
      let beat = 0;
      const interval = window.setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
          clearInterval(interval);
          return;
        }

        const now = audioCtxRef.current.currentTime;
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        // Alternate low base drum thump and high rim clap
        if (beat % 2 === 0) {
          osc.frequency.setValueAtTime(95, now); // Deep resonant Madal strike
          osc.frequency.exponentialRampToValueAtTime(35, now + 0.18);
          gain.gain.setValueAtTime(0.5, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
        } else {
          osc.frequency.setValueAtTime(260, now); // Ankle bell / brass ring click
          osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        }

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);
        osc.start(now);
        osc.stop(now + 0.2);

        beat = (beat + 1) % 8;
      }, 340);

      oscillatorTimerRef.current = interval;
    } catch (e) {
      setIsPlayingRhythm(false);
    }
  };

  const filteredItems = culturalItemsData.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.community.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const scrollToGrid = () => {
    const el = document.getElementById('culture-gallery');
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
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-forest/20 text-earth-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Intangible & Material Heritage</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            Culture & Traditions
          </h1>
          <p className="text-sm sm:text-base text-earth-mud mt-2 leading-relaxed">
            From the communal serpentine rhythms of Dhemsa to the sacred geometry of Saura Idital murals and GI-tagged Kapdaganda shawls, experience the living cultural expressions of Odisha's indigenous tribes.
          </p>
        </div>

        {/* ========================================================
            INTERACTIVE HERITAGE WORKSPACE: 2 INTERACTIVE CARDS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Module 1: Interactive Audio Rhythm Synthesizer */}
          <div className="lg:col-span-5 bg-gradient-to-br from-earth-soil via-[#422216] to-[#2B160E] rounded-3xl p-6 sm:p-7 text-white shadow-earth-lg border border-earth-terracotta/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-earth-sand/70 flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-earth-ochre" />
                  Soundscape Studio
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-earth-terracotta/40 text-earth-sand border border-earth-terracotta/50 font-mono">
                  Live Synth
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-earth-cream">
                Rhythms of the Eastern Ghats
              </h3>
              <p className="text-xs text-earth-sand/80 mt-2 leading-relaxed">
                Experience the syncopated mountain beats of the Madal drum, Changu tambourine, and brass ankle ghungroos that dictate the footwork of 200-dancer Dhemsa circles.
              </p>
            </div>

            {/* Equalizer & Audio Toggle Button */}
            <div className="pt-6 space-y-4">
              <div className="bg-earth-soil/60 rounded-2xl p-4 border border-earth-sand/15 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-earth-cream">{currentRhythmName}</div>
                  <div className="text-[11px] text-earth-sand/60">110 BPM • Tribal Folk Meter</div>
                </div>

                {/* Animated Equalizer Bars */}
                <div className="flex items-center gap-1 h-6">
                  <span className={`w-1 rounded-full bg-earth-ochre transition-all duration-300 ${isPlayingRhythm ? 'h-5 animate-pulse' : 'h-1.5'}`} />
                  <span className={`w-1 rounded-full bg-earth-terracotta transition-all duration-300 ${isPlayingRhythm ? 'h-6 animate-pulse [animation-delay:0.1s]' : 'h-2'}`} />
                  <span className={`w-1 rounded-full bg-earth-sand transition-all duration-300 ${isPlayingRhythm ? 'h-4 animate-pulse [animation-delay:0.2s]' : 'h-1'}`} />
                  <span className={`w-1 rounded-full bg-earth-ochre transition-all duration-300 ${isPlayingRhythm ? 'h-5 animate-pulse [animation-delay:0.3s]' : 'h-2'}`} />
                </div>
              </div>

              <button
                onClick={() => toggleTribalRhythm('Dhemsa Madal & Ghungroo')}
                className="w-full py-3 px-4 rounded-xl bg-earth-terracotta hover:bg-earth-terracotta/90 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                {isPlayingRhythm ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span>Pause Live Tribal Rhythm</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Play Procedural Dhemsa Rhythm</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Module 2: Interactive Sacred Motifs & GI Decoder */}
          <div className="lg:col-span-7 bg-earth-ivory rounded-3xl p-6 sm:p-7 border border-earth-sand shadow-earth flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-earth-terracotta flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  Sacred Motifs & GI Heritage Decoder
                </span>
                <span className="text-xs text-earth-mud">
                  Click a motif to decode its symbolism:
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {motifs.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMotifIndex(idx)}
                    className={`p-2 rounded-xl text-left text-xs font-bold transition-all border ${
                      activeMotifIndex === idx
                        ? 'bg-earth-soil text-white border-earth-soil shadow-sm'
                        : 'bg-earth-cream text-earth-mud border-earth-sand/70 hover:bg-earth-sand/40'
                    }`}
                  >
                    <div className="truncate">{m.title}</div>
                  </button>
                ))}
              </div>

              {/* Active Motif Display */}
              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand/80 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-earth-terracotta">
                      {motifs[activeMotifIndex].craft}
                    </span>
                    <h4 className="font-serif font-black text-xl text-earth-soil mt-0.5">
                      {motifs[activeMotifIndex].title}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-earth-terracotta/15 text-earth-terracotta text-[11px] font-bold">
                    GI Symbolism
                  </span>
                </div>

                <p className="text-xs text-earth-soil/85 leading-relaxed">
                  {motifs[activeMotifIndex].description}
                </p>

                <div className="pt-2 border-t border-earth-sand/60 flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-earth-forest flex-shrink-0" />
                  <span className="text-earth-mud font-semibold">Spiritual Meaning:</span>
                  <span className="text-earth-soil">{motifs[activeMotifIndex].symbolism}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-earth-mud border-t border-earth-sand/40 mt-4">
              <span>Officially registered under the Geographical Indications Registry of India (GI).</span>
              <button
                onClick={() => {
                  setSelectedCategory('art');
                  scrollToGrid();
                }}
                className="font-bold text-earth-terracotta hover:underline flex items-center gap-1"
              >
                <span>Explore Crafts</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================
            FILTER CONTROLS & QUICK SEARCH
            ======================================================== */}
        <div className="bg-earth-ivory p-6 rounded-2xl border border-earth-sand shadow-earth space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      scrollToGrid();
                    }}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-earth-terracotta text-white shadow-sm'
                        : 'bg-earth-sand/30 text-earth-soil hover:bg-earth-sand/60'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20' : 'bg-earth-soil/10'}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="w-full md:w-72">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search traditions, dances, food..."
                className="w-full py-2.5 px-3.5 rounded-xl bg-earth-cream border border-earth-sand text-xs text-earth-soil placeholder-earth-mud/60 focus:outline-none focus:ring-2 focus:ring-earth-terracotta"
              />
            </div>

          </div>
        </div>

        {/* Gallery Results Count */}
        <div id="culture-gallery" className="flex items-center justify-between text-xs text-earth-mud px-1">
          <span>
            Displaying <strong className="text-earth-soil">{filteredItems.length}</strong> living traditions
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-earth-terracotta font-bold hover:underline"
            >
              Reset to All Traditions
            </button>
          )}
        </div>

        {/* Cultural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <CultureCard
              key={item.id}
              item={item}
              onOpenImage={(imageUrl, title, caption) =>
                setActiveLightbox({
                  isOpen: true,
                  imageUrl,
                  title,
                  caption
                })
              }
            />
          ))}
        </div>

      </div>

      {/* ========================================================
          FLOATING BOTTOM MENU / NAVIGATION DOCK
          ======================================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-max">
        <div className="bg-earth-soil/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-earth-terracotta/50 p-1.5 flex items-center space-x-1 overflow-x-auto scrollbar-none animate-in fade-in slide-in-from-bottom-3 duration-300">
          
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  scrollToGrid();
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                  isSelected
                    ? 'bg-earth-terracotta text-white shadow-lg'
                    : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
                }`}
                title={cat.label}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-earth-ochre'}`} />
                <span>{cat.label.split(' ')[0]}</span>
                <span className={`text-[10px] px-1 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-earth-cream/10 text-earth-sand/70'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}

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

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={activeLightbox.isOpen}
        onClose={() => setActiveLightbox((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={activeLightbox.imageUrl}
        title={activeLightbox.title}
        caption={activeLightbox.caption}
      />
    </div>
  );
};
