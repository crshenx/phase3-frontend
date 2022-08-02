import { useEffect, useState } from "react";
<<<<<<< HEAD
import Home from "./components/home";
=======
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import './App.css';

>>>>>>> 5ae0fff7064d00663369dc2921db84779192db21

function App() {
  const [render, setRender] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/test")
      .then((r) => r.json())
      .then(setRender);
  }, []);

  console.log(render);

<<<<<<< HEAD
  return <Home />;
=======
  return (
    <div>
      <NavBar />
      <Home/>
    </div>
  )
>>>>>>> 5ae0fff7064d00663369dc2921db84779192db21
}

export default App;
