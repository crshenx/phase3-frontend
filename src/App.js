import { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import './App.css';


function App() {
  const [render, setRender] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/test")
      .then((r) => r.json())
      .then(setRender);
  }, []);

  console.log(render);

  return (
    <div>
      <NavBar />
      <Home/>
    </div>
  )
}

export default App;
