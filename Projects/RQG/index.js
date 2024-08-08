const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot, but make it hot by striking. — William Butler Yeats",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Act as if what you do makes a difference. It does. — William James",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. — Albert Schweitzer",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "You miss 100% of the shots you don't take. — Wayne Gretzky",
  "Whether you think you can or you think you can't, you're right. — Henry Ford",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "The harder I work, the luckier I get. — Gary Player",
  "Perseverance is not a long race; it is many short races one after the other. — Walter Elliot",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
  "Dream big and dare to fail. — Norman Vaughan",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
  "Failure will never overtake me if my determination to succeed is strong enough. — Og Mandino",
  "The only place where success comes before work is in the dictionary. — Vidal Sassoon",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. — Christian D. Larson",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe"
];


function generateQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  let quote = document.getElementById("quote");
  quote.innerText = quotes[randomNum];
}

generateQuote();
