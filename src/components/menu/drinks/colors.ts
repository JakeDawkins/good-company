// Colors for the coffee drink diagrams. These mirror the source Figma file
// (Scratchpad). This is the single source of truth for drink element colors —
// change a value here (or pass a partial override via the `colors` prop on
// DrinkDiagram / DrinkKey) to restyle every diagram and the key at once.

export type DrinkColorKey =
  | 'espresso'
  | 'crema'
  | 'milk'
  | 'foam'
  | 'water'
  | 'ice'
  | 'outline';

export type DrinkColors = Record<DrinkColorKey, string>;

export const DRINK_COLORS: DrinkColors = {
  espresso: '#33200F',
  crema: '#7A4E2E',
  milk: '#E9D8BE',
  foam: '#F6F1E7',
  water: '#B07A4B',
  ice: '#DDEBF2',
  outline: '#2A241F',
};
