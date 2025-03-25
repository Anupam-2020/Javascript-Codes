import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);
  let [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = 0;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }

        if (minutes === 59) {
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 100);
    }
    return () => clearInterval(interval);

  }, [seconds, minutes, isActive, hours]);

  function resetHandler() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsActive(false);
  }

  return (
    <div className="App">
      <header>
        <h3>Timer App</h3>
      </header>
      <main>
        <h1>{`${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`}</h1>
        <button onClick={() => setIsActive(!isActive)}>{!isActive ? "Start" : "Stop"}</button>
        <button onClick={() => resetHandler()}>Reset</button>
      </main>
    </div>
  );
}

export default App;
