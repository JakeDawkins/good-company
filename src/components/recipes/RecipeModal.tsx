import Image from 'next/image';
import { useEffect } from 'react';

import type { InlineRecipe } from './recipeData';

interface RecipeModalProps {
  recipe: InlineRecipe;
  onClose: () => void;
}

// Modal for inline recipes. Full-screen on mobile, a centered card on larger
// screens. External recipes never reach this — they link straight out.
const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex sm:items-center sm:justify-center sm:p-4"
      style={{ backgroundColor: 'rgba(55, 81, 77, 0.45)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={recipe.title}
    >
      <div
        className="relative flex h-full w-full flex-col overflow-y-auto bg-cream sm:h-auto sm:max-h-[85vh] sm:max-w-lg sm:rounded-lg sm:shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate transition-colors hover:bg-warmGray hover:text-darkGreen"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="px-6 pb-8 pt-8 sm:px-8">
          <div className="flex items-center gap-3">
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
            <h2 className="pr-8 text-2xl font-semibold text-darkGreen">
              {recipe.title}
            </h2>
          </div>

          {recipe.blurb && (
            <p className="mt-3 text-slate">{recipe.blurb}</p>
          )}

          {(recipe.yield || recipe.time) && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate">
              {recipe.yield && (
                <span>
                  <span className="font-semibold text-darkGreen">Yield:</span>{' '}
                  {recipe.yield}
                </span>
              )}
              {recipe.time && (
                <span>
                  <span className="font-semibold text-darkGreen">Time:</span>{' '}
                  {recipe.time}
                </span>
              )}
            </div>
          )}

          <h3 className="mt-6 mb-2 text-lg font-semibold text-darkGreen">
            Ingredients
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-slate marker:text-sage">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-darkGreen">
            Instructions
          </h3>
          <ol className="list-decimal space-y-2 pl-5 text-slate marker:font-semibold marker:text-sage">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
