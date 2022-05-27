import { createContext, useState, useEffect } from "react";

const MealContext = createContext([]);

export const MealProvider = ({ children }) => {
  const [singleMeal, setSingleMeal] = useState([]);
  useEffect(() => {
    async function saveD() {
      let response = await singleMeal;

      if (response.length === 4) {
        localStorage.setItem("meal", JSON.stringify(response));
      }
    }
    saveD();
  }, [singleMeal]);
  return (
    <MealContext.Provider value={{ singleMeal, setSingleMeal }}>
      {children}
    </MealContext.Provider>
  );
};
export default MealContext;
