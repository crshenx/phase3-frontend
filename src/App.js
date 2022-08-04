// import { Routes } from "react-router";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import About from "./Components/About.js";
import "./App.css";
import Catalog from "./Components/Catalog.js";
import { Paper } from "@mui/material";
// import { ShoppingCart } from "@mui/icons-material";
// import Image from "./img/main.jpg";
import Cart from "./Components/ShoppingCart";

function App() {
  const [render, setRender] = useState([]);
  const [renderCart, setRenderCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/dresses")
      .then((r) => r.json())
      .then(setRender);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/cart")
      .then((r) => r.json())
      .then(setRenderCart);
  }, []);

  function handleCartRender() {
    fetch("http://localhost:9292/cart")
      .then((r) => r.json())
      .then(setRenderCart);
  }

  console.log(render);

  const styles = {
    paperContainer: {
      backgroundImage: `url("https://i.imgur.com/ehETORR.png")`,
    },
  };

  function handleSearchChange(e) {
    const searchChoice = e.target.innerText;
    setSearch(searchChoice);
  }

  const searchDress = render.filter((dress) => dress.designer_name === search);
  console.log(searchDress);

  return (
    <Paper style={styles.paperContainer}>
      <NavBar handleSearchChange={handleSearchChange} render={render} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="Catalog"
          element={
            <Catalog
              render={searchDress.length < 1 ? render : searchDress}
              handleCartRender={handleCartRender}
              handleChange={handleSearchChange}
            />
          }
        />
        <Route
          path="Cart"
          element={
            <Cart renderCart={renderCart} handleCartRender={handleCartRender} />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </Paper>
  );
}

export default App;
