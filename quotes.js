const quotes = [
  "Believe in yourself and all that you are.",
  "Every day is a fresh start.",
  "Dream big, work hard, and stay kind.",
  "Your only limit is your mind.",
  "Small steps every day lead to big results.",
  "Stay positive, beautiful things take time."
];

const quoteText = document.getElementById("quoteText");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let quoteIndex = 0;
let quoteInterval;

const showQuote = () => {
  quoteText.textContent = `"${quotes[quoteIndex]}"`;
};

const nextQuote = () => {
  quoteIndex++;

  if (quoteIndex === quotes.length) {
    quoteIndex = 0;
  }

  showQuote();
};

const prevQuote = () => {
  quoteIndex--;

  if (quoteIndex < 0) {
    quoteIndex = quotes.length - 1;
  }

  showQuote();
};

const startQuoteSlider = () => {
  quoteInterval = setInterval(nextQuote, 3000);
};

nextBtn.addEventListener("click", () => {
  clearInterval(quoteInterval);
  nextQuote();
  startQuoteSlider();
});

prevBtn.addEventListener("click", () => {
  clearInterval(quoteInterval);
  prevQuote();
  startQuoteSlider();
});

for (let i = 0; i < quotes.length; i++) {
  console.log(`Quote ${i + 1}: ${quotes[i]}`);
}

showQuote();
startQuoteSlider();