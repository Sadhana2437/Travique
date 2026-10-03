import { Link, NavLink } from "react-router-dom";
import { Compass } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Compass size={26} />
        <span>Travique</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/planner">AI Planner</NavLink>
        <NavLink to="/marketplace">Marketplace</NavLink>
      </div>

      <Link to="/login" className="nav-button">
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;