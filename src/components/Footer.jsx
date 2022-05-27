import { Link } from "react-router-dom";
const footer = () => {
  return (
    <section className="footer">
      <div className="footer-title">Random Meal Of The Day</div>
      <ul className="footer-links">
        <li>
          <Link to="/">Meals</Link>
        </li>
        <li>
          <Link to="/search">Search Meals</Link>
        </li>
      </ul>
    </section>
  );
};
export default footer;
