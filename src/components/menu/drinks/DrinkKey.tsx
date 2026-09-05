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
  /**
   * `grid` (default): equal-width cells.
   * `row`: each item sizes to its content and items are spaced evenly.
   */
  layout?: 'grid' | 'row';
}

export const DrinkKey = ({
  colors = DRINK_COLORS,
  className,
  layout = 'grid',
}: DrinkKeyProps) => {
  const layoutClasses =
    layout === 'row'
      ? 'flex flex-wrap items-center gap-x-6 gap-y-2'
      : 'grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2';

  return (
    <div className={`${layoutClasses} ${className ?? ''}`}>
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
