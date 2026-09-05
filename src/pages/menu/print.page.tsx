import Head from 'next/head';
import Image from 'next/image';
import type { ReactElement, ReactNode } from 'react';

import {
  DRINK_COLORS,
  DRINKS,
  DrinkDiagram,
  DrinkKey,
} from '../../components/menu/drinks';
import {
  DrinksSection,
  ListSection,
  MenuItem,
  menuData,
  menuTitle,
} from '../../components/menu/menuData';

type PageWithLayout = ((props: unknown) => ReactElement) & {
  getLayout?: (page: ReactNode) => ReactNode;
};

// Sections rendered as compact item lists (everything except the coffee block
// and the drinks visualization, which get their own treatment).
const listSections = menuData.sections.filter(
  (section): section is ListSection => !section.type,
);
const drinksSection = menuData.sections.find(
  (section): section is DrinksSection => section.type === 'drinks',
);
// Pastries get a full-width row at the top; everything else goes in columns.
const pastriesSection = listSections.find(
  (section) => section.title === 'Pastries',
);
const columnSections = listSections.filter(
  (section) => section.title !== 'Pastries',
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="text-base font-semibold text-darkGreen border-b border-sage/60 pb-1">
    {children}
  </h2>
);

const ItemEntry = ({ item }: { item: MenuItem }) => (
  <div className="flex items-start gap-2">
    {item.image && (
      <Image
        src={item.image}
        alt={item.title}
        width={40}
        height={40}
        unoptimized
        className="shrink-0 mt-0.5"
      />
    )}
    <div className="leading-snug">
      <div className="text-sm font-medium text-darkGreen">
        {item.title}
        {item.icon ? <span className="ml-1">{item.icon}</span> : null}
      </div>
      {item.subtitle && (
        <div className="text-xs text-slate">{item.subtitle}</div>
      )}
    </div>
  </div>
);

const MenuPrint: PageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{`${menuTitle} | Print`}</title>
      </Head>
      <style jsx global>{`
        @page {
          size: A4;
          margin: 12mm;
        }
        @media print {
          html,
          body {
            background: #ffffff;
          }
        }
        /* Force background colors (legend swatches, badges) to print. */
        .menu-sheet,
        .menu-sheet * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      `}</style>

      <div className="min-h-screen bg-neutral-200 flex justify-center p-6 print:p-0 print:bg-white">
        <div className="menu-sheet relative bg-white text-slate w-[210mm] min-h-[297mm] p-[12mm] shadow-lg print:shadow-none print:w-full print:min-h-0 print:p-0">
          <button
            type="button"
            onClick={() => window.print()}
            className="print:hidden absolute right-4 top-4 rounded-md bg-darkGreen px-3 py-1.5 text-sm font-medium text-white hover:opacity-90"
          >
            Print
          </button>

          <h1 className="text-center text-4xl font-light text-darkGreen">
            {menuTitle}
          </h1>

          {/* Pastries — full-width row */}
          {pastriesSection && (
            <section className="mt-6">
              <SectionHeading>{pastriesSection.title}</SectionHeading>
              <div className="mt-3 grid grid-cols-3 gap-6">
                {pastriesSection.items.map((item) => (
                  <ItemEntry key={item.title} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Espresso drinks + visualizations */}
          {drinksSection && (
            <section className="mt-8">
              <div className="flex items-center justify-between gap-4 border-b border-sage/60 pb-2">
                <div>
                  <h2 className="text-base font-semibold text-darkGreen">
                    {drinksSection.title}
                  </h2>
                  <p className="text-xs italic text-slate">
                    {drinksSection.subtitle}
                  </p>
                </div>
                <DrinkKey colors={DRINK_COLORS} className="shrink-0" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-x-10 gap-y-5 max-w-xl mx-auto">
                {DRINKS.map((drink) => (
                  <div
                    key={drink.id}
                    className="flex flex-col items-center text-center"
                  >
                    <DrinkDiagram
                      recipe={drink}
                      colors={DRINK_COLORS}
                      className="w-full"
                    />
                    <span className="mt-1 text-sm font-medium text-darkGreen leading-tight">
                      {drink.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Flavors / Teas in columns */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            {columnSections.map((section) => (
              <section key={section.title}>
                <SectionHeading>{section.title}</SectionHeading>
                <ul className="mt-2 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <ItemEntry item={item} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Render bare (no site nav/footer) so the sheet fits A4 cleanly.
MenuPrint.getLayout = (page) => page;

export default MenuPrint;
