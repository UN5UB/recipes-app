import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../api";
import { FC } from "react";

const RecipeDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Recipe not found</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-[54px] font-bold text-gray-800 mb-4 text-center">
        {data.strMeal}
      </h2>
      <img
        src={data.strMealThumb}
        alt={data.strMeal}
        className="rounded-lg shadow-md mb-6 w-full h-auto"
      />
      <div className="mb-6">
        <h3 className="text-[28px] font-semibold text-gray-700 mb-3">
          Ingredients
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .map((num) => ({
              ingredient: data[`strIngredient${num}`],
              measure: data[`strMeasure${num}`],
            }))
            .filter((item) => item.ingredient)
            .map((item, index) => (
              <li key={index}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3 className="text-[28px] font-semibold text-gray-700 mb-3">
          Instructions
        </h3>
        <p className="text-gray-600">{data.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
