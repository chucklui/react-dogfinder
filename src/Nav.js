import { NavLink } from "react-router-dom";

/**
 * Navigation bar with links to dog details, home
 * 
 * Props: List of dog data as array of objects
 * 
 * State: None
 * 
 * App -> Nav
 * 
 */
function Nav({ dogs }) {

  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        <h1>Home</h1>
      </NavLink>
      {dogs.map((d,i) => {
        return (<NavLink exact to={`/dogs/${d.name}`} key={i}> <h1>{d.name}</h1> </NavLink>)
      })}
    </nav>
  );
}

export default Nav;
