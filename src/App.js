import React from "react";
import "./App.css";
import QuoteDisplay from "./QuoteDisplay";

function App() {
  return (
    <div className="container">
      <h1 className="header">Quote Generator</h1>
      <div>
        <QuoteDisplay />
      </div>
    </div>
  );
}

export default App;
