import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Languages,
  Users,
  ShieldCheck,
  Calendar,
  Palette,
  BookOpen,
  Volume2,
  TreePine,
  Sparkles,
  Award,
  ChevronRight,
  Flame,
  Check,
  Share2,
  Info,
  Layers,
  HelpCircle,
  Copy
} from 'lucide-react';
import { communitiesData } from '../../data/communities';
import { ImageLightbox } from '../../components/gallery/ImageLightbox';
import { useLanguage } from '../../context/LanguageContext';

export const CommunityProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'overview' | 'social' | 'livelihood' | 'traditions' | 'festivals' | 'arts' | 'contemporary' | 'sources'>('overview');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [selectedClan, setSelectedClan] = useState<number>(0);
  const [revealedTrivia, setRevealedTrivia] = useState<boolean>(false);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);

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

  // Scroll to top when changing community
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const playGreetingAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(true);
      const text = `${community.name}. Living indigenous heritage of ${community.region}, Odisha. Welcome to our sacred ancestral homeland.`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview & History', shortLabel: 'Overview', icon: BookOpen },
    { id: 'social', label: 'Social & Clans', shortLabel: 'Kinship', icon: Users },
    { id: 'livelihood', label: 'Livelihoods & Forests', shortLabel: 'Ecology', icon: TreePine },
    { id: 'traditions', label: 'Attire & Cosmology', shortLabel: 'Traditions', icon: Sparkles },
    { id: 'festivals', label: 'Festivals & Music', shortLabel: 'Festivals', icon: Calendar },
    { id: 'arts', label: 'Art & GI Weaves', shortLabel: 'Crafts', icon: Palette },
    { id: 'contemporary', label: 'Contemporary Society', shortLabel: 'Society', icon: ShieldCheck },
    { id: 'sources', label: 'Scholarly Sources', shortLabel: 'Sources', icon: BookOpen },
  ];

  // Simulated clans data tailored per community
  const communityClans = [
    {
      name: community.id === 'dongria-kondh' ? 'Wadaka' : community.id === 'lanjia-saora' ? 'Birinda Gomango' : 'Ontal (Cobra)',
      totem: community.id === 'dongria-kondh' ? 'Sacred Mountain Stream' : community.id === 'lanjia-saora' ? 'Ancestral Sun Tree' : 'Serpent Guardian',
      duty: 'Presides over customary water conservation rites and territorial boundaries.',
      sacredSite: 'Upper hill ridges and spring origins'
    },
    {
      name: community.id === 'dongria-kondh' ? 'Kadraka' : community.id === 'lanjia-saora' ? 'Birinda Mandal' : 'Killo (Tiger)',
      totem: community.id === 'dongria-kondh' ? 'Orchid & Sal Canopy' : community.id === 'lanjia-saora' ? 'Mountain Terraces' : 'Forest Feline',
      duty: 'Custodians of village governance, mediation, and seasonal community hunts.',
      sacredSite: 'Sacred grove assembly hall'
    },
    {
      name: community.id === 'dongria-kondh' ? 'Jakasika' : community.id === 'lanjia-saora' ? 'Birinda Buyya' : 'Sisa (Priestly)',
      totem: community.id === 'dongria-kondh' ? 'Highland Turmeric & Millet' : community.id === 'lanjia-saora' ? 'Ancestral Idital Brush' : 'Earth Deity',
      duty: 'Spiritual invocations, seed sanctification, and ancestral communication.',
      sacredSite: 'Dharani Penu altar'
    }
  ];

  // GI & Motif Symbolism breakdown for arts tab
  const motifSymbols = [
    {
      color: 'bg-red-700',
      title: 'Sacred Red Threads',
      symbol: 'Ancestral Lineage & Bravery',
      meaning: 'Honors the blood of ancestors, tribal bravery, and sacred agrarian sacrifice that nourishes Mother Earth.'
    },
    {
      color: 'bg-amber-400',
      title: 'Golden Yellow Threads',
      symbol: 'Highland Turmeric & Peace',
      meaning: 'Celebrates natural organic turmeric, abundant hill harvest, communal solidarity, and peace.'
    },
    {
      color: 'bg-emerald-700',
      title: 'Forest Green Threads',
      symbol: 'Mountain Canopy & Forests',
      meaning: 'Reflects the dense Sal and Mahua evergreen forests that provide shelter, clean water, and sustenance.'
    },
    {
      color: 'bg-earth-sand',
      title: 'Triangular Chevrons',
      symbol: 'Sacred Peaks & Axe Blades',
      meaning: 'Depicts the sharp triangular peaks of sacred mountains and the ancestral iron axe used for terrace cultivation.'
    }
  ];

  const filteredFestivals = community.festivals.filter(f =>
    selectedSeason === 'All' || f.season.toLowerCase().includes(selectedSeason.toLowerCase())
  );

  return (
    <div className="bg-earth-cream min-h-screen pb-32">
      
      {/* Top Breadcrumb & Status Bar */}
      <div className="bg-earth-ivory border-b border-earth-sand/80 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/communities"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-earth-mud hover:text-earth-terracotta transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Communities Directory</span>
          </Link>
          <div className="flex items-center gap-3 text-xs text-earth-mud">
            <span className="hidden sm:inline">Living Ethnographic Archive</span>
            <span className="text-earth-sand">·</span>
            <span>Verified: <strong className="text-earth-soil">{community.lastVerified}</strong></span>
          </div>
        </div>
      </div>

      {/* Hero Banner with Layered Portrait & Atmosphere */}
      <div className="relative bg-earth-soil text-earth-ivory overflow-hidden border-b-4 border-earth-terracotta">
        <div className="absolute inset-0 z-0 opacity-25">
          <img src={community.heroImage} alt="Landscape" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-soil via-earth-soil/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() => setActiveLightbox({
                  isOpen: true,
                  imageUrl: community.portraitImage,
                  title: community.name,
                  caption: `${community.name} documentary portrait. ${community.tagline}`
                })}
                className="relative w-64 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-earth-sand shadow-2xl group cursor-pointer"
              >
                <img
                  src={community.portraitImage}
                  alt={community.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="px-3 py-1 rounded-full bg-earth-terracotta text-white text-xs font-bold shadow">
                    Click to Zoom Portrait
                  </span>
                </div>
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-earth-soil/75 text-white">
                  <Sparkles className="w-4 h-4 text-earth-sand" />
                </div>
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
                  {community.languageFamily} Family
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-earth-sand/20 text-xs">
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

              {/* Interactive Audio Greeting Player with Waveform */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={playGreetingAudio}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-earth-sand/20 hover:bg-earth-sand/35 text-earth-sand border border-earth-sand/40 text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse text-earth-ochre' : ''}`} />
                  <span>{isPlayingAudio ? 'Speaking Native Greeting...' : 'Listen to Spoken Oral Greeting'}</span>
                </button>

                {isPlayingAudio && (
                  <div className="flex items-center gap-1 h-5">
                    <span className="w-1 h-3 bg-earth-sand rounded-full animate-bounce" />
                    <span className="w-1 h-5 bg-earth-ochre rounded-full animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1 h-4 bg-earth-sand rounded-full animate-bounce [animation-delay:0.3s]" />
                    <span className="w-1 h-2 bg-earth-sand rounded-full animate-bounce [animation-delay:0.45s]" />
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Main Interactive Content Workspace */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-36">
        
        {/* ========================================================
            TAB 1: OVERVIEW & HISTORY (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Quick Metrics & Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-earth-ivory p-5 rounded-2xl border border-earth-sand shadow-earth">
                <span className="text-[10px] font-bold uppercase text-earth-terracotta tracking-wider block mb-1">
                  Sacred Biocultural Habitat
                </span>
                <div className="font-serif font-black text-xl text-earth-soil">
                  {community.districts[0]} Highlands
                </div>
                <p className="text-xs text-earth-mud mt-1">
                  Primary forested hills & perennial spring catchments.
                </p>
              </div>

              <div className="bg-earth-ivory p-5 rounded-2xl border border-earth-sand shadow-earth">
                <span className="text-[10px] font-bold uppercase text-earth-forest tracking-wider block mb-1">
                  Master Heritage Craft
                </span>
                <div className="font-serif font-black text-xl text-earth-soil">
                  {community.artAndCraft.title.split(' ')[0]} Art
                </div>
                <p className="text-xs text-earth-mud mt-1">
                  Awarded Geographical Indication (GI) / Living Tradition.
                </p>
              </div>

              <div className="bg-earth-ivory p-5 rounded-2xl border border-earth-sand shadow-earth">
                <span className="text-[10px] font-bold uppercase text-earth-brown tracking-wider block mb-1">
                  Linguistic Branch
                </span>
                <div className="font-serif font-black text-xl text-earth-soil">
                  {community.languageFamily}
                </div>
                <p className="text-xs text-earth-mud mt-1">
                  Primary tongue: {community.languages.join(', ')}.
                </p>
              </div>
            </div>

            {/* Introduction Card */}
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-earth-sand">
                <h3 className="font-serif font-black text-2xl text-earth-soil">
                  Introduction & Cultural Identity
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-earth-terracotta/10 text-earth-terracotta font-bold">
                  {community.region}
                </span>
              </div>
              <p className="text-sm sm:text-base text-earth-soil/90 leading-relaxed">
                {community.introduction}
              </p>
            </div>

            {/* History & Ethno-Genesis with Interactive Timeline Milestones */}
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6">
              <div className="pb-3 border-b border-earth-sand">
                <h3 className="font-serif font-black text-2xl text-earth-soil">
                  History, Sovereignty & Ethno-Genesis
                </h3>
                <p className="text-xs text-earth-mud mt-1">
                  Ancient ecological lineage and landmark self-determination milestones.
                </p>
              </div>

              <p className="text-sm sm:text-base text-earth-soil/90 leading-relaxed">
                {community.history}
              </p>

              {/* Interactive Milestone Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-earth-cream border border-earth-sand space-y-1">
                  <div className="flex items-center gap-2 text-earth-terracotta font-bold text-xs uppercase">
                    <Flame className="w-4 h-4" />
                    <span>Ancient Autonomous Lineage</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-earth-soil">Customary Swidden & Terracing</h4>
                  <p className="text-xs text-earth-mud leading-relaxed">
                    Centuries of harmonic horticulture on steep hill slopes, with collective irrigation engineered through stone bunds and bamboo water conduits.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-earth-cream border border-earth-sand space-y-1">
                  <div className="flex items-center gap-2 text-earth-forest font-bold text-xs uppercase">
                    <Award className="w-4 h-4" />
                    <span>Constitutional Safeguards</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-earth-soil">Forest Rights Act & Community Title</h4>
                  <p className="text-xs text-earth-mud leading-relaxed">
                    Customary community rights over forest produce, sacred groves, and traditional village boundaries legally recognized under Indian law.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive "Did You Know?" Flip / Reveal Card */}
            <div className="bg-gradient-to-r from-earth-terracotta/10 via-earth-sand/30 to-earth-terracotta/10 p-6 rounded-3xl border border-earth-terracotta/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-earth-terracotta uppercase">
                  <HelpCircle className="w-4 h-4" />
                  <span>Indigenous Knowledge Trivia</span>
                </div>
                <h4 className="font-serif font-bold text-lg text-earth-soil">
                  How is ecological equilibrium maintained across generations?
                </h4>
                {revealedTrivia && (
                  <p className="text-xs text-earth-mud pt-2 animate-in fade-in">
                    Every tree species, perennial stream, and orchid is attributed to specific spiritual guardians. Taboos prohibit felling trees near freshwater origins, maintaining continuous mountain water catchments during harsh summers.
                  </p>
                )}
              </div>
              <button
                onClick={() => setRevealedTrivia(!revealedTrivia)}
                className="px-4 py-2 rounded-xl bg-earth-terracotta text-white text-xs font-bold hover:bg-earth-soil transition-colors flex-shrink-0 shadow-sm"
              >
                {revealedTrivia ? 'Hide Insight' : 'Reveal Sacred Knowledge'}
              </button>
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 2: SOCIAL STRUCTURE & CLANS (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'social' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Interactive Clan Explorer */}
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6">
              <div className="pb-3 border-b border-earth-sand">
                <span className="text-xs uppercase font-bold text-earth-terracotta tracking-wider">
                  Interactive Clan (Sept) Explorer
                </span>
                <h3 className="font-serif font-black text-2xl text-earth-soil mt-0.5">
                  Totemic Clans & Traditional Lineages
                </h3>
                <p className="text-xs text-earth-mud mt-1">
                  Click any clan below to inspect its totemic emblem, ancestral duties, and sacred territories:
                </p>
              </div>

              {/* Clan Selector Pills */}
              <div className="flex flex-wrap gap-2">
                {communityClans.map((clan, idx) => (
                  <button
                    key={clan.name}
                    onClick={() => setSelectedClan(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedClan === idx
                        ? 'bg-earth-terracotta text-white shadow-md'
                        : 'bg-earth-cream text-earth-soil hover:bg-earth-sand/50 border border-earth-sand'
                    }`}
                  >
                    <span>{clan.name}</span>
                  </button>
                ))}
              </div>

              {/* Selected Clan Detail Card */}
              <div className="p-6 rounded-2xl bg-earth-cream border-2 border-earth-terracotta/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-black text-xl text-earth-soil">
                    {communityClans[selectedClan].name}
                  </h4>
                  <span className="text-xs font-bold text-earth-terracotta bg-earth-terracotta/10 px-3 py-1 rounded-full border border-earth-terracotta/20">
                    Totem: {communityClans[selectedClan].totem}
                  </span>
                </div>
                <p className="text-sm text-earth-soil/90 leading-relaxed">
                  <strong className="text-earth-brown">Ancestral Responsibility:</strong> {communityClans[selectedClan].duty}
                </p>
                <div className="text-xs text-earth-mud pt-2 border-t border-earth-sand/60">
                  <strong className="text-earth-soil">Sacred Domain:</strong> {communityClans[selectedClan].sacredSite}
                </div>
              </div>
            </div>

            {/* Customary Leadership Hierarchy Cards */}
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6">
              <h3 className="font-serif font-black text-2xl text-earth-soil pb-3 border-b border-earth-sand">
                Customary Governance & Council Roles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase tracking-wider text-earth-terracotta block mb-1">
                    Village Chief & Headman
                  </span>
                  <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                    {community.socialOrganisation.villageHeadman}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase tracking-wider text-earth-forest block mb-1">
                    Family & Kinship Structure
                  </span>
                  <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                    {community.socialOrganisation.familyStructure}
                  </p>
                </div>
              </div>

              {community.socialOrganisation.youthDormitories && (
                <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase tracking-wider text-earth-ochre block mb-1">
                    Youth Dormitories & Oral Learning Institutions
                  </span>
                  <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                    {community.socialOrganisation.youthDormitories}
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 3: LIVELIHOODS & BOTANY (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'livelihood' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-3 border-b border-earth-sand">
              Livelihood, Ethnobotany & Shifting Agriculture
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
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-earth-terracotta/15 text-earth-brown text-xs font-bold border border-earth-terracotta/25">
                      {craft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: TRADITIONS & COSMOLOGY (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'traditions' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-3 border-b border-earth-sand">
              Attire, Sacred Beliefs & Highland Millets
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

              {/* Interactive Millets & Culinary Heritage Cards */}
              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-mud block mb-2">
                  Traditional Culinary Habits & Millets
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-earth-soil">
                  {community.traditions.foodHabits.map((food, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-earth-ivory rounded-xl border border-earth-sand hover:border-earth-terracotta/40 transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-earth-terracotta flex-shrink-0" />
                      <div>
                        <span className="font-bold text-earth-soil block">{food}</span>
                        <span className="text-[10px] text-earth-mud">Organic climate-resilient staple</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: FESTIVALS & MUSIC (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'festivals' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-earth-sand gap-3">
                <div>
                  <h3 className="font-serif font-black text-2xl text-earth-soil">
                    Festivals & Agrarian Cycles
                  </h3>
                  <p className="text-xs text-earth-mud mt-0.5">Filter festivals by season of celebration:</p>
                </div>

                {/* Season Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {['All', 'Spring', 'Winter', 'Monsoon'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSeason(s)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        selectedSeason === s
                          ? 'bg-earth-terracotta text-white shadow'
                          : 'bg-earth-sand/30 text-earth-soil hover:bg-earth-sand/60'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Festivals List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFestivals.map((fest, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-earth-cream border border-earth-sand flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-serif font-bold text-lg text-earth-soil">{fest.name}</h4>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-earth-ochre/20 text-earth-brown font-semibold">
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

            {/* Music & Dance */}
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-4">
              <h3 className="font-serif font-black text-2xl text-earth-soil pb-3 border-b border-earth-sand">
                Dance Traditions & Musical Instruments
              </h3>
              <p className="text-sm text-earth-soil/85 leading-relaxed">
                {community.danceAndMusic.significance}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase text-earth-terracotta block mb-2">
                    Dance Formations
                  </span>
                  <ul className="text-xs space-y-1.5 text-earth-soil">
                    {community.danceAndMusic.danceForms.map((df, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-earth-terracotta" />
                        <span>{df}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-earth-cream border border-earth-sand">
                  <span className="text-xs font-bold uppercase text-earth-forest block mb-2">
                    Tribal Instruments
                  </span>
                  <ul className="text-xs space-y-1.5 text-earth-soil">
                    {community.danceAndMusic.instruments.map((ins, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-earth-forest" />
                        <span>{ins}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 6: ART & GI WEAVES (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'arts' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6">
              <div className="pb-3 border-b border-earth-sand flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-earth-terracotta">
                    Geographical Indication (GI) & Masterpieces
                  </span>
                  <h3 className="font-serif font-black text-2xl text-earth-soil mt-0.5">
                    {community.artAndCraft.title}
                  </h3>
                </div>
                <div className="p-2.5 rounded-2xl bg-earth-terracotta/10 border border-earth-terracotta/30 text-earth-terracotta">
                  <Palette className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-earth-soil/90 leading-relaxed">
                {community.artAndCraft.description}
              </p>

              {/* Interactive Motif & Color Symbolism Decoder */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-earth-mud block mb-3">
                  Sacred Geometric Motif & Thread Symbolism:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {motifSymbols.map((motif, i) => (
                    <div key={i} className="p-4 bg-earth-cream rounded-2xl border border-earth-sand space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-3.5 h-3.5 rounded-full ${motif.color} border border-earth-soil/30 shadow-sm`} />
                        <span className="font-bold text-xs text-earth-soil">{motif.title}</span>
                      </div>
                      <div className="text-xs font-semibold text-earth-terracotta">{motif.symbol}</div>
                      <p className="text-[11px] text-earth-mud leading-relaxed">{motif.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-earth-mud block mb-2">
                  Sacred Natural Materials Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {community.artAndCraft.materialsUsed.map((mat, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl bg-earth-sand/40 text-earth-soil text-xs font-semibold border border-earth-sand">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 7: CONTEMPORARY LIFE (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'contemporary' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <h3 className="font-serif font-black text-2xl text-earth-soil pb-3 border-b border-earth-sand">
              Contemporary Society, Education & Eco-Sovereignty
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-earth-cream border border-earth-sand">
                <h4 className="font-serif font-bold text-lg text-earth-soil mb-1">Contemporary Life & Youth Initiatives</h4>
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

        {/* ========================================================
            TAB 8: SCHOLARLY SOURCES (INTERACTIVE)
            ======================================================== */}
        {activeTab === 'sources' && (
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-6 animate-in fade-in duration-200">
            <div className="pb-3 border-b border-earth-sand">
              <h3 className="font-serif font-black text-2xl text-earth-soil">
                Academic Sources & Archival Citations
              </h3>
              <p className="text-xs text-earth-mud mt-1">
                Peer-reviewed monographs and government anthropological surveys:
              </p>
            </div>

            <div className="space-y-3">
              {community.sources.map((src, i) => (
                <div key={i} className="p-4 rounded-xl bg-earth-cream border border-earth-sand flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h5 className="font-semibold text-sm text-earth-soil">{src.title}</h5>
                    <p className="text-xs text-earth-mud">By {src.author} ({src.year})</p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-earth-sand/50 text-earth-mud font-semibold">
                      {src.type}
                    </span>
                    <button
                      onClick={() => {
                        const citation = `${src.author} (${src.year}). ${src.title}. ${src.type}.`;
                        navigator.clipboard.writeText(citation);
                        setCopiedCitation(src.title);
                        setTimeout(() => setCopiedCitation(null), 2000);
                      }}
                      className="p-1.5 rounded-lg text-earth-mud hover:text-earth-terracotta hover:bg-earth-sand/50 transition-colors"
                      title="Copy APA Citation"
                    >
                      {copiedCitation === src.title ? <Check className="w-4 h-4 text-earth-forest" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ========================================================
          FLOATING BOTTOM MENU / NAVIGATION DOCK
          ======================================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-max">
        <div className="bg-earth-soil/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-earth-terracotta/50 p-1.5 flex items-center space-x-1 overflow-x-auto scrollbar-none animate-in fade-in slide-in-from-bottom-3 duration-300">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  // Smoothly center window on content area
                  const contentEl = document.querySelector('.max-w-5xl');
                  if (contentEl) {
                    const y = contentEl.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                  isSelected
                    ? 'bg-earth-terracotta text-white shadow-lg'
                    : 'text-earth-sand/80 hover:text-white hover:bg-earth-mud/50'
                }`}
                title={tab.label}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-earth-ochre'}`} />
                <span>{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
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
