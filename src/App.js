import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connection } from "./firebase-config";

function App() {
  const counter = connection
    .database()
    .ref("counter")
    .orderByKey()
    .limitToLast(100);

  useEffect(() => {
    if (counter) {
      counter.on("child_added", snapshot => {
        const counter = { text: snapshot.val(), id: snapshot.key };
        console.log(counter);
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
