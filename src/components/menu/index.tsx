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
          title: 'Vegan Coffee Cake',
          subtitle:
            'This cake is the perfect side dish for your morning cup of coffee!  What more could you want from a dessert?',
        },
        {
          title: 'Lemon Blueberry Cupcakes',
          subtitle:
            'If the answer to “what more could you want from a dessert?” Was “something light, fruity, and tangy”, then boy do I have good news for you! These lemon blueberry cupcakes are perfectly balanced, refreshing, and topped with a blueberry compote and lemon buttercream.',
        },
      ],
    },
    {
      type: 'coffee',
      pending: false,
      roaster: 'Bridge City Coffee',
      region: 'Ethiopia',
      roasterLocation: 'Greenville, SC',
      roastDate: 'March 1st, 2024',
      url: 'https://www.bridgecity.coffee/store/p/ethiopia-koke-yirgacheffe-honey-process',
    },
    {
      title: 'Seasonal Drinks',
      subtitle:
        'A little something special for the season, available hot or iced',
      items: [
        {
          title: 'Blueberry Latte',
          // subtitle: 'A latte served with a rose syrup and edible rose petals',
          // icon: <span className="h-4 w-4 inline">🌹</span>,
        },
        {
          title: 'Vanilla Bean Latte',
          // subtitle:
          //   'A latte served with raspberry syrup and whipped cream upon request',
          // icon: (
          //   <Image
          //     src={Raspberry}
          //     width={20}
          //     height={20}
          //     alt="raspberry"
          //     className="inline"
          //   />
          // ),
        },
        {
          title: 'Lavender Latte',
          // subtitle: 'Traditional matcha latte',
          // icon: <span className="h-4 w-4 inline">🍵</span>,
        },
      ],
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
      items: [
        { title: 'Ceremonial Grade Matcha' },
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
        March Menu
      </h1>
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
                  className={`border-l pl-2 border-black mt-2`}
                >
                  <h4 className="text-md">
                    {item.title}
                    {/* {item?.icon ? item.icon : null} */}
                  </h4>
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
