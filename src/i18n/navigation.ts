export type Locale = 'de' | 'en';

export const pageRoutes = {
  home: { de: '/de/', en: '/en/' },
  yoga: { de: '/de/yoga-als-weg/', en: '/en/yoga-as-a-path/' },
  about: { de: '/de/ueber-mich/', en: '/en/about/' },
  offerings: { de: '/de/angebote/', en: '/en/offerings/' },
  retreats: { de: '/de/retreats/', en: '/en/retreats/' },
  contact: { de: '/de/kontakt/', en: '/en/contact/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof pageRoutes;
type NavigationPage = Exclude<PageKey, 'home'>;

export const navigationPages: NavigationPage[] = [
  'yoga',
  'about',
  'offerings',
  'retreats',
  'contact',
];

export const navigationLabels: Record<Locale, Record<NavigationPage, string>> = {
  de: {
    yoga: 'Yoga als Weg',
    about: 'Über mich',
    offerings: 'Angebote',
    retreats: 'Retreats',
    contact: 'Kontakt',
  },
  en: {
    yoga: 'Yoga as a Path',
    about: 'About',
    offerings: 'Offerings',
    retreats: 'Retreats',
    contact: 'Contact',
  },
};

export const navigationUi: Record<Locale, {
  primaryLabel: string;
  languageLabel: string;
  menuLabel: string;
}> = {
  de: {
    primaryLabel: 'Hauptnavigation',
    languageLabel: 'Sprache wählen',
    menuLabel: 'Menü',
  },
  en: {
    primaryLabel: 'Main navigation',
    languageLabel: 'Choose language',
    menuLabel: 'Menu',
  },
};
