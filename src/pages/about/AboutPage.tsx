import React from 'react';
import { Shield, Heart, Users, BookOpen, Sparkles, CheckCircle2, Mail, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-earth-cream min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-terracotta/20 text-earth-terracotta text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>Preserving Living Heritage</span>
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-5xl text-earth-soil">
            About ADILOK
          </h1>
          <p className="text-base sm:text-lg text-earth-mud leading-relaxed">
            ADILOK (https://adilok.co.in) is a world-class digital cultural museum and interactive research platform dedicated to the indigenous tribal communities of Odisha, India.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-earth-terracotta text-white flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-black text-2xl text-earth-soil">Our Vision</h3>
            <p className="text-sm text-earth-soil/85 leading-relaxed">
              To establish an authoritative, visually magnificent, and respectful digital sanctuary where the ancient songs, sacred pictograms, ecological wisdom, and lived realities of Odisha's 62 indigenous tribes are celebrated, safeguarded, and shared with future generations across the globe.
            </p>
          </div>

          <div className="bg-earth-ivory p-8 rounded-3xl border border-earth-sand shadow-earth space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-earth-forest text-white flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-black text-2xl text-earth-soil">Our Mission</h3>
            <p className="text-sm text-earth-soil/85 leading-relaxed">
              To bridge the gap between academic anthropological scholarship, indigenous community elders, school students, and global visitors through open-access interactive technology, verifiable ethnographic data, and exhibition-grade visual storytelling.
            </p>
          </div>
        </div>

        {/* Ethical Cultural Preservation Charter */}
        <div className="bg-earth-ivory p-8 sm:p-10 rounded-3xl border-2 border-earth-terracotta/40 shadow-earth-lg space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-earth-sand">
            <Shield className="w-8 h-8 text-earth-terracotta" />
            <div>
              <h2 className="font-serif font-black text-2xl sm:text-3xl text-earth-soil">
                Ethical Guidelines & Cultural Protocols
              </h2>
              <span className="text-xs text-earth-mud">
                ADILOK Cultural Ethics and Consent Charter
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-earth-soil/85">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-earth-soil">
                <CheckCircle2 className="w-4 h-4 text-earth-forest" />
                <span>Indigenous Intellectual Property</span>
              </div>
              <p className="text-xs leading-relaxed text-earth-mud">
                All community traditions, textile designs (such as the GI-registered Kapdaganda), and wall murals (such as Saura Idital) are recognized as the sovereign intellectual and cultural property of the respective communities.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-earth-soil">
                <CheckCircle2 className="w-4 h-4 text-earth-forest" />
                <span>Protection of Sacred Secret Rites</span>
              </div>
              <p className="text-xs leading-relaxed text-earth-mud">
                ADILOK strictly refrains from publishing restricted esoteric rituals, sacred grove sanctums, or secret initiatory ceremonies without explicit customary clearance from clan elders and custodians.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-earth-soil">
                <CheckCircle2 className="w-4 h-4 text-earth-forest" />
                <span>Authentic Non-Stereotyping Portrayal</span>
              </div>
              <p className="text-xs leading-relaxed text-earth-mud">
                We avoid sensationalized, exoticized, or homogenized depictions. Each of the 62 communities is presented with distinct linguistic, social, and aesthetic specificity based on verified ethnographic references.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-earth-soil">
                <CheckCircle2 className="w-4 h-4 text-earth-forest" />
                <span>Scholarly Citation & Transparency</span>
              </div>
              <p className="text-xs leading-relaxed text-earth-mud">
                Every factual claim regarding demographics, clan organization, or linguistic lineage is anchored in academic citations from institutions like SCSTRTI, Oxford University Press monographs, and Census records.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Collaborations */}
        <div className="space-y-6">
          <h3 className="font-serif font-black text-2xl text-earth-soil text-center">
            Academic & Institutional Reference Network
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-earth-ivory rounded-2xl border border-earth-sand text-xs font-semibold text-earth-soil">
              SCSTRTI Odisha
            </div>
            <div className="p-4 bg-earth-ivory rounded-2xl border border-earth-sand text-xs font-semibold text-earth-soil">
              Odisha State Museum
            </div>
            <div className="p-4 bg-earth-ivory rounded-2xl border border-earth-sand text-xs font-semibold text-earth-soil">
              Verrier Elwin Archives
            </div>
            <div className="p-4 bg-earth-ivory rounded-2xl border border-earth-sand text-xs font-semibold text-earth-soil">
              CIIL Mysore
            </div>
          </div>
        </div>

        {/* Contact and Community Participation */}
        <div className="bg-earth-soil text-earth-ivory p-8 rounded-3xl border border-earth-terracotta text-center space-y-4">
          <Mail className="w-8 h-8 mx-auto text-earth-sand" />
          <h3 className="font-serif font-bold text-2xl text-white">Community Participation & Corrections</h3>
          <p className="text-xs sm:text-sm text-earth-sand/80 max-w-xl mx-auto leading-relaxed">
            Are you an indigenous community researcher, elder, teacher, or scholar with corrections, recordings, or oral folklore to share? We welcome community guidance and partnership.
          </p>
          <div className="pt-2">
            <a
              href="mailto:contact@adilok.co.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-earth-terracotta hover:bg-earth-mud text-white text-xs font-bold transition-colors shadow-sm"
            >
              <span>Contact Editorial Board: contact@adilok.co.in</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
