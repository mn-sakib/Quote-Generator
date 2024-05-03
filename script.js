let quote = document.getElementById('quote');
let author = document.getElementById('author');

async function getQuote(){
    const apiKey = "https://api.quotable.io/quotes/random?maxLength=250";
    let response = await fetch(apiKey);
    let data = await response.json();
    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}
window.onload(getQuote())
function shareX(){
    let twitterShare = `https://twitter.com/intent/tweet?text=${quote.innerHTML}`;
    window.open(twitterShare, "Twitter Window", "width='600', height='400'");
}