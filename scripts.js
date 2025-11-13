 const quotes = [
        {
          text: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde",
        },
        {
          text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          author: "Albert Einstein",
        },
        { text: "So many books, so little time.", author: "Frank Zappa" },
        {
          text: "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde",
        },
        {
          text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          author: "Albert Einstein",
        },
        { text: "So many books, so little time.", author: "Frank Zappa" },
        {
          text: "The purpose of our lives is to be happy.",
          author: "Dalai Lama",
        },
        {
          text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
          author: "Thomas Edison",
        },
        {
          text: "Difficulties increase the nearer we get to the goal.",
          author: "Johann Wolfgang von Goethe",
        },
        {
          text: "A house divided against itself cannot stand.",
          author: "Abraham Lincoln",
        },
        {
          text: "Be kind whenever possible. It is always possible.",
          author: "Dalai Lama",
        },
        {
          text: "You only live once, but if you do it right, once is enough.",
          author: "Mae West",
        },
        {
          text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          author: "Nelson Mandela",
        },
        { text: "Do, or do not. There is no try.", author: "Yoda" },
        {
          text: "You must be the master of your own destiny.",
          author: "Napoleon Bonaparte",
        },
        {
          text: "Success is the sum of details—master the small things and big wins will follow.",
          author: "Harvey S. Firestone",
        },
        {
          text: "Learn from yesterday, live for today, hope for tomorrow.",
          author: "Albert Einstein",
        },
        {
          text: "Work hard, be kind, and amazing things will happen.",
          author: "Conan O'Brien",
        },
        {
          text: "You don’t have to be great to start, but you have to start to be great.",
          author: "Zig Ziglar",
        },
        {
          text: "In the middle of every difficulty lies opportunity.",
          author: "Albert Einstein",
        },
        {
          text: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
        },
        {
          text: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt",
        },
        {
          text: "It does not matter how slowly you go as long as you do not stop.",
          author: "Confucius",
        },
      ];

      // Add more quotes as needed
      const quoteElem = document.getElementById("quote");
      const authorElem = document.getElementById("author");

      document.getElementById("new-quote").addEventListener("click", () => {
        const randomQuote = getRandomQuote();
        quoteElem.style.opacity = 0;
        authorElem.style.opacity = 0;

        setTimeout(() => {
          quoteElem.textContent = `"${randomQuote.text}"`;
          authorElem.textContent = `- ${randomQuote.author}`;
          quoteElem.style.opacity = 1;
          authorElem.style.opacity = 1;
        }, 500);
      });

      function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      }

      document.getElementById("new-quote").addEventListener("click", () => {
        const randomQuote = getRandomQuote();
        document.getElementById("quote").textContent = `"${randomQuote.text}"`;
        document.getElementById(
          "author"
        ).textContent = `- ${randomQuote.author}`;
      });
      document.getElementById("copy-quote").addEventListener("click", () => {
        const texttoCopy =
          '${document.getElementById("quote").textContent} ${document.getElementById("author").textContent}';
        navigator.clipboard.writeText(texttoCopy);
        alert("Quote copied to clipboard!");
      });
