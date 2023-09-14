import Link from 'next/link';

const menuData = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      items: [
        {
          title: 'Confetti Cake from Milk Bar (Classic or Chocolate)',
          subtitle:
            "We decided our pastry chef shouldn't have to make her own birthday cake, so we had Milk Bar do it instead",
        },
        {
          title: 'Vegan Pumpkin Muffins',
          subtitle:
            'We said she was off the hook for her birthday, not for the rest of the pastries. Enjoy this fall flavored treat!',
        },
      ],
    },
    {
      type: 'coffee',
      pending: false,
      roaster: 'Bridge City Coffee Roasters',
      region: 'Kenya',
      roasterLocation: 'Greenville SC',
      roastDate: 'August 8th, 2023',
      url: 'https://www.bridgecity.coffee/store/p/kenya-gicherori-aa-washed-process',
    },
    {
      title: 'Alcoholic Beverages',
      subtitle:
        'As a celebratory treat, we are offering a something a little harder than coffee',
      items: [{ title: 'Mimosa' }, { title: 'Espresso Martini' }],
    },
    {
      title: 'Espresso Drinks',
      subtitle: 'Available with almond, dairy, or oat milk',
      items: [
        { title: 'Cappuccino' },
        { title: 'Cold Foam Iced Latte' },
        { title: 'Americano' },
        { title: 'Espresso' },
        { title: 'Latte', subtitle: 'Hot/Iced' },
      ],
    },
    {
      title: 'Filter Coffee',
      subtitle: 'Brewed with a Chemex for all your pour-over needs',
      items: [],
    },
    {
      title: 'Flavors',
      subtitle:
        'Syrups homemade with fresh ingredients and infused into a simple syrup',
      items: [
        { title: 'Cinnamon Dolce' },
        { title: 'Pumpkin Spice' },
        { title: 'Vanilla Bean' },
      ],
    },
    {
      title: 'Assorted Teas',
      subtitle:
        "Don't drink coffee, or want something less caffeinated? We've got you covered",
      items: [
        { title: "Harrod's Afternoon Tea (black)" },
        { title: 'Lemon & Ginger' },
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
