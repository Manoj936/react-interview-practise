import { useMemo, useState } from "react";
import "./App.css";
import useCustomMemo from "./hooks/useCustomMemo";
// building custom memo
export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const multVal = () => {
    console.log("//Complex Calc//");
    return counter * counter;
  };
  const memoizedMultVal = useCustomMemo(multVal , [counter])
  return (
    <div className="App">
      <h1>Counter Value {counter}</h1>
      <h2>Multiplied Value {memoizedMultVal}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr />
      <hr />
      <h1>Counter2 Value {counter2}</h1>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}
