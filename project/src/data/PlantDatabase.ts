import type { PlantResult } from '../App';

const plantDatabase: Omit<PlantResult, 'confidence' | 'healthStatus' | 'diseases'>[] = [
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    medicinalUses: [
      'Wound healing and burns',
      'Anti-inflammatory properties',
      'Digestive aid',
      'Skin moisturizing',
      'Sunburn relief'
    ],
    careRecommendations: [
      'Water sparingly, allowing soil to dry between waterings',
      'Provide bright, indirect sunlight',
      'Use well-draining succulent soil mix',
      'Maintain temperature between 60-75°F',
      'Avoid overwatering to prevent root rot'
    ],
    growingTips: [
      'Plant in shallow, wide containers',
      'Harvest outer leaves for gel extraction',
      'Propagate from offshoots (pups)',
      'Repot every 2-3 years',
      'Reduce watering in winter months'
    ],
    toxicity: 'caution',
    activeCompounds: [
      'Acemannan',
      'Aloin',
      'Anthraquinones',
      'Vitamins A, C, E',
      'Amino acids'
    ],
    image: 'https://images.pexels.com/photos/4425964/pexels-photo-4425964.jpeg'
  },
  {
    id: 'echinacea',
    name: 'Echinacea',
    scientificName: 'Echinacea purpurea',
    medicinalUses: [
      'Immune system support',
      'Cold and flu prevention',
      'Anti-inflammatory effects',
      'Wound healing',
      'Respiratory health'
    ],
    careRecommendations: [
      'Plant in well-drained, fertile soil',
      'Water regularly but avoid waterlogged conditions',
      'Deadhead spent flowers to encourage blooming',
      'Divide clumps every 3-4 years',
      'Cut back in late fall'
    ],
    growingTips: [
      'Tolerates drought once established',
      'Attracts butterflies and bees',
      'Harvest roots in fall for medicinal use',
      'Self-seeds readily in garden',
      'Full sun to partial shade preferred'
    ],
    toxicity: 'safe',
    activeCompounds: [
      'Chicoric acid',
      'Polysaccharides',
      'Alkamides',
      'Flavonoids',
      'Essential oils'
    ],
    image: 'https://images.pexels.com/photos/1418336/pexels-photo-1418336.jpeg'
  },
  {
    id: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    medicinalUses: [
      'Anxiety and stress relief',
      'Sleep aid and insomnia',
      'Antiseptic properties',
      'Pain relief',
      'Headache treatment'
    ],
    careRecommendations: [
      'Plant in well-draining, alkaline soil',
      'Provide full sun exposure',
      'Water deeply but infrequently',
      'Prune after flowering to maintain shape',
      'Protect from excessive winter moisture'
    ],
    growingTips: [
      'Drought tolerant once established',
      'Harvest flowers just before full bloom',
      'Dry flowers for potpourri and sachets',
      'Companion plant for vegetables',
      'Perennial in zones 5-9'
    ],
    toxicity: 'safe',
    activeCompounds: [
      'Linalool',
      'Linalyl acetate',
      'Camphor',
      'Terpinen-4-ol',
      'Lavandulol'
    ],
    image: 'https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg'
  },
  {
    id: 'ginger',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    medicinalUses: [
      'Digestive aid and nausea relief',
      'Anti-inflammatory properties',
      'Motion sickness prevention',
      'Pain relief',
      'Immune system support'
    ],
    careRecommendations: [
      'Plant rhizomes in rich, well-draining soil',
      'Maintain high humidity levels',
      'Provide partial shade to filtered sun',
      'Keep soil consistently moist but not waterlogged',
      'Harvest rhizomes after 8-10 months'
    ],
    growingTips: [
      'Start from fresh rhizome pieces',
      'Ideal growing temperature 75-85°F',
      'Can be grown in containers',
      'Mulch to retain moisture',
      'Protect from strong winds'
    ],
    toxicity: 'safe',
    activeCompounds: [
      'Gingerol',
      'Shogaol',
      'Zingerone',
      'Paradol',
      'Essential oils'
    ],
    image: 'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg'
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    medicinalUses: [
      'Powerful anti-inflammatory',
      'Antioxidant properties',
      'Joint pain relief',
      'Digestive health',
      'Liver support'
    ],
    careRecommendations: [
      'Plant in rich, well-draining soil',
      'Provide warm, humid conditions',
      'Water regularly during growing season',
      'Harvest rhizomes after 7-10 months',
      'Store dormant rhizomes in cool, dry place'
    ],
    growingTips: [
      'Requires long, warm growing season',
      'Prefers partial shade in hot climates',
      'Mulch heavily to retain moisture',
      'Divide rhizomes for propagation',
      'Can be container grown indoors'
    ],
    toxicity: 'safe',
    activeCompounds: [
      'Curcumin',
      'Demethoxycurcumin',
      'Bisdemethoxycurcumin',
      'Turmerone',
      'Essential oils'
    ],
    image: 'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg'
  },
  {
    id: 'chamomile',
    name: 'German Chamomile',
    scientificName: 'Matricaria chamomilla',
    medicinalUses: [
      'Calming and relaxation',
      'Digestive aid',
      'Anti-inflammatory effects',
      'Skin irritation relief',
      'Sleep improvement'
    ],
    careRecommendations: [
      'Sow seeds in spring in well-drained soil',
      'Water regularly but avoid overwatering',
      'Harvest flowers when fully open',
      'Allow some plants to self-seed',
      'Prefers cool weather conditions'
    ],
    growingTips: [
      'Annual herb that self-seeds readily',
      'Tolerates poor soil conditions',
      'Harvest in morning after dew dries',
      'Dry flowers for tea and medicinal use',
      'Companion plant for vegetables'
    ],
    toxicity: 'safe',
    activeCompounds: [
      'Chamazulene',
      'Bisabolol',
      'Apigenin',
      'Flavonoids',
      'Essential oils'
    ],
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg'
  },
  {
    id: 'peppermint',
    name: 'Peppermint',
    scientificName: 'Mentha × piperita',
    medicinalUses: [
      'Digestive aid and IBS relief',
      'Respiratory congestion',
      'Headache relief',
      'Anti-microbial properties',
      'Mental alertness'
    ],
    careRecommendations: [
      'Plant in moist, well-drained soil',
      'Provide partial shade to full sun',
      'Water regularly to maintain soil moisture',
      'Contain spread with barriers or containers',
      'Harvest leaves before flowering'
    ],
    growingTips: [
      'Spreads rapidly via underground runners',
      'Pinch flowers to maintain leaf quality',
      'Divide plants every 2-3 years',
      'Harvest multiple times per season',
      'Perennial in zones 3-9'
    ],
    toxicity: 'safe',
    activeCompounds: [
      'Menthol',
      'Menthone',
      'Limonene',
      'Pulegone',
      'Essential oils'
    ],
    image: 'https://images.pexels.com/photos/4198463/pexels-photo-4198463.jpeg'
  },
  {
    id: 'calendula',
    name: 'Calendula',
    scientificName: 'Calendula officinalis',
    medicinalUses: [
      'Wound healing and skin repair',
      'Anti-inflammatory effects',
      'Antibacterial properties',
      'Soothing irritated skin',
      'Eczema and dermatitis relief'
    ],
    careRecommendations: [
      'Plant in well-drained, fertile soil',
      'Provide full sun to partial shade',
      'Water at soil level to prevent powdery mildew',
      'Deadhead regularly for continuous blooming',
      'Direct sow seeds in spring or fall'
    ],
    growingTips: [
      'Cool-season annual that tolerates frost',
      'Self-seeds readily in garden',
      'Harvest petals for medicinal use',
      'Attracts beneficial insects',
      'Companion plant for vegetables'
    ],
    toxicity: 'safe',
    activeCompounds: [
      'Calendulin',
      'Carotenoids',
      'Flavonoids',
      'Saponins',
      'Essential oils'
    ],
    image: 'https://images.pexels.com/photos/5825665/pexels-photo-5825665.jpeg'
  }
];

class PlantDatabase {
  private static instance: PlantDatabase;
  private plants: typeof plantDatabase;

  private constructor() {
    this.plants = plantDatabase;
  }

  public static getInstance(): PlantDatabase {
    if (!PlantDatabase.instance) {
      PlantDatabase.instance = new PlantDatabase();
    }
    return PlantDatabase.instance;
  }

  public getAllPlants(): typeof plantDatabase {
    return this.plants;
  }

  public getPlantById(id: string): typeof plantDatabase[0] | undefined {
    return this.plants.find(plant => plant.id === id);
  }

  public searchPlants(query: string): typeof plantDatabase {
    const lowercaseQuery = query.toLowerCase();
    return this.plants.filter(plant =>
      plant.name.toLowerCase().includes(lowercaseQuery) ||
      plant.scientificName.toLowerCase().includes(lowercaseQuery) ||
      plant.medicinalUses.some(use => use.toLowerCase().includes(lowercaseQuery))
    );
  }

  public getPlantsByToxicity(toxicity: 'safe' | 'caution' | 'toxic'): typeof plantDatabase {
    return this.plants.filter(plant => plant.toxicity === toxicity);
  }
}

export default PlantDatabase.getInstance();