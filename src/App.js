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
      <Home />  
      </Route>
      <Route path="/catalog" >
        <Catalog/>
      </Route>
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
