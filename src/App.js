import { useEffect, useState } from "react";
import Home from "./components/home";

function App() {
  const [render, setRender] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/test")
      .then((r) => r.json())
      .then(setRender);
  }, []);

  console.log(render);

  return <Home />;
}

export default App;
