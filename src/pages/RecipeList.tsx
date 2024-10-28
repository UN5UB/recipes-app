import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "../api";
import { SetStateAction, useState } from "react";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import MainItem from "../components/MainItem";
import Search from "../components/Search";
import useDebounce from "../hooks/useDebounce";

const RecipeList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const { data: recipes } = useQuery({
    queryKey: ["allRecipes", selectedCategory],
    queryFn: () => fetchAllRecipes(selectedCategory),
  });

  const debounceValue = useDebounce(searchValue, 400);

  const filteredRecipes = recipes?.filter((recipe: RecipeItemProps) =>
    recipe.strMeal.toLowerCase().includes(debounceValue.toLowerCase())
  );

  const totalPages = Math.ceil((filteredRecipes?.length || 0) / recipesPerPage);

  const currentRecipes = filteredRecipes?.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const saveRecipe = (recipe: RecipeItemProps) => {
    const savedRecipes = JSON.parse(
      localStorage.getItem("savedRecipes") || "[]"
    );
    savedRecipes.push(recipe);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    alert("Recipe saved!");
  };

  return (
    <div className="p-4">
      <h2 className="text-[54px] font-bold text-gray-800 mb-4 text-center">
        All Recipes 🍽️
      </h2>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        idCategory=""
        strCategory=""
      />
      <Search onChangeSearchInput={onChangeSearchInput} />
      <div className="flex flex-wrap justify-center gap-4">
        <MainItem currentRecipes={currentRecipes} saveRecipe={saveRecipe} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default RecipeList;
