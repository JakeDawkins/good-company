import Link from 'next/link';

const menuData = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      items: [
        {
          title: 'Tarta De Santiago',
          subtitle:
            'A traditional Spanish cake that pairs perfectly with a cup of coffee! Naturally gluten and dairy free, what more could you ask for?',
        },
        {
          title: 'Chewy Chocolate Chip Cookies',
          subtitle:
            'What’s better than a chocolate chip cookie? Not much! Topped with flaky salt, these are always a crowd favorite!',
        },
      ],
    },
    {
      type: 'coffee',
      pending: false,
      roaster: 'East Crema',
      name: 'Day Light',
      region: 'Ethiopia',
      roasterLocation: 'TBD',
      roastDate: 'TBD',
      url: 'https://eastcrema.com/products/etiopia-kambata',
    },
    {
      title: 'Signature Drinks',
      subtitle: 'A little something special, available hot or iced',
      pending: true,
      items: [],
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
        May Menu
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
                  This month&apos;s coffee was grown in {section.region} and
                  roasted by {section.roaster}.{' '}
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
