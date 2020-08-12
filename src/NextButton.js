import React from "react";

const NextButton = () => {
  return <button onClick={loadQuote}>Next Quote</button>;
};

function loadQuote() {
  return window.onload;
}

window.addEventListener("load", loadQuote);

export default NextButton;

// function loadQuote() {
//   const chosenQuote = pickFromArray(quotes);
//   quoteLine.innerText = '"' + chosenQuote.quote + '"';
//   authorLine.innerText = "- " + chosenQuote.author;
//   containerDiv.appendChild(quoteLine);
//   containerDiv.appendChild(authorLine);
// }

// const nextButton = document.createElement("button");
// nextButton.innerText = "Next Quote";
// containerDiv.appendChild(nextButton);

// nextButton.addEventListener("click", loadQuote);

// window.addEventListener("load", loadQuote);

// document.body.appendChild(containerDiv);
