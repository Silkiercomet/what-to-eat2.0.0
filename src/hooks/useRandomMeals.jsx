import { useState, useEffect } from "react";

const useRandomMeal = (arrayLength = 12) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getIngredients = (arr) => {
    let y = [],
      i = 1;
    while (
      arr[`strIngredient${i}`] !== null &&
      arr[`strIngredient${i}`] !== ""
    ) {
      if (i > 30) {
        break;
      }
      y = [
        ...y,
        { ingredient: arr[`strIngredient${i}`], amount: arr[`strMeasure${i}`] }
      ];
      i++;
    }

    return y;
  };

  useEffect(() => {
    let array = new Array(12);

    const fetchItems = async () => {
      try {
        let response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        if (!response.ok) throw Error("did not receive expected data");
        let listItems = await response.json();
        // 1 title, 2 image, 3 instructions, 4 ingredients

        return [
          listItems?.meals[0]?.strMeal,
          listItems?.meals[0]?.strMealThumb,
          listItems?.meals[0]?.strInstructions,
          getIngredients(listItems?.meals[0])
        ];
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    setLoading(true);
    for (let i = 0; i < array.length; i++) {
      array[i] = fetchItems();
    }
    setData(array);
    setTimeout(() => setLoading(false), 3000);

    return () => setData([]);
  }, []);

  const reFetch = (url) => {
    let x = `https://www.themealdb.com/api/json/v1/1/search.php?s=${url}`;
    setError(null);
    const fetchItems = async () => {
      try {
        setLoading(true);
        let response = await fetch(x);
        if (!response.ok) throw Error("did not receive expected data");
        let listItems = await response.json();
        // 1 title, 2 image, 3 instructions, 4 ingredients

        return [
          listItems?.meals[0]?.strMeal,
          listItems?.meals[0]?.strMealThumb,
          listItems?.meals[0]?.strInstructions,
          getIngredients(listItems?.meals[0])
        ];
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    setData([fetchItems()]);
  };

  return { data, error, loading, reFetch };
};

export default useRandomMeal;
