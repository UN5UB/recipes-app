import { Link } from "react-router-dom";

const MainItem = ({ currentRecipes, saveRecipe }: MainItemProps) => {
  return (
    <>
      {currentRecipes?.length
        ? currentRecipes.map((item) => (
            <div
              key={item.idMeal}
              className="border border-gray-300 p-4 rounded shadow-sm"
            >
              <img
                className="block rounded w-96 h-auto"
                src={item.strMealThumb}
                alt="thumbnail"
              />
              <h3 className="text-[32px] max-w-[420px] font-semibold text-gray-700">
                {item.strMeal}
              </h3>
              <div>
                <Link
                  to={`/recipe/${item.idMeal}`}
                  className="flex justify-center items-center rounded font-semibold text-white bg-red-600 h-10 hover:bg-red-700 mt-2"
                >
                  View Recipe
                </Link>
                <button
                  onClick={() => saveRecipe(item)}
                  className="flex justify-center items-center font-semibol border-green-400 border-[2px] mt-2 p-2 w-full rounded-lg"
                >
                  Save ✅
                </button>
              </div>
            </div>
          ))
        : "No recipes found"}
    </>
  );
};

export default MainItem;
