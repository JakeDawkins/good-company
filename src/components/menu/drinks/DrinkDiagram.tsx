import { DRINK_COLORS, DrinkColorKey, DrinkColors } from './colors';

// Cup geometry, in the 440x440 viewBox coordinate space exported from Figma.
// The glass is a straight-sided (no handle) tapered trapezoid; liquid layers
// are rectangles clipped to that trapezoid.
const CX = 220;
const TOP_Y = 76;
const BOT_Y = 368;
const TOP_HALF = 104;
const BOT_HALF = 76;
const BAND_X = 104;
const BAND_W = 232;
const ICE_SIZE = 46;

const CUP_PATH = `M${CX - TOP_HALF} ${TOP_Y} L${CX + TOP_HALF} ${TOP_Y} L${
  CX + BOT_HALF
} ${BOT_Y} L${CX - BOT_HALF} ${BOT_Y} Z`;

// A single horizontal layer of liquid. `y`/`h` are in viewBox units, measured
// from the top; the bottom of the cup interior is at y=368.
export interface DrinkLayer {
  color: DrinkColorKey;
  y: number;
  h: number;
}

// A decorative ice cube (top-left x/y, optional rotation in degrees).
export interface DrinkCube {
  x: number;
  y: number;
  r?: number;
}

export interface DrinkRecipe {
  id: string;
  label: string;
  layers: DrinkLayer[];
  cubes?: DrinkCube[];
}

// Drink recipes. Layer heights encode the ingredient ratios shown in the menu.
export const DRINKS: DrinkRecipe[] = [
  {
    id: 'espresso',
    label: 'Espresso',
    layers: [
      { color: 'crema', y: 295, h: 14 },
      { color: 'espresso', y: 309, h: 59 },
    ],
  },
  {
    id: 'cortado',
    label: 'Cortado',
    layers: [
      { color: 'espresso', y: 289, h: 79 },
      { color: 'milk', y: 209, h: 80 },
      { color: 'foam', y: 203, h: 6 },
    ],
  },
  {
    id: 'cappuccino',
    label: 'Cappuccino',
    layers: [
      { color: 'espresso', y: 283, h: 85 },
      { color: 'milk', y: 197, h: 86 },
      { color: 'foam', y: 111, h: 86 },
    ],
  },
  {
    id: 'americano',
    label: 'Americano',
    layers: [
      { color: 'espresso', y: 295, h: 73 },
      { color: 'water', y: 157, h: 138 },
      { color: 'crema', y: 149, h: 8 },
    ],
  },
  {
    id: 'latte',
    label: 'Latte',
    layers: [
      { color: 'espresso', y: 295, h: 73 },
      { color: 'milk', y: 132, h: 163 },
      { color: 'foam', y: 105, h: 27 },
    ],
  },
  {
    id: 'iced-latte',
    label: 'Iced Latte',
    layers: [
      { color: 'milk', y: 99, h: 269 },
      { color: 'espresso', y: 300, h: 68 },
    ],
    cubes: [
      { x: 168, y: 150, r: 8 },
      { x: 214, y: 128, r: -10 },
      { x: 252, y: 162, r: 14 },
      { x: 186, y: 204, r: -6 },
      { x: 236, y: 214, r: 10 },
      { x: 202, y: 262, r: -8 },
    ],
  },
];

export interface DrinkDiagramProps {
  recipe: DrinkRecipe;
  /** Override any drink element colors. Defaults to DRINK_COLORS. */
  colors?: DrinkColors;
  className?: string;
}

export const DrinkDiagram = ({
  recipe,
  colors = DRINK_COLORS,
  className,
}: DrinkDiagramProps) => {
  const clipId = `cup-clip-${recipe.id}`;

  return (
    <svg
      viewBox="0 0 440 440"
      className={className}
      role="img"
      aria-label={recipe.label}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={CUP_PATH} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {recipe.layers.map((layer, i) => (
          <rect
            key={`layer-${i}`}
            x={BAND_X}
            y={layer.y}
            width={BAND_W}
            height={layer.h}
            fill={colors[layer.color]}
          />
        ))}

        {recipe.cubes?.map((cube, i) => (
          <rect
            key={`ice-${i}`}
            x={cube.x}
            y={cube.y}
            width={ICE_SIZE}
            height={ICE_SIZE}
            rx={9}
            fill={colors.ice}
            fillOpacity={0.5}
            stroke="#ffffff"
            strokeOpacity={0.75}
            strokeWidth={2}
            transform={
              cube.r
                ? `rotate(${-cube.r} ${cube.x + ICE_SIZE / 2} ${
                    cube.y + ICE_SIZE / 2
                  })`
                : undefined
            }
          />
        ))}
      </g>

      <path
        d={CUP_PATH}
        fill="none"
        stroke={colors.outline}
        strokeWidth={5}
        strokeLinejoin="miter"
      />
    </svg>
  );
};
