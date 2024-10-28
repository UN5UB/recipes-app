declare interface RecipeItemProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

declare interface RecipePageProps {
  strInstructions: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
}

declare interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  idCategory: string;
  strCategory: string;
}

declare interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: SetStateAction<number>) => void;
}

declare interface MainItemProps {
  currentRecipes: RecipeItemProps[];
  saveRecipe: (recipe: RecipeItemProps) => void;
}

declare interface SearchProps {
  onChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

declare interface SavedItemsProps {
  removeRecipe: (recipeId: string) => void;
  savedRecipes: RecipeItemProps[];
}
