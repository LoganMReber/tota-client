export const ARCRATINGS = [
  'Mundane',
  'Attuned',
  'Adept',
  'Gifted',
  'Glowing',
  'Luminous',
  'Radiant'
];
export const RACES = [
  {
    name: 'Human',
    info: 'Human Drive: +50% EXP gain'
  },
  {
    name: 'Elf',
    info: 'Elven Grace: +1 Rank on DEX checks (Max:S)'
  },
  {
    name: 'Dwarf',
    info: 'Dwarven Stoutness: +1 Rank on CON checks (Max:S)'
  },
  {
    name: 'Halfling',
    info: 'Halfing Humilty: +1 Rank on CHA checks (Max:S)'
  },
  {
    name: 'Gnome',
    info: 'Gnomish Ingenuity: +1 Rank on INT checks (Max:S)'
  }
];
export const JOBS = {
  t1: [
    {
      name: 'Farmer',
      info: '',
      skills: [
        'Polearms',
        'Hardware',
        'Life_Arcana',
        'Earth_Arcana',
        'Water_Arcana'
      ]
    },
    {
      name: 'Ruffian',
      info: '',
      skills: [
        'Blades',
        'Light_Weapons',
        'Throwning',
        'Wind_Arcana',
        'Dark_Arcana'
      ]
    },
    {
      name: 'Apprentice',
      info: '',
      skills: [
        'Hardware',
        'Tools',
        'Heavy_Weapons',
        'Fire_Arcana',
        'Earth_Arcana'
      ]
    },
    {
      name: 'Wastrel',
      info: '',
      skills: [
        'Throwing',
        'Shields',
        'Wind_Arcana',
        'Water_Arcana',
        'Time_Arcana'
      ]
    },
    {
      name: 'Student',
      info: '',
      skills: [
        'Holy_Arcana',
        'Life_Arcana',
        'Time_Arcana',
        'Space_Arcana',
        'Universal_Arcana'
      ]
    },
    'Student'
  ],
  t2: [],
  t3: [],
  t4: [],
  t5: []
};
export const GRADES = ['F', 'D', 'C', 'B', 'A', 'S', 'S+'];
export const RATINGS = [
  'Pitiful',
  'Weak',
  'Average',
  'Strong',
  'Excellent',
  'Superior',
  'Overwhelming'
];
export const STATS = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma'
];
export const STATS_SHORT = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
export const SKILLS = [
  'Blades',
  'Polearms',
  'Hardware',
  'Tools',
  'Bows',
  'Heavy_Weapons',
  'Light_Weapons',
  'Throwing',
  'Shields',
  'Fire_Arcana',
  'Ice_Arcana',
  'Wind_Arcana',
  'Earth_Arcana',
  'Water_Arcana',
  'Lightning_Arcana',
  'Holy_Arcana',
  'Dark_Arcana',
  'Life_Arcana',
  'Time_Arcana',
  'Space_Arcana',
  'Universal_Arcana'
];
export const FILES_SHAPE = {
  newGame: true,
  hero: {
    name: 'John',
    level: 0,
    race: 'Human',
    job: 'Farmer',
    jobTier: 0,
    arcana: 1,
    statPoints: 15,
    stats: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    },
    skills: [],
    titles: [],
    items: [],
    abilities: []
  },
  map: [],
  lore: {
    arcana: [],
    artifacts: [],
    beastiary: [],
    locations: [],
    people: []
  },
  lastSession: '',
  display: {
    colorblind: false,
    animations: true
  },
  sound: {
    volume: 0.5,
    music: 0.5
  }
};
