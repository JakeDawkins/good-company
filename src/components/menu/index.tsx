import Link from 'next/link';

const menuData = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      items: [
        {
          title: 'Brown butter pumpkin cupcakes with a Nutella filling',
          subtitle: "Don't ask how much butter is in these, just enjoy them",
        },
        {
          title: 'Vegan apple crumble ',
          subtitle:
            'A perfect fall dessert served warm or cold, with a scoop of vegan vanilla ice cream',
        },
      ],
    },
    {
      type: 'coffee',
      pending: false,
      roaster: 'Little Wolf Coffee Roasters',
      region: 'Kenya',
      roasterLocation: 'Ipswich, MA',
      roastDate: 'September 13th, 2023',
      url: 'https://littlewolf.coffee/collections/coffee/products/kahete-ab',
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
      title: 'Flavors',
      subtitle:
        'Syrups homemade with fresh ingredients and infused into a simple syrup',
      items: [
        { title: 'Apple Pie' },
        { title: 'Pumpkin Spice' },
        { title: 'Butter Pecan' },
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
      <h1 className="text-4xl font-light text-center">October Menu</h1>
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
