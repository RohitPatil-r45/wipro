import { useState } from "react";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter Demo</h1>
      <h2>Counter: {count}</h2>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          Imcrement Counter
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          Decrement Counter
        </button>
      </div>
    </>
  );
}

export default App;
