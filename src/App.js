import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
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
  

  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    const resp = await axios.get(BASE_URL);

    let dogInformation = resp.data;
    setDogs(dogInformation);
  }

  if (dogs.length === 0) {
    getDogs();
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails dogs={dogs} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
