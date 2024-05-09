import { useEffect, useState } from "react";
import CustomProgressBar from "./components/CustomProgressBar";

function App() {
  const [dynamicW, setDynamicW] = useState(0);
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setDynamicW((prev) => (prev <= 100 ? prev + 1 : clearInterval(interval)));
    }, 100);
  }, []);
  return (
    <>
      <CustomProgressBar width={dynamicW}  />
    </>
  );
}

export default App;
