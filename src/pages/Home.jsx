import { Link } from "react-router-dom";
import Card from "../components/Card";
import Slideshow from "../components/SlideShow";
import useRandomMeals from "../hooks/useRandomMeals";
import { useSingleMeal } from "../hooks/useSingleMeal";
export default function Home() {
  const { data, error, loading } = useRandomMeals();
  const { setSingleMeal } = useSingleMeal();
  if (loading)
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );
  if (error) return <p>ups something went wrong...{error.message}</p>;

  return (
    <>
      <h1 className="hero__h1">prepare an exotic meal</h1>
      <Slideshow meals={data.slice(0, 4)} />
      <div className="mealreel">
        <h3 className="hero__h3">FoodReel</h3>
        <p>click in a meal to learn how to make it</p>
      </div>
      <menu className="grid">
        {data.slice(4, data.length).map((title, i) => (
          <Link key={i} to="single" onClick={() => setSingleMeal(title)}>
            <Card title={title} />
          </Link>
        ))}
      </menu>
    </>
  );
}
