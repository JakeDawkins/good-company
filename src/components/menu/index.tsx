import Link from 'next/link';

const menuData = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      items: [
        {
          title: 'Holiday Sugar Cookies',
          subtitle:
            'Complete with festive sprinkles and a dash of holiday cheer',
        },
        {
          title: 'Vegan Snickerdoodle Cookies',
          subtitle:
            'A vegan take on a classic cookie, for all of our vegan friend',
        },
      ],
    },
    {
      type: 'coffee',
      pending: true,
      roaster: 'Little Wolf Coffee Roasters',
      region: '',
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
      items: [{ title: 'Mocha' }, { title: 'Brown Sugar Cinnamon' }],
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
      <h1 className="font-light text-center sm:text-3xl md:text-3xl lg:text-4xl">
        🎄 December Menu 🎄
      </h1>
      <p className="mt-4 text-center">
        Every month, we work to develop a menu with seasonal flavors and
        pastries. This menu is a combination of a number of recommendations,
        seasonal influences, and some ideas of our own. All of our pastries and
        coffee flavorings are made in-house with the best ingredients.
      </p>

      <div className="w-24 border-t border-t-black mt-8" />

      <div className="w-full py-12 mt-8 bg-[#356617] text-white rounded-lg flex flex-col items-center px-4 md:px-6">
        <div className="py-3">
          <p className="uppercase">Holiday Special</p>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mt-1">
            S'mores Mocha with Toasted Marshmallow
          </h2>
          <p className="max-w-[600px] text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed pt-4">
            We&apos;re celebrating the start of the holiday season with a
            special latte. We&apos;ve infused oatmilk with graham crakers, and
            when combined with our housemade mocha syrup, a hint of liquid
            smoke, and topped with a toasted marshmallow, you&apos;ll be begging
            for s&apos;more. <strong>Preorder before Dec 8th</strong>
          </p>
          <div className="flex flex-row justify-start w-full mt-4">
            <Link
              className="flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#356617] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#bd1e59] disabled:pointer-events-none disabled:opacity-50"
              href="https://forms.gle/Ar3iYZfK9JA7K47q8"
              target="_blank"
            >
              Preorder Now
            </Link>
          </div>
        </div>
      </div>

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
