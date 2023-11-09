import  { useState } from "react";
import { Context } from "./context";
import Consumer from "./consumer";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Context.Provider value={count}>
        <Consumer />
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </Context.Provider>
    </div>
  );
}
