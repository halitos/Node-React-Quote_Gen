import React, { useState, useEffect } from "react";
import NextButton from "./NextButton";

const QuoteDisplay = () => {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetch(`https://halit-quote-server.glitch.me/quotes`)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);

  console.log(quote);

  if (!quote) {
    return "loading...";
  } else {
    return (
      <div className="quote-container">
        <p>something</p>
        <h3>something</h3>
        <NextButton />
      </div>
    );
  }
};

export default QuoteDisplay;
