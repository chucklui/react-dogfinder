import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";

function App() {
  const BASE_URL = "http://localhost:5001/dogs";

  console.log("response");
  const [dogs, setDogs] = useState([]);
  const [hasFetchedDogs, setHasFetchedDogs] = useState(false);

  async function getDogs() {
    const resp = await axios.get(BASE_URL);
    console.log("resp", resp.data);
    setHasFetchedDogs(true);
    setDogs(resp.data.dogs);
  }

  if (!hasFetchedDogs) {
    getDogs();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route exact path="/dogs">
            <DogList />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
