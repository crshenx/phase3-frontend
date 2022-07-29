import { useEffect, useState } from "react";

function App() {
  const [render, setRender] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/test")
      .then((r) => r.json())
      .then(setRender);
  }, []);

  console.log(render);

  return <div className="App">{render.message}</div>;
}

export default App;
