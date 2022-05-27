import { Link } from 'react-router-dom';
import { useSingleMeal } from "../hooks/useSingleMeal";
import useMeal from "../hooks/useMeal"

const MealSlide = ({meal}) => {
  
  const { setSingleMeal } = useSingleMeal();
  const content = useMeal(meal)
  const lettersLength = window.innerWidth > 600 ? 720 : 150

  return(
  <section className="slideMeal">

    <figure>
      <img src={content[1]} alt="meal" className="img__slide" />
    </figure>
    <article>
      <div>
      <h1>{content[0]}</h1>
      <p>preparation: {content[2]?.slice(0,lettersLength)}... <Link to="single" onClick={() => setSingleMeal(meal)}>read more</Link></p>
      </div>
    </article>
  </section>)
}
export default MealSlide