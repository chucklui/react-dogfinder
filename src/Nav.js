import { NavLink } from "react-router-dom";
import DogDetails from "./DogDetails";

function Nav() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      <NavLink exact to="/dogs/whiskey">
        Whiskey
      </NavLink>
      <NavLink exact to="/dogs/duke">
        Duke
      </NavLink>
      <NavLink exact to="/dogs/perry">
        Perry
      </NavLink>
    </nav>
  );
}

export default Nav;
