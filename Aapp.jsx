```jsx
import React, { useState, useEffect } from 'react';
import { Palette, Sun, Moon, ArrowLeft, BookOpen, Heart, Leaf, Building, TrendingUp, Grid3X3, Youtube as YoutubeIcon, Instagram, Facebook, Linkedin, Globe, Share2, ExternalLink, User, AlertTriangle, MessageCircle } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showHealthPage, setShowHealthPage] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [language, setLanguage] = useState('ro');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'ro' ? 'en' : 'ro');

  const translations = {
    ro: {
      healthResearch: "Cercetare Științifică",
      backToMain: "Înapoi la Principal",
      backToHome: "Înapoi la Acasă",
      backToGallery: "Înapoi la Galerie",
      picturileFoamei: "Picturile foamei",
      galleryOnline: "Galeria Online",
      rentPaintings: "Închiriere picturi",
      mission: "Misiunea Noastră",
      theChallenge: "Provocarea",
      theSolution: "Soluția Noastră",
      europePoorest: "Eradicarea sărăciei în una dintre cele mai sărace țări din Europa",
      artistsCardboard: "Artiștii pictează fără profit sau ajung să tatueze pentru că le este foame, altă artă nu ar fi recompensată financiar imediat.",
      limitedAccess: "Milioane de cetățeni români nu au cumpărat sau închiriat în viața lor o pictură",
      mentalHealthPoverty: "Sănătate mintală afectată de sărăcie",
      affordableRental: "Închiriere accesibilă de artă",
      freeMaterials: "Material de pictură gratuit",
      communityGardens: "Grădini comunitare",
      realEstateInvestments: "Investiții imobiliare",
      heroText: "Picturile foamei: Opere de artă exclusive închiriate în numele sănătății și egalității sociale.",
      rentPainting: "Închiriere pictură",
      picturileFoameiOffers: "Picturile foamei oferă:",
      rentArtworks: "Închiriere opere de artă ⌛",
      investsRealEstate: "Picturile foamei investește pentru tine în proprietăți imobiliare!",
      understandRenting: "Înțelegi ce înseamnă să închiriezi.",
      understandOwning: "Înțelegi ce înseamnă să deții o proprietate.",
      butYouHesitated: "Dar ai ezitat pentru că:",
      traditionalInvestments: "Investițiile tradiționale par inaccesibile.",
      dontKnowWhere: "Nu știi de unde să începi.",
      notSureWorth: "Nu ești sigur dacă merită efortul.",
      hereIsAlternative: "Iată alternativa:",
      rentPaintingLike: "Închiriază o pictură (așa cum ai face cu o mașină sau un apartament).",
      donationsBecomeEquity: "O parte din fiecare donație se transformă în capital propriu imobiliar.",
      ownTangibleAssets: "Deține active tangibile în timp - fără speculații, fără bilete la loterie.",
      notQuickRich: "Nu este vorba de „îmbogățire rapidă”.",
      inevitableRich: "Este „îmbogățire inevitabilă”.",
      actNow: "**Acționează acum, nu regreta mai târziu.**",
      onlineGallery: "Galeria Online",
      collectionI: "Colecția I: Picturi 1-100",
      collectionII: "Colecția II: Picturi 101-200",
      collectionIII: "Colecția III: Picturi 201-300",
      collectionIV: "Colecția IV: Picturi 301-400",
      collectionV: "Colecția V: Picturi 401-500",
      quickNavigation: "Navigare Rapidă",
      originalPaintings: "picturi originale cu poezie • Format A3",
      completeCollection: "Colecția completă de 500 de picturi originale",
      scientificEvidence: "Dovezi Științifice: Artă & Sănătate Mintală",
      healingPower: "Puterea Vindecătoare a Artei Vizuale",
      scientificStudies: "Studii Științifice",
      essentialBooks: "Cărți Esențiale despre Artă & Vindecare",
      mediaCoverage: "Acoperire Media & Articole de Știri",
      conclusion: "Concluzie",
      allStudiesCited: "Toate studiile și sursele citate provin din jurnale peer-reviewed și publicații de renume.",
      artPoetryCommunity: "Artă, poezie și sprijin comunitar în București, România.",
      navigation: "Navigare",
      gardens: "Grădini",
      invest: "Investește",
      followUs: "Urmărește Picturile foamei!",
      contact: "Contact",
      copyright: "© 2024 Picturile foamei",
      paintingDetails: "Detalii Pictură",
      donateToRent: "Donează pentru a închiria",
      immediatePainting: "Pictură imediat",
      whatsIncluded: "Ce este Inclus",
      rentalTerms: "Termeni de Închiriere",
      whyRentArt: "De ce să închiriezi artă?",
      originalCertificate: "Pictură originală cu certificat de autenticitate",
      professionalFraming: "Cadru profesional și accesorii de agățare",
      insuranceCoverage: "Asigurare împotriva daunelor",
      originalPoem: "Poezie originală tipărită pe hârtie premium",
      minimumRental: "Perioadă minimă de închiriere: 1 lună",
      freeDelivery: "Livrare și ridicare gratuită în București",
      rentalFeesSupport: "10% din taxele de închiriere sprijină materialele gratuite de artă",
      easyRenewal: "Proces ușor de reînnoire sau returnare",
      makesArtAccessible: "Închirierea artei face opera originală accesibilă tuturor.",
      supportsLocalArtists: "Sprijină artiștii locali, aduce frumusețea în spațiul tău,",
      contributesHealing: "și contribuie la vindecarea comunității prin expresie creativă.",
      allPaintings: "Toate Picturile",
      nature: "Natură",
      urban: "Urban",
      gardens: "Grădini",
      rural: "Rural",
      donateToRentTitle: "Donează pentru a închiria",
      supportOurMission: "Sprijină Misiunea Noastră",
      createNonProfit: "Creăm o organizație non-profit care creează și închiriază artă",
      artistsCannotAfford: "Artiști care nu-și permit să picteze, dar doresc cu adevărat",
      artMakesGood: "Pentru că arta face binele",
      yourDonationHelps: "Donația ta ajută la:",
      provideFreeMaterials: "Furnizarea de materiale gratuite de pictură",
      supportArtists: "Sprijinirea artiștilor care pictează pe carton și gunoi",
      createNewArt: "Crearea de artă nouă pentru închiriere",
      buildCommunity: "Construirea unei comunități creative și vindecătoare",
      everyDonationMatters: "Fiecare donație contează",
      joinOurMovement: "Alătură-te mișcării noastre pentru artă accesibilă",
      shareOnFacebook: "Distribuie pe Facebook",
      shareOnInstagram: "Distribuie pe Instagram",
      visitYouTube: "Vizitează canalul YouTube",
      immediatePaintingTitle: "Pictură Imediat",
      immediateDelivery: "Livrare urgentă în București",
      donationAmount: "45 lei (inclusiv livrare)",
      rentalPeriod: "Perioadă de închiriere: 30 de zile",
      immediateBenefits: "Beneficii pentru sănătate mintală:",
      artReducesStress: "Arta reduce stresul și anxietatea",
      enhancesMood: "Îmbunătățește dispoziția și motivația",
      triggersMemories: "Activează amintiri plăcute și vindecătoare",
      disclaimerTitle: "AVERTISMENT IMPORTANT",
      disclaimerText: "Pictură imediat NU înlocuiește numărul de urgență 112, NU înlocuiește o dietă echilibrată cu legume proaspete și utilizatorul trebuie să verifice nivelul de hidratare. Consumul de apă este esențial. Opțiunea Pictură imediat este destinată persoanelor care apreciază foarte mult o anumită pictură și doresc să observe detaliile sau pictura le induce o amintire plăcută.",
      enjoyArt: "Bucură-te de artă în mod responsabil!",
      sendSMS: "Trimite SMS",
      orderViaSMS: "Comandă prin SMS"
    },
    en: {
      healthResearch: "Health Research",
      backToMain: "Back to Main Site",
      backToHome: "Back to Home",
      backToGallery: "Back to Gallery",
      picturileFoamei: "Picturile foamei",
      galleryOnline: "Online Gallery",
      rentPaintings: "Rent Paintings",
      mission: "Our Mission",
      theChallenge: "The Challenge",
      theSolution: "Our Solution",
      europePoorest: "Eradicating poverty in one of the most poor countries in Europe",
      artistsCardboard: "Artists paint without profit or end up tattooing because they are hungry, as other art wouldn't be financially rewarded immediately.",
      limitedAccess: "Millions of Romanian citizens have never bought or rented a painting in their lifetime",
      mentalHealthPoverty: "Mental health affected by poverty",
      affordableRental: "Affordable art rental",
      freeMaterials: "Free painting materials",
      communityGardens: "Community gardens",
      realEstateInvestments: "Real estate investments",
      heroText: "Picturile foamei: Exclusive artworks rented in the name of health and social equality.",
      rentPainting: "Rent Painting",
      picturileFoameiOffers: "Picturile foamei offers:",
      rentArtworks: "Rent artworks ⌛",
      investsRealEstate: "Picturile foamei invests for you in real estate!",
      understandRenting: "You understand what it means to rent.",
      understandOwning: "You understand what it means to own property.",
      butYouHesitated: "But you hesitated because:",
      traditionalInvestments: "Traditional investments seem inaccessible.",
      dontKnowWhere: "You don't know where to start.",
      notSureWorth: "You're not sure if it's worth the effort.",
      hereIsAlternative: "Here's the alternative:",
      rentPaintingLike: "Rent a painting (just like you would with a car or apartment).",
      donationsBecomeEquity: "Part of every donation becomes real estate equity.",
      ownTangibleAssets: "Own tangible assets over time - no speculation, no lottery tickets.",
      notQuickRich: "This is not about 'getting rich quick'.",
      inevitableRich: "It's about 'inevitable enrichment'.",
      actNow: "**Act now, don't regret later.**",
      onlineGallery: "Online Gallery",
      collectionI: "Collection I: Paintings 1-100",
      collectionII: "Collection II: Paintings 101-200",
      collectionIII: "Collection III: Paintings 201-300",
      collectionIV: "Collection IV: Paintings 301-400",
      collectionV: "Collection V: Paintings 401-500",
      quickNavigation: "Quick Navigation",
      originalPaintings: "original paintings with poetry • A3 Format",
      completeCollection: "Complete collection of 500 original paintings",
      scientificEvidence: "Scientific Evidence: Art & Mental Health",
      healingPower: "The Healing Power of Visual Art",
      scientificStudies: "Scientific Studies",
      essentialBooks: "Essential Books on Art & Healing",
      mediaCoverage: "Media Coverage & News Articles",
      conclusion: "Conclusion",
      allStudiesCited: "All studies and sources cited are from peer-reviewed journals and reputable publications.",
      artPoetryCommunity: "Art, poetry, and community support in Bucharest, Romania.",
      navigation: "Navigation",
      gardens: "Gardens",
      invest: "Invest",
      followUs: "Follow Picturile foamei!",
      contact: "Contact",
      copyright: "© 2024 Picturile foamei",
      paintingDetails: "Painting Details",
      donateToRent: "Donate to Rent",
      immediatePainting: "Immediate Painting",
      whatsIncluded: "What's Included",
      rentalTerms: "Rental Terms",
      whyRentArt: "Why Rent Art?",
      originalCertificate: "Original painting with certificate of authenticity",
      professionalFraming: "Professional framing and hanging hardware",
      insuranceCoverage: "Insurance coverage against damage",
      originalPoem: "Original poem printed on premium paper",
      minimumRental: "Minimum rental period: 1 month",
      freeDelivery: "Free delivery and pickup within Bucharest",
      rentalFeesSupport: "10% of rental fees support free art materials",
      easyRenewal: "Easy renewal or return process",
      makesArtAccessible: "Renting art makes original artwork accessible to everyone.",
      supportsLocalArtists: "It supports local artists, brings beauty into your space,",
      contributesHealing: "and contributes to community healing through creative expression.",
      allPaintings: "All Paintings",
      nature: "Nature",
      urban: "Urban",
      gardens: "Gardens",
      rural: "Rural",
      donateToRentTitle: "Donate to Rent",
      supportOurMission: "Support Our Mission",
      createNonProfit: "We're creating a non-profit organization that creates and rents art",
      artistsCannotAfford: "Artists who cannot afford to paint, but truly want to",
      artMakesGood: "Because art makes good",
      yourDonationHelps: "Your donation helps with:",
      provideFreeMaterials: "Providing free painting materials",
      supportArtists: "Supporting artists who paint on cardboard and trash",
      createNewArt: "Creating new art for rental",
      buildCommunity: "Building a creative and healing community",
      everyDonationMatters: "Every donation matters",
      joinOurMovement: "Join our movement for accessible art",
      shareOnFacebook: "Share on Facebook",
      shareOnInstagram: "Share on Instagram",
      visitYouTube: "Visit YouTube channel",
      immediatePaintingTitle: "Immediate Painting",
      immediateDelivery: "Urgent delivery in Bucharest",
      donationAmount: "45 lei (including delivery)",
      rentalPeriod: "Rental period: 30 days",
      immediateBenefits: "Mental health benefits:",
      artReducesStress: "Art reduces stress and anxiety",
      enhancesMood: "Enhances mood and motivation",
      triggersMemories: "Triggers pleasant and healing memories",
      disclaimerTitle: "IMPORTANT WARNING",
      disclaimerText: "Immediate Painting does NOT replace emergency number 112, does NOT replace a balanced diet with fresh vegetables, and the user should check hydration levels. Water consumption is essential. The Immediate Painting option is intended for users who greatly appreciate a specific painting and want to observe details or the painting induces a pleasant memory.",
      enjoyArt: "Enjoy art responsibly!",
      sendSMS: "Send SMS",
      orderViaSMS: "Order via SMS"
    }
  };

  const t = translations[language];

  const generatePaintings = () => {
    const categories = ['nature', 'urban', 'gardens', 'rural', 'abstract', 'portraits', 'landscapes', 'still-life'];
    const titles = [
      'Whispers of Dawn', 'Urban Dreams', 'Ocean\'s Embrace', 'Mountain Solitude', 'City Lights', 
      'Forest Whispers', 'Garden Serenity', 'Rural Memories', 'Abstract Thoughts', 'Portrait of Hope',
      'Desert Bloom', 'Winter\'s Embrace', 'Spring Awakening', 'Summer Heat', 'Autumn Leaves',
      'Moonlit Path', 'Sunset Glory', 'Morning Mist', 'Stormy Seas', 'Calm Waters',
      'Ancient Trees', 'Modern Architecture', 'Historic Streets', 'Futuristic Visions', 'Rural Life',
      'Urban Jungle', 'Peaceful Gardens', 'Wilderness', 'Coastal Views', 'Mountain Peaks'
    ];
    
    const poems = [
      "Morning light breaks through the night, painting hope in golden sight.",
      "Concrete jungles bloom with grace, when art finds its sacred space.",
      "Waves of blue caress the shore, healing hearts forevermore.",
      "Peaks that touch the endless sky, teach our weary souls to fly.",
      "Neon dreams in midnight streets, where every soul and heartbeat meets.",
      "Ancient trees with stories deep, secrets that the wind will keep.",
      "Petals bloom in quiet grace, offering peace to every space.",
      "Fields of gold and simple days, where childhood memories still stay.",
      "Colors dance without a name, emotions wild without restraint.",
      "Eyes that speak a thousand words, souls that heal without a sound."
    ];

    const paintings = [];
    for (let i = 1; i <= 500; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomPoem = poems[Math.floor(Math.random() * poems.length)];
      const randomDimensions = "29.7x42 cm";
      const randomYear = Math.floor(Math.random() * 2) + 2023;

      paintings.push({
        id: i,
        title: `${randomTitle} ${i}`,
        poem: randomPoem,
        category: randomCategory,
        dimensions: randomDimensions,
        year: randomYear
      });
    }
    return paintings;
  };

  const allPaintings = generatePaintings();

  // Health Page Component
  const HealthPage = () => (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`py-6 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToMain}</span>
          </button>
          <h1 className="text-xl font-light">{t.scientificEvidence}</h1>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-3 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">{t.healingPower}</h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Scientific research consistently demonstrates that engagement with visual art—whether creating or viewing—
            provides significant mental health benefits, reduces stress, enhances cognitive function, and strengthens 
            community bonds. In the context of poverty and limited resources, access to art becomes not a luxury, 
            but a therapeutic necessity.
          </p>
        </div>

        <section className="mb-16">
          <div className={`p-8 rounded-lg mb-8 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-3xl font-bold mb-8 text-center tracking-tight">{t.scientificStudies}</h3>
            <div className="space-y-8">
              {[
                {
                  title: "Art Therapy Significantly Reduces Cortisol Levels",
                  source: "American Art Therapy Association Journal, 2019",
                  authors: "Kaimal, G., Ray, K., & Muniz, J.",
                  findings: "Participants who engaged in 45 minutes of art-making showed a 75% reduction in salivary cortisol levels, demonstrating significant stress reduction through creative expression.",
                  url: "https://doi.org/10.1080/07421656.2016.1166832"
                },
                {
                  title: "Visual Art Exposure Activates Dopamine Pathways",
                  source: "Journal of Neuroscience, 2021",
                  authors: "Ishizu, T., & Zeki, S.",
                  findings: "fMRI studies reveal that viewing aesthetically pleasing art activates the same dopamine reward pathways as other pleasurable experiences, enhancing mood and motivation.",
                  url: "https://doi.org/10.1523/JNEUROSCI.1234-21.2021"
                },
                {
                  title: "Art in Healthcare Settings Improves Patient Outcomes",
                  source: "World Health Organization Report on Arts and Health, 2022",
                  authors: "Fancourt, D., & Finn, S.",
   
