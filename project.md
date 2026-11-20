# MASTER PROJECT PROMPT – ADILOK
## The Living Heritage of Odisha

You are an expert product designer, UI/UX architect, frontend engineer, visual storyteller, digital museum designer and full-stack software architect.

Your task is to design and develop ADILOK, a world-class digital cultural heritage platform dedicated to the indigenous tribal communities of Odisha, India.

Website: https://adilok.co.in

The supplied tribal wall painting image is the primary visual inspiration and colour reference.

Build a beautiful, simple, vibrant, immersive, interactive and responsive website.

The final result should feel like an international digital museum combined with an interactive cultural discovery platform.

Do not build an ordinary informational website.

---

# 1. PRODUCT VISION

ADILOK should allow visitors to discover:

- Who are the indigenous communities of Odisha?
- Where do they live?
- What languages do they speak?
- How do they live?
- What are their traditions and customs?
- What do they eat?
- What do they wear?
- What are their festivals?
- What are their traditional occupations?
- What are their dance and musical traditions?
- What are their art, architecture and craftsmanship?
- How are their societies organised?
- How have their lives changed over time?
- What knowledge and traditions are being preserved?

The platform should serve:

1. General visitors and tourists.
2. School and college students.
3. Research scholars.
4. Universities and academicians.
5. Government and cultural delegates.
6. Historians and anthropologists.
7. Museums and cultural institutions.
8. Indigenous community members.

The content must be educational, respectful, authentic and supported by reliable sources.

# 2. DESIGN DIRECTION – EARTH & HERITAGE

Use the supplied Saura tribal wall painting as the primary design inspiration.

The website must use an earthy, natural, warm and vibrant colour identity.

Avoid making the entire website dark green or black.

## Primary colour palette

Use CSS variables:

--earth-brown: #713B27;
--terracotta: #A65332;
--red-ochre: #C47A50;
--mud-brown: #8A4A30;
--warm-sand: #E9D8BD;
--ivory: #F5EFE2;
--cream: #FAF5EA;
--dark-soil: #302019;
--forest-green: #435C3B;
--leaf-green: #71834E;
--white: #FFFFFF;

Use these colours intelligently.

Suggested distribution:

- Main backgrounds: warm cream and ivory.
- Hero backgrounds: terracotta, earthy landscapes and natural photography.
- Primary headings: dark soil and earth brown.
- Buttons: terracotta and dark brown.
- Decorative patterns: ivory and white.
- Secondary sections: forest green and muted natural green.
- Highlights: red ochre and warm sand.

Use strong visual contrast and readable typography.

## Design principles

- Simple but visually impressive.
- Vibrant but not overloaded.
- Editorial and museum-like.
- Large beautiful photographs.
- Natural earthy textures.
- Rounded cards with subtle shadows.
- Generous white space.
- Clear visual hierarchy.
- Smooth and meaningful animations.
- Consistent navigation.
- Easy exploration.

Do not use excessive glassmorphism, neon colours, heavy gradients or generic SaaS components.

# 3. TYPOGRAPHY

Use Google Fonts:

- Playfair Display – main editorial headings.
- DM Sans – body text and navigation.
- Noto Serif Oriya – Odia headings and text.
- Noto Sans Oriya – Odia interface text.

Use expressive large headings with clean, readable descriptions.

Support English and Odia properly.

# 4. IMAGE GENERATION – VERY IMPORTANT

Create a complete original visual asset library for ADILOK.

Do not depend entirely on external stock photographs.

Use the available image generation capability in Antigravity, or a connected image-generation service, to create individual reusable images.

Use the uploaded Saura painting as a reference for colours, patterns, artistic identity and visual atmosphere.

IMPORTANT:

Do not create one large collage containing all images.

Every image must be generated as a separate, reusable asset.

Generate images in appropriate aspect ratios and resolutions.

## A. Main hero images

Generate:

1. Tribal woman in traditional Odisha attire in a natural forest landscape.
2. Tribal village surrounded by hills and greenery.
3. Traditional tribal village houses.
4. Tribal community members in a natural village setting.
5. Forest and mountain landscape of Odisha.
6. Traditional cultural celebration in an open village.

Requirements:
- Photorealistic documentary photography style.
- Natural lighting.
- Authentic-looking clothing and ornaments.
- Rich earthy colours.
- Cinematic composition.
- No artificial-looking faces.
- No text or watermarks.
- Wide 16:9 images.

Create at least 6 individual images.

## B. Tribal portrait collection

Create separate portrait images for a reusable community collection.

Include representation of:

- Kondh.
- Saora.
- Bonda.
- Gadaba.
- Juang.
- Santal.
- Munda.
- Oraon.
- Dongria Kondh.
- Paraja.

Each portrait must be a separate image.

Avoid assuming that one generated costume or appearance represents an entire community. Use verified visual references wherever possible.

## C. Culture and tradition images

Generate separate images for:

- Traditional dance.
- Folk music.
- Musical instruments.
- Community festivals.
- Traditional ceremonies.
- Village gatherings.
- Traditional clothing.
- Jewellery.
- Food preparation.
- Agricultural activities.
- Forest-based livelihoods.
- Traditional architecture.

## D. Art and craftsmanship collection

Generate individual images of:

- Saura wall painting.
- Saura tree-of-life motifs.
- Traditional pottery.
- Bamboo craftsmanship.
- Wooden carving.
- Traditional weaving.
- Tribal jewellery.
- Natural fibre crafts.
- Traditional house decorations.
- Indigenous painting tools and materials.

Use authentic artistic references and avoid falsely attributing generic artwork to a specific community.

## E. Background image collection

Create reusable backgrounds:

1. Terracotta mud wall texture.
2. Natural earthen wall texture.
3. Subtle Saura geometric pattern.
4. Tribal border ornaments.
5. Forest landscape.
6. Traditional village environment.
7. Earthy paper texture.
8. Natural wood texture.

Create subtle, low-contrast versions suitable for website sections.

## F. Transparent decorative assets

Generate individual transparent PNG assets or SVG illustrations:

- Saura tree-of-life illustration.
- Tribal dancing silhouettes.
- Traditional human figure patterns.
- Tribal geometric border.
- Traditional musical instruments.
- Birds and animals.
- Tree and leaf motifs.
- Cultural ornaments.
- Decorative section dividers.

Where possible, create SVGs using clean vector paths instead of raster images.

Transparent assets must have genuinely transparent backgrounds.

## G. Image generation quality rules

For every generated image:

- Save it as an individual file.
- Use descriptive filenames.
- Use WebP for photographic assets.
- Use SVG for vector illustrations.
- Use transparent PNG or SVG for decorative overlays.
- Generate desktop and mobile crops where composition requires them.
- Optimise file size.
- Maintain consistent visual quality.
- Do not embed text in photographs.

# 5. REUSABLE ASSET ARCHITECTURE

Create this directory:

public/
  assets/
    brand/
    hero/
    backgrounds/
    portraits/
    communities/
    villages/
    culture/
      dance/
      music/
      festivals/
      rituals/
      clothing/
      food/
    art-craft/
      saura/
      pottery/
      bamboo/
      weaving/
      jewellery/
    geography/
      odisha/
      districts/
      maps/
    museum/
    decorative/
      borders/
      patterns/
      ornaments/
      silhouettes/
    icons/
    research/

Create an image manifest file:

src/data/image-manifest.ts

Every asset should have a descriptive key, path, category, alt text and source/attribution information.

Build reusable image components.

For example:

- HeroImage
- CommunityPortrait
- CulturalImageCard
- BackgroundSection
- DecorativePattern
- HeritageGallery

Use CSS variables and reusable component styles.

The same image should be reusable across the homepage, community profile, museum and other sections.

# 6. HOMEPAGE

Build an immersive homepage.

## Header

Create a clean navigation bar.

Left:
- ADILOK logo.
- People · Culture · Heritage.

Navigation:
- Home
- Tribal Communities
- Culture & Traditions
- Explore Odisha
- Digital Museum
- Research
- About

Right:
- Search.
- English / ଓଡ଼ିଆ.
- Accessibility.

Use a light ivory or transparent header depending on the background.

Keep it elegant, compact and responsive.

## Hero section

Use a large photographic background featuring Odisha's tribal landscapes and cultural life.

Heading:

Discover the Living Heritage of Odisha

Supporting text:

Explore the people, traditions, art, knowledge and stories of Odisha's indigenous communities.

Buttons:

- Explore Communities
- Discover Odisha
- Watch Stories

Use an attractive layered composition with an individual tribal portrait image.

Add subtle decorative Saura-inspired motifs.

## Discovery categories

Create attractive image-led cards:

1. Tribal Communities.
2. Art & Craft.
3. Dance & Music.
4. Festivals.
5. Village Life.
6. Forests & Livelihood.
7. Food & Traditions.
8. History & Heritage.

Each card should be interactive.

## Featured communities

Show a horizontally scrollable or responsive grid of community portraits.

Each card should include:

- Image.
- Community name.
- Short description.
- Discover button.

## Explore the culture

Create a visual storytelling section with large photographs and interactive story cards.

## Interactive Odisha map

Show a beautiful map of Odisha with district exploration.

Clicking a district should reveal:

- District name.
- Geographical information.
- Relevant community profiles.
- Cultural attractions.
- Related photographs.

## Digital museum preview

Show a visual gallery with:

- Art.
- Crafts.
- Musical instruments.
- Dance.
- Architecture.
- Historical objects.

## Research and education preview

Show research publications, learning resources and educational materials.

## Footer

Use an earthy decorative footer with tribal geometric patterns and links to all major sections.

# 7. WEBSITE PAGES

Implement the following pages with consistent design.

## Page 1: Tribal Communities

Build a searchable community directory.

Features:
- Search.
- District filters.
- Language filters.
- Region filters.
- Community cards.
- Alphabetical navigation.

## Page 2: Community Profile

Every community should have a detailed profile.

Content sections:

1. Introduction.
2. History.
3. Geographical distribution.
4. Population and demographics.
5. Language.
6. Social organisation.
7. Family and kinship.
8. Marriage customs.
9. Clothing and ornaments.
10. Food habits.
11. Housing and settlement.
12. Livelihood and occupation.
13. Agriculture and forests.
14. Festivals.
15. Dance and music.
16. Beliefs and traditions.
17. Art and craftsmanship.
18. Traditional knowledge.
19. Education and contemporary society.
20. Challenges and development.
21. Photo gallery.
22. Videos and oral histories.
23. References and further reading.

Use tabs, expandable sections, image galleries and timelines.

## Page 3: Culture and Traditions

Create dedicated categories:

- Dance.
- Music.
- Festivals.
- Rituals.
- Clothing.
- Food.
- Art.
- Crafts.
- Architecture.
- Oral traditions.

## Page 4: Explore Odisha

Create an interactive map with:

- District boundaries.
- Community distribution.
- Cultural locations.
- Geographical information.
- Forests and landscapes.
- Heritage sites.

## Page 5: Digital Museum

Create a virtual museum experience.

Include:
- Image galleries.
- Artefact details.
- Video documentaries.
- Interactive exhibitions.
- Audio stories.
- Full-screen image viewing.

## Page 6: Research Library

Include:
- Research papers.
- Government publications.
- Books.
- Reports.
- Academic references.
- Historical documents.
- Downloadable educational resources.

Include source attribution and publication metadata.

## Page 7: About ADILOK

Include mission, vision, objectives, methodology, cultural preservation and community participation.

# 8. INTERACTIVE EXPERIENCE

Make the site enjoyable to explore.

Implement:

- Smooth page transitions.
- Image zoom and lightbox.
- Interactive galleries.
- Horizontal carousels.
- Expandable information cards.
- Search with suggestions.
- Interactive maps.
- Video playback.
- Audio narration.
- Language switching.
- Breadcrumb navigation.
- Back-to-top control.
- Reading progress indicator.
- Share buttons.
- Bookmark functionality where appropriate.

Avoid animations that slow down navigation.

Support keyboard, touch and mouse interactions.

# 9. LARGE TOUCHSCREEN / DIGITAL MUSEUM MODE

ADILOK will be displayed on large interactive touch-enabled screens.

Build a dedicated Exhibition Mode.

Support:

- 55-inch displays.
- 65-inch displays.
- 75-inch displays.
- 4K displays.
- Desktop.
- Tablet.
- Mobile.

Requirements:

- Full-screen mode.
- Large touch targets.
- Large readable text.
- No hover-dependent actions.
- Interactive map.
- Swipeable galleries.
- Full-screen photographs.
- Video and audio playback.
- Easy navigation.
- Persistent Home button.
- Configurable inactivity timeout.
- English and Odia.

Create an exhibition landing page with large visual entry points.

# 10. TECHNICAL ARCHITECTURE

Preferred technology stack:

Frontend:
- React.
- TypeScript.
- Vite.
- Tailwind CSS or modular CSS.
- React Router.
- Lucide icons.

Map:
- MapLibre GL JS or Leaflet.
- GeoJSON district boundaries.
- Locally hosted geographical data where possible.

Content:
- Structured TypeScript/JSON data initially.
- Prepare content models for future CMS integration.

Backend-ready architecture:
- Go REST API in a future phase.
- PostgreSQL.
- Object storage for photographs and videos.
- CDN for media delivery.

Do not introduce a backend dependency for the initial static demonstration.

## Suggested project structure

src/
  app/
  components/
    layout/
    navigation/
    cards/
    gallery/
    maps/
    accessibility/
    museum/
  pages/
    home/
    communities/
    community-profile/
    culture/
    explore/
    museum/
    research/
    about/
  data/
    communities.ts
    districts.ts
    culture.ts
    research.ts
    image-manifest.ts
  hooks/
  services/
  styles/
  types/
  utils/

public/
  assets/

# 11. CONTENT DATA MODELS

Create reusable typed models.

Community:
- id
- slug
- name
- nativeName
- introduction
- history
- districts
- regions
- languages
- population
- socialOrganisation
- livelihood
- traditions
- festivals
- clothing
- food
- artAndCraft
- contemporaryLife
- gallery
- videos
- sources
- lastVerified

District:
- id
- name
- description
- geography
- communities
- culturalPlaces
- mapGeometry

MediaAsset:
- id
- title
- description
- path
- category
- communityId
- districtId
- altText
- creator
- attribution
- consentStatus

All factual data must be verifiable.

Do not invent population figures, cultural customs, geographical locations or community practices.

Clearly label demonstration content and unverified placeholders.

# 12. ACCESSIBILITY AND MULTILINGUAL SUPPORT

Implement:

- English.
- Odia.
- Future language expansion.
- WCAG 2.2 AA accessibility target.
- Keyboard navigation.
- Screen reader support.
- Alt text.
- Video captions.
- Audio transcripts.
- Adjustable text size.
- High contrast mode.
- Reduced motion support.

# 13. PERFORMANCE AND SEO

Requirements:

- Responsive image loading.
- WebP and AVIF support where appropriate.
- Lazy loading.
- Image dimensions to prevent layout shifts.
- Code splitting.
- SEO metadata.
- Open Graph metadata.
- Sitemap.
- Robots.txt.
- Semantic HTML.
- Excellent Core Web Vitals.
- Accessible navigation.
- No broken links.

Target excellent Lighthouse performance, accessibility and SEO scores.

# 14. IMAGE RIGHTS AND CULTURAL ETHICS

ADILOK must respect indigenous intellectual property and cultural identity.

- Use licensed or consented photographs.
- Clearly identify AI-generated illustrative images.
- Do not present generated portraits as real identifiable community members.
- Do not misrepresent traditional clothing.
- Do not expose restricted sacred practices.
- Respect community consent and attribution.
- Include community review in the publication workflow.
- Clearly identify the source of academic information.

# 15. DEVELOPMENT PHASES

Phase 1 – Design System:
Establish colours, typography, components and reusable visual assets.

Phase 2 – Image Library:
Generate individual images, backgrounds, patterns, illustrations and icons.

Phase 3 – Homepage:
Implement the complete responsive homepage.

Phase 4 – Content Pages:
Build community directory, profile pages, culture, map, museum and research library.

Phase 5 – Interactions:
Implement galleries, filters, search, maps, navigation and multimedia.

Phase 6 – Exhibition Mode:
Optimise for large touch-enabled screens.

Phase 7 – Quality Assurance:
Test all devices, browsers, interactions and performance.

# 16. FINAL DESIGN ACCEPTANCE CRITERIA

The result must:

1. Follow the uploaded earthy tribal painting colour theme.
2. Be simple, vibrant, elegant and visually memorable.
3. Use individual reusable images rather than collages.
4. Have a consistent design system.
5. Work on all screen sizes.
6. Provide meaningful interactive experiences.
7. Support English and Odia.
8. Be suitable for public exhibitions and museums.
9. Be content-driven and easy to expand.
10. Maintain high standards of cultural accuracy and accessibility.

MOST IMPORTANT:

Do not create a generic website template.

Do not make every page look identical.

Give every section its own visual storytelling approach while retaining a consistent ADILOK brand identity.

Use natural photography, earthy backgrounds, authentic cultural illustrations and elegant typography.

The experience should be welcoming to a casual visitor and sufficiently informative for a research scholar.

The final result should make visitors curious to explore more.

ADILOK – People · Culture · Heritage.

Build a living digital museum of Odisha.

Remote Repo: https://github.com/sanjeevsenapati/adilok.git
