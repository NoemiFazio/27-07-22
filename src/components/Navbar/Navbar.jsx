import "./index.css";
import logo from "./logos.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} className="navbar-logo" alt="logo" />
      <ul className="Navbar__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Friend List</a>
        </li>
        <li>
          <a href="/">Message list</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
