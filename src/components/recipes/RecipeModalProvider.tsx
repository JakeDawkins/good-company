import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import RecipeModal from './RecipeModal';
import { getRecipe } from './recipeData';

interface RecipeModalContextValue {
  // Open the inline recipe with this id in a modal. No-op for external or
  // unknown recipes (external recipes link out instead).
  openRecipe: (id: string) => void;
}

const RecipeModalContext = createContext<RecipeModalContextValue | null>(null);

// Provides a single shared recipe modal for its subtree. Wrap any page that
// renders a `MakeItButton` (the menu and the recipes page both do).
export function RecipeModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  const openRecipe = useCallback((id: string) => setOpenId(id), []);
  const close = useCallback(() => setOpenId(null), []);

  const value = useMemo(() => ({ openRecipe }), [openRecipe]);

  const recipe = openId ? getRecipe(openId) : undefined;

  return (
    <RecipeModalContext.Provider value={value}>
      {children}
      {recipe && recipe.type === 'inline' && (
        <RecipeModal recipe={recipe} onClose={close} />
      )}
    </RecipeModalContext.Provider>
  );
}

export function useRecipeModal(): RecipeModalContextValue {
  const ctx = useContext(RecipeModalContext);
  if (!ctx) {
    throw new Error('useRecipeModal must be used within a RecipeModalProvider');
  }
  return ctx;
}
