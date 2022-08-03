import { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Catalog from './Components/Catalog.js'


function App() {
  const [render, setRender] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dresses")
      .then((r) => r.json())
      .then(setRender);
  }, []);

  console.log(render);

  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <div>
      <Switch>
      <Route path="/" >
      <Catalog render={render}/>  
      </Route>
      <Route path="/catalog" >
        <Home/>
      </Route>
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
