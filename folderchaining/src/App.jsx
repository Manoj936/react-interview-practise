import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { data } from "../data";
import Tree from "./components/Tree";

function App() {
  const [fileStr, setFileStr] = useState(data);

  return (
    <>
      <Tree data={fileStr} setFile={setFileStr}  />
    </>
  );
}

export default App;
