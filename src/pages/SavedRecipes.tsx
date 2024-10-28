import { FC, useEffect, useState } from "react";
import SavedItems from "../components/SavedItems";

const SavedRecipes: FC = () => {
  const [savedRecipes, setSavedRecipes] = useState<any[]>([]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    setSavedRecipes(recipes);
  }, []);

  const removeRecipe = (idMeal: string) => {
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.idMeal !== idMeal
    );
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div className="p-4">
      <h2 className="text-[54px] font-bold text-gray-800 mb-4 text-center">
        Saved Recipes 💾
      </h2>
      <SavedItems savedRecipes={savedRecipes} removeRecipe={removeRecipe} />
    </div>
  );
};

export default SavedRecipes;
