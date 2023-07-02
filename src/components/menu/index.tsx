const menuData = {
  sections: [
    {
      title: 'Pastries',
      subtitle: 'Pastries baked in-house for your enjoyment.',
      order: 0,
      items: [
        {
          title: 'Shortbread cookies',
          subtitle:
            'Inspired by Ted Lasso, these shortbread cookies are made with four simple ingredients, and pair perfectly with a cup of coffee',
        },
        {
          title: 'Vegan Coffee Cake',
          subtitle:
            'A delicious vegan coffee cake, which ironically has no coffee in it. ',
        },
      ],
    },
    {
      title: 'Espresso Drinks',
      subtitle: 'Available with oat milk, almond milk, mylk, or dairy',
      order: 1,
      items: [
        { title: 'Latte', subtitle: 'Hot/Iced' },
        { title: 'Cappuccino' },
        { title: 'Espresso' },
        { title: 'Cold Foam Iced Latte' },
      ],
    },
    {
      title: 'Flavors',
      subtitle:
        'Syrups homemade with fresh ingredients and infused into a simple syrup',
      order: 2,
      items: [
        { title: 'Cinnamon Dolce' },
        { title: 'Vanilla Cardamom' },
        { title: 'Pistachio' },
      ],
    },
    {
      title: 'Assorted Teas',
      subtitle: '',
      order: 2,
      items: [
        { title: 'Hibiscus Berry' },
        { title: 'Strawberry' },
        { title: 'Afternoon Tea (black)' },
        { title: 'Lemon (green)' },
        { title: 'Lemon (herbal)' },
        { title: 'Lemon & Ginger' },
      ],
    },
  ],
};

const Menu = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-light border-b border-black">Menu</h2>
      {menuData.sections.map((section) => {
        return (
          <div key={section.title} className="mt-4">
            <h3 className="text-xl font-light">{section.title}</h3>
            <p className="text-sm">{section.subtitle}</p>
            {section.items.map((item) => {
              return (
                <div
                  key={item.title}
                  className="mt-2 border-l pl-2 border-black"
                >
                  <h4 className="text-md">{item.title}</h4>
                  <p className="text-xs">{item.subtitle}</p>
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
