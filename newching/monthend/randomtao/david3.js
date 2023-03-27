// Define an array of quotes
var quotes = [
  {
    "text": "The superior man acts before he speaks, and afterwards speaks according to his actions.",
    "author": "Confucius"
  },
  {
    "text": "Nature does not hurry, yet everything is accomplished.",
    "author": "Lao Tzu"
  },
  {
    "text": "It does not matter how slowly you go as long as you do not stop.",
    "author": "Confucius"
  },
  {
    "text": "The journey of a thousand miles begins with one step.",
    "author": "Lao Tzu"
  },
  {
    "text": "The wise find pleasure in water; the virtuous find pleasure in hills. The wise are active; the virtuous are tranquil. The wise are joyful; the virtuous are long-lived.",
    "author": "Confucius"
  }
];

// Define a function to generate a random quote
function generateQuote() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = '"' + quote.text + '" - ' + quote.author;
}

// Call the generateQuote() function when the page is loaded
window.onload = function() {
  generateQuote();
};
