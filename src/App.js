import React, { useEffect, useState } from "react";
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

  const setCounter = value => {
    connection
      .database()
      .ref("counter")
      .set(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <React.Fragment>
            <h1>{count}</h1>
            <button onClick={() => setCounter(count + 1)}>Increment</button>
            <button onClick={() => setCounter(count - 1)}>Decrement</button>
          </React.Fragment>
        )}
      </header>
    </div>
  );
}

export default App;
