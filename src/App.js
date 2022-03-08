import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DogList from "./DogList";
import FilterDogs from "./FilterDogs";
import Nav from "./Nav";
const BASE_URL = "http://localhost:5001/dogs";

/**
 * App
 * 
 * Props: None
 * 
 * State: 
 *  -dogs: list of dog data as:
 *  [
      {
        "name": String,
        "age": Int,
        "src": String,
        "facts": []
      },
      ...
    ]
 * 
 * 
 * App -> Nav/DogList/DogDetails
 */
function App() {
  const [dogs, setDogs] = useState(null);

  async function getDogs() {
    const resp = await axios.get(BASE_URL);
    let dogInformation = resp.data;
    setDogs(dogInformation);
  }

  if (!dogs) {
    getDogs();
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Router>
        <Nav dogs={dogs} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>
          <Route exact path="/dogs/:name">
            <FilterDogs dogs={dogs}/>
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;