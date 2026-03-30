const generateBtn = document.getElementById('generateBtn')
const quoteDisplay = document.getElementById('quoteDisplay')

generateBtn.addEventListener('click', generateQuote)

function generateQuote() {
    quoteDisplay.innerHTML = ''

    const quote = getRandomQuote()
    const quoteCard = createQuoteCard(quote)
    quoteDisplay.appendChild(quoteCard)
}

function getRandomQuote() {
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "Whether you think you can or think you can't, you're right.", author: "Henry Ford" },
    ]

    return quotes[Math.floor(Math.random() * quotes.length)]
}

function createQuoteCard(quote) {
    const card = document.createElement('div')
    card.classList.add('quote-card')

    const text = document.createElement('p')
    text.classList.add('quote-text')
    text.textContent = `"${quote.text}"`

    const author = document.createElement('span')
    author.classList.add('quote-author')
    author.textContent = `— ${quote.author}`

    card.appendChild(text)
    card.appendChild(author)
    return card
}