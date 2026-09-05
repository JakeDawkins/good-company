import { DRINK_COLORS, DrinkColorKey, DrinkColors } from './colors';

const KEY_ITEMS: { color: DrinkColorKey; label: string }[] = [
  { color: 'espresso', label: 'Espresso' },
  { color: 'milk', label: 'Milk' },
  { color: 'foam', label: 'Foam' },
  { color: 'water', label: 'Water' },
];

export interface DrinkKeyProps {
  /** Override any drink element colors. Defaults to DRINK_COLORS. */
  colors?: DrinkColors;
  className?: string;
}

export const DrinkKey = ({
  colors = DRINK_COLORS,
  className,
}: DrinkKeyProps) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 ${
        className ?? ''
      }`}
    >
      {KEY_ITEMS.map((item) => (
        <div key={item.color} className="flex items-center gap-2">
          <span
            className="inline-block h-3.5 w-3.5 shrink-0 border border-black/10"
            style={{ backgroundColor: colors[item.color] }}
          />
          <span className="text-sm text-slate">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
