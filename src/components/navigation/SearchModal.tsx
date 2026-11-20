import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Users, Compass, BookOpen, Sparkles } from 'lucide-react';
import { communitiesData } from '../../data/communities';
import { culturalItemsData } from '../../data/culture';
import { museumArtefactsData } from '../../data/museum';
import { researchDocumentsData } from '../../data/research';
import { useLanguage } from '../../context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered outside
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingCommunities = q
    ? communitiesData.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.nativeName.includes(q) ||
        c.languages.some(l => l.toLowerCase().includes(q)) ||
        c.districts.some(d => d.toLowerCase().includes(q))
      )
    : [];

  const matchingCulture = q
    ? culturalItemsData.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.nativeTitle.includes(q) ||
        item.community.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      )
    : [];

  const matchingArtefacts = q
    ? museumArtefactsData.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.community.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      )
    : [];

  const matchingResearch = q
    ? researchDocumentsData.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.author.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
      )
    : [];

  const hasResults =
    matchingCommunities.length > 0 ||
    matchingCulture.length > 0 ||
    matchingArtefacts.length > 0 ||
    matchingResearch.length > 0;

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-earth-soil/75 backdrop-blur-sm flex items-start justify-center pt-16 px-4">
      <div className="bg-earth-ivory border-2 border-earth-terracotta/40 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-earth-sand bg-earth-cream flex items-center gap-3">
          <Search className="w-6 h-6 text-earth-terracotta flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            autoFocus
            className="w-full bg-transparent border-none text-earth-soil placeholder-earth-mud/50 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-earth-mud hover:bg-earth-sand/50"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-earth-sand/50 text-earth-soil hover:bg-earth-sand font-medium"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-6">
          {!query && (
            <div className="py-8 text-center text-earth-mud">
              <Sparkles className="w-8 h-8 mx-auto text-earth-terracotta/60 mb-2" />
              <p className="text-sm font-medium">Type a tribe name, dance form, festival, or district...</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
                {['Dongria Kondh', 'Saura Idital', 'Dhemsa', 'Bonda', 'Kapdaganda', 'Similipal', 'Koraput'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 rounded-full bg-earth-sand/50 hover:bg-earth-terracotta hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="py-12 text-center text-earth-mud">
              <p className="text-sm">{t('noResults')}</p>
            </div>
          )}

          {/* Communities matches */}
          {matchingCommunities.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-earth-terracotta mb-2">
                <Users className="w-4 h-4" />
                <span>Tribal Communities</span>
              </div>
              <div className="space-y-1">
                {matchingCommunities.map(c => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(`/communities/${c.slug}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-earth-sand/40 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={c.portraitImage} alt={c.name} className="w-10 h-10 rounded-full object-cover border border-earth-sand" />
                      <div>
                        <div className="font-semibold text-earth-soil group-hover:text-earth-terracotta text-sm">
                          {c.name} {language === 'or' && <span className="font-odia text-xs text-earth-mud">({c.nativeName})</span>}
                        </div>
                        <div className="text-xs text-earth-mud line-clamp-1">{c.tagline}</div>
                      </div>
                    </div>
                    {c.isPVTG && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-earth-ochre/20 text-earth-brown font-semibold">
                        PVTG
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cultural practices */}
          {matchingCulture.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-earth-forest mb-2">
                <Compass className="w-4 h-4" />
                <span>Culture, Dances & Traditions</span>
              </div>
              <div className="space-y-1">
                {matchingCulture.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/culture`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-earth-sand/40 text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-earth-soil group-hover:text-earth-terracotta text-sm">
                        {item.title}
                      </div>
                      <div className="text-xs text-earth-mud">Community: {item.community} · Category: {item.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Museum Artefacts */}
          {matchingArtefacts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-earth-mud mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Museum Exhibits & Artefacts</span>
              </div>
              <div className="space-y-1">
                {matchingArtefacts.map(a => (
                  <button
                    key={a.id}
                    onClick={() => handleSelect(`/museum`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-earth-sand/40 text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-earth-soil group-hover:text-earth-terracotta text-sm">
                        {a.title}
                      </div>
                      <div className="text-xs text-earth-mud">Origin: {a.originDistrict} · Material: {a.material}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Research Library */}
          {matchingResearch.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-earth-brown mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Research Documents & Monographs</span>
              </div>
              <div className="space-y-1">
                {matchingResearch.map(r => (
                  <button
                    key={r.id}
                    onClick={() => handleSelect(`/research`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-earth-sand/40 text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-earth-soil group-hover:text-earth-terracotta text-sm">
                        {r.title}
                      </div>
                      <div className="text-xs text-earth-mud">By {r.author} ({r.year})</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
