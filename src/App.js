import React from "react";
import "./App.css";
import { useObject } from "react-firebase-hooks/database";
import { connection } from "./firebase-config";

function App() {
  const ref = connection.database().ref("counter");
  const [value, loading, error] = useObject(ref);

  const setCounter = newValue => {
    ref.set(newValue);
  };

  if (error) {
    return (
      <>
        <h1>¯\_(ツ)_/¯</h1>
        <h2>Something unexpected happened</h2>
      </>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <React.Fragment>
            <h1>{value.val()}</h1>
            <button onClick={() => setCounter(value.val() + 1)}>
              Increment
            </button>
            <button onClick={() => setCounter(value.val() - 1)}>
              Decrement
            </button>
          </React.Fragment>
        )}
      </header>
    </div>
  );
}

export default App;
