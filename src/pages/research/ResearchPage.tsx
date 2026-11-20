import React, { useState } from 'react';
import { BookOpen, Search, Download, FileText, Quote, Check, Filter } from 'lucide-react';
import { researchDocumentsData } from '../../data/research';
import { ResearchDocument } from '../../types';

export const ResearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [citationModal, setCitationModal] = useState<{
    isOpen: boolean;
    doc: ResearchDocument | null;
    copiedFormat: string | null;
  }>({
    isOpen: false,
    doc: null,
    copiedFormat: null
  });

  const categories = ['All', 'Anthropology', 'Policy & Development', 'Ethnobotany', 'Linguistics', 'Material Culture'];

  const filteredDocs = researchDocumentsData.filter((doc) => {
    const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.communitiesCovered.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const copyCitation = (doc: ResearchDocument, format: 'APA' | 'MLA' | 'Chicago') => {
    let text = '';
    if (format === 'APA') {
      text = `${doc.author} (${doc.year}). ${doc.title}. ${doc.institution}. Ref: ${doc.doiOrRef}.`;
    } else if (format === 'MLA') {
      text = `${doc.author}. "${doc.title}." ${doc.institution}, ${doc.year}. Ref: ${doc.doiOrRef}.`;
    } else {
      text = `${doc.author}. ${doc.year}. ${doc.title}. ${doc.institution}.`;
    }
    navigator.clipboard.writeText(text);
    setCitationModal(prev => ({ ...prev, copiedFormat: format }));
    setTimeout(() => {
      setCitationModal(prev => ({ ...prev, copiedFormat: null }));
    }, 2000);
  };

  return (
    <div className="bg-earth-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-brown/20 text-earth-brown text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Library & Ethnographic Archive</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            Research & Publications
          </h1>
          <p className="text-sm sm:text-base text-earth-mud mt-2 leading-relaxed">
            Scholarly monographs, ethnobotanical field surveys, SCSTRTI government baseline reports, and linguistic studies on Odisha's indigenous tribes.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-earth-ivory p-6 rounded-2xl border border-earth-sand shadow-earth space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-earth-terracotta text-white shadow-sm'
                      : 'bg-earth-sand/30 text-earth-soil hover:bg-earth-sand/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-72 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-earth-mud" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search author, title, tribe..."
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-earth-cream border border-earth-sand text-xs text-earth-soil placeholder-earth-mud/60 focus:outline-none focus:ring-2 focus:ring-earth-terracotta"
              />
            </div>

          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-4">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-earth-ivory p-6 rounded-2xl border border-earth-sand shadow-earth hover:shadow-earth-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-earth-terracotta/15 text-earth-terracotta">
                    {doc.category}
                  </span>
                  <span className="text-xs text-earth-mud font-medium">
                    {doc.year} · {doc.institution}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-earth-soil">
                  {doc.title}
                </h3>

                <p className="text-xs sm:text-sm text-earth-soil/85 leading-relaxed">
                  {doc.abstract}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-earth-mud pt-2">
                  <div>
                    Author: <strong className="text-earth-soil">{doc.author}</strong>
                  </div>
                  <div>
                    Communities: <strong className="text-earth-forest">{doc.communitiesCovered.join(', ')}</strong>
                  </div>
                  <div>
                    Pages: <strong className="text-earth-soil">{doc.pages}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex md:flex-col items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setCitationModal({ isOpen: true, doc, copiedFormat: null })}
                  className="w-full py-2 px-3 rounded-xl bg-earth-sand/40 hover:bg-earth-sand text-earth-soil text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Quote className="w-3.5 h-3.5 text-earth-terracotta" />
                  <span>Cite Document</span>
                </button>

                <a
                  href={`#download-${doc.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Simulating scholarly resource download: "${doc.title}" (${doc.downloadSize}).`);
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-earth-terracotta hover:bg-earth-mud text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{doc.fileFormat} ({doc.downloadSize})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Citation Modal */}
      {citationModal.isOpen && citationModal.doc && (
        <div
          className="fixed inset-0 z-50 bg-earth-soil/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCitationModal(prev => ({ ...prev, isOpen: false }))}
        >
          <div
            className="bg-earth-ivory p-6 rounded-2xl max-w-lg w-full border-2 border-earth-terracotta shadow-2xl space-y-4 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-earth-sand">
              <h4 className="font-serif font-bold text-lg text-earth-soil">Generate Academic Citation</h4>
              <button
                onClick={() => setCitationModal(prev => ({ ...prev, isOpen: false }))}
                className="text-xs text-earth-mud hover:text-earth-soil"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-earth-mud">
              Click any citation standard below to copy formatted reference into your clipboard:
            </p>

            {/* APA */}
            <div className="p-3 bg-earth-cream rounded-xl border border-earth-sand space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-earth-terracotta">
                <span>APA 7th Edition</span>
                <button
                  onClick={() => copyCitation(citationModal.doc!, 'APA')}
                  className="text-xs text-earth-soil hover:text-earth-terracotta flex items-center gap-1"
                >
                  {citationModal.copiedFormat === 'APA' ? <Check className="w-3.5 h-3.5 text-earth-forest" /> : <Quote className="w-3.5 h-3.5" />}
                  <span>{citationModal.copiedFormat === 'APA' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-earth-soil font-serif">
                {citationModal.doc.author} ({citationModal.doc.year}). {citationModal.doc.title}. {citationModal.doc.institution}. Ref: {citationModal.doc.doiOrRef}.
              </p>
            </div>

            {/* MLA */}
            <div className="p-3 bg-earth-cream rounded-xl border border-earth-sand space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-earth-forest">
                <span>MLA 9th Edition</span>
                <button
                  onClick={() => copyCitation(citationModal.doc!, 'MLA')}
                  className="text-xs text-earth-soil hover:text-earth-forest flex items-center gap-1"
                >
                  {citationModal.copiedFormat === 'MLA' ? <Check className="w-3.5 h-3.5 text-earth-forest" /> : <Quote className="w-3.5 h-3.5" />}
                  <span>{citationModal.copiedFormat === 'MLA' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-earth-soil font-serif">
                {citationModal.doc.author}. "{citationModal.doc.title}." {citationModal.doc.institution}, {citationModal.doc.year}.
              </p>
            </div>

            {/* Chicago */}
            <div className="p-3 bg-earth-cream rounded-xl border border-earth-sand space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-earth-brown">
                <span>Chicago 17th Edition</span>
                <button
                  onClick={() => copyCitation(citationModal.doc!, 'Chicago')}
                  className="text-xs text-earth-soil hover:text-earth-brown flex items-center gap-1"
                >
                  {citationModal.copiedFormat === 'Chicago' ? <Check className="w-3.5 h-3.5 text-earth-forest" /> : <Quote className="w-3.5 h-3.5" />}
                  <span>{citationModal.copiedFormat === 'Chicago' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-earth-soil font-serif">
                {citationModal.doc.author}. {citationModal.doc.year}. {citationModal.doc.title}. {citationModal.doc.institution}.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
