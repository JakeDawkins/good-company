// Shared menu data. Both the full menu (`Menu`) and the print layout
// (`/menu/print`) render from this, so updates flow to both automatically.

import type { ReactNode } from 'react';

export interface MenuItem {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: ReactNode;
}

export interface ListSection {
  type?: undefined;
  title: string;
  subtitle: string;
  pending?: boolean;
  items: MenuItem[];
}

export interface CoffeeSection {
  type: 'coffee';
  pending: boolean;
  roaster: string;
  name: string;
  region: string;
  roasterLocation?: string;
  roastDate?: string;
  url: string;
  logo?: string;
  brandColor?: string;
}

export interface DrinksSection {
  type: 'drinks';
  title: string;
  subtitle: string;
}

export type MenuSection = ListSection | CoffeeSection | DrinksSection;

export const menuTitle = 'September Menu';

export const menuData: { sections: MenuSection[] } = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      items: [
        {
          title: 'Brown Butter Toffee & Chocolate Chip Cookies',
          image: '/cookie.svg',
        },
        {
          title: 'Birthday Cake',
          image: '/birthday-cake.svg',
        },
        {
          title: 'Lemon Cookies',
          image: '/lemon-cookie.svg',
          icon: (
            <span className="inline-block align-middle text-xs font-semibold uppercase tracking-wide text-white bg-darkGreen rounded-full px-2 py-0.5">
              Vegan
            </span>
          ),
        },
      ],
    },
    {
      type: 'coffee',
      pending: false,
      roaster: 'East Crema',
      name: 'Blue House Espresso',
      region: 'Brazil',
      roasterLocation: 'TBD',
      roastDate: 'TBD',
      url: 'https://eastcrema.com/products/blue-house-espresso',
      logo: '/eastcrema-logo.png',
      brandColor: '#14179A',
    },
    {
      title: 'Flavors',
      subtitle:
        'Syrups homemade with fresh ingredients and infused into a simple syrup',
      items: [
        {
          title: 'Pistachio',
          subtitle: 'A more subtle, earthy flavor. Great in an iced latte!',
          image: '/pistachio.svg',
        },
        {
          title: 'Butter Pecan',
          subtitle:
            "A flavor native to and loved by the American South. Jake's favorite ever since he first tried it!",
          image: '/pecan.svg',
        },
      ],
    },
    {
      type: 'drinks',
      title: 'Espresso Drinks',
      subtitle: 'Available with dairy or oat milk',
    },
    {
      title: 'Assorted Teas',
      subtitle:
        "Don't drink coffee, or want something less caffeinated? We've got you covered",
      items: [
        { title: 'Lemon & Ginger Tea' },
        { title: 'Japanese Roasted Green Tea' },
        { title: 'Chamomile Tea' },
        { title: 'English Breakfast Tea' },
      ],
    },
  ],
};
