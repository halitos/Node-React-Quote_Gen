import React, { useState, useEffect } from "react";
import NextButton from "./NextButton";

const QuoteDisplay = () => {
  const [quotes, setQuotes] = useState();
  useEffect(() => {
    fetch(`https://halit-quote-server.glitch.me/quotes`)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  console.log(quotes);

  function pickFromArray(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  console.log(quotes);

  if (!quotes) {
    return "loading...";
  } else {
    return (
      <div className="quote-container">
        <p>{pickFromArray(quotes).quote}</p>
        <h3>{pickFromArray(quotes).author}</h3>
        <NextButton />
      </div>
    );
  }
};

export default QuoteDisplay;

// function loadQuote() {
//   const chosenQuote = pickFromArray(quotes);
//   quoteLine.innerText = '"' + chosenQuote.quote + '"';
//   authorLine.innerText = "- " + chosenQuote.author;
//   containerDiv.appendChild(quoteLine);
//   containerDiv.appendChild(authorLine);
// }
