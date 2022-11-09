const quoteButton = document.getElementById('quote-button');
const quoteAnime = document.getElementById('quote-anime');
const quoteCharacter = document.getElementById('quote-character');
const quoteQuote = document.getElementById('quote-quote');
const quoteContainer = document.getElementsByName('quote-container');

const getQuotes = async () => {

    const url = 'https://animechan.vercel.app/api/random';
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    quoteAnime.innerHTML = data.anime;
    quoteCharacter.innerHTML = data.character;
    quoteQuote.innerHTML = data.quote;

}

quoteButton.addEventListener('click', getQuotes);
