import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseCustomEffect from "./hooks/UseCustomEffect";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [counter , setCounter] = useState(0);
  const [counter2 , setCounter2] = useState(0);
  const getPosts = () => {
    fetch(apiUrl)
      .then((resp) => {return resp.json()})
      .then((data) => console.log(data)) 
      .catch((e) => console.log(e));
  };
  UseCustomEffect(() => {
    getPosts();
  },[counter2]);
  return <>
  <div sty>
    <h2>Counter {counter}</h2>
    <button onClick={()=> setCounter((prev)=> prev+1) }>+</button>
    <button onClick={()=> setCounter((prev)=> prev-1)}>-</button>

    <h2>Second Counter {counter2}</h2>
    <button onClick={()=> setCounter2((prev)=> prev+1) }>+</button>
    <button onClick={()=> setCounter2((prev)=> prev-1)}>-</button>
  </div>
  </>;
}

export default App;
