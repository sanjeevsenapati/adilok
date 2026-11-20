import { District } from '../types';

export const districtsData: District[] = [
  {
    id: 'koraput',
    name: 'Koraput',
    nativeName: 'କୋରାପୁଟ',
    headquarters: 'Koraput',
    region: 'Southern Highlands',
    tribalPopulationPercent: '50.6%',
    forestCoverPercent: '42.8%',
    landscapeDescription: 'Part of the ancient Eastern Ghats mountain spine, defined by misty peaks like Deomali (Odisha’s highest summit at 1,672m), deep valley gorges, stepped rice terraces, and red laterite plateaus.',
    indigenousCommunities: ['Gadaba', 'Paraja', 'Bonda', 'Kondh', 'Bhatra', 'Didaya'],
    culturalCentres: [
      {
        name: 'Kunduli Haat (Weekly Market)',
        type: 'Haat (Weekly Market)',
        description: 'One of the largest indigenous weekly markets in Asia, where Paraja and Gadaba communities converge every Friday to trade organic mountain produce and pottery.'
      },
      {
        name: 'Deomali Peak & Sacred Groves',
        type: 'Waterfall / Natural Monument',
        description: 'Highest peak of Odisha, revered as sacred mountain territory surrounded by rich endemic medicinal flora.'
      },
      {
        name: 'Koraput Tribal Museum',
        type: 'Museum',
        description: 'Comprehensive repository displaying tribal dress, stone tools, musical instruments, and traditional courtyard architecture.'
      }
    ],
    coordinates: { x: 38, y: 78 }
  },
  {
    id: 'rayagada',
    name: 'Rayagada',
    nativeName: 'ରାୟଗଡ଼ା',
    headquarters: 'Rayagada',
    region: 'Southern Highlands',
    tribalPopulationPercent: '56.0%',
    forestCoverPercent: '46.5%',
    landscapeDescription: 'Dominated by the sacred Niyamgiri hill range and Nagavali-Vansadhara river valleys, characterised by dramatic tropical deciduous canopy forests and steep mountain gorges.',
    indigenousCommunities: ['Dongria Kondh', 'Lanjia Saora', 'Kutia Kondh'],
    culturalCentres: [
      {
        name: 'Niyamgiri Sacred Hills',
        type: 'Sacred Grove',
        description: 'Inviolate abode of Niyam Raja Penu, preserving pristine mountain ecosystems and perennial mountain water catchments.'
      },
      {
        name: 'Chatikona Tribal Haat',
        type: 'Haat (Weekly Market)',
        description: 'Vibrant Wednesday market where Dongria Kondh families descend from hill peaks carrying fresh pineapples, ginger, and wild honey.'
      },
      {
        name: 'Minajhola River Confluence',
        type: 'Heritage Village',
        description: 'Sacred confluence of three hill rivers (Vamsadhara, Chauldhua, and Phalaphalia) hosting ancient Shiva-tribal syncretic rituals.'
      }
    ],
    coordinates: { x: 50, y: 74 }
  },
  {
    id: 'malkangiri',
    name: 'Malkangiri',
    nativeName: 'ମାଲକାନଗିରି',
    headquarters: 'Malkangiri',
    region: 'Southern Highlands',
    tribalPopulationPercent: '57.8%',
    forestCoverPercent: '52.3%',
    landscapeDescription: 'The southernmost frontier of Odisha, bordered by the Sabari and Sileru rivers, famous for the mist-clad Bondo Hills and expansive water reserves.',
    indigenousCommunities: ['Bonda (Remo)', 'Koya', 'Didayi', 'Dharua'],
    culturalCentres: [
      {
        name: 'Onukudelli Indigenous Haat',
        type: 'Haat (Weekly Market)',
        description: 'Renowned Thursday trading market on the plateau rim where Bonda and Gadaba women barter forest goods.'
      },
      {
        name: 'Bondo Hills Sacred Plateau',
        type: 'Heritage Village',
        description: 'Ancient isolated plateau home to the Upper Bonda villages, practicing customary self-governance.'
      },
      {
        name: 'Balimela Reservoir & Gurupriya',
        type: 'Waterfall / Natural Monument',
        description: 'Expansive scenic inland water network weaving through forested hills of the erstwhile cut-off region.'
      }
    ],
    coordinates: { x: 26, y: 88 }
  },
  {
    id: 'mayurbhanj',
    name: 'Mayurbhanj',
    nativeName: 'ମୟୂରଭଞ୍ଜ',
    headquarters: 'Baripada',
    region: 'Northern Plateau',
    tribalPopulationPercent: '58.7%',
    forestCoverPercent: '41.2%',
    landscapeDescription: 'Home to the UNESCO World Heritage Similipal Biosphere Reserve, marked by ancient sal forests, rolling red soil plains, and roaring waterfalls like Barehipani and Joranda.',
    indigenousCommunities: ['Santal', 'Ho', 'Kolha', 'Bathudi', 'Lodha', 'Mankidia'],
    culturalCentres: [
      {
        name: 'Similipal Biosphere Reserve & Sacred Jaher',
        type: 'Sacred Grove',
        description: 'Vast national park and UNESCO biosphere housing traditional Santal, Ho, and Khadia sacred Sal tree groves.'
      },
      {
        name: 'Pandit Raghunath Murmu Smruti Peetha',
        type: 'Heritage Village',
        description: 'Memorial and museum honoring the inventor of the Ol Chiki script at Dandbose near Rairangpur.'
      },
      {
        name: 'Baripada Chhau & Tribal Arts Complex',
        type: 'Museum',
        description: 'Centre of Mayurbhanj Chhau martial dance and indigenous brass Dokra casting.'
      }
    ],
    coordinates: { x: 78, y: 22 }
  },
  {
    id: 'keonjhar',
    name: 'Keonjhar',
    nativeName: 'କେନ୍ଦୁଝର',
    headquarters: 'Keonjhar',
    region: 'Northern Plateau',
    tribalPopulationPercent: '45.4%',
    forestCoverPercent: '43.9%',
    landscapeDescription: 'Splendid highland plateau crowned by the Gonasika mountain where the sacred Baitarani river emerges, interspersed with dense sal, mahua, and kendu timber tracts.',
    indigenousCommunities: ['Juang', 'Bhuyan', 'Munda', 'Bathudi'],
    culturalCentres: [
      {
        name: 'Gonasika Guptaganga',
        type: 'Waterfall / Natural Monument',
        description: 'The mythic origin of the Baitarani River emerging through a natural rock shaped like a cow’s snout, sacred to the Juang.'
      },
      {
        name: 'Sanaghagara & Badaghagara Valleys',
        type: 'Sacred Grove',
        description: 'Perennial natural waterfall sanctuaries surrounded by tribal swidden terraces.'
      },
      {
        name: 'Juang Development Agency Centre',
        type: 'Heritage Village',
        description: 'Cultural documentation centre preserving the Juang Majang architecture and traditional bamboo crafts.'
      }
    ],
    coordinates: { x: 68, y: 34 }
  },
  {
    id: 'kandhamal',
    name: 'Kandhamal',
    nativeName: 'କନ୍ଧମାଳ',
    headquarters: 'Phulbani',
    region: 'Central Hills',
    tribalPopulationPercent: '53.6%',
    forestCoverPercent: '68.1%',
    landscapeDescription: 'Known as the highland green heart of Odisha with over 68% forest cover, blessed with pine valleys like Daringbadi ("Kashmir of Odisha") and rugged mountain passes.',
    indigenousCommunities: ['Kutia Kondh', 'Desia Kondh'],
    culturalCentres: [
      {
        name: 'Belghar Valley of Kutia Kondh',
        type: 'Heritage Village',
        description: 'Isolated highland haven preserving ancient Kutia Kondh wooden longhouses, dokra metal crafts, and Kedu festival traditions.'
      },
      {
        name: 'Daringbadi Pine Sanctuary & Coffee Gardens',
        type: 'Waterfall / Natural Monument',
        description: 'High-altitude eco-plateau surrounded by indigenous tribal coffee and black pepper organic plantations.'
      }
    ],
    coordinates: { x: 48, y: 56 }
  },
  {
    id: 'sundargarh',
    name: 'Sundargarh',
    nativeName: 'ସୁନ୍ଦରଗଡ଼',
    headquarters: 'Sundargarh',
    region: 'Northern Plateau',
    tribalPopulationPercent: '50.7%',
    forestCoverPercent: '42.6%',
    landscapeDescription: 'Rolling undulating plateau in the Ib and Brahmani river basins, famous globally as the cradle of Indian hockey nurtured in tribal village schools.',
    indigenousCommunities: ['Oraon', 'Munda', 'Kisan', 'Kharia'],
    culturalCentres: [
      {
        name: 'Khandadhar Waterfall Heritage Area',
        type: 'Waterfall / Natural Monument',
        description: 'Dramatic 244-meter natural cascade surrounded by pristine tribal forest settlements.'
      },
      {
        name: 'Tribal Hockey & Cultural Trail',
        type: 'Heritage Village',
        description: 'Historic village grounds where indigenous athletic traditions and Karama festival drumming blend seamlessly.'
      }
    ],
    coordinates: { x: 46, y: 24 }
  },
  {
    id: 'gajapati',
    name: 'Gajapati',
    nativeName: 'ଗଜପତି',
    headquarters: 'Paralakhemundi',
    region: 'Southern Highlands',
    tribalPopulationPercent: '54.3%',
    forestCoverPercent: '56.9%',
    landscapeDescription: 'Lush mountain frontier adjoining the Mahendragiri peak (1,501m), famous for Saora stone terraces and pristine evergreen mountain streams.',
    indigenousCommunities: ['Lanjia Saora', 'Shabar'],
    culturalCentres: [
      {
        name: 'Mahendragiri Sacred Mountain',
        type: 'Sacred Grove',
        description: 'Ancient mountain sanctuary sacred to both epic lore and Saora spiritual legends, rich with medicinal mountain herbs.'
      },
      {
        name: 'Pottasingi Saora Cultural Hamlet',
        type: 'Heritage Village',
        description: 'Traditional Lanjia Saora village where authentic Idital wall art is painted inside every household.'
      }
    ],
    coordinates: { x: 62, y: 82 }
  }
];
