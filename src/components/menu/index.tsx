import Link from 'next/link';

const menuData = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      items: [
        {
          title: '36-hour Chocolate Chip Cookies',
          subtitle:
            "Everyone has had chocolate chip cookies, but most chocolate chip cookies aren't set to rest 36 hours before baking",
        },
        {
          title: 'Vegan Raspberry/Blueberry Muffins',
          subtitle: 'A berry nice addition to our menu and your day',
        },
      ],
    },
    {
      type: 'coffee',
      pending: false,
      roaster: 'Partners Coffee Roasters',
      region: 'Colombia, Guatmala & Honduras',
      roasterLocation: 'Brooklyn, NY',
      roastDate: 'July 25th, 2023',
      url: 'https://www.partnerscoffee.com/collections/all-coffees/products/brooklyn',
    },
    {
      title: 'Espresso Drinks',
      subtitle: 'Available with almond, dairy, oat, and "Myracle" milk',
      items: [
        { title: 'Cappuccino' },
        { title: 'Cold Foam Iced Latte' },
        { title: 'Espresso' },
        { title: 'Latte', subtitle: 'Hot/Iced' },
      ],
    },
    {
      title: 'Flavors',
      subtitle:
        'Syrups homemade with fresh ingredients and infused into a simple syrup',
      items: [
        { title: 'Cinnamon Dolce' },
        { title: 'Pistachio' },
        { title: 'Vanilla Bean' },
      ],
    },
    {
      title: 'Assorted Teas',
      subtitle:
        "Don't drink coffee, or want something less caffeinated? We've got you covered",
      items: [
        { title: "Harrod's Afternoon Tea (black)" },
        { title: 'Hibiscus Berry' },
        { title: 'Lemon', subtitle: 'Available in green/herbal teas' },
        { title: 'Lemon & Ginger' },
        { title: 'Strawberry' },
      ],
    },
  ],
};

const Menu = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-light text-center">August Menu</h1>
      <p className="mt-4 text-center">
        Every month, we work to develop a menu with seasonal flavors and
        pastries. This menu is a combination of a number of recommendations,
        seasonal influences, and some ideas of our own. All of our pastries and
        coffee flavorings are made in-house with the best ingredients.
      </p>

      <div className="w-24 border-t border-t-black mt-8" />

      {menuData.sections.map((section) => {
        if (section.type === 'coffee')
          return (
            <div className="p-8 mt-8 border border-black rounded-lg">
              {section.pending ? (
                <p>
                  We&apos;re still searching for the perfect coffee to serve
                  this month. Check back soon!
                </p>
              ) : (
                <p>
                  This month&apos;s coffee was grown in {section.region}, and
                  roasted by {section.roaster} in {section.roasterLocation} on{' '}
                  {section.roastDate}.{' '}
                  <Link
                    href={section.url}
                    target="_blank"
                    className="text-blue underline font-semibold"
                  >
                    Click here
                  </Link>{' '}
                  to learn more.
                </p>
              )}
            </div>
          );

        return (
          <div key={section.title} className="mt-8 w-full">
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <p className="text-sm">{section.subtitle}</p>
            {section.items?.map((item) => {
              return (
                <div
                  key={item.title}
                  className="mt-2 border-l pl-2 border-black"
                >
                  <h4 className="text-md">{item.title}</h4>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              );
            })}
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
