# 💬 MindSpark

A quote generator built with HTML, CSS, and JavaScript. Click a button, get inspired.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

- Randomly serves a curated quote on each click
- Displays quote text and author
- Smooth, card-based UI with a vibrant gradient background
- Zero dependencies — pure JS

---

## 🚀 Getting Started

No build tools or installs needed.

```bash
git clone https://github.com/Aylong64/MindSpark.git
cd MindSpark
```

Then just open `index.html` in your browser. That's it.

---

## 📁 Project Structure

```
quote-generator/
├── index.html      # Markup
├── style.css       # Styles
└── main.js         # Quote logic
```

---

## 🛠️ How It Works

1. A quotes array holds objects with `text` and `author` fields
2. On button click, `getRandomQuote()` picks one at random
3. `createQuoteCard()` builds the DOM card and appends it to `#quoteDisplay`

---

## 👤 Author

**Ayomide Jimoh**  
[GitHub](https://github.com/Aylong64) 
---

## 📄 License

MIT — free to use and modify.
