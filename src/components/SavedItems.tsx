import { Link } from "react-router-dom";

const SavedItems = ({ removeRecipe, savedRecipes }: SavedItemsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {savedRecipes.length > 0 ? (
        savedRecipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="border border-gray-300 p-4 rounded shadow-sm"
          >
            <img
              className="block rounded w-96 h-auto"
              src={recipe.strMealThumb}
              alt="thumbnail"
            />
            <h3 className="text-[32px] max-w-[420px] font-semibold text-gray-700">
              {recipe.strMeal}
            </h3>
            <div>
              <Link
                to={`/recipe/${recipe.idMeal}`}
                className="flex justify-center items-center rounded font-semibold text-white bg-red-600 h-10 hover:bg-red-700 mt-2"
              >
                View Recipe
              </Link>
              <button
                onClick={() => removeRecipe(recipe.idMeal)}
                className="flex justify-center items-center font-semibol border-red-400 border-[2px] mt-2 p-2 w-full rounded-lg"
              >
                Remove ❌
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No saved recipes found.</p>
      )}
    </div>
  );
};

export default SavedItems;
