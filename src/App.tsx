import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import SavedRecipes from "./pages/SavedRecipes";
import { FC } from "react";

const App: FC = () => {
  return (
    <Router>
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Recipes 🍕</h1>
        <nav className="space-x-4">
          <Link to="/" className=" hover:underline">
            All Recipes 🍔
          </Link>
          <Link to="/saved" className=" hover:underline">
            Saved Recipes ✅
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/saved" element={<SavedRecipes />} />
      </Routes>
    </Router>
  );
};

export default App;
