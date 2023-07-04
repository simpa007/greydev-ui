import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
