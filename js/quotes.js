const quotes = [
    {
      quote : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." ,
      author : "Martin Fowler"
    },
    {
      quote: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      quote: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde"
    },
    {
      quote: "In order to be irreplaceable, one must always be different",
      author: "Coco Chanel"
    },
    {
      quote: "Java is to JavaScript what car is to Carpet.",
      author: "Chris Heilmann"
    },
    {
      quote: "Knowledge is power.",
      author: "Francis Bacon"
    },
    {
      quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
      author: "Dan Salomon"
    },
    {
      quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
      author: "Antoine de Saint-Exupery"
    },
    {
      quote: "Ruby is rubbish! PHP is phpantastic!",
      author: "Nikita Popov"
    },
    {
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House"
    }
  ]
  
  const quote = document.querySelector(".quote span:first-child");
  const author = document.querySelector(".quote span:last-child");
  
  const randomNum = Math.floor(Math.random() * quotes.length);
  const todaysQuote = quotes[randomNum];
  quote.innerText = `${todaysQuote.quote} – `;
  author.innerText = todaysQuote.author;
  
  const quoteContainer = document.querySelector(".quote");