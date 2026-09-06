import Image from 'next/image';

import MakeItButton from './MakeItButton';
import { RecipeModalProvider } from './RecipeModalProvider';
import { recipeCategories, recipes } from './recipeData';

const Recipes = () => {
  return (
    <RecipeModalProvider>
      <div className="flex flex-col items-center px-4 py-2 md:py-8">
        <h1 className="mb-2 text-center font-light text-darkGreen sm:text-3xl md:text-4xl lg:text-5xl">
          Recipes
        </h1>
        <p className="mt-6 mb-10 max-w-2xl text-center leading-relaxed text-slate">
          Want to make something from our menu at home? Here are the recipes
          behind our coffee syrups and pastries. Some are ours to share; others
          link out to the sources we love.
        </p>

        {recipeCategories.map((category) => {
          const items = recipes.filter(
            (recipe) => recipe.category === category
          );
          if (items.length === 0) return null;

          return (
            <div key={category} className="mt-12 w-full max-w-2xl">
              <h2 className="mb-4 text-2xl font-semibold text-darkGreen">
                {category}
              </h2>
              <div className="space-y-3">
                {items.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="flex items-center gap-3 py-2"
                  >
                    {recipe.image && (
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        width={52}
                        height={52}
                        unoptimized
                        className="shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-darkGreen">
                        {recipe.title}
                      </h3>
                      {recipe.blurb && (
                        <p className="mt-1 text-sm text-slate">
                          {recipe.blurb}
                        </p>
                      )}
                    </div>
                    <MakeItButton recipeId={recipe.id} className="shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </RecipeModalProvider>
  );
};

export default Recipes;
