import Image from 'next/image';
import Link from 'next/link';

import { DRINK_COLORS, DRINKS, DrinkDiagram, DrinkKey } from './drinks';

const menuData = {
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
          title: 'Raspberry Muffins',
          image: '/raspberry-muffin.svg',
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
        { title: 'Lemon & Ginger' },
        { title: 'Japanese Roasted Green Tea' },
        { title: 'Chamomile Tea' },
        { title: 'English Breakfast Tea' },
      ],
    },
  ],
};

const Menu = () => {
  return (
    <div className="flex flex-col items-center px-4 py-2 md:py-8">
      <h1 className="font-light text-center sm:text-3xl md:text-4xl lg:text-5xl text-darkGreen mb-2">
        September Menu
      </h1>
      <p className="mt-6 text-center max-w-2xl text-slate leading-relaxed mb-10">
        Every month, we work to develop a menu with seasonal flavors and
        pastries. This menu is a combination of a number of recommendations,
        seasonal influences, and some ideas of our own. All of our pastries and
        coffee flavorings are made in-house with the best ingredients.
      </p>

      {menuData.sections.map((section, index) => {
        if (section.type === 'coffee')
          return (
            <div
              key={`coffee-${index}`}
              className="p-8 mt-8 border-2 rounded-lg w-full max-w-2xl"
              style={{ borderColor: section.brandColor ?? '#8FA89F' }}
            >
              {section.pending ? (
                <p className="text-center text-slate">
                  We&apos;re still searching for the perfect coffee to serve
                  this month. Check back soon!
                </p>
              ) : (
                <>
                  {section.logo && (
                    <Link
                      href={section.url}
                      target="_blank"
                      className="flex justify-center mb-5"
                    >
                      <Image
                        src={section.logo}
                        alt={section.roaster}
                        width={1000}
                        height={120}
                        unoptimized
                        className="w-44 h-auto"
                      />
                    </Link>
                  )}
                  <p className="text-center text-slate">
                    This month&apos;s coffee was grown in {section.region} and
                    roasted by {section.roaster}.{' '}
                    <Link
                      href={section.url}
                      target="_blank"
                      style={{ color: section.brandColor ?? '#37514D' }}
                      className="underline font-semibold hover:opacity-70 transition-opacity"
                    >
                      Click here
                    </Link>{' '}
                    to learn more.
                  </p>
                </>
              )}
            </div>
          );

        if (section.type === 'drinks')
          return (
            <div key={section.title} className="mt-12 w-full max-w-2xl">
              <h3 className="text-2xl font-semibold text-darkGreen mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-slate italic mb-4">
                {section.subtitle}
              </p>
              <DrinkKey colors={DRINK_COLORS} className="mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                {DRINKS.map((drink) => (
                  <div
                    key={drink.id}
                    className="flex flex-col items-center text-center"
                  >
                    <DrinkDiagram
                      recipe={drink}
                      colors={DRINK_COLORS}
                      className="w-full max-w-[150px]"
                    />
                    <span className="mt-2 text-lg font-medium text-darkGreen">
                      {drink.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );

        return (
          <div key={section.title} className="mt-12 w-full max-w-2xl">
            <h3 className="text-2xl font-semibold text-darkGreen mb-2">
              {section.title}
            </h3>
            <p className="text-sm text-slate italic mb-4">{section.subtitle}</p>
            {section.pending && (
              <p className="text-slate border-l-3 pl-4 border-sage py-2">
                TBD — check back soon!
              </p>
            )}
            <div className="space-y-3">
              {section.items?.map((item) => {
                return (
                  <div
                    key={item.title}
                    className={`py-2 ${
                      item.image ? '' : 'border-l-3 pl-4 border-sage'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={52}
                          height={52}
                          unoptimized
                          className="shrink-0"
                        />
                      )}
                      <div>
                        <h4 className="text-lg font-medium text-darkGreen">
                          {item.title}
                          {item?.icon ? (
                            <span className="ml-2">{item.icon}</span>
                          ) : null}
                        </h4>
                        {item.subtitle && (
                          <p className="text-sm text-slate mt-1">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* <div className="p-8 my-8 border border-gray-500 rounded-lg">
        <p>
          Today&apos;s coffee is Colombian-grown, and roasted by Little Wolf in
          Ipswich, MA.{' '}
          <Link href="/coffee" className="text-blue underline">
            Click here
          </Link>{' '}
          to learn more.
        </p>
      </div> */}
    </div>
  );
};

export default Menu;
