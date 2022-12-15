const quoteText = document.querySelector(".quote");
const authouName = document.querySelector(".author");
const quoteBtn = document.querySelector("button");


// Random Quote function
 function randomQuote() {
    quoteBtn.innerText = "Loading Quote..."
    fetch("https://api.Quotable.io/random").then(res => res.json()).then(result => {
        quoteText.textContent = result.content;
        authouName.innerText = result.author;
        quoteBtn.innerText = "New Quote"
    });

 }


quoteBtn.addEventListener("click",randomQuote );