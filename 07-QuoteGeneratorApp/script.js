const quoteDisplay = document.getElementById("quote");
const authorDisplay = document.getElementById("author");
const newQuote = document.getElementById("newQuote");
const tweetBtn = document.getElementById("tweetBtn");
const api_url = "https://api.quotable.io/random";

newQuote.addEventListener("click", () => {
    return getQuote(api_url)
});

tweetBtn.addEventListener('click', tweet);


async function getQuote(url = api_url) {
    const response = await fetch(url);
    let data = await response.json()
    quoteDisplay.innerText = data.content;
    authorDisplay.innerText = data.author
};


function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quoteDisplay.innerText + "---- by "+ authorDisplay.innerText, "Tweet Window", "width=600, height=300");
};


getQuote(api_url);