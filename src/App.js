import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SingleMeal from "./pages/SingleMeal";
import SearchMeal from "./pages/SearchMeal";
import ScrollToTop from "./components/ScrollToTop";
import "./styles.css";
import { MealProvider } from "./Context/SingleMealContext";
export default function App() {
  return (
    <HashRouter>
      <MealProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/search" element={<SearchMeal />} />
              <Route path="/single" element={<SingleMeal />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </MealProvider>
    </HashRouter>
  );
}
