import { useEffect, useState } from "react";
const SingleMeal = () => {
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("meal"))
  );

  useEffect(() => {
    let storedMeal = JSON.parse(localStorage.getItem("meal"));
    if (content !== storedMeal) {
      setContent(storedMeal);
    }
  }, [content]);

  return (
    <article className="single__meal">
      <h1 className="meal__title">{content[0]}</h1>
      <figure className="single__meal_img">
        <img src={content[1]} alt={content[0]} />
      </figure>
      <section className="single__meal_ingredients">
        <h1>Ingredients</h1>
        <ul className="ingredients__list">
          {content[3]?.map((e, i) => (
            <li key={i}>
              <span className="amount">{e.amount}</span> {e.ingredient}
            </li>
          ))}
        </ul>
      </section>
      <section className="single__meal_details">
        <h1>preparation</h1>
        <ol className="preparation">
          {content[2]
            ?.split(". ")
            .map((a, i) => (a !== "" ? <li key={i}>{a}</li> : ""))}
        </ol>
      </section>
    </article>
  );
};
export default SingleMeal;
