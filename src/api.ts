import axios from "axios";

const url = "https://www.themealdb.com/api/json/v1/1";

export const fetchAllRecipes = async (category = "") => {
  const endpoint = category
    ? `${url}/filter.php?c=${category}`
    : `${url}/search.php?s=`;
  return await axios.get(endpoint).then((res) => res.data.meals);
};

export const fetchCategories = async () => {
  return await axios
    .get(`${url}/categories.php`)
    .then((res) => res.data.categories);
};

export const fetchRecipeById = async (id: string) => {
  const response = await fetch(`${url}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};
