import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0)
  // let counter=15;
  const addValue = () => {
    if (counter<50) {
      counter = counter + 1;

    }
    else {
      alert("Storage full! just kidding remove some value  to add more values!Happy Counting")
    }
    setCounter(counter);
  }
  const removeValue = () => {
    if (counter > 0) {
      counter -= 1;
    }
    else {
      alert("You reach your Remove limit.Please add some value to remove it!")
    }

    setCounter(counter);
  }


  return (
    <>
      <h1>Ract learning series</h1>

      <p>Counter value:{counter}</p>
      <div className="counter-btn">
        <button
          onClick={addValue}
        >Add value {counter}
        </button>
        <button
          onClick={removeValue}
        >Remove value {counter}
        </button>
      </div>
    </>
  );
}

export default App;
