import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Users,
  Palette,
  Music,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TreePine,
  BookOpen,
  Volume2
} from 'lucide-react';
import { communitiesData } from '../../data/communities';
import { culturalItemsData } from '../../data/culture';
import { museumArtefactsData } from '../../data/museum';
import { CommunityCard } from '../../components/cards/CommunityCard';
import { OdishaInteractiveMap } from '../../components/maps/OdishaInteractiveMap';
import { ImageLightbox } from '../../components/gallery/ImageLightbox';
import { useLanguage } from '../../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
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
    {
      title: 'Tribal Communities',
      icon: Users,
      desc: '62 distinct tribes and 13 Particularly Vulnerable Groups',
      link: '/communities',
      color: 'bg-earth-terracotta'
    },
    {
      title: 'Art & Craftsmanship',
      icon: Palette,
      desc: 'Saura Idital murals, Kapdaganda weaves, and Dhokra casting',
      link: '/culture?category=art',
      color: 'bg-earth-brown'
    },
    {
      title: 'Dance & Music',
      icon: Music,
      desc: 'Dhemsa circles, Changu drums, and ancestral ballads',
      link: '/culture?category=dance',
      color: 'bg-earth-forest'
    },
    {
      title: 'Festivals & Seasons',
      icon: Calendar,
      desc: 'Chaitra Parva, Sohrai, Kedu and sacred harvest rites',
      link: '/culture?category=festivals',
      color: 'bg-earth-ochre'
    },
    {
      title: 'Forests & Livelihood',
      icon: TreePine,
      desc: 'Sustainable hill horticulture, swidden terraces and botany',
      link: '/culture?category=food',
      color: 'bg-earth-leaf'
    },
    {
      title: 'Digital Museum',
      icon: Sparkles,
      desc: 'High-definition digital artefacts, tools and sacred regalia',
      link: '/museum',
      color: 'bg-earth-mud'
    }
  ];

  return (
    <div className="bg-earth-cream overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-earth-soil text-earth-ivory overflow-hidden">
        
        {/* Cinematic Background Image with Earthy Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero/highlands.jpg"
            alt="Odisha Tribal Highlands"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          />
          {/* Natural earthy gradient masks: terracotta & dark soil */}
          <div className="absolute inset-0 bg-gradient-to-r from-earth-soil/95 via-earth-soil/80 to-earth-soil/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-soil via-transparent to-earth-soil/30" />
          
          {/* Subtle Saura motif watermark */}
          <div className="absolute inset-0 opacity-10 bg-repeat bg-saura-pattern mix-blend-overlay pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-earth-terracotta/40 backdrop-blur-md border border-earth-sand/40 text-earth-sand text-xs font-semibold tracking-wide shadow-md">
                <Sparkles className="w-4 h-4 text-earth-ochre" />
                <span>{language === 'or' ? 'ଓଡ଼ିଶାର ଜୀବନ୍ତ ଆଦିବାସୀ ଐତିହ୍ୟ' : 'The Living Heritage of Odisha'}</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-earth-ivory leading-tight tracking-tight drop-shadow-md">
                Discover the <span className="text-earth-sand underline decoration-earth-terracotta decoration-wavy decoration-2">Living Heritage</span> of Odisha
              </h1>

              {/* Supporting Subheading */}
              <p className="text-base sm:text-lg text-earth-sand/90 font-sans leading-relaxed max-w-2xl font-normal">
                {language === 'or'
                  ? 'ଓଡ଼ିଶାର ୬୨ଟି ପ୍ରାଚୀନ ଜନଜାତିଙ୍କ ପବିତ୍ର ଜୀବନଶୈଳୀ, ଇଡ଼ିତାଲ ଚିତ୍ର, ଧେମସା ନୃତ୍ୟ, ପର୍ବପର୍ବାଣି ଏବଂ ପ୍ରାକୃତିକ ଜ୍ଞାନର ଡିଜିଟାଲ୍ ସଂରକ୍ଷଣ।'
                  : "Explore the ancient lineages, sacred art, songs, ecological wisdom, and living traditions of Odisha's 62 indigenous communities."}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/communities"
                  className="px-6 py-3.5 rounded-xl bg-earth-terracotta hover:bg-earth-terracotta/90 text-white font-bold text-sm tracking-wide shadow-earth-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
                >
                  <Users className="w-4 h-4" />
                  <span>{t('exploreButton')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/explore"
                  className="px-6 py-3.5 rounded-xl bg-earth-ivory/15 hover:bg-earth-ivory/25 backdrop-blur-md text-earth-ivory border border-earth-sand/40 font-bold text-sm tracking-wide transition-all duration-200 flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-earth-sand" />
                  <span>{t('interactiveMapButton')}</span>
                </Link>

                <Link
                  to="/museum"
                  className="px-6 py-3.5 rounded-xl bg-earth-forest/70 hover:bg-earth-forest text-earth-sand border border-earth-forest/80 font-bold text-sm tracking-wide transition-all duration-200 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-earth-sand" />
                  <span>{t('museumButton')}</span>
                </Link>
              </div>

              {/* Micro stats banner */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-earth-sand/20 text-earth-sand">
                <div>
                  <div className="font-serif font-black text-2xl lg:text-3xl text-white">62</div>
                  <div className="text-xs text-earth-sand/75">Scheduled Tribes</div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl lg:text-3xl text-earth-ochre">13</div>
                  <div className="text-xs text-earth-sand/75">Vulnerable PVTGs</div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl lg:text-3xl text-white">20+</div>
                  <div className="text-xs text-earth-sand/75">Living Languages</div>
                </div>
              </div>

            </div>

            {/* Right Layered Visual Card: Dongria & Saura Artwork Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                
                {/* Background decorative offset frame */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-earth-terracotta to-earth-ochre rounded-3xl transform rotate-2 opacity-50 blur-sm" />
                
                {/* Main Card */}
                <div className="relative bg-earth-ivory rounded-3xl overflow-hidden shadow-2xl border-4 border-earth-sand/60">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/assets/portraits/dongria_kondh.jpg"
                      alt="Dongria Kondh woman in Kapdaganda shawl"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/95 via-earth-soil/30 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-earth-terracotta text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      Indigenous Portrait Series
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-xs font-semibold text-earth-sand uppercase tracking-wider block">
                        Dongria Kondh · Niyamgiri Hills
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-white mt-1">
                        Guardians of Sacred Mountains
                      </h3>
                      <p className="text-xs text-earth-sand/80 mt-1 line-clamp-2">
                        Adorned in the GI-tagged hand-embroidered Kapdaganda shawl, symbol of environmental resilience and highland lore.
                      </p>
                      
                      <Link
                        to="/communities/dongria-kondh"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-earth-sand hover:text-white"
                      >
                        <span>View Community Profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Overlapping small preview badge: Saura Idital Mural */}
                <div
                  onClick={() => setActiveLightbox({
                    isOpen: true,
                    imageUrl: '/assets/art-craft/saura/idital_mural.jpg',
                    title: 'Sacred Saura Idital Mural',
                    caption: 'Authentic white rice-paste mural painted on red-ochre earthen mud wall, depicting the cosmic Tree of Life.'
                  })}
                  className="cursor-pointer absolute -bottom-6 -left-6 bg-earth-cream p-2.5 rounded-2xl shadow-earth-lg border-2 border-earth-terracotta hidden sm:flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  <img
                    src="/assets/art-craft/saura/idital_mural.jpg"
                    alt="Saura Idital Mural"
                    className="w-14 h-14 rounded-xl object-cover border border-earth-sand"
                  />
                  <div className="pr-2">
                    <span className="text-[10px] uppercase font-bold text-earth-terracotta block">
                      Sacred Wall Art
                    </span>
                    <span className="text-xs font-serif font-bold text-earth-soil">
                      Saura Idital Mural
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* TRIBAL BORDER DIVIDER */}
      <div className="w-full h-4 bg-repeat-x opacity-60" style={{ backgroundImage: "url('/assets/decorative/borders/saura-border.svg')" }} />

      {/* DISCOVERY CATEGORIES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-earth-terracotta block mb-2">
            Cultural Pathways
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-earth-soil">
            Explore by Cultural Domain
          </h2>
          <p className="text-sm text-earth-mud mt-2">
            Each section offers an immersive archive of living traditions, material culture, and indigenous knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.link}
                className="group p-6 rounded-2xl bg-earth-ivory border border-earth-sand shadow-earth hover:shadow-earth-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${cat.color} text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-earth-soil group-hover:text-earth-terracotta transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-earth-mud mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-earth-terracotta">
                  <span>Explore category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED COMMUNITIES */}
      <section className="py-20 bg-earth-ivory/60 border-y border-earth-sand/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-earth-terracotta block mb-1">
                Living Traditions
              </span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl text-earth-soil">
                {t('featuredCommunities')}
              </h2>
              <p className="text-sm text-earth-mud mt-2 max-w-xl">
                {t('featuredSubtitle')}
              </p>
            </div>
            
            <Link
              to="/communities"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-earth-terracotta hover:text-earth-mud transition-colors"
            >
              <span>View All 62 Tribal Communities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {communitiesData.slice(0, 6).map((c) => (
              <CommunityCard key={c.id} community={c} />
            ))}
          </div>

        </div>
      </section>

      {/* LIVING CULTURE SHOWCASE: DHEMSA & SAURA MURAL */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase: Dhemsa Dance */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-earth-sand aspect-[16/11]">
              <img
                src="/assets/culture/dance/dhemsa.jpg"
                alt="Dhemsa Folk Dance of Odisha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-earth-sand block">
                  Communal Living Heritage
                </span>
                <h3 className="font-serif font-bold text-2xl text-white mt-1">
                  Dhemsa: The Unbroken Circle
                </h3>
                <p className="text-xs text-earth-sand/85 mt-1 line-clamp-2">
                  Linked arm-in-arm, indigenous dancers move in serpentine waves, celebrating harvest and harmony with the soil.
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-earth-terracotta">
              Oral Traditions & Artistry
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-earth-soil leading-tight">
              Where Every Song is a Memory and Every Wall is a Sacred Prayer
            </h2>
            <p className="text-sm text-earth-soil/85 leading-relaxed">
              Unlike static museum collections, tribal culture in Odisha is lived daily. In the hills of Koraput, Rayagada, Malkangiri, and Mayurbhanj, art is not an ornament; it is a sacred covenant. The Saura pictograms honor the spirits, the Dongria Kapdaganda shawl weaves love and mountain topography, and the circular Dhemsa dance bridges generations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-earth-ivory border border-earth-sand">
                <h4 className="font-serif font-bold text-base text-earth-soil">Idital Murals</h4>
                <p className="text-xs text-earth-mud mt-1">
                  Sacred pictograms painted with ground rice paste on terracotta red-ochre walls.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-earth-ivory border border-earth-sand">
                <h4 className="font-serif font-bold text-base text-earth-soil">GI-Certified Weaves</h4>
                <p className="text-xs text-earth-mud mt-1">
                  Geometrical needlework symbolizing the triangular mountain peaks of Niyamgiri.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/culture"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-earth-soil text-earth-ivory text-xs font-bold hover:bg-earth-terracotta transition-colors shadow-sm"
              >
                <span>Discover All Cultural Traditions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE ODISHA MAP */}
      <section className="py-20 bg-earth-sand/20 border-t border-earth-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-earth-terracotta block mb-2">
              Geographical Exploration
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-earth-soil">
              Explore the Tribal Districts of Odisha
            </h2>
            <p className="text-sm text-earth-mud mt-2">
              Interact with the map to discover the habitats, sacred mountains, and tribal weekly haats across the state.
            </p>
          </div>

          <OdishaInteractiveMap />
        </div>
      </section>

      {/* DIGITAL MUSEUM PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-earth-terracotta block mb-1">
              Virtual Repository
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-earth-soil">
              Digital Museum Artefacts
            </h2>
            <p className="text-sm text-earth-mud mt-2 max-w-xl">
              High-resolution photographic documentation of sacred wall art, metalwork, and heirloom textiles.
            </p>
          </div>

          <Link
            to="/museum"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-earth-terracotta hover:text-earth-mud transition-colors"
          >
            <span>Enter Full Museum Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {museumArtefactsData.slice(0, 3).map((artefact) => (
            <div
              key={artefact.id}
              onClick={() => setActiveLightbox({
                isOpen: true,
                imageUrl: artefact.image,
                title: artefact.title,
                caption: artefact.curatorNotes
              })}
              className="group cursor-pointer bg-earth-ivory rounded-2xl overflow-hidden border border-earth-sand shadow-earth hover:shadow-earth-lg hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-earth-sand/30">
                <img
                  src={artefact.image}
                  alt={artefact.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-soil/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-earth-soil/80 text-earth-sand text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                  {artefact.category}
                </span>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] text-earth-sand block">{artefact.community}</span>
                  <h3 className="font-serif font-bold text-lg leading-snug">{artefact.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VOICES OF THE HILLS / RESEARCH BANNER */}
      <section className="py-20 bg-earth-soil text-earth-ivory relative border-t-2 border-earth-terracotta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Volume2 className="w-10 h-10 mx-auto text-earth-ochre opacity-80" />
          <blockquote className="font-serif italic text-xl sm:text-2xl text-earth-sand leading-relaxed">
            "The forest is not merely trees and timber; it is our ancestral mother. When the Mahua blooms and the Sal branches whisper, our ancestors are speaking."
          </blockquote>
          <div className="text-xs text-earth-ochre font-semibold tracking-wider uppercase">
            — Oral Testimony of a Dongria Kondh Elder, Niyamgiri
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/research"
              className="px-6 py-3 rounded-xl bg-earth-terracotta text-white font-bold text-xs hover:bg-earth-terracotta/90 transition-colors shadow-sm flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Research Library & Archives</span>
            </Link>

            <Link
              to="/exhibition"
              className="px-6 py-3 rounded-xl bg-earth-forest text-earth-sand font-bold text-xs hover:bg-earth-forest/90 transition-colors shadow-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Exhibition Kiosk Mode (4K)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
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
