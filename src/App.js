import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";
const BASE_URL = 'localhost:5001/dogs';


// async function GetDogs(){

// }

// GetDogs();

async function App() {

  const [dogs, setDogs] = useState([]);
  try{
    const resp = await axios.get(BASE_URL);
    setDogs(resp.data.dogs);
  }catch(err){
    console.log('err', err);
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