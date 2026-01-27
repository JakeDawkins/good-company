import Link from 'next/link';
import Image from 'next/image';
import Raspberry from '../../assets/raspberry.png';

const menuData = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      items: [
        {
          title: 'Cinnamon Rolls',

          // subtitle:
          //   'This banana bread is my tried and true recipe, and is always a crowd pleaser! Grab a slice of this dense and delicious bread and enjoy!',
        },
        {
          title: 'Red Velvet Cookies',
        },
      ],
    },
    {
      type: 'coffee',
      pending: true,
      roaster: 'TBD',
      region: 'TBD',
      roasterLocation: 'TBD',
      roastDate: 'TBD',
      url: 'https://www.bridgecity.coffee/store/p/vietnam-fully-washed-medium-roast?utm_medium=order-summary&utm_source=order-status&utm_content=name',
    },
    {
      title: 'Signature Drinks',
      subtitle:
        'A little something special for the season, available hot or iced',
      items: [
        {
          title: "You're berry cute",
          subtitle: 'White chocolate raspberry mocha',
          // icon: <span className="h-4 w-4 inline">🌹</span>,
          icon: (
            <Image
              src={Raspberry}
              width={20}
              height={20}
              alt="raspberry"
              className="inline"
            />
          ),
        },
        {
          title: 'Find your match(a)',
          subtitle: 'A strawberry matcha latte',
          icon: <span className="h-4 w-4 inline"> 🍵</span>,
        },
      ],
    },
    {
      title: 'Espresso Drinks',
      subtitle: 'Available with dairy or oat milk',
      items: [
        { title: 'Cappuccino' },
        { title: 'Cortado' },
        { title: 'Americano' },
        { title: 'Espresso' },
        { title: 'Latte', subtitle: 'Hot/Iced' },
      ],
    },
    // {
    //   title: 'Flavors',
    //   subtitle:
    //     'Syrups homemade with fresh ingredients and infused into a simple syrup',
    //   items: [
    //     { title: 'Blueberry' },
    //     { title: 'Vanilla Bean' },
    //     { title: 'Lavender' },
    //   ],
    // },
    {
      title: 'Assorted Teas',
      subtitle:
        "Don't drink coffee, or want something less caffeinated? We've got you covered",
      items: [{ title: 'Lemon & Ginger' }, { title: 'Green Tea' }],
    },
  ],
};

const Menu = () => {
  return (
    <div className="flex flex-col items-center px-4 py-2 md:py-8">
      <h1 className="font-light text-center sm:text-3xl md:text-4xl lg:text-5xl text-darkGreen mb-2">
        Valentine's Day Menu
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
              className="p-8 mt-8 border border-sage/50 rounded-lg w-full max-w-2xl"
            >
              {section.pending ? (
                <p className="text-center text-slate">
                  We&apos;re still searching for the perfect coffee to serve
                  this month. Check back soon!
                </p>
              ) : (
                <p className="text-center text-slate">
                  This month&apos;s coffee was grown in {section.region}, and
                  roasted by {section.roaster} in {section.roasterLocation} on{' '}
                  {section.roastDate}.{' '}
                  <Link
                    href={section.url}
                    target="_blank"
                    className="text-darkGreen underline font-semibold hover:text-terracotta transition-colors"
                  >
                    Click here
                  </Link>{' '}
                  to learn more.
                </p>
              )}
            </div>
          );

        return (
          <div key={section.title} className="mt-12 w-full max-w-2xl">
            <h3 className="text-2xl font-semibold text-darkGreen mb-2">
              {section.title}
            </h3>
            <p className="text-sm text-slate italic mb-4">{section.subtitle}</p>
            <div className="space-y-3">
              {section.items?.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="border-l-3 pl-4 border-sage py-2"
                  >
                    <h4 className="text-lg font-medium text-darkGreen">
                      {item.title}
                      {item?.icon ? (
                        <span className="ml-2">{item.icon}</span>
                      ) : null}
                    </h4>
                    {item.subtitle && (
                      <p className="text-sm text-slate mt-1">{item.subtitle}</p>
                    )}
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
