import { Community } from '../types';

export const communitiesData: Community[] = [
  {
    id: 'dongria-kondh',
    slug: 'dongria-kondh',
    name: 'Dongria Kondh',
    nativeName: 'ଡଙ୍ଗରିଆ କନ୍ଧ',
    isPVTG: true,
    tagline: 'Guardians of Niyamgiri and Masters of Kapdaganda Weaves',
    districts: ['Rayagada', 'Kalahandi'],
    region: 'Southern Highlands',
    languages: ['Kui', 'Desia Odia'],
    languageFamily: 'Dravidian',
    populationEstimate: 'approx. 10,000 (Census PVTG survey)',
    heroImage: '/assets/hero/highlands.jpg',
    portraitImage: '/assets/portraits/dongria_kondh.jpg',
    introduction: 'The Dongria Kondh inhabit the lush slopes of the Niyamgiri hill range in south-western Odisha. Deeply animistic, they revere the mountain as their ancestral supreme deity, Niyam Raja Penu, living in profound symbiotic harmony with the perennial streams, orchids, and dense forest canopies.',
    history: 'Centuries of self-reliant mountain living have forged the Dongria Kondh as skilled horticulturalists of pineapple, banana, and ginger. Their historic resistance to industrial bauxite mining on Niyamgiri in 2013 stands as a globally recognized landmark in indigenous environmental sovereignty and forest conservation rights under the Forest Rights Act.',
    socialOrganisation: {
      clans: 'Organised into exogamous patrilineal clans (Kuda) such as Wadaka, Kadraka, and Jakasika, each presiding over specific hill slopes.',
      villageHeadman: 'The Jani (priest) leads spiritual rituals, assisted by the Muduli (secular headman) and the Dishari (astrologer-healer).',
      youthDormitories: 'Traditional youth dormitories (Dhangda and Dhangdi Basa) fostered oral storytelling, courtship, and customary social education.',
      familyStructure: 'Monogamous nuclear families dominate, though polygyny historically occurred. Inheritance flows strictly through the male lineage.'
    },
    livelihood: {
      primaryOccupation: 'Highland horticulture, swidden cultivation (dongar chas), and non-timber forest produce foraging.',
      agriculture: 'Terraced cultivation of sweet potato, hill millets (mandia), hill bananas, turmeric, pineapple, and indigenous maize.',
      forestGathering: 'Wild honey, siali leaves, mahua flowers, wild edible roots, and medicinal forest herbs.',
      crafts: ['Kapdaganda geometric hand-embroidery', 'Brass hairpins & comb carving', 'Woven bamboo granaries']
    },
    traditions: {
      clothing: 'The iconic hand-embroidered off-white coarse cotton shawl (Kapdaganda), adorned with geometric red, yellow, and green triangular motifs symbolizing hills and axe edges, awarded Geographical Indication (GI) status in 2024.',
      ornaments: 'Intricate silver and brass ear rings spanning the helix, three nose rings (murki), engraved brass hairpins in the side bun, and layered glass beaded necklaces.',
      foodHabits: ['Mandia Peja (fermented ragi porridge)', 'Boiled hill corn and forest beans', 'Salap sap (sweet natural sago palm toddy)', 'Mahua flower syrup'],
      sacredBeliefs: 'Deep reverence for Dharani Penu (Mother Earth) and Niyam Raja (Mountain Spirit). Natural springs (Jharna) are preserved as strictly inviolate sacred water sanctuaries.'
    },
    festivals: [
      {
        name: 'Meriah / Kedu Festival',
        nativeName: 'କେଦୁ ପର୍ବ',
        season: 'January - February',
        significance: 'Sacred agrarian ritual honoring Dharani Penu for bountiful harvest and universal fertility, marked by community singing and bloodless symbolic offerings.'
      },
      {
        name: 'Mandia Rani',
        nativeName: 'ମାଣ୍ଡିଆ ରାଣୀ',
        season: 'Post-Monsoon',
        significance: 'Celebration of the finger millet harvest, marking communal reverence for ancient drought-resistant grains.'
      },
      {
        name: 'Salap Toddy Offering',
        nativeName: 'ସାଲପ ଭୋଗ',
        season: 'Spring Equinox',
        significance: 'Ceremony dedicating the fresh season sap of Caryota urens (Salap) trees to household and forest spirits.'
      }
    ],
    danceAndMusic: {
      danceForms: ['Dhemsa steps accompanied by two-step swaying', 'Graceful line dances with intertwined elbows'],
      instruments: ['Dhap (wooden tambourine)', 'Mahuri (indigenous reed oboe)', 'Ghumura (earthen pot drum)', 'Nishan'],
      significance: 'Dance is communal, linking all generations in sync with the heartbeat of mother earth.'
    },
    artAndCraft: {
      title: 'Kapdaganda Embroidered Shawl',
      description: 'Handcrafted by Dongria girls as tokens of affection for prospective partners. Each geometric triangle represents sacred Niyamgiri peaks; green mirrors the forest canopy, red signifies bravery and sacred sacrifice, and yellow honors heritage.',
      materialsUsed: ['Handspun coarse cotton fabric', 'Naturally dyed silk threads', 'Bone embroidery needle']
    },
    contemporaryLife: 'Balancing traditional swidden and eco-horticulture with rising educational access, Dongria youth lead eco-enterprises processing organic hill pineapples and turmeric, while actively advocating for indigenous biocultural preservation.',
    challenges: 'Climate shifts impacting seasonal mountain rainfall, preservation of native kui linguistic fluency among younger scholars, and sustainable value-addition for forest produce.',
    gallery: [
      {
        url: '/assets/portraits/dongria_kondh.jpg',
        caption: 'Dongria Kondh woman in traditional Kapdaganda shawl and heritage ear adornments.',
        credit: 'ADILOK Indigenous Photographic Archive'
      },
      {
        url: '/assets/hero/highlands.jpg',
        caption: 'Misty hills and terraced orchards across the Niyamgiri mountain range.',
        credit: 'Odisha Tribal Landscapes Documentation'
      }
    ],
    sources: [
      {
        title: 'Tribes of the Niyamgiri Hills: Cultural Ecology & Ethnography',
        author: 'Scheduled Castes and Scheduled Tribes Research and Training Institute (SCSTRTI)',
        year: '2018',
        type: 'Government Report'
      },
      {
        title: 'Sacred Groves and Customary Rights in Odisha',
        author: 'Prof. L.K. Mohapatra',
        year: '2012',
        type: 'Academic Journal'
      }
    ],
    lastVerified: 'October 2024'
  },
  {
    id: 'lanjia-saora',
    slug: 'lanjia-saora',
    name: 'Lanjia Saora',
    nativeName: 'ଲାଞ୍ଜିଆ ସାଓରା',
    isPVTG: true,
    tagline: 'Keepers of the Sacred Idital Murals and Ancient Stone Terraces',
    districts: ['Gajapati', 'Rayagada'],
    region: 'Southern Highlands',
    languages: ['Sora (Saura)', 'Desia Odia'],
    languageFamily: 'Austroasiatic (Munda)',
    populationEstimate: 'approx. 56,000 (SCSTRTI survey)',
    heroImage: '/assets/hero/highlands.jpg',
    portraitImage: '/assets/portraits/lanjia_saora.jpg',
    introduction: 'The Lanjia Saora are renowned across the world for their distinctive "Idital" pictogram wall paintings and their ingenious dry-stone terraced agricultural engineering sculpted into the steep Eastern Ghats hillsides. Their name references the long tail-like end of their traditional handwoven loincloth.',
    history: 'Mentioned in ancient Indian epics as the legendary devotees of Jagannath (Lord Jagannath’s origin is deeply linked to the tribal deity Nilamadhaba worshipped by King Viswavasu, a Saora chief). Their history is anchored in animist spiritual cosmologies preserved across millennia.',
    socialOrganisation: {
      clans: 'Uniquely lack the totemistic exogamous clan systems of neighboring tribes; social units are organised around the extended "Birinda" (agnatic lineage).',
      villageHeadman: 'Led by the Gomango (secular chief), assisted by the Mandal and the Buyya (hereditary lineage priest).',
      youthDormitories: 'Traditional lineage gathering platforms where elders impart folklore and customary songs.',
      familyStructure: 'Patrilineal joint and nuclear households, characterized by strong communal support during stone terrace construction.'
    },
    livelihood: {
      primaryOccupation: 'Stone terrace wet-paddy farming, shifting agriculture, and gathering of minor forest produce.',
      agriculture: 'Master builders of stone-bunded terraces (bada) on steep mountain gradients, fed by channeled perennial mountain springs.',
      forestGathering: 'Sora wild tubers, medicinal barks, sal resin, and wild bamboo.',
      crafts: ['Idital sacred painting', 'Bamboo woodcarving', 'Brass bell metal casting', 'Clay roof tile firing']
    },
    traditions: {
      clothing: 'Men wear the traditional loincloth (lengti) with a red-bordered trailing end. Women wear handwoven short coarse cotton waist cloths and wrap lightweight scarves across the shoulder.',
      ornaments: 'Multiple brass piercings in the ear cartilage, large brass/silver round spiral necklaces (Kankana), and wooden combs.',
      foodHabits: ['Brown rice with wild leaf broths', 'Boiled sweet potato and tubers', 'Fermented mahua beverage', 'Roasted maize and sesame chutney'],
      sacredBeliefs: 'Belief in a bustling spirit cosmos (Sonum). The Kudan (female shaman) and Kudan-maran (male shaman) serve as intermediaries between living kin and spirit ancestors.'
    },
    festivals: [
      {
        name: 'Karjy Festival',
        nativeName: 'କାର୍ଯ୍ୟ ପର୍ବ',
        season: 'Winter / Post-Harvest',
        significance: 'Ancestral remembrance ceremony where families install buffalo stones and consecrate new Idital paintings inside their living rooms.'
      },
      {
        name: 'Uda Parva',
        nativeName: 'ଉଦା ପର୍ବ',
        season: 'Pre-Monsoon',
        significance: 'Spiritual seed-consecration ceremony seeking timely hill rains and abundant harvests on the terraced paddies.'
      }
    ],
    danceAndMusic: {
      danceForms: ['Saura rhythmic circle dances at festivals, featuring dynamic forward-bending and shoulder-swaying motions'],
      instruments: ['Gogod (wooden violin/fiddle)', 'Membranophone drum (Tamak)', 'Bamboo flutes', 'Brass cymbals'],
      significance: 'Music connects the clan directly with ancestral spirits and accompanies every life transition.'
    },
    artAndCraft: {
      title: 'Idital Sacred Wall Art',
      description: 'Sacred pictograms painted with white rice-paste and plant brushes on red ochre or mud walls. Iditals capture the "Tree of Life", human figures riding horses and elephants, celestial bodies, and deities, creating an earthly mirror of the spirit realm.',
      materialsUsed: ['Natural red ochre (geru)', 'Ground rice paste', 'Tender twig brushes']
    },
    contemporaryLife: 'Saura art has received global acclaim and Geographical Indication (GI) recognition. Saura cultural academies preserve the Sora script (Sorang Sompeng) invented by Mangei Gomango in 1936.',
    challenges: 'Conservation of ancient stone terraced canal networks and supporting authentic artisan cooperatives against mass commercialization.',
    gallery: [
      {
        url: '/assets/portraits/lanjia_saora.jpg',
        caption: 'Elder Lanjia Saora artisan against an earthen mud house with sacred paintings.',
        credit: 'ADILOK Indigenous Documentation'
      }
    ],
    sources: [
      {
        title: 'The Religion of an Indian Tribe',
        author: 'Verrier Elwin',
        year: '1955',
        type: 'Monograph'
      },
      {
        title: 'Saura Art and Ethnohistory of South Odisha',
        author: 'Tribal Cultural Research Institute',
        year: '2021',
        type: 'Academic Journal'
      }
    ],
    lastVerified: 'September 2024'
  },
  {
    id: 'bonda',
    slug: 'bonda',
    name: 'Bonda (Remo)',
    nativeName: 'ବଣ୍ଡା (ରେମୋ)',
    isPVTG: true,
    tagline: 'Highland Custodians of Bondo Hills and Ancient Remo Speech',
    districts: ['Malkangiri'],
    region: 'Southern Highlands',
    languages: ['Remo', 'Desia'],
    languageFamily: 'Austroasiatic (Munda)',
    populationEstimate: 'approx. 12,000',
    heroImage: '/assets/hero/highlands.jpg',
    portraitImage: '/assets/portraits/bonda.jpg',
    introduction: 'The Bonda, who call themselves "Remo" (meaning "Human Being"), reside in the rugged Bondo Hills situated at an altitude of 3,000 feet in Malkangiri district. They are celebrated for their fierce independence, matriarchal customs where older women traditionally marry younger grooms, and elaborate brass and beaded attire.',
    history: 'Believed to be one of the earliest migratory branches of Austroasiatic peoples in the subcontinent, the Bonda have fiercely protected their highland forests and customary self-governance across millennia, trading forest goods at the famous weekly Onukudelli market.',
    socialOrganisation: {
      clans: 'Divided into two exogamous moieties: Ontal (Cobra) and Killo (Tiger), branching into various village clans.',
      villageHeadman: 'Led by the Naik (headman), Challan (messenger), and the Dissari (priest-astrologer).',
      youthDormitories: 'Ingersin (girls dormitory) and Dormitory institutions were central to traditional song exchange and social cohesion.',
      familyStructure: 'Strong gender equity: women are the primary economic custodians, terrace tillers, and household leaders.'
    },
    livelihood: {
      primaryOccupation: 'Shifting cultivation (podu chas), highland wet cultivation, and gathering forest produce.',
      agriculture: 'Hill millets (suan, ragi), black gram, cowpeas, and indigenous wet rice in steep valley bottoms.',
      forestGathering: 'Jackfruit, tamarind, sago palm pith, wild greens, and forest roots.',
      crafts: ['Renga bark cloth weaving on backstrap loom', 'Brass neck torc forging', 'Beaded necklace assembly']
    },
    traditions: {
      clothing: 'Bonda women traditionally wore the "Ringa"—a mini apron handwoven from Kereng (wild shrub fiber) or cotton, paired with massive cascades of vibrant glass beads.',
      ornaments: 'Heavy brass neck collars (Khabish), brass earrings, and numerous strings of multi-colored beads (San-sari) covering the upper body.',
      foodHabits: ['Peda (millet porridge)', 'Boiled roots and forest greens', 'Salap and fermented rice beer (Handia)', 'Roasted river snails and dry fish'],
      sacredBeliefs: 'Worship of Patkhanda Mahaprabhu (symbolized by a sacred sword kept in a banyan tree) and Earth Goddess (Bhoomi Devi).'
    },
    festivals: [
      {
        name: 'Patkhanda Jatra / Chaitra Parva',
        nativeName: 'ଚଇତ ପର୍ବ',
        season: 'March - April',
        significance: 'Major festival of ritual hunting, ceremonial wrestling, dancing, and offering thanksgiving to ancestral swords and forest deities.'
      },
      {
        name: 'Ghiakhia Parva',
        nativeName: 'ଘିଅଖିଆ ପର୍ବ',
        season: 'Monsoon',
        significance: 'Agrarian ritual marking the blessing of newborn cattle and first sprouts.'
      }
    ],
    danceAndMusic: {
      danceForms: ['Bonda line dance at weekly gatherings and weddings, accompanied by agile footwork'],
      instruments: ['Singha (buffalo horn trumpet)', 'Dhol', 'Nishan', 'Tamuk'],
      significance: 'Spirited communal dances mark marriages, seasonal transitions, and peaceful arbitration of disputes.'
    },
    artAndCraft: {
      title: 'Kereng Fiber & Bead Weaving',
      description: 'Intricate backstrap weaving of waist garments from the inner bark fibers of the Calotropis gigantea and wild hemp plants, interlaced with natural vegetable dyes.',
      materialsUsed: ['Wild bark fibers (Kereng)', 'Natural indigo and madder', 'Imported glass beads']
    },
    contemporaryLife: 'While maintaining sacred traditions on the upper hill plateau, Bonda boys and girls increasingly pursue university education, teacher training, and civil services.',
    challenges: 'Preservation of wild plant fibers used in traditional weaving, road accessibility to remote upper hill settlements, and healthcare delivery.',
    gallery: [
      {
        url: '/assets/portraits/bonda.jpg',
        caption: 'Bonda woman adorned with traditional brass collar and multilayered glass beads.',
        credit: 'ADILOK Heritage Visual Repository'
      }
    ],
    sources: [
      {
        title: 'Bondo Highlander',
        author: 'Verrier Elwin',
        year: '1950',
        type: 'Monograph'
      },
      {
        title: 'Tribal Life and Culture in Bondo Hills',
        author: 'Odisha State Museum & Research Cell',
        year: '2019',
        type: 'Academic Journal'
      }
    ],
    lastVerified: 'November 2024'
  },
  {
    id: 'santal',
    slug: 'santal',
    name: 'Santal',
    nativeName: 'ସାନ୍ତାଳ',
    isPVTG: false,
    tagline: 'Artisans of Sohrai, Keepers of Ol Chiki Script and Deep Forest Philosophy',
    districts: ['Mayurbhanj', 'Balasore', 'Keonjhar'],
    region: 'Northern Plateau',
    languages: ['Santali', 'Odia'],
    languageFamily: 'Austroasiatic (Munda)',
    populationEstimate: 'approx. 890,000 (Odisha census)',
    heroImage: '/assets/hero/highlands.jpg',
    portraitImage: '/assets/portraits/santal.jpg',
    introduction: 'The Santal constitute one of the largest and most culturally vibrant indigenous communities in Odisha, predominantly centered around the Similipal biosphere in Mayurbhanj. Pioneers of literature and democratic customary governance, they write in the indigenous Ol Chiki script invented in 1925 by Pandit Raghunath Murmu.',
    history: 'The Santal have a profound historical legacy of social justice and resistance, including the historic 1855 Santal Hool (Rebellion). Odisha is proud to be the homeland of India’s current President, Smt. Droupadi Murmu, who hails from the Mayurbhanj Santal community.',
    socialOrganisation: {
      clans: 'Organised into twelve totemic exogamous clans (Paris), including Hansda (wild goose), Murmu (nilgai), Marandi (grass), and Soren (constellation).',
      villageHeadman: 'The village council (Manjhi Than) is guided by the Manjhi Haram (headman), Paranik, and Godet (announcer).',
      youthDormitories: 'Communal music grounds (Akhara) where youngsters learn drumming, songs, and historical oral narratives.',
      familyStructure: 'Patrilineal yet egalitarian, marked by high respect for women and communal village decision-making.'
    },
    livelihood: {
      primaryOccupation: 'Plough-based paddy agriculture, animal husbandry, and forestry.',
      agriculture: 'Wetland rice cultivation, pulses, mustard, and kitchen gardening.',
      forestGathering: 'Sal seeds, siali leaves for stitching leaf plates, lac cultivation, and wild mushrooms.',
      crafts: ['Sohrai clay mural painting', 'Chadar Badar wooden puppetry', 'Baha flower carvings', 'Bamboo flute crafting']
    },
    traditions: {
      clothing: 'The handwoven Santali Saree (Panchi and Parhand), recognized for its check patterns and striking red/green geometric borders, paired with wild forest flowers in braided hair.',
      ornaments: 'Heavy bell-metal bangles (Khadu), silver hasli (necklace), silver hair ornaments, and subtle floral tattoos (Godna).',
      foodHabits: ['Daka (boiled rice) with leafy potherbs (Ara)', 'Pakhala (fermented water rice)', 'Handia (rice beer)', 'Fried Mahua cakes'],
      sacredBeliefs: 'Worship of Marang Buru (The Great Mountain Spirit) and Jaher Era (Lady of the Sacred Grove). Every village maintains a sacred Jaher Than (grove of sal trees).'
    },
    festivals: [
      {
        name: 'Sohrai',
        nativeName: 'ସୋହରାଇ',
        season: 'Winter (Harvest)',
        significance: 'The greatest festival of the Santals, dedicated to cattle blessings, house painting with natural clays, and continuous community drumming.'
      },
      {
        name: 'Baha Festival',
        nativeName: 'ବାହା ପର୍ବ',
        season: 'Spring',
        significance: 'The Spring Flower Festival celebrating the blooming of Sal and Mahua trees. No new forest fruit or flower is consumed until sanctified at the Jaher Than.'
      }
    ],
    danceAndMusic: {
      danceForms: ['Lagre dance', 'Golwari dance', 'Dynamic festival group lines linking hands behind backs'],
      instruments: ['Tumdak (two-headed clay drum)', 'Tamak (conical iron kettle-drum)', 'Banam (single-stringed fiddle carved from gulo wood)', 'Tirio (bamboo flute)'],
      significance: 'Music is considered the breath of life; song cycles record oral genealogies spanning thousands of years.'
    },
    artAndCraft: {
      title: 'Sohrai Mud Murals and Ol Chiki Calligraphy',
      description: 'Santal women paint the exterior mud walls of their spacious cottages with earth-pigments, illustrating cattle, peacocks, lotus buds, and stylized Ol Chiki alphabets in geometric symmetry.',
      materialsUsed: ['White clay (Dhudhi)', 'Yellow ochre', 'Charcoal soot', 'Cow dung wash']
    },
    contemporaryLife: 'Santali language is enshrined in the 8th Schedule of the Indian Constitution. A booming Santali literature, theatre, cinema, and academic research movement flourishes across universities in Odisha.',
    challenges: 'Maintaining environmental protection of the Similipal tiger reserve buffer zones and youth migration to industrial centers.',
    gallery: [
      {
        url: '/assets/portraits/santal.jpg',
        caption: 'Santal woman in traditional bordered Panchi saree adorned with fresh forest flowers.',
        credit: 'ADILOK Indigenous Documentation'
      }
    ],
    sources: [
      {
        title: 'The Santals: A Study in Culture-Change',
        author: 'J. Datta-Majumder',
        year: '1956',
        type: 'Monograph'
      },
      {
        title: 'Ol Chiki: The Script of indigenous Identity',
        author: 'Mayurbhanj Heritage & Literary Society',
        year: '2020',
        type: 'Academic Journal'
      }
    ],
    lastVerified: 'November 2024'
  },
  {
    id: 'gadaba',
    slug: 'gadaba',
    name: 'Gadaba',
    nativeName: 'ଗଦବା',
    isPVTG: false,
    tagline: 'Weavers of Kereng Bark Cloth and Masters of the Dhemsa Dance',
    districts: ['Koraput', 'Malkangiri'],
    region: 'Southern Highlands',
    languages: ['Gutob', 'Ollari', 'Desia'],
    languageFamily: 'Austroasiatic (Munda)',
    populationEstimate: 'approx. 85,000',
    heroImage: '/assets/hero/highlands.jpg',
    portraitImage: '/assets/portraits/gadaba.jpg',
    introduction: 'The Gadaba are one of the most culturally distinctive highland tribes of the Koraput valley. Renowned for their majestic circular "Dhemsa" dance and the historic art of weaving multicolored striped garments from wild tree bark, they represent an ancient riverine and highland heritage.',
    history: 'Legend recounts their ancestry linked to the Godavari riverbanks before settling deep within the valleys of Koraput. Their traditional stone seats (Sodor) located at the village entrance are sacred democratic councils older than recorded history.',
    socialOrganisation: {
      clans: 'Organised into totemic septs including Bagha (Tiger), Nag (Cobra), and Chhel (Goat).',
      villageHeadman: 'The Naik presides over secular life, assisted by the Dishari (astrologer-physician) and the Sisa (community priest).',
      youthDormitories: 'Communal youth assemblies where adolescents learn traditional ballads and Dhemsa choreography.',
      familyStructure: 'Monogamous households with joint clan responsibilities for community hunts and terrace maintenance.'
    },
    livelihood: {
      primaryOccupation: 'Terraced and swidden agriculture, forest foraging, and handloom weaving.',
      agriculture: 'Paddy, finger millet (ragi), niger seed, and ginger.',
      forestGathering: 'Wild forest fibers, edible tubers, bamboo shoots, and mushrooms.',
      crafts: ['Kereng tree-bark textile weaving', 'Large brass neck ring shaping', 'Iron sickle crafting']
    },
    traditions: {
      clothing: 'The traditional "Kereng" cloth—a striking thick fabric with broad stripes of red, blue, and cream handwoven on primitive backstrap looms.',
      ornaments: 'Remarkable large circular brass neck rings (weighting up to 1-2 kilograms), brass hoop earrings, and polished horn combs.',
      foodHabits: ['Mandia Peja with tamarind leaves', 'Cooked sweet potatoes', 'Salap toddy', 'River crab roast'],
      sacredBeliefs: 'Worship of Thakurani (village goddess) and sacrificial reverence at the Sodor stone circles.'
    },
    festivals: [
      {
        name: 'Gotr Feast of Merit',
        nativeName: 'ଗୋତ୍ର ପର୍ବ',
        season: 'Once in a decade',
        significance: 'Legendary grand memorial feast honoring deceased ancestors, during which stone megaliths (menhirs) are erected on the village outskirts.'
      },
      {
        name: 'Chaitra Parva',
        nativeName: 'ଚଇତି ପର୍ବ',
        season: 'April',
        significance: 'Month-long spring festival featuring ritual archery hunts, reciprocal community feasting, and non-stop Dhemsa dancing.'
      }
    ],
    danceAndMusic: {
      danceForms: ['Dhemsa (celebrated circle dance with synchronized footwork and undulating group formations)'],
      instruments: ['Mahuri (shawm)', 'Changu (circular tambourine drum)', 'Tamak (iron kettle drum)', 'Dhol'],
      significance: 'Dhemsa unites the entire community into a single rhythmic organism, erasing sorrow and reaffirming unity.'
    },
    artAndCraft: {
      title: 'Kereng Handloom Bark Cloth',
      description: 'Extracted from the bark of the Kereng tree, softened by boiling in wood ash water, spun into thread on drop spindles, and woven on basic wooden backstrap looms.',
      materialsUsed: ['Wild Kereng bark fiber', 'Natural madder root red dye', 'Indigo plant blue']
    },
    contemporaryLife: 'Gadaba cultural troupes frequently perform at National Tribal Festivals, and youth are active in safeguarding both Gutob and Ollari linguistic heritages.',
    challenges: 'Scarcity of wild Kereng trees in degraded forests has made traditional bark weaving an endangered craft requiring urgent botanical conservation.',
    gallery: [
      {
        url: '/assets/portraits/gadaba.jpg',
        caption: 'Gadaba woman in traditional striped handwoven garment and historic brass neck ring.',
        credit: 'ADILOK Tribal Collection'
      }
    ],
    sources: [
      {
        title: 'The Gadabas of Koraput',
        author: 'Tribal Cultural Research Institute',
        year: '1984',
        type: 'Monograph'
      }
    ],
    lastVerified: 'October 2024'
  },
  {
    id: 'juang',
    slug: 'juang',
    name: 'Juang',
    nativeName: 'ଜୁଆଙ୍ଗ',
    isPVTG: true,
    tagline: 'Sons of Gonasika and Keepers of Ancient Forest Folklore',
    districts: ['Keonjhar', 'Dhenkanal'],
    region: 'Northern Plateau',
    languages: ['Juang', 'Odia'],
    languageFamily: 'Austroasiatic (Munda)',
    populationEstimate: 'approx. 49,000',
    heroImage: '/assets/hero/highlands.jpg',
    portraitImage: '/assets/portraits/juang.jpg',
    introduction: 'The Juang inhabit the verdant Gonasika hills of Keonjhar, where the sacred river Baitarani originates from a rock naturally shaped like a cow’s nostril (Gonasika). Historically known in colonial literature as leaf-wearers (Patua), they possess an extraordinary repository of ethnobotanical and musical knowledge.',
    history: 'According to their origin myth, the first human beings on earth sprang directly from the earth at Gonasika. Their customary dormitory, the Majang, continues to serve as the heart of community justice and nocturnal drumming.',
    socialOrganisation: {
      clans: 'Divided into exogamous clans (Bak) named after animals and plants, such as Sarang (bird) and Kutub (wild goat).',
      villageHeadman: 'The Sardar / Pradhan administers the village alongside the Nagam (priest of the earth).',
      youthDormitories: 'The Majang (men’s council house and youth dormitory), adorned with hand-carved pillars and eternal fire.',
      familyStructure: 'Patriarchal and nuclear, centered around reciprocal village agriculture.'
    },
    livelihood: {
      primaryOccupation: 'Shifting cultivation (Toila), forest foraging, and bamboo craft.',
      agriculture: 'Hill pulses, niger seeds, mustard, and dry upland rice.',
      forestGathering: 'Wild yams, tassar cocoons, tendu leaves, and edible forest fungi.',
      crafts: ['Intricate bamboo basketry and fish traps', 'Wooden carved dormitory pillars', 'Changu drum crafting']
    },
    traditions: {
      clothing: 'Modern Juangs wear simple handloom cotton clothes; traditionally women wore artistic leaf aprons strung from wild creepers.',
      ornaments: 'Glass beaded necklaces, brass hair bodkins, and bell-metal toe rings.',
      foodHabits: ['Boiled forest yams', 'Millet gruel', 'Roasted edible roots', 'Wild seasonal honey'],
      sacredBeliefs: 'Reverence for Dharam Deota (Sun God), Basumati (Earth Mother), and the spirit of the Baitarani spring.'
    },
    festivals: [
      {
        name: 'Pirha Puja',
        nativeName: 'ପିଢ଼ା ପୂଜା',
        season: 'Pre-Sowing',
        significance: 'Consecration of agricultural implements and sacred seeds before hill clearing begins.'
      },
      {
        name: 'Amba Nua Khia',
        nativeName: 'ଆମ୍ବ ନୂଆଖିଆ',
        season: 'Spring',
        significance: 'Ceremony of consuming the season’s first green mangoes after offering them to the village tutelary spirits.'
      }
    ],
    danceAndMusic: {
      danceForms: ['Changu dance—men beat large circular tambourines while women perform rhythmic animal and bird mime dances'],
      instruments: ['Changu (wooden-rimmed goat hide tambourine)', 'Dhol', 'Kendara'],
      significance: 'Juang dances mimic the movements of peacocks, bears, and vultures, celebrating communion with forest fauna.'
    },
    artAndCraft: {
      title: 'Majang Wood Carvings & Bamboo Craft',
      description: 'The entrance pillars of the Juang Majang are hand-carved with motifs of tigers, elephants, deer, and geometric chevrons.',
      materialsUsed: ['Sal wood', 'Wild bamboo cane', 'Vegetable oil polish']
    },
    contemporaryLife: 'Establishment of the Juang Development Agency (JDA) in Gonasika has brought solar water pumps and schools, while community elders champion indigenous forest rights.',
    challenges: 'Ecological degradation around upper catchment areas and ensuring fair pricing for bamboo handicrafts.',
    gallery: [
      {
        url: '/assets/portraits/juang.jpg',
        caption: 'Juang artisan carrying handcrafted bamboo basket in Keonjhar highlands.',
        credit: 'ADILOK Heritage Archive'
      }
    ],
    sources: [
      {
        title: 'The Juang: An Anthropological Study',
        author: 'Nirmal Kumar Bose',
        year: '1948',
        type: 'Monograph'
      }
    ],
    lastVerified: 'October 2024'
  },
  {
    id: 'paraja',
    slug: 'paraja',
    name: 'Paraja',
    nativeName: 'ପରଜା',
    isPVTG: false,
    tagline: 'Singers of Desia Lore and Cultivators of the Koraput Valleys',
    districts: ['Koraput', 'Nabarangpur', 'Rayagada'],
    region: 'Southern Highlands',
    languages: ['Parji', 'Desia Odia'],
    languageFamily: 'Dravidian',
    populationEstimate: 'approx. 400,000',
    heroImage: '/assets/hero/highlands.jpg',
    portraitImage: '/assets/portraits/paraja.jpg',
    introduction: 'The Paraja (derived from "Praja", the original subjects or sons of the soil) are one of the most culturally expansive and hospitable tribes of southern Odisha. Renowned for their lyrical poetry, celebratory lifestyle, and expertise in terraced rice farming, their lore forms the backbone of Gopinath Mohanty’s monumental Sahitya Akademi and Jnanpith-winning novel, "Paraja".',
    history: 'Inhabiting the rolling Koraput plateau for centuries, the Paraja have four major subdivisions: Bada Paraja, Sana Paraja, Kandha Paraja, and Pengu Paraja, each preserving distinct marriage rituals and clan totems.',
    socialOrganisation: {
      clans: 'Organised into totemic clans including Bagh (Tiger), Kachhap (Tortoise), and Matsya (Fish).',
      villageHeadman: 'Led by the Jani (village priest), the Muduli, and the Bhatnaik.',
      youthDormitories: 'Dhangda-Dhangdi assemblies where youthful camaraderie, courtship songs, and seasonal riddles are shared.',
      familyStructure: 'Monogamous households with cooperative joint-village harvesting pacts.'
    },
    livelihood: {
      primaryOccupation: 'Paddy terrace farming, dry slope swidden agriculture, and weekly village market trading.',
      agriculture: 'Aromatic traditional rice varieties, ragi, pulses, and mustard.',
      forestGathering: 'Mahua flowers, sal seeds, wild tamarind, and medicinal roots.',
      crafts: ['Terracotta pottery', 'Straw grain container weaving', 'Iron tool smithy']
    },
    traditions: {
      clothing: 'Women wear bright red or checkered cotton sarees tucked gracefully at the back, accompanied by red ribbons in hair.',
      ornaments: 'Silver chains, coin necklaces (Taka-mali), brass spiral armlets, and hair clips.',
      foodHabits: ['Mandia Jau (fermented finger millet porridge)', 'Rice with dried river fish', 'Mahua liquor', 'Tamarind pulp broth'],
      sacredBeliefs: 'Deep veneration for Nisani Devi (Earth deity) and Jakar Deota presiding over village borders.'
    },
    festivals: [
      {
        name: 'Chaitra Parva',
        nativeName: 'ଚଇତି ପର୍ବ',
        season: 'March - April',
        significance: 'The grand spring carnival where all men embark on ritual hunting expeditions while women greet their return with song and feasts.'
      },
      {
        name: 'Pus Parab',
        nativeName: 'ପୁଷ ପରବ',
        season: 'December - January',
        significance: 'Winter harvest festival celebrated with pig sacrifices, new grain thanksgiving, and whole-village singing.'
      }
    ],
    danceAndMusic: {
      danceForms: ['Dhemsa, with spirited syncopated steps and rapid circling movements'],
      instruments: ['Dudunga (one-string lute)', 'Dhol', 'Nishan', 'Tamuk', 'Flute'],
      significance: 'Paraja ballads capture humor, romance, the sorrow of bonded labor, and the boundless love for the forest.'
    },
    artAndCraft: {
      title: 'Straw and Terracotta Craftsmanship',
      description: 'Creation of circular coiled paddy granaries (Oliya) made of golden straw coils and red clay, insulating grain for years against moisture and pests.',
      materialsUsed: ['Paddy straw', 'River clay', 'Cow dung seal']
    },
    contemporaryLife: 'Paraja cultural traditions have been preserved in contemporary Odia literature, while progressive farmers cultivate organic coffee and millets on the Koraput hills.',
    challenges: 'Soil erosion along steep slopes and ensuring fair prices for organic coffee and aromatic rice harvests.',
    gallery: [
      {
        url: '/assets/portraits/paraja.jpg',
        caption: 'Paraja dancers adorned for the spring Chaitra Parva celebration.',
        credit: 'ADILOK Archives'
      }
    ],
    sources: [
      {
        title: 'Paraja: Ethnographic and Literary Documentation',
        author: 'Odisha Sahitya Akademi & SCSTRTI',
        year: '2015',
        type: 'Monograph'
      }
    ],
    lastVerified: 'October 2024'
  }
];
