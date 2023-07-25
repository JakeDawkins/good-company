const menuData = {
  sections: [
    {
      title: 'Espresso Drinks',
      subtitle: 'Available with almond, dairy, oat, and "Myracle" milk',
      order: 1,
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
      order: 2,
      items: [
        { title: 'Cinnamon Dolce' },
        { title: 'Pistachio' },
        { title: 'Vanilla Bean' },
      ],
    },
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      order: 0,
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
      title: 'Assorted Teas',
      subtitle: '',
      order: 2,
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

      {menuData.sections.map((section) => {
        return (
          <div key={section.title} className="mt-8 w-full">
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <p className="text-sm">{section.subtitle}</p>
            {section.items.map((item) => {
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
    </div>
  );
};

export default Menu;
