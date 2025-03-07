import React, { useState, useEffect } from "react";

const mockQuotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Drink Cay",
    author: 'Halit "The Great"',
  }
];


const QuoteDisplay = () => {
  const [quotes, setQuotes] = useState();
  const [nextQuote, setNextQuote] = useState();

  const URL = "https://halit-quote-server.glitch.me/quotes"; // no longer works

  // const fetchQuotes = async () => {
  //   try {
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     setQuotes(data);
  //   }
  //   catch (error) {
  //     setQuotes(mockQuotes);
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    // fetchQuotes();
    setQuotes(mockQuotes);
  }, []);

  function pickFromArray(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function pickNext(e) {
    e.preventDefault();
    setNextQuote(pickFromArray(quotes));
    console.log(nextQuote);
  }

  if (!quotes) {
    return <div className="lds-dual-ring"></div>;
  } else {
    const selectedQuote = pickFromArray(quotes);
    return (
      <div>
        <h2>
          <i>"{nextQuote ? nextQuote.quote : selectedQuote.quote}"</i>
        </h2>
        <h4>- {nextQuote ? nextQuote.author : selectedQuote.author}</h4>
        <button onClick={pickNext}>Next Quote</button>
      </div>
    );
  }
};

export default QuoteDisplay;
