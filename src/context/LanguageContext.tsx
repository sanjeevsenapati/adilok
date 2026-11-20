import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'or';

interface Translations {
  [key: string]: {
    en: string;
    or: string;
  };
}

export const translations: Translations = {
  brandName: { en: 'ADILOK', or: 'ଆଦିଲୋକ' },
  tagline: { en: 'People · Culture · Heritage', or: 'ଜନଜୀବନ · ସଂସ୍କୃତି · ଐତିହ୍ୟ' },
  subtitle: { en: 'The Living Heritage of Odisha', or: 'ଓଡ଼ିଶାର ଜୀବନ୍ତ ଆଦିବାସୀ ଐତିହ୍ୟ' },
  navHome: { en: 'Home', or: 'ମୂଳପୃଷ୍ଠା' },
  navCommunities: { en: 'Tribal Communities', or: 'ଆଦିବାସୀ ସମୁଦାୟ' },
  navCulture: { en: 'Culture & Traditions', or: 'ସଂସ୍କୃତି ଓ ପରମ୍ପରା' },
  navExplore: { en: 'Explore Odisha', or: 'ଓଡ଼ିଶା ଦର୍ଶନ' },
  navMuseum: { en: 'Digital Museum', or: 'ଡିଜିଟାଲ୍ ସଂଗ୍ରହାଳୟ' },
  navResearch: { en: 'Research Library', or: 'ଗବେଷଣା ଅଭିଲେଖାଗାର' },
  navAbout: { en: 'About ADILOK', or: 'ଆଦିଲୋକ ବିଷୟରେ' },
  navExhibition: { en: 'Exhibition Kiosk Mode', or: 'ପ୍ରଦର୍ଶନୀ ମୋଡ୍' },
  searchPlaceholder: { en: 'Search communities, art, dance, festivals, districts...', or: 'ସମୁଦାୟ, କଳା, ନୃତ୍ୟ, ପର୍ବପର୍ବାଣି ଖୋଜନ୍ତୁ...' },
  exploreButton: { en: 'Explore Communities', or: 'ସମୁଦାୟ ଅନୁସନ୍ଧାନ' },
  interactiveMapButton: { en: 'Interactive Map', or: 'ମାନଚିତ୍ର ଦେଖନ୍ତୁ' },
  museumButton: { en: 'Enter Digital Museum', or: 'ସଂଗ୍ରହାଳୟ ପ୍ରବେଶ' },
  featuredCommunities: { en: 'Featured Indigenous Communities', or: 'ପ୍ରମୁଖ ଆଦିବାସୀ ସମୁଦାୟ' },
  featuredSubtitle: { en: 'Discover the ancient lineages, languages, art forms, and ecological knowledge of Odisha’s 62 tribal communities.', or: 'ଓଡ଼ିଶାର ୬୨ଟି ଜନଜାତିଙ୍କ ପ୍ରାଚୀନ ଐତିହ୍ୟ, ଭାଷା, କଳା ଓ ପରିବେଶୀୟ ଜ୍ଞାନ ଆବିଷ୍କାର କରନ୍ତୁ।' },
  pvtgBadge: { en: 'Particularly Vulnerable Tribal Group (PVTG)', or: 'ବିଶେଷ ଭାବେ ଅସୁରକ୍ଷିତ ଜନଜାତି (PVTG)' },
  readProfile: { en: 'Explore Complete Profile', or: 'ସମ୍ପୂର୍ଣ୍ଣ ବିବରଣୀ ପଢ଼ନ୍ତୁ' },
  footerRights: { en: 'All cultural content curated in collaboration with community elders and ethnographers. Dedicated to cultural preservation.', or: 'ସମସ୍ତ ସାଂସ୍କୃତିକ ବିବରଣୀ ସମୁଦାୟର ବୟୋଜ୍ୟେଷ୍ଠ ଓ ନୃତତ୍ତ୍ୱବିତ୍‌ଙ୍କ ସହଯୋଗରେ ସଂଗୃହୀତ।' },
  searchTitle: { en: 'Universal Cultural Search', or: 'ସାଂସ୍କୃତିକ ଅନୁସନ୍ଧାନ' },
  noResults: { en: 'No matching records found. Try another search term.', or: 'କୌଣସି ଫଳାଫଳ ମିଳିଲା ନାହିଁ।' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('adilok_lang') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('adilok_lang', language);
    document.documentElement.lang = language === 'or' ? 'or' : 'en';
  }, [language]);

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key].en;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
