export interface ManifestImage {
  id: string;
  path: string;
  title: string;
  altText: string;
  category: 'hero' | 'portraits' | 'culture' | 'art-craft' | 'museum' | 'villages' | 'brand' | 'decorative';
  community?: string;
  district?: string;
  creator: string;
  attribution: string;
}

export const imageManifest: Record<string, ManifestImage> = {
  heroHighlands: {
    id: 'heroHighlands',
    path: '/assets/hero/highlands.jpg',
    title: 'Eastern Ghats Tribal Highlands',
    altText: 'Lush misty terraced hills, red earth trails, and traditional tribal hamlet in the Odisha highlands at golden sunrise',
    category: 'hero',
    district: 'Koraput / Rayagada',
    creator: 'ADILOK Heritage Visual Studio',
    attribution: 'Cultural Documentary Collection'
  },
  portraitDongria: {
    id: 'portraitDongria',
    path: '/assets/portraits/dongria_kondh.jpg',
    title: 'Dongria Kondh Woman with Kapdaganda Shawl',
    altText: 'Elder Dongria Kondh woman in traditional embroidered Kapdaganda shawl, brass earrings and nose rings',
    category: 'portraits',
    community: 'Dongria Kondh',
    district: 'Rayagada (Niyamgiri)',
    creator: 'ADILOK Indigenous Documentation Archive',
    attribution: 'Photographic Collection'
  },
  portraitSaora: {
    id: 'portraitSaora',
    path: '/assets/portraits/lanjia_saora.jpg',
    title: 'Lanjia Saora Elder with Sacred Murals',
    altText: 'Weathered dignified Lanjia Saora elder wearing traditional necklaces and earrings before an earthen home with Idital murals',
    category: 'portraits',
    community: 'Lanjia Saora',
    district: 'Gajapati / Rayagada',
    creator: 'ADILOK Indigenous Documentation Archive',
    attribution: 'Photographic Collection'
  },
  portraitBonda: {
    id: 'portraitBonda',
    path: '/assets/portraits/bonda.jpg',
    title: 'Bonda Tribal Woman in Heritage Regalia',
    altText: 'Bonda tribal woman with circular brass collar, shaved head adorned with beads, and dense colorful San-sari glass bead necklaces',
    category: 'portraits',
    community: 'Bonda (Remo)',
    district: 'Malkangiri (Bondo Hills)',
    creator: 'ADILOK Indigenous Documentation Archive',
    attribution: 'Photographic Collection'
  },
  portraitSantal: {
    id: 'portraitSantal',
    path: '/assets/portraits/santal.jpg',
    title: 'Santal Woman in Traditional Panchi Saree',
    altText: 'Proud Santal woman draped in traditional green and red bordered handwoven Panchi saree with wild forest flowers in braided hair',
    category: 'portraits',
    community: 'Santal',
    district: 'Mayurbhanj',
    creator: 'ADILOK Indigenous Documentation Archive',
    attribution: 'Photographic Collection'
  },
  portraitGadaba: {
    id: 'portraitGadaba',
    path: '/assets/portraits/gadaba.jpg',
    title: 'Gadaba Elder Woman with Khagla Neck Ring',
    altText: 'Elder Gadaba tribal woman wearing the iconic circular solid brass neck ring (Khagla) and striped Kereng cloth',
    category: 'portraits',
    community: 'Gadaba',
    district: 'Koraput',
    creator: 'ADILOK Indigenous Documentation Archive',
    attribution: 'Photographic Collection'
  },
  portraitJuang: {
    id: 'portraitJuang',
    path: '/assets/portraits/juang.jpg',
    title: 'Juang Artisan Weaving Bamboo Craft',
    altText: 'Juang indigenous artisan weaving an intricate golden bamboo grain basket in Keonjhar village courtyard',
    category: 'portraits',
    community: 'Juang',
    district: 'Keonjhar',
    creator: 'ADILOK Indigenous Documentation Archive',
    attribution: 'Photographic Collection'
  },
  portraitParaja: {
    id: 'portraitParaja',
    path: '/assets/portraits/paraja.jpg',
    title: 'Paraja Tribal Woman in Festive Attire',
    altText: 'Smiling Paraja tribal woman wearing red-bordered cotton saree, silver coin necklace and wild forest flowers against misty hills',
    category: 'portraits',
    community: 'Paraja',
    district: 'Koraput',
    creator: 'ADILOK Indigenous Documentation Archive',
    attribution: 'Photographic Collection'
  },
  artSauraMural: {
    id: 'artSauraMural',
    path: '/assets/art-craft/saura/idital_mural.jpg',
    title: 'Sacred Saura Idital Wall Painting',
    altText: 'Traditional white rice-paste geometric mural of Tree of Life and dancing figures on terracotta red-ochre earthen wall',
    category: 'art-craft',
    community: 'Lanjia Saora',
    district: 'Gajapati',
    creator: 'ADILOK Digital Museum Archive',
    attribution: 'Cultural Arts Collection'
  },
  cultureDhemsa: {
    id: 'cultureDhemsa',
    path: '/assets/culture/dance/dhemsa.jpg',
    title: 'Dhemsa Tribal Folk Dance',
    altText: 'Tribal women dancing arm-in-arm in a synchronized rhythmic Dhemsa line on red soil in golden sunlight',
    category: 'culture',
    community: 'Gadaba, Paraja, Kondh',
    district: 'Koraput',
    creator: 'ADILOK Heritage Visual Studio',
    attribution: 'Folk Traditions Archive'
  },
  museumDhokra: {
    id: 'museumDhokra',
    path: '/assets/museum/dhokra_elephant.jpg',
    title: 'Dhokra Lost-Wax Cast Brass Elephant',
    altText: 'Museum display of authentic Odisha tribal Dhokra lost-wax brass cast elephant with deity rider on terracotta plinth',
    category: 'museum',
    community: 'Kondh',
    district: 'Kandhamal / Rayagada',
    creator: 'ADILOK Digital Museum Archive',
    attribution: 'Heritage Sculpture Collection'
  }
};
