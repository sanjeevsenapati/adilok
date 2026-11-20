export type LanguageFamily = 'Dravidian' | 'Austroasiatic (Munda)' | 'Indo-Aryan';

export type OdishaRegion = 'Southern Highlands' | 'Northern Plateau' | 'Central Hills' | 'Coastal & Delta';

export interface Community {
  id: string;
  slug: string;
  name: string;
  nativeName: string;
  isPVTG: boolean; // Particularly Vulnerable Tribal Group
  tagline: string;
  districts: string[];
  region: OdishaRegion;
  languages: string[];
  languageFamily: LanguageFamily;
  populationEstimate: string;
  heroImage: string;
  portraitImage: string;
  introduction: string;
  history: string;
  socialOrganisation: {
    clans: string;
    villageHeadman: string;
    youthDormitories?: string;
    familyStructure: string;
  };
  livelihood: {
    primaryOccupation: string;
    agriculture: string;
    forestGathering: string;
    crafts: string[];
  };
  traditions: {
    clothing: string;
    ornaments: string;
    foodHabits: string[];
    sacredBeliefs: string;
  };
  festivals: {
    name: string;
    nativeName: string;
    season: string;
    significance: string;
  }[];
  danceAndMusic: {
    danceForms: string[];
    instruments: string[];
    significance: string;
  };
  artAndCraft: {
    title: string;
    description: string;
    materialsUsed: string[];
  };
  contemporaryLife: string;
  challenges: string;
  gallery: {
    url: string;
    caption: string;
    credit: string;
  }[];
  sources: {
    title: string;
    author: string;
    year: string;
    type: 'Monograph' | 'Government Report' | 'Academic Journal' | 'Census Archive';
  }[];
  lastVerified: string;
}

export interface District {
  id: string;
  name: string;
  nativeName: string;
  headquarters: string;
  region: OdishaRegion;
  tribalPopulationPercent: string;
  landscapeDescription: string;
  forestCoverPercent: string;
  indigenousCommunities: string[];
  culturalCentres: {
    name: string;
    type: 'Haat (Weekly Market)' | 'Sacred Grove' | 'Heritage Village' | 'Museum' | 'Waterfall / Natural Monument';
    description: string;
  }[];
  coordinates: {
    x: number; // percentage coordinates for interactive SVG map
    y: number;
  };
}

export interface CulturalItem {
  id: string;
  title: string;
  nativeTitle: string;
  category: 'dance' | 'music' | 'festivals' | 'rituals' | 'clothing' | 'food' | 'art' | 'architecture';
  community: string;
  description: string;
  culturalSignificance: string;
  materialsOrElements?: string[];
  seasonOrOccasion?: string;
  image: string;
  audioGuideUrl?: string;
}

export interface MuseumArtefact {
  id: string;
  title: string;
  nativeTitle: string;
  category: 'Wall Paintings' | 'Textiles & Weaves' | 'Musical Instruments' | 'Metal & Brass Craft' | 'Pottery & Woodwork' | 'Jewellery & Adornments';
  community: string;
  periodOrEra: string;
  material: string;
  dimensions: string;
  originDistrict: string;
  provenance: string;
  curatorNotes: string;
  image: string;
  detailImages?: string[];
  audioNarrative?: string;
}

export interface ResearchDocument {
  id: string;
  title: string;
  nativeTitle?: string;
  author: string;
  institution: string;
  year: number;
  category: 'Anthropology' | 'Linguistics' | 'Ethnobotany' | 'Material Culture' | 'Policy & Development';
  abstract: string;
  communitiesCovered: string[];
  doiOrRef: string;
  pages: number;
  fileFormat: 'PDF' | 'Archive' | 'Interactive Study';
  downloadSize: string;
}
