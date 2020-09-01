import React, { useState, useEffect } from "react";

const QuoteDisplay = () => {
  const [quotes, setQuotes] = useState();
  const [nextQuote, setNextQuote] = useState();

  useEffect(() => {
    fetch(`https://halit-quote-server.glitch.me/quotes`)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  function pickFromArray(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function pickNext() {
    setNextQuote(pickFromArray(quotes));
    console.log(nextQuote);
  }

  if (!quotes) {
    return <div className="lds-dual-ring"></div>;
  } else {
    return (
      <div>
        <h2>
          <i>"{nextQuote ? nextQuote.quote : pickFromArray(quotes).quote}"</i>
        </h2>
        <h4>- {nextQuote ? nextQuote.author : pickFromArray(quotes).author}</h4>
        <button onClick={pickNext}>Next Quote</button>
      </div>
    );
  }
};

export default QuoteDisplay;
