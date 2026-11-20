import React, { useState } from 'react';
import { Sparkles, Filter, Music, Palette, Calendar, Shirt, Utensils, Home } from 'lucide-react';
import { culturalItemsData } from '../../data/culture';
import { CultureCard } from '../../components/cards/CultureCard';
import { ImageLightbox } from '../../components/gallery/ImageLightbox';
import { CulturalItem } from '../../types';

export const CulturePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
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
    { id: 'all', label: 'All Traditions', icon: Sparkles },
    { id: 'dance', label: 'Dances (Dhemsa)', icon: Music },
    { id: 'art', label: 'Sacred Art (Idital)', icon: Palette },
    { id: 'festivals', label: 'Festivals & Rites', icon: Calendar },
    { id: 'clothing', label: 'Weaves & Attire', icon: Shirt },
    { id: 'food', label: 'Culinary & Millets', icon: Utensils },
  ];

  const filteredItems = culturalItemsData.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.community.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-earth-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-forest/20 text-earth-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Intangible & Material Heritage</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            Culture & Traditions
          </h1>
          <p className="text-sm sm:text-base text-earth-mud mt-2 leading-relaxed">
            From the communal rhythms of Dhemsa to the sacred geometry of Saura Idital murals and GI-tagged Kapdaganda shawls, experience the living cultural expressions of Odisha's indigenous tribes.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-earth-ivory p-6 rounded-2xl border border-earth-sand shadow-earth mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-earth-terracotta text-white shadow-sm'
                        : 'bg-earth-sand/30 text-earth-soil hover:bg-earth-sand/60'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.label}</span>
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
                placeholder="Search traditions..."
                className="w-full py-2 px-3.5 rounded-xl bg-earth-cream border border-earth-sand text-xs text-earth-soil placeholder-earth-mud/60 focus:outline-none focus:ring-2 focus:ring-earth-terracotta"
              />
            </div>

          </div>
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
