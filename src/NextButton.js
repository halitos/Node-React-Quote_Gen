import React from "react";

const NextButton = () => {
  return <button onClick={loadQuote}>Next Quote</button>;
};

function loadQuote() {
  return window.location.reload();
}

export default NextButton;
