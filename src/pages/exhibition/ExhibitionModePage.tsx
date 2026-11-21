import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Maximize,
  Minimize,
  Home,
  Volume2,
  Users,
  Compass,
  Sparkles,
  RefreshCw,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { communitiesData } from '../../data/communities';
import { museumArtefactsData } from '../../data/museum';
import { districtsData } from '../../data/districts';

export const ExhibitionModePage: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCommunityIndex, setSelectedCommunityIndex] = useState(0);
  const [inactivityTimer, setInactivityTimer] = useState(60);
  const [isScreensaver, setIsScreensaver] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentCommunity = communitiesData[selectedCommunityIndex];

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Inactivity Attractor Loop (Screen Saver)
  useEffect(() => {
    const resetTimer = () => {
      setInactivityTimer(60);
      setIsScreensaver(false);
    };

    const interval = setInterval(() => {
      setInactivityTimer((prev) => {
        if (prev <= 1) {
          setIsScreensaver(true);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    window.addEventListener('touchstart', resetTimer);
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    return () => {
      clearInterval(interval);
      window.removeEventListener('touchstart', resetTimer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, []);

  const playExhibitionAudio = () => {
    setIsPlayingAudio(true);
    const text = `Welcome to the living heritage exhibition of the ${currentCommunity.name} community. ${currentCommunity.introduction}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed inset-0 z-50 bg-earth-soil text-earth-ivory overflow-hidden select-none exhibition-mode flex flex-col justify-between">
      
      {/* Kiosk Top Bar */}
      <header className="h-20 bg-earth-soil/95 border-b-2 border-earth-terracotta px-8 flex items-center justify-between flex-shrink-0 z-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-earth-terracotta p-0.5 border border-earth-sand">
            <img src="./assets/brand/adilok-symbol.svg" alt="ADILOK" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-serif font-black text-2xl tracking-wider text-earth-sand">
              ADILOK EXHIBITION
            </h1>
            <p className="text-[10px] font-bold tracking-widest text-earth-ochre uppercase">
              Digital Museum & Touchscreen Kiosk (4K)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-earth-sand/60 hidden sm:inline">
            Inactivity Reset: {inactivityTimer}s
          </span>

          <button
            onClick={toggleFullscreen}
            className="p-3 rounded-2xl bg-earth-mud/40 hover:bg-earth-terracotta text-earth-sand transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-earth-terracotta hover:bg-earth-terracotta/90 text-white font-bold text-sm shadow-md"
          >
            <Home className="w-5 h-5" />
            <span>Exit Kiosk</span>
          </Link>
        </div>
      </header>

      {/* Main Touchscreen Visual Stage */}
      <main className="flex-grow relative flex items-center justify-center p-6 lg:p-12 overflow-hidden">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentCommunity.heroImage}
            alt="Landscape"
            className="w-full h-full object-cover scale-105 filter blur-sm brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-soil via-earth-soil/75 to-transparent" />
        </div>

        {/* Interactive Feature Panel */}
        <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-earth-soil/85 backdrop-blur-md rounded-3xl border-2 border-earth-terracotta/40 p-8 lg:p-12 shadow-2xl">
          
          {/* Large Portrait Target */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-earth-sand shadow-2xl">
              <img
                src={currentCommunity.portraitImage}
                alt={currentCommunity.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-sand">
                  {currentCommunity.region}
                </span>
                <h3 className="font-serif font-black text-2xl text-white">
                  {currentCommunity.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Touchscreen Content Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              {currentCommunity.isPVTG && (
                <span className="px-3.5 py-1.5 rounded-full bg-earth-terracotta text-white text-xs font-black tracking-wide flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Particularly Vulnerable Tribal Group</span>
                </span>
              )}
              <span className="text-sm font-semibold text-earth-sand">
                {currentCommunity.languageFamily} Family
              </span>
            </div>

            <div>
              <h2 className="font-serif font-black text-4xl sm:text-5xl text-white leading-tight">
                {currentCommunity.name}
              </h2>
              <div className="font-odia text-2xl text-earth-sand mt-1 font-semibold">
                {currentCommunity.nativeName}
              </div>
            </div>

            <p className="text-base sm:text-lg text-earth-sand/90 font-serif italic leading-relaxed">
              "{currentCommunity.tagline}"
            </p>

            <p className="text-sm text-earth-ivory/85 leading-relaxed line-clamp-4">
              {currentCommunity.introduction}
            </p>

            {/* Quick Touch Info Cards */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-earth-mud/30 border border-earth-sand/20">
                <span className="text-earth-sand/70 uppercase font-bold block mb-1">Traditional Art</span>
                <span className="font-bold text-earth-sand text-sm">{currentCommunity.artAndCraft.title}</span>
              </div>
              <div className="p-4 rounded-2xl bg-earth-mud/30 border border-earth-sand/20">
                <span className="text-earth-sand/70 uppercase font-bold block mb-1">Primary Districts</span>
                <span className="font-bold text-earth-sand text-sm">{currentCommunity.districts.join(', ')}</span>
              </div>
            </div>

            {/* Touch Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={playExhibitionAudio}
                className="px-6 py-4 rounded-2xl bg-earth-terracotta hover:bg-earth-terracotta/90 text-white font-black text-sm flex items-center gap-3 shadow-lg active:scale-95 transition-transform"
              >
                <Volume2 className={`w-5 h-5 ${isPlayingAudio ? 'animate-pulse text-earth-sand' : ''}`} />
                <span>{isPlayingAudio ? 'Playing Exhibition Audio...' : 'Tap for Voice Narration'}</span>
              </button>

              <Link
                to={`/communities/${currentCommunity.slug}`}
                className="px-6 py-4 rounded-2xl bg-earth-forest hover:bg-earth-forest/90 text-earth-sand font-bold text-sm flex items-center gap-2 border border-earth-sand/30"
              >
                <span>Read Full Archives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </main>

      {/* Bottom Horizontal Touch Selector Bar */}
      <footer className="h-28 bg-earth-soil/95 border-t-2 border-earth-terracotta/50 px-8 py-3 flex items-center justify-between flex-shrink-0 z-20 overflow-x-auto">
        <div className="flex items-center space-x-4 min-w-max mx-auto">
          {communitiesData.map((c, idx) => {
            const isSelected = selectedCommunityIndex === idx;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCommunityIndex(idx);
                  window.speechSynthesis.cancel();
                  setIsPlayingAudio(false);
                }}
                className={`flex items-center gap-3 p-2.5 rounded-2xl transition-all border-2 ${
                  isSelected
                    ? 'bg-earth-terracotta border-earth-sand scale-105 shadow-xl text-white'
                    : 'bg-earth-mud/30 border-transparent text-earth-sand/80 hover:bg-earth-mud/60'
                }`}
              >
                <img
                  src={c.portraitImage}
                  alt={c.name}
                  className="w-12 h-12 rounded-xl object-cover border border-earth-sand/40"
                />
                <div className="text-left pr-2">
                  <div className="font-bold text-xs">{c.name}</div>
                  <div className="text-[10px] opacity-75">{c.region}</div>
                </div>
              </button>
            );
          })}
        </div>
      </footer>

      {/* Screen Saver Ambient Attractor Overlay */}
      {isScreensaver && (
        <div
          onClick={() => setIsScreensaver(false)}
          className="fixed inset-0 z-50 bg-earth-soil flex flex-col items-center justify-center p-8 text-center cursor-pointer animate-in fade-in duration-500"
        >
          <img
            src="./assets/art-craft/saura/idital_mural.jpg"
            alt="Mural"
            className="w-64 h-64 rounded-full object-cover border-4 border-earth-terracotta mb-8 shadow-2xl animate-pulse"
          />
          <h2 className="font-serif font-black text-4xl sm:text-6xl text-earth-sand mb-4">
            ADILOK
          </h2>
          <p className="text-lg sm:text-xl text-earth-ivory/80 max-w-xl font-serif italic mb-8">
            Touch anywhere on the screen to explore the living heritage of Odisha
          </p>
          <div className="px-8 py-4 rounded-full bg-earth-terracotta text-white font-bold text-base shadow-xl">
            Tap to Begin Exploration
          </div>
        </div>
      )}

    </div>
  );
};
