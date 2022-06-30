interface Colour {
  label: string;
  value: string;
}

export interface ThemeColour {
  Base: Colour;
  Surface: Colour;
  Overlay: Colour;
  Muted: Colour;
  Subtle: Colour;
  Text: Colour;
  Love: Colour;
  Gold: Colour;
  Rose: Colour;
  Pine: Colour;
  Foam: Colour;
  Iris: Colour;
  HighlightLow: Colour;
  HighlightMed: Colour;
  HighlightHigh: Colour;
}

export const TagColours: Array<Colour> = [
  { label: 'Coral Red', value: '#F94144' },
  { label: 'Tangelo', value: '#F3722C' },
  { label: 'Beer', value: '#F8961E' },
  { label: 'Mango', value: '#F9844A' },
  { label: 'Maize', value: '#F9C74F' }, 
  { label: 'Pistachio', value: '#90BE6D' },
  { label: 'Zomp', value: '#43AA8B' },
  { label: 'Steel Teal', value: '#4D908E' },
  { label: 'UCLA Blue', value: '#577590' },
  { label: 'Lapis Lazuli', value: '#277DA1' },
];

export const ThemeColours: Record<string, ThemeColour> = {
  // Join the Rose Pine movement! https://rosepinetheme.com/
  "Default": {
    Base: { label: 'Cinder', value: '#191724' },
    Surface: { label: 'Steel Gray', value: '#1f1d2e' },
    Overlay: { label: 'Light Steel Gray', value: '#26233A' },
    Muted: { label: 'Storm Gray', value: '#6E6A86' },
    Subtle: { label: 'Manatee', value: '#908CAA' },
    Text: { label: 'Link Water', value: '#E0DEF4' },
    Love: { label: 'Deep Blush', value: '#EB6F92' },
    Gold: { label: 'Rajah', value: '#F6C177' },
    Rose: { label: 'Shilo', value: '#EBBCBA'},
    Pine: { label: 'Calypso', value: '#31748F' },
    Foam: { label: 'Aqua Island', value: '#9CCFD8' },
    Iris: { label: 'Biloba Flower', value: '#C4A7E7' },
    HighlightLow: { label: 'Steel Gray Low', value: '#21202E' },
    HighlightMed: { label: 'Gun Powder', value: '#403D52' },
    HighlightHigh: { label: 'Scarpa Flow', value: '#524F67' },
  }
};
