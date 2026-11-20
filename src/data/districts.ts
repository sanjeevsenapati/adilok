import { District, OdishaRegion } from '../types';

export const districtsData: District[] = [
  {
    id: 'koraput',
    name: 'Koraput',
    nativeName: 'କୋରାପୁଟ',
    headquarters: 'Koraput',
    region: 'Southern Highlands',
    tribalPopulationPercent: '50.6%',
    forestCoverPercent: '42.8%',
    landscapeDescription: 'Heart of the southern Eastern Ghats, defined by Deomali peak (Odisha’s highest summit at 1,672m), deep valley gorges, stepped rice terraces, and red laterite plateaus.',
    indigenousCommunities: ['Gadaba', 'Paraja', 'Bonda', 'Kondh', 'Bhatra', 'Didayi'],
    culturalCentres: [
      {
        name: 'Kunduli Haat (Weekly Market)',
        type: 'Haat (Weekly Market)',
        description: 'One of the largest indigenous weekly markets in Asia, where Paraja and Gadaba communities converge every Friday to trade mountain produce.'
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
    coordinates: { x: 235, y: 575 }
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
        description: 'Ancient isolated plateau home to Upper Bonda villages practicing customary self-governance.'
      },
      {
        name: 'Balimela Reservoir & Gurupriya',
        type: 'Waterfall / Natural Monument',
        description: 'Expansive scenic inland water network weaving through forested hills.'
      }
    ],
    coordinates: { x: 130, y: 645 }
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
        description: 'Sacred confluence of three hill rivers hosting ancient Shiva-tribal syncretic rituals.'
      }
    ],
    coordinates: { x: 335, y: 535 }
  },
  {
    id: 'gajapati',
    name: 'Gajapati',
    nativeName: 'ଗଜପତି',
    headquarters: 'Paralakhemundi',
    region: 'Southern Highlands',
    tribalPopulationPercent: '54.3%',
    forestCoverPercent: '56.9%',
    landscapeDescription: 'Lush mountain frontier adjoining Mahendragiri peak (1,501m), famous for ancient Saora stone terraces and evergreen mountain streams.',
    indigenousCommunities: ['Lanjia Saora', 'Shabar'],
    culturalCentres: [
      {
        name: 'Mahendragiri Sacred Mountain',
        type: 'Sacred Grove',
        description: 'Ancient mountain sanctuary sacred to Saora spiritual legends and rich with medicinal flora.'
      },
      {
        name: 'Pottasingi Saora Cultural Hamlet',
        type: 'Heritage Village',
        description: 'Traditional Lanjia Saora village where authentic Idital wall art is painted inside every household.'
      }
    ],
    coordinates: { x: 440, y: 565 }
  },
  {
    id: 'nabarangpur',
    name: 'Nabarangpur',
    nativeName: 'ନବରଙ୍ଗପୁର',
    headquarters: 'Nabarangpur',
    region: 'Southern Highlands',
    tribalPopulationPercent: '55.8%',
    forestCoverPercent: '38.5%',
    landscapeDescription: 'Sprawling plateau in the Indravati river basin, renowned for lac-ware artisans, dense Sal forests, and vibrant weekly cattle markets.',
    indigenousCommunities: ['Gond', 'Paraja', 'Bhatra', 'Amanatya'],
    culturalCentres: [
      {
        name: 'Chandan Dhara Waterfall',
        type: 'Waterfall / Natural Monument',
        description: 'Scenic natural fall surrounded by dense tribal teak and sal plantations.'
      },
      {
        name: 'Hirapur Lac Crafts Cluster',
        type: 'Heritage Village',
        description: 'Traditional hamlet producing natural lacquer bangles and decorative tribal animal motifs.'
      }
    ],
    coordinates: { x: 195, y: 505 }
  },
  {
    id: 'kalahandi',
    name: 'Kalahandi',
    nativeName: 'କଳାହାଣ୍ଡି',
    headquarters: 'Bhawanipatna',
    region: 'Southern Highlands',
    tribalPopulationPercent: '28.5%',
    forestCoverPercent: '34.2%',
    landscapeDescription: 'Surrounded by the Tel and Hati rivers and forested ranges like Ampani hills; legendary home of the energetic Ghumura martial-folk drum dance.',
    indigenousCommunities: ['Kondh', 'Gond', 'Kutia Kondh'],
    culturalCentres: [
      {
        name: 'Asurgarh Historic Citadel',
        type: 'Museum',
        description: 'Ancient fortress site uncovering circular beads, coins, and early indigenous iron implements.'
      },
      {
        name: 'Ampani Hills & Haladigundi Valley',
        type: 'Sacred Grove',
        description: 'Forest reserve home to blackbucks and traditional tribal herbal foraging.'
      }
    ],
    coordinates: { x: 235, y: 445 }
  },
  {
    id: 'nuapada',
    name: 'Nuapada',
    nativeName: 'ନୂଆପଡ଼ା',
    headquarters: 'Nuapada',
    region: 'Central Hills',
    tribalPopulationPercent: '33.8%',
    forestCoverPercent: '44.0%',
    landscapeDescription: 'Rugged western border plateau sheltering the Sunabeda Wildlife Sanctuary and the rare Chuktia Bhunjia particularly vulnerable tribal group.',
    indigenousCommunities: ['Chuktia Bhunjia (PVTG)', 'Gond', 'Kondh'],
    culturalCentres: [
      {
        name: 'Sunabeda Tiger Reserve Plateau',
        type: 'Sacred Grove',
        description: 'Tableland sanctuary home to the Chuktia Bhunjia community and their sacred kitchen (Lal Bungla) taboos.'
      },
      {
        name: 'Patora Dam & Yogeswar Temple',
        type: 'Waterfall / Natural Monument',
        description: 'Picturesque waterbody nestled between green hillocks.'
      }
    ],
    coordinates: { x: 170, y: 395 }
  },
  {
    id: 'kandhamal',
    name: 'Kandhamal',
    nativeName: 'କନ୍ଧମାଳ',
    headquarters: 'Phulbani',
    region: 'Central Hills',
    tribalPopulationPercent: '53.6%',
    forestCoverPercent: '68.1%',
    landscapeDescription: 'Highland green heart of Odisha with over 68% forest cover, blessed with pine valleys like Daringbadi ("Kashmir of Odisha") and rugged mountain passes.',
    indigenousCommunities: ['Kutia Kondh', 'Desia Kondh'],
    culturalCentres: [
      {
        name: 'Belghar Valley of Kutia Kondh',
        type: 'Heritage Village',
        description: 'Isolated highland haven preserving ancient Kutia Kondh wooden longhouses, dokra metal crafts, and Kedu festival.'
      },
      {
        name: 'Daringbadi Pine Sanctuary',
        type: 'Waterfall / Natural Monument',
        description: 'High-altitude eco-plateau surrounded by indigenous tribal coffee and black pepper organic plantations.'
      }
    ],
    coordinates: { x: 375, y: 435 }
  },
  {
    id: 'balangir',
    name: 'Balangir',
    nativeName: 'ବଲାଙ୍ଗୀର',
    headquarters: 'Balangir',
    region: 'Central Hills',
    tribalPopulationPercent: '21.1%',
    forestCoverPercent: '22.4%',
    landscapeDescription: 'Historic western kingdom framed by the medicinal Gandhamardan hills, vibrant Sambalpuri handloom weaving, and Patneswari shrine.',
    indigenousCommunities: ['Binjhal', 'Kondh', 'Gond'],
    culturalCentres: [
      {
        name: 'Harishankar Medicinal Grove',
        type: 'Sacred Grove',
        description: 'Foothills of Gandhamardan range with cascading streams and hundreds of rare Himalayan medicinal plants.'
      },
      {
        name: 'Ranipur Jharial 64 Yogini Complex',
        type: 'Museum',
        description: 'Historic open-air hypaethral stone temple complex of medieval tantric and indigenous rock heritage.'
      }
    ],
    coordinates: { x: 265, y: 370 }
  },
  {
    id: 'bargarh',
    name: 'Bargarh',
    nativeName: 'ବରଗଡ଼',
    headquarters: 'Bargarh',
    region: 'Central Hills',
    tribalPopulationPercent: '19.8%',
    forestCoverPercent: '19.7%',
    landscapeDescription: 'The rice bowl of Western Odisha, famed globally for the 11-day Dhanu Jatra open-air theater and exquisite Sambalpuri tie-and-dye handlooms.',
    indigenousCommunities: ['Binjhal', 'Sahara', 'Gond'],
    culturalCentres: [
      {
        name: 'Nrusinghanath Sacred Stream',
        type: 'Sacred Grove',
        description: 'Pilgrimage site in the Gandhamardan hills celebrated by tribal pilgrims and herbalists.'
      },
      {
        name: 'Bargarh Dhanu Jatra Arena',
        type: 'Heritage Village',
        description: 'World’s largest open-air theater festival where the entire town transforms into mythic Mathura.'
      }
    ],
    coordinates: { x: 285, y: 280 }
  },
  {
    id: 'subarnapur',
    name: 'Subarnapur',
    nativeName: 'ସୁବର୍ଣ୍ଣପୁର',
    headquarters: 'Sonepur',
    region: 'Central Hills',
    tribalPopulationPercent: '9.8%',
    forestCoverPercent: '18.1%',
    landscapeDescription: 'Temple town at the confluence of the Mahanadi and Tel rivers, celebrated for Bomkai and Sonepuri pure silk ikat weaving.',
    indigenousCommunities: ['Kondh', 'Binjhal', 'Gond'],
    culturalCentres: [
      {
        name: 'Sonepur Handloom Cluster',
        type: 'Heritage Village',
        description: 'Master weavers crafting natural silk ikat sarees with traditional floral and fish motifs.'
      }
    ],
    coordinates: { x: 330, y: 350 }
  },
  {
    id: 'boudh',
    name: 'Boudh',
    nativeName: 'ବୌଦ୍ଧ',
    headquarters: 'Boudh',
    region: 'Central Hills',
    tribalPopulationPercent: '12.5%',
    forestCoverPercent: '41.2%',
    landscapeDescription: 'Fertile riverine district alongside the Mahanadi river, famous for 9th-century star-shaped Buddhist stone shrines.',
    indigenousCommunities: ['Kondh', 'Gond'],
    culturalCentres: [
      {
        name: 'Boudh Buddha Colossus',
        type: 'Museum',
        description: 'Colossal stone Buddha statue reflecting syncretic tribal-Buddhist heritage of central Odisha.'
      }
    ],
    coordinates: { x: 395, y: 380 }
  },
  {
    id: 'sambalpur',
    name: 'Sambalpur',
    nativeName: 'ସମ୍ବଲପୁର',
    headquarters: 'Sambalpur',
    region: 'Central Hills',
    tribalPopulationPercent: '34.5%',
    forestCoverPercent: '48.9%',
    landscapeDescription: 'Cradle of Western Odisha folk culture on the banks of Mahanadi, crowned by the Hirakud Dam (one of world’s longest earthen dams).',
    indigenousCommunities: ['Kisan', 'Munda', 'Oraon', 'Gond'],
    culturalCentres: [
      {
        name: 'Samaleswari Sacred Temple',
        type: 'Sacred Grove',
        description: 'Presiding deity of Western Odisha where Nuakhai agrarian celebrations commence annually.'
      },
      {
        name: 'Hirakud Reservoir & Debrigarh Sanctuary',
        type: 'Waterfall / Natural Monument',
        description: 'Expansive inland sanctuary famous for four-horned antelopes and migratory water birds.'
      }
    ],
    coordinates: { x: 350, y: 260 }
  },
  {
    id: 'jharsuguda',
    name: 'Jharsuguda',
    nativeName: 'ଝାରସୁଗୁଡ଼ା',
    headquarters: 'Jharsuguda',
    region: 'Northern Plateau',
    tribalPopulationPercent: '31.3%',
    forestCoverPercent: '18.9%',
    landscapeDescription: 'Industrial and mineral powerhouse with rich pre-historic rock art paintings at Bikramkhol and ancient tribal settlements.',
    indigenousCommunities: ['Kisan', 'Munda', 'Oraon'],
    culturalCentres: [
      {
        name: 'Bikramkhol Prehistoric Rock Art',
        type: 'Museum',
        description: 'Ancient rock shelter with prehistoric scripts and petroglyphs dated to 3000 BCE.'
      }
    ],
    coordinates: { x: 360, y: 195 }
  },
  {
    id: 'sundargarh',
    name: 'Sundargarh',
    nativeName: 'ସୁନ୍ଦରଗଡ଼',
    headquarters: 'Sundargarh',
    region: 'Northern Plateau',
    tribalPopulationPercent: '50.7%',
    forestCoverPercent: '42.6%',
    landscapeDescription: 'Rolling plateau in the Ib and Brahmani basins, famous globally as the cradle of Indian hockey nurtured in tribal village schools.',
    indigenousCommunities: ['Oraon', 'Munda', 'Kisan', 'Kharia', 'Birhor'],
    culturalCentres: [
      {
        name: 'Khandadhar Waterfall Heritage Area',
        type: 'Waterfall / Natural Monument',
        description: 'Dramatic 244-meter natural cascade surrounded by pristine tribal forest settlements.'
      },
      {
        name: 'Tribal Hockey Village Trail',
        type: 'Heritage Village',
        description: 'Historic village grounds where indigenous athletic traditions and Karama festival drumming blend.'
      }
    ],
    coordinates: { x: 420, y: 155 }
  },
  {
    id: 'deogarh',
    name: 'Deogarh',
    nativeName: 'ଦେବଗଡ଼',
    headquarters: 'Deogarh',
    region: 'Northern Plateau',
    tribalPopulationPercent: '35.3%',
    forestCoverPercent: '53.6%',
    landscapeDescription: 'Picturesque hilly district blessed with thick Sal forests, medicinal hill ranges, and Pradhanpat waterfall.',
    indigenousCommunities: ['Bhuyan', 'Kisan', 'Munda'],
    culturalCentres: [
      {
        name: 'Pradhanpat Waterfall',
        type: 'Waterfall / Natural Monument',
        description: 'Cascading natural falls surrounded by lush green hills where early hydroelectric power was developed in Odisha.'
      }
    ],
    coordinates: { x: 435, y: 245 }
  },
  {
    id: 'keonjhar',
    name: 'Kendujhar',
    nativeName: 'କେନ୍ଦୁଝର',
    headquarters: 'Keonjhar',
    region: 'Northern Plateau',
    tribalPopulationPercent: '45.4%',
    forestCoverPercent: '43.9%',
    landscapeDescription: 'Splendid highland plateau crowned by Gonasika mountain where the sacred Baitarani river originates, home of the Juang PVTG.',
    indigenousCommunities: ['Juang (PVTG)', 'Bhuyan', 'Munda', 'Bathudi'],
    culturalCentres: [
      {
        name: 'Gonasika Guptaganga',
        type: 'Waterfall / Natural Monument',
        description: 'The mythic origin of the Baitarani River emerging through a natural rock shaped like a cow’s snout, sacred to the Juang.'
      },
      {
        name: 'Juang Development Agency Centre',
        type: 'Heritage Village',
        description: 'Cultural documentation centre preserving the Juang Majang architecture and traditional bamboo crafts.'
      }
    ],
    coordinates: { x: 535, y: 220 }
  },
  {
    id: 'mayurbhanj',
    name: 'Mayurbhanj',
    nativeName: 'ମୟୂରଭଞ୍ଜ',
    headquarters: 'Baripada',
    region: 'Northern Plateau',
    tribalPopulationPercent: '58.7%',
    forestCoverPercent: '41.2%',
    landscapeDescription: 'Home to the UNESCO Similipal Biosphere Reserve, red soil plains, Barehipani falls, and the legendary Mayurbhanj Chhau martial dance.',
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
        description: 'Memorial honoring the inventor of the Ol Chiki script at Dandbose.'
      },
      {
        name: 'Baripada Chhau Arts Complex',
        type: 'Museum',
        description: 'Centre of Mayurbhanj Chhau martial dance and indigenous Dokra brass craft.'
      }
    ],
    coordinates: { x: 670, y: 155 }
  },
  {
    id: 'balasore',
    name: 'Balasore',
    nativeName: 'ବାଲେଶ୍ୱର',
    headquarters: 'Balasore',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '11.9%',
    forestCoverPercent: '13.4%',
    landscapeDescription: 'Northern coastal district bordering West Bengal, famous for the vanishing sea at Chandipur, salt pans, and Bhumij tribal settlements.',
    indigenousCommunities: ['Santal', 'Bhumij', 'Ho'],
    culturalCentres: [
      {
        name: 'Chandipur Marine Beach',
        type: 'Waterfall / Natural Monument',
        description: 'Unique coast where the sea recedes up to 5 kilometres during low tide.'
      },
      {
        name: 'Khirachora Gopinath Shrine',
        type: 'Museum',
        description: 'Historic cultural landmark with medieval terracotta and stone sculpture.'
      }
    ],
    coordinates: { x: 700, y: 240 }
  },
  {
    id: 'bhadrak',
    name: 'Bhadrak',
    nativeName: 'ଭଦ୍ରକ',
    headquarters: 'Bhadrak',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '2.0%',
    forestCoverPercent: '8.8%',
    landscapeDescription: 'Coastal agricultural and maritime hub on the Salandi river, gateway to Dhamra port and olive ridley sea turtle nesting beaches.',
    indigenousCommunities: ['Santal', 'Munda'],
    culturalCentres: [
      {
        name: 'Dhamra Estuary & Port',
        type: 'Waterfall / Natural Monument',
        description: 'Historic ancient riverine maritime trade route linking Kalinga to Southeast Asia.'
      }
    ],
    coordinates: { x: 675, y: 310 }
  },
  {
    id: 'angul',
    name: 'Angul',
    nativeName: 'ଅନୁଗୋଳ',
    headquarters: 'Angul',
    region: 'Central Hills',
    tribalPopulationPercent: '14.1%',
    forestCoverPercent: '42.5%',
    landscapeDescription: 'Central industrial and mineral hub bordered by the Satkosia gorge wildlife sanctuary on the majestic Mahanadi river.',
    indigenousCommunities: ['Kondh', 'Gond'],
    culturalCentres: [
      {
        name: 'Satkosia Tiger Reserve & Gorge',
        type: 'Sacred Grove',
        description: 'Spectacular 22-kilometre gorge carved by the Mahanadi river, home to gharials and dense sal forests.'
      }
    ],
    coordinates: { x: 470, y: 330 }
  },
  {
    id: 'dhenkanal',
    name: 'Dhenkanal',
    nativeName: 'ଢେଙ୍କାନାଳ',
    headquarters: 'Dhenkanal',
    region: 'Central Hills',
    tribalPopulationPercent: '13.6%',
    forestCoverPercent: '37.8%',
    landscapeDescription: 'Famed for the sacred Kapilash hill shrine, Saptasajya eco-forests, Dokra bell-metal casting, and Mahima Dharma monastic headquarters (Joranda).',
    indigenousCommunities: ['Saora', 'Kondh', 'Munda'],
    culturalCentres: [
      {
        name: 'Saptasajya Forest Retreat',
        type: 'Sacred Grove',
        description: 'Seven legendary hill peaks covered with perennial springs and teak plantations.'
      },
      {
        name: 'Joranda Gadi (Mahima Monastic Hub)',
        type: 'Heritage Village',
        description: 'Spiritual centre of indigenous Mahima philosophy preaching formless worship and universal brotherhood.'
      }
    ],
    coordinates: { x: 530, y: 340 }
  },
  {
    id: 'jajpur',
    name: 'Jajpur',
    nativeName: 'ଯାଜପୁର',
    headquarters: 'Jajpur',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '8.3%',
    forestCoverPercent: '10.2%',
    landscapeDescription: 'Ancient capital of Kalinga along the Baitarani river, famous for Biraja Kshetra and the Diamond Triangle Buddhist monasteries (Ratnagiri, Udayagiri).',
    indigenousCommunities: ['Munda', 'Santal'],
    culturalCentres: [
      {
        name: 'Ratnagiri Buddhist Mahavihara',
        type: 'Museum',
        description: 'Excavated 5th-12th century monastery displaying exquisite stone carvings and votive stupas.'
      }
    ],
    coordinates: { x: 615, y: 325 }
  },
  {
    id: 'kendrapara',
    name: 'Kendrapara',
    nativeName: 'କେନ୍ଦ୍ରାପଡ଼ା',
    headquarters: 'Kendrapara',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '0.6%',
    forestCoverPercent: '11.5%',
    landscapeDescription: 'Deltaic wonderland home to Bhitarkanika National Park, Asia’s second largest mangrove ecosystem with saltwater crocodiles and migratory birds.',
    indigenousCommunities: ['Santal', 'Kondh'],
    culturalCentres: [
      {
        name: 'Bhitarkanika Mangrove Sanctuary',
        type: 'Waterfall / Natural Monument',
        description: 'Pristine Ramsar wetland home to giant saltwater crocodiles and white crocodiles.'
      }
    ],
    coordinates: { x: 680, y: 375 }
  },
  {
    id: 'cuttack',
    name: 'Cuttack',
    nativeName: 'କଟକ',
    headquarters: 'Cuttack',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '3.6%',
    forestCoverPercent: '17.3%',
    landscapeDescription: 'The millennial silver city founded in 989 CE at the bifurcation of Mahanadi and Kathajodi rivers, famous for Tarakasi (silver filigree).',
    indigenousCommunities: ['Santal', 'Munda'],
    culturalCentres: [
      {
        name: 'Barabati Fort & Moat',
        type: 'Museum',
        description: '14th-century Ganga dynasty stone citadel with nine-story palace ruins.'
      },
      {
        name: 'Bali Jatra Open Grounds',
        type: 'Heritage Village',
        description: 'Historic fair commemorating ancient voyages of Sadhabas (merchants) to Bali and Java.'
      }
    ],
    coordinates: { x: 575, y: 385 }
  },
  {
    id: 'jagatsinghpur',
    name: 'Jagatsinghpur',
    nativeName: 'ଜଗତସିଂହପୁର',
    headquarters: 'Jagatsinghpur',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '0.7%',
    forestCoverPercent: '9.2%',
    landscapeDescription: 'Coastal delta between Mahanadi and Devi rivers, home to the major deep-water port of Paradip and lush betel vine groves.',
    indigenousCommunities: ['Kondh', 'Santal'],
    culturalCentres: [
      {
        name: 'Paradip Sea Port & Light House',
        type: 'Waterfall / Natural Monument',
        description: 'Major international seaport at the mouth of the Mahanadi river.'
      }
    ],
    coordinates: { x: 635, y: 415 }
  },
  {
    id: 'khordha',
    name: 'Khordha',
    nativeName: 'ଖୋର୍ଦ୍ଧା',
    headquarters: 'Bhubaneswar',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '5.2%',
    forestCoverPercent: '23.8%',
    landscapeDescription: 'Encompasses state capital Bhubaneswar ("Temple City"), Barunei hills (homeland of Paika rebellion), and the northern rim of Chilika Lake.',
    indigenousCommunities: ['Kondh', 'Shabar', 'Santal'],
    culturalCentres: [
      {
        name: 'State Tribal Museum (SCSTRTI Bhubaneswar)',
        type: 'Museum',
        description: 'India’s premier tribal museum housing 5 authentic life-size replica tribal huts and 2,000+ artefacts.'
      },
      {
        name: 'Udayagiri & Khandagiri Caves',
        type: 'Museum',
        description: 'Ancient rock-cut caves of Emperor Kharavela with Hathigumpha inscription.'
      }
    ],
    coordinates: { x: 550, y: 440 }
  },
  {
    id: 'puri',
    name: 'Puri',
    nativeName: 'ପୁରୀ',
    headquarters: 'Puri',
    region: 'Coastal & Delta',
    tribalPopulationPercent: '0.3%',
    forestCoverPercent: '6.4%',
    landscapeDescription: 'Sacred coastal city of Lord Jagannath, Raghurajpur heritage craft village (Pattachitra), and the Konark Sun Temple (UNESCO World Heritage).',
    indigenousCommunities: ['Shabar', 'Kondh'],
    culturalCentres: [
      {
        name: 'Raghurajpur Crafts Heritage Village',
        type: 'Heritage Village',
        description: 'Village where every household practices traditional Pattachitra, palm-leaf carving, and cowdung toys.'
      },
      {
        name: 'Konark Sun Temple',
        type: 'Museum',
        description: '13th-century stone chariot architectural marvel carved with 24 colossal wheels.'
      }
    ],
    coordinates: { x: 590, y: 485 }
  },
  {
    id: 'nayagarh',
    name: 'Nayagarh',
    nativeName: 'ନୟାଗଡ଼',
    headquarters: 'Nayagarh',
    region: 'Central Hills',
    tribalPopulationPercent: '6.1%',
    forestCoverPercent: '33.1%',
    landscapeDescription: 'Verdant central district home to the Baisipalli Wildlife Sanctuary, traditional brass bell-metal artisans of Kantilo, and Chhena Poda sweet.',
    indigenousCommunities: ['Kondh', 'Saora'],
    culturalCentres: [
      {
        name: 'Kantilo Nilamadhaba Temple',
        type: 'Sacred Grove',
        description: 'Ancient hilltop shrine overlooking the Mahanadi, revered as the original place where tribal chief Viswavasu worshipped Nilamadhaba.'
      }
    ],
    coordinates: { x: 470, y: 440 }
  },
  {
    id: 'ganjam',
    name: 'Ganjam',
    nativeName: 'ଗଞ୍ଜାମ',
    headquarters: 'Chhatrapur',
    region: 'Southern Coastal',
    tribalPopulationPercent: '3.4%',
    forestCoverPercent: '34.7%',
    landscapeDescription: 'Southern coastal jewel bordered by the Rushikulya river, Chilika lake, Tara Tarini hilltop shrine, and Gopalpur-on-sea beach.',
    indigenousCommunities: ['Saora', 'Kondh'],
    culturalCentres: [
      {
        name: 'Chilika Lake & Mangalajodi Wetland',
        type: 'Waterfall / Natural Monument',
        description: 'Largest brackish water lagoon in Asia hosting over a million winter migratory birds and Irrawaddy dolphins.'
      },
      {
        name: 'Tara Tarini Shakti Peetha',
        type: 'Sacred Grove',
        description: 'Twin goddess hill shrine on the banks of the sacred Rushikulya river.'
      }
    ],
    coordinates: { x: 480, y: 510 }
  }
];
