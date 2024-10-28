import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api";

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  const { data } = useQuery({
    queryKey: ["allCategories"],
    queryFn: fetchCategories,
  });

  return (
    <div className="flex justify-center gap-2 flex-wrap my-3">
      <button
        onClick={() => setSelectedCategory("")}
        className={`text-white p-2 rounded-md ${
          selectedCategory === "" ? "bg-red-600" : "bg-black"
        }`}
      >
        All
      </button>
      {data?.length
        ? data.map((category: CategoriesProps) => (
            <button
              key={category.idCategory}
              onClick={() => setSelectedCategory(category.strCategory)}
              className={`text-white p-2 rounded-md ${
                selectedCategory === category.strCategory
                  ? "bg-red-600"
                  : "bg-black"
              }`}
            >
              {category.strCategory}
            </button>
          ))
        : "Categories not found"}
    </div>
  );
};

export default Categories;
