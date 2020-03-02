import React from "react";
import "./App.css";
import { useFirebaseDatabase } from "./hooks/firebase-hooks";

function App() {
  const { value, setValue, loading, error } = useFirebaseDatabase("counter");

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
            <button onClick={() => setValue(value.val() + 1)}>Increment</button>
            <button onClick={() => setValue(value.val() - 1)}>Decrement</button>
          </React.Fragment>
        )}
      </header>
    </div>
  );
}

export default App;
