import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/LStorage">LStorage</Link>
    </nav>
  );
};
