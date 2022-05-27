import { Link } from "react-router-dom";
import { useRef } from "react";
import Card from "../components/Card";
import useRandomMeals from "../hooks/useRandomMeals";
import { useSingleMeal } from "../hooks/useSingleMeal";

const SearchMeal = () => {
  const inputRef = useRef("");
  const { data, error, loading, reFetch } = useRandomMeals(1);
  const { setSingleMeal } = useSingleMeal();
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchTerm = inputRef.current.value.replace(" ", "-");
    reFetch(searchTerm);
    inputRef.current.value = "";
  };

  return (
    <section className="search__meal">
      <h1>Search Meal by Name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" ref={inputRef} />
        <button>search</button>
      </form>
      {loading && <p>loading...</p>}
      {error && <p>try another meal or be more specific</p>}
      <menu className="single__search">
        {
          <Link to="/single" onClick={() => setSingleMeal(data[0])}>
            <Card title={data[0]} />
          </Link>
        }
      </menu>
    </section>
  );
};
export default SearchMeal;
