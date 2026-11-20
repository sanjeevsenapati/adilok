import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Languages,
  Users,
  ShieldCheck,
  Calendar,
  Music,
  Palette,
  BookOpen,
  Volume2,
  TreePine,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { communitiesData } from '../../data/communities';
import { ImageLightbox } from '../../components/gallery/ImageLightbox';
import { useLanguage } from '../../context/LanguageContext';

export const CommunityProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'overview' | 'social' | 'livelihood' | 'traditions' | 'festivals' | 'arts' | 'contemporary' | 'sources'>('overview');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
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

  const community = communitiesData.find((c) => c.slug === slug) || communitiesData[0];

  const playGreetingAudio = () => {
    setIsPlayingAudio(true);
    // Audio synthesis / simulation
    const msg = new SpeechSynthesisUtterance(`${community.name}. Living heritage of ${community.region}, Odisha.`);
    msg.onend = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(msg);
  };

  const tabs = [
    { id: 'overview', label: 'Overview & History', icon: BookOpen },
    { id: 'social', label: 'Social Structure & Kinship', icon: Users },
    { id: 'livelihood', label: 'Livelihood & Forests', icon: TreePine },
    { id: 'traditions', label: 'Attire & Sacred Beliefs', icon: Sparkles },
    { id: 'festivals', label: 'Festivals & Music', icon: Calendar },
    { id: 'arts', label: 'Art & Craft (GI)', icon: Palette },
    { id: 'contemporary', label: 'Contemporary Life', icon: ShieldCheck },
    { id: 'sources', label: 'Scholarly Sources', icon: BookOpen },
  ];

  return (
    <div className="bg-earth-cream min-h-screen pb-20">
      
      {/* Top Navigation Bar */}
      <div className="bg-earth-ivory border-b border-earth-sand/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/communities"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-earth-mud hover:text-earth-terracotta transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Communities Directory</span>
          </Link>
          <span className="text-xs text-earth-mud">
            Verified: <strong className="text-earth-soil">{community.lastVerified}</strong>
          </span>
        </div>
      </div>

      {/* Hero Banner with Layered Portrait & Imagery */}
      <div className="relative bg-earth-soil text-earth-ivory overflow-hidden border-b-4 border-earth-terracotta">
        <div className="absolute inset-0 z-0 opacity-25">
          <img src={community.heroImage} alt="Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-soil via-earth-soil/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Image Showcase */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-earth-sand shadow-2xl group">
                <img
                  src={community.portraitImage}
                  alt={community.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveLightbox({
                    isOpen: true,
                    imageUrl: community.portraitImage,
                    title: community.name,
                    caption: `${community.name} photographic documentation. ${community.tagline}`
                  })}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-earth-soil/75 text-white hover:bg-earth-terracotta transition-colors"
                  title="Expand portrait"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Profile Header Details */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                {community.isPVTG && (
                  <span className="px-3 py-1 rounded-full bg-earth-terracotta text-white text-xs font-bold flex items-center gap-1 shadow">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Particularly Vulnerable Tribal Group (PVTG)</span>
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-earth-forest text-earth-sand text-xs font-medium">
                  {community.region}
                </span>
                <span className="px-3 py-1 rounded-full bg-earth-mud/70 text-earth-ivory text-xs font-medium">
                  {community.languageFamily}
                </span>
              </div>

              <div>
                <h1 className="font-serif font-black text-4xl sm:text-5xl text-white">
                  {community.name}
                </h1>
                <div className="font-odia text-2xl text-earth-sand font-medium mt-1">
                  {community.nativeName}
                </div>
              </div>

              <p className="text-earth-sand/90 text-base sm:text-lg italic font-serif max-w-2xl">
                "{community.tagline}"
              </p>

              {/* Key Indicators Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-earth-sand/20 text-xs">
                <div>
                  <div className="text-earth-sand/70 uppercase">Districts</div>
                  <div className="font-semibold text-white">{community.districts.join(', ')}</div>
                </div>
                <div>
                  <div className="text-earth-sand/70 uppercase">Languages</div>
                  <div className="font-semibold text-white">{community.languages.join(', ')}</div>
                </div>
                <div>
                  <div className="text-earth-sand/70 uppercase">Population</div>
                  <div className="font-semibold text-earth-sand">{community.populationEstimate}</div>
                </div>
              </div>

              {/* Pronunciation & Spoken Greeting trigger */}
              <div className="pt-2">
                <button
                  onClick={playGreetingAudio}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-earth-sand/20 hover:bg-earth-sand/35 text-earth-sand border border-earth-sand/40 text-xs font-bold transition-colors"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse text-earth-ochre' : ''}`} />
                  <span>{isPlayingAudio ? 'Playing Oral Greeting...' : 'Listen to Native Audio Greeting'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Tabs Navigation Header */}
      <div className="bg-earth-ivory sticky top-20 z-30 border-b border-earth-sand/80 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-2 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-earth-terracotta text-white shadow-sm'
                      : 'text-earth-soil hover:bg-earth-sand/40 hover:text-earth-terracotta'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Tabbed Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* TAB 1: OVERVIEW & HISTORY */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-4">
              <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
                Introduction & Cultural Identity
              </h3>
              <p className="text-sm sm:text-base text-earth-soil/90 leading-relaxed">
                {community.introduction}
              </p>
            </div>

            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-4">
              <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
                History & Ethno-Genesis
              </h3>
              <p className="text-sm sm:text-base text-earth-soil/90 leading-relaxed">
                {community.history}
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: SOCIAL ORGANISATION */}
        {activeTab === 'social' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
              Social Organisation, Clans & Customary Governance
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-terracotta block mb-1">
                  Clan System (Septs)
                </span>
                <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                  {community.socialOrganisation.clans}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-forest block mb-1">
                  Traditional Village Leadership
                </span>
                <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                  {community.socialOrganisation.villageHeadman}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-brown block mb-1">
                  Family & Kinship Structure
                </span>
                <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                  {community.socialOrganisation.familyStructure}
                </p>
              </div>

              {community.socialOrganisation.youthDormitories && (
                <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase tracking-wider text-earth-ochre block mb-1">
                    Youth Dormitories & Oral Academies
                  </span>
                  <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                    {community.socialOrganisation.youthDormitories}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: LIVELIHOOD & FORESTS */}
        {activeTab === 'livelihood' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
              Livelihood, Ecological Symbiosis & Forest Wisdom
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <h4 className="font-serif font-bold text-lg text-earth-soil mb-1">Primary Occupation</h4>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.livelihood.primaryOccupation}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <h4 className="font-serif font-bold text-lg text-earth-soil mb-1">Agriculture & Mountain Terraces</h4>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.livelihood.agriculture}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <h4 className="font-serif font-bold text-lg text-earth-soil mb-1">Non-Timber Forest Produce (NTFP)</h4>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.livelihood.forestGathering}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <h4 className="font-serif font-bold text-lg text-earth-soil mb-2">Heritage Handicrafts</h4>
                <div className="flex flex-wrap gap-2">
                  {community.livelihood.crafts.map((craft, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-earth-terracotta/10 text-earth-brown text-xs font-bold border border-earth-terracotta/20">
                      {craft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TRADITIONS, ATTIRE & SACRED BELIEFS */}
        {activeTab === 'traditions' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
              Clothing, Ornaments & Spiritual Cosmology
            </h3>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-terracotta block mb-1">
                  Customary Attire & Weaves
                </span>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.traditions.clothing}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-forest block mb-1">
                  Jewellery, Tattoos & Body Adornments
                </span>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.traditions.ornaments}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-brown block mb-1">
                  Sacred Beliefs & Spirit World
                </span>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.traditions.sacredBeliefs}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-mud block mb-2">
                  Traditional Culinary Habits & Millets
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-earth-soil">
                  {community.traditions.foodHabits.map((food, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-earth-ivory rounded-lg border border-earth-sand">
                      <div className="w-2 h-2 rounded-full bg-earth-terracotta" />
                      <span>{food}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: FESTIVALS & MUSIC */}
        {activeTab === 'festivals' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6">
              <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
                Communal Festivals & Seasonal Cycles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {community.festivals.map((fest, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-earth-cream border border-earth-sand flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-serif font-bold text-lg text-earth-soil">{fest.name}</h4>
                        <span className="text-xs px-2 py-0.5 rounded bg-earth-ochre/20 text-earth-brown font-semibold">
                          {fest.season}
                        </span>
                      </div>
                      <span className="font-odia text-xs text-earth-terracotta font-medium block mb-2">
                        {fest.nativeName}
                      </span>
                      <p className="text-xs text-earth-soil/85 leading-relaxed">
                        {fest.significance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-4">
              <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
                Dance & Musical Instruments
              </h3>
              <p className="text-sm text-earth-soil/85 leading-relaxed">
                {community.danceAndMusic.significance}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase text-earth-terracotta block mb-1">Dance Forms</span>
                  <ul className="text-xs space-y-1 text-earth-soil">
                    {community.danceAndMusic.danceForms.map((df, i) => (
                      <li key={i}>• {df}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase text-earth-forest block mb-1">Instruments</span>
                  <ul className="text-xs space-y-1 text-earth-soil">
                    {community.danceAndMusic.instruments.map((ins, i) => (
                      <li key={i}>• {ins}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: ARTS & CRAFTS */}
        {activeTab === 'arts' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
              Signature Art & Craftsmanship
            </h3>

            <div className="p-6 rounded-2xl bg-earth-cream border-2 border-earth-terracotta/40 space-y-4">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-earth-terracotta" />
                <h4 className="font-serif font-bold text-xl text-earth-soil">
                  {community.artAndCraft.title}
                </h4>
              </div>
              <p className="text-sm text-earth-soil/90 leading-relaxed">
                {community.artAndCraft.description}
              </p>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-earth-mud block mb-2">
                  Materials Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {community.artAndCraft.materialsUsed.map((mat, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-earth-sand/50 text-earth-soil text-xs font-medium">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: CONTEMPORARY LIFE & CHALLENGES */}
        {activeTab === 'contemporary' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
              Contemporary Society, Education & Eco-Sovereignty
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <h4 className="font-serif font-bold text-lg text-earth-soil mb-1">Contemporary Life</h4>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.contemporaryLife}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <h4 className="font-serif font-bold text-lg text-earth-terracotta mb-1">Key Challenges & Preservation Priorities</h4>
                <p className="text-sm text-earth-soil/85 leading-relaxed">
                  {community.challenges}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: SOURCES */}
        {activeTab === 'sources' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-2 border-b border-earth-sand">
              Academic Sources & Archival Citations
            </h3>

            <div className="space-y-3">
              {community.sources.map((src, i) => (
                <div key={i} className="p-4 rounded-xl bg-earth-cream border border-earth-sand flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h5 className="font-semibold text-sm text-earth-soil">{src.title}</h5>
                    <p className="text-xs text-earth-mud">By {src.author} ({src.year})</p>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-earth-sand/50 text-earth-mud font-semibold self-start sm:self-auto">
                    {src.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={activeLightbox.isOpen}
        onClose={() => setActiveLightbox(prev => ({ ...prev, isOpen: false }))}
        imageUrl={activeLightbox.imageUrl}
        title={activeLightbox.title}
        caption={activeLightbox.caption}
      />

    </div>
  );
};
