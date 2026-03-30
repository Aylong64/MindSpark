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
        { text: "We become what we think about", author: "Ogbonna Henry" },
        { text: "I would not be the girl that has Potential, for I can do anything and everything I want to do, I just have to set my mind to it.", author: "Soneye Oluwapelumi" },
        { text: "To be Abundant, More is given", author: "Ogbonna Henry" },
        { text: "How would you feel when you see your results?, that should motivate you", author: "Olatunde Ayomide" },
        { text: "When you feel tired from running, that's when you continue", author: "Elusakin Oluwanifemi" },
        { text: " 🌺One way or the other, it’ll all be fine. Either this will end or I’ll die. I’m good with either", author: "Olayide Samiat" },
        { text: "It is well", author: "Ilekuba Chika" },
        { text: "A little step is better than no step at all", author: "Ajayi Ayomikun" },
        { text: "You will feel it like you want to die but you will not die", author: "Nwabueze Lilian" },
        { text: "Hardwork beats Talent where talent doesn't work hard", author: "Latimore Precious" },
        { text: "I can do all things through Christ who strenthens me", author: "Anisere Amoke" },
        { text: "God is in control", author: "Iyiola Zainab" },
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
