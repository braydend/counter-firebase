import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connection } from "./firebase-config";

function App() {
  const [count, setCount] = useState(null);
  const isLoading = count === null;

  const counter = connection.database().ref("counter");

  useEffect(() => {
    if (counter) {
      counter.on("value", snapshot => {
        const data = { value: snapshot.val(), id: snapshot.key };
        setCount(data.value);
      });
    }
  }, [counter]);

  const setCounter = e => {
    e.preventDefault();
    connection
      .database()
      .ref("counter")
      .set(5000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={setCounter}>click me</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
