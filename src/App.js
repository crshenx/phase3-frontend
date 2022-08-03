// import { Routes } from "react-router";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import "./App.css";
import Catalog from "./Components/Catalog.js";
import { Paper } from "@mui/material";
// import Image from "./img/main.jpg";

function App() {
  const [render, setRender] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dresses")
      .then((r) => r.json())
      .then(setRender);
  }, []);

  console.log(render);

  const styles = {
    paperContainer: {
      backgroundImage: `url("https://i.imgur.com/ehETORR.png")`,
    },
  };

  return (
    <Paper style={styles.paperContainer}>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="Catalog" element={<Catalog render={render} />} />
        {/* <Route path={"about"} element={<About />} /> */}
      </Routes>
    </Paper>
  );
}

export default App;
