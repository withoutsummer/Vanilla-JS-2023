const quotes = [
    {
        quote:"Nothing great in the world has been accomplished without passion.",
        author:"Georg Wilhelm",

    },
    {
        quote:"Look not mournfully into the past. It comes not back again. Wisely improve the present. It is thine. Go forth to meet the shadowy future, without fear.",
        author:"Henry Wadsworth Longfellow",
    },
    {
        quote:"Try not to become a man of success but rather to become a man of value.",
        author:"Albert Einstein",
    },
    {
        quote:"Life is far too important a thing ever to talk seriously about.",
        author:"Oscar Wilde",
    },
    {
        quote:"I'd rather be hated for who I am than be loved for who I'm not.",
        author:"Kurt Cobain",
    },
    {
        quote:"Hope, like the gleaming taper's light, Adorns and cheers our way; And still, as darker grows the night, Emits a brighter ray",
        author:"Oliver Goldsmith",
    },
    {
        quote:"The hour of departure has arrived, and we go our ways - I to die, and you to live. Which is better God only knows.",
        author:"Socrates",
    },
    {
        quote:"Love is, above all else, the gift of oneself.",
        author:"Jean Anouilh",
    },
    {
        quote:"How many a man has dated a new era in his life from the reading of a book.",
        author:"Henry David Thoreau",
    },
    {
        quote:"A long life may not be good enough, but a good life is long enough.",
        author:"Benjamin Franklin",
    },
    {
        quote:"We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.",
        author:"Joseph Campbel",
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;