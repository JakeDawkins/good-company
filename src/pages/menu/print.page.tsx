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
      `}</style>

      <div className="min-h-screen bg-neutral-200 flex justify-center p-6 print:p-0 print:bg-white">
        <div className="relative bg-white text-slate w-[210mm] min-h-[297mm] p-[12mm] shadow-lg print:shadow-none print:w-full print:min-h-0 print:p-0">
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

          {/* Espresso drinks + visualizations */}
          {drinksSection && (
            <section className="mt-8">
              <div className="flex items-baseline justify-center gap-2">
                <h2 className="text-lg font-semibold text-darkGreen">
                  {drinksSection.title}
                </h2>
                <span className="text-xs italic text-slate">
                  {drinksSection.subtitle}
                </span>
              </div>
              <DrinkKey colors={DRINK_COLORS} className="mt-3 max-w-md mx-auto" />
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

          {/* Pastries / Flavors / Teas in columns */}
          <div className="mt-10 grid grid-cols-3 gap-8">
            {listSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-base font-semibold text-darkGreen border-b border-sage/60 pb-1">
                  {section.title}
                </h2>
                <ul className="mt-2 space-y-2">
                  {section.items?.map((item) => (
                    <li key={item.title} className="flex items-start gap-2">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={36}
                          height={36}
                          unoptimized
                          className="shrink-0 mt-0.5"
                        />
                      )}
                      <div className="leading-snug">
                        <div className="text-sm font-medium text-darkGreen">
                          {item.title}
                          {item.icon ? (
                            <span className="ml-1">{item.icon}</span>
                          ) : null}
                        </div>
                        {item.subtitle && (
                          <div className="text-xs text-slate">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
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
