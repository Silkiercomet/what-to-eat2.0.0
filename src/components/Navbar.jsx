import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [check, setCheck] = useState(false);
  const toggle = () => setCheck(!check);
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" checked={check} />
      <div className="nav-header">
        <div className="nav-title">Random Meal Of The Day</div>
      </div>
      <div className="nav-btn" onClick={toggle}>
        <label>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links" onClick={toggle}>
        <Link to="/">Meals</Link>
        <Link to="/search">Search Meals</Link>
      </div>
    </nav>
  );
};
export default Navbar;
