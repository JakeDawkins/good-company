import Link from 'next/link';

import { useRecipeModal } from './RecipeModalProvider';
import { getRecipe } from './recipeData';

const buttonClasses =
  'inline-flex items-center gap-1 rounded-full border border-sage px-3 py-1 text-xs font-semibold uppercase tracking-wide text-darkGreen transition-colors hover:bg-darkGreen hover:text-white';

// Trigger for a recipe. Inline recipes open the modal; external recipes link
// straight out to the source site.
const MakeItButton = ({
  recipeId,
  className = '',
}: {
  recipeId: string;
  className?: string;
}) => {
  const { openRecipe } = useRecipeModal();
  const recipe = getRecipe(recipeId);

  if (!recipe) return null;

  if (recipe.type === 'external') {
    return (
      <Link
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClasses} ${className}`}
        title={`Recipe on ${recipe.source}`}
      >
        Make it <span aria-hidden="true">↗</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => openRecipe(recipe.id)}
      className={`${buttonClasses} ${className}`}
    >
      Make it
    </button>
  );
};

export default MakeItButton;
