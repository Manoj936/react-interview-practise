import { useEffect, useState } from "react";
import "./App.css";
import CustomThrottle from "./hooks/CustomThrottle";

function App() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    }) 
  };


  CustomThrottle(handleResize , 1000)

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <h2>
        Dimension : Width = {dimension.width} Height={dimension.height}
      </h2>
    </>
  );
}

export default App;
