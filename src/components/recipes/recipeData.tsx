// Shared recipe data. Recipes are surfaced two ways:
//   1. A "Make it" button on the menu page (`Menu`) for any item with a
//      `recipeId`, which opens the recipe in a modal.
//   2. The dedicated recipes page (`/recipes`), which lists every recipe
//      grouped by category.
//
// A recipe is either `inline` (ingredients + instructions we show in a modal)
// or `external` (a recipe that lives on another site — we just link out to it).

export type RecipeCategory = 'Coffee Syrups' | 'Pastries';

// Category render order on the recipes page.
export const recipeCategories: RecipeCategory[] = ['Coffee Syrups', 'Pastries'];

interface BaseRecipe {
  id: string;
  title: string;
  category: RecipeCategory;
  image?: string;
  blurb?: string;
}

export interface InlineRecipe extends BaseRecipe {
  type: 'inline';
  yield?: string;
  time?: string;
  ingredients: string[];
  steps: string[];
}

export interface ExternalRecipe extends BaseRecipe {
  type: 'external';
  // The recipe lives here — the "Make it" button links straight out.
  url: string;
  // Human-readable attribution shown on the button/card, e.g. the site name.
  source: string;
}

export type Recipe = InlineRecipe | ExternalRecipe;

export const recipes: Recipe[] = [
  // --- Coffee Syrups -------------------------------------------------------

  {
    id: 'butter-pecan-syrup',
    title: 'Butter Pecan Syrup',
    category: 'Coffee Syrups',
    image: '/pecan.svg',
    type: 'inline',
    blurb:
      "A flavor native to and loved by the American South. Jake's favorite ever since he first tried it!",
    yield: 'About 1 cup',
    time: '30 min',
    ingredients: [
      '40g raw pecans, roughly chopped',
      '200ml cup water',
      '200g granulated sugar',
      '1/8tsp butter extract',
    ],
    steps: [
      'Toast the chopped pecans in the oven at 350F (175C) for 10 minutes max, until just browned and fragrant',
      'Lighly crush the pecans', 
      'Add water and sugar to a small pot and heat on medium until a gentle simmer.',
      'Add the crushed pecans, and simmer for 10 minutes at a gentle simmer',
      'Remove from heat, and add the butter extract. This is a STRONG flavor, so use as little as possible to start, and taste and add until done. This is usually a little less than 1/8tsp',
      'Strain out the pecans and store the syrup in a sealed jar or bottle in the fridge for up to 2 weeks.',
    ],
  },

  {
    id: 'pistachio-syrup',
    title: 'Pistachio Syrup',
    category: 'Coffee Syrups',
    image: '/pistachio.svg',
    type: 'inline',
    blurb: 'A more subtle, earthy flavor. Great in an iced latte!',
    yield: 'About 1 cup',
    time: '45 min',
    ingredients: [
      '80g cup shelled unsalted pistachios',
      '200ml water',
      '200g cup granulated sugar',
      'Pinch of fine sea salt',
    ],
    steps: [
      'Roughly crush the pistachios',
      'Combine the water and sugar in a saucepan and bring to a simmer, stirring until dissolved.',
      'Add the ground pistachios and a small pinch of salt. Simmer gently for 30 minutes.',
      'Remove from heat and let cool for about 45 minutes.',
      'Strain and store refrigerated for up to 2 weeks.',
    ],
  },

  // --- Pastries ------------------------------------------------------------

  // EXTERNAL example: the recipe comes from another site, so we link out.
  // NOTE: replace `url` with the actual recipe you use.
  // {
  //   id: 'brown-butter-toffee-cookies',
  //   title: 'Brown Butter Toffee & Chocolate Chip Cookies',
  //   category: 'Pastries',
  //   image: '/cookie.svg',
  //   type: 'external',
  //   blurb: 'Our house cookie — brown butter, toffee bits, and chocolate chips.',
  //   source: "Sally's Baking Addiction",
  //   url: 'https://sallysbakingaddiction.com/brown-butter-toffee-chocolate-chip-cookies/',
  // },

  // EXTERNAL example: another linked-out recipe.
  // NOTE: replace `url` with the actual recipe you use.
  // {
  //   id: 'birthday-cake',
  //   title: 'Birthday Cake',
  //   category: 'Pastries',
  //   image: '/birthday-cake.svg',
  //   type: 'external',
  //   blurb: 'A classic celebration cake.',
  //   source: 'Preppy Kitchen',
  //   url: 'https://preppykitchen.com/birthday-cake/',
  // },

  // INLINE example in the Pastries category (vegan).
  // {
  //   id: 'lemon-cookies',
  //   title: 'Lemon Cookies',
  //   category: 'Pastries',
  //   image: '/lemon-cookie.svg',
  //   type: 'inline',
  //   blurb: 'Bright, zesty, and vegan.',
  //   yield: 'About 18 cookies',
  //   time: '45 min',
  //   ingredients: [
  //     '2 cups all-purpose flour',
  //     '1 tsp baking powder',
  //     '1/4 tsp salt',
  //     '1/2 cup refined coconut oil, softened',
  //     '3/4 cup granulated sugar',
  //     'Zest of 2 lemons',
  //     '3 tbsp fresh lemon juice',
  //     '3 tbsp plant milk',
  //     '1/2 cup powdered sugar, for coating',
  //   ],
  //   steps: [
  //     'Whisk together the flour, baking powder, and salt.',
  //     'In a separate bowl, cream the coconut oil, sugar, and lemon zest until light.',
  //     'Beat in the lemon juice and plant milk.',
  //     'Fold in the dry ingredients until a soft dough forms. Chill 20 minutes.',
  //     'Roll dough into balls, coat in powdered sugar, and place on a lined sheet.',
  //     'Bake at 350°F (175°C) for 11-13 minutes until the edges are just set. Cool before serving.',
  //   ],
  // },
];

export const getRecipe = (id: string): Recipe | undefined =>
  recipes.find((recipe) => recipe.id === id);
