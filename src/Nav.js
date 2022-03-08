import { NavLink } from "react-router-dom";

//array of {}
function Nav({ dogs }) {
  console.log('SSSS', dogs);
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {dogs.map((d,i) => {
        return <NavLink exact to={`/dogs/${d.name}`} key={i}/>
      })}
    </nav>
  );
}

export default Nav;
