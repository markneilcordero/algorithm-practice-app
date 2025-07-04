// src/components/QuoteBox.jsx
import React, { useEffect, useState } from 'react';

const quotes = [
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
  "“Simplicity is the soul of efficiency.” – Austin Freeman",
  "“Talk is cheap. Show me the code.” – Linus Torvalds",
  "“The only way to learn a new programming language is by writing programs in it.” – Dennis Ritchie",
  "“It’s not a bug – it’s an undocumented feature.” 😄",
];

const QuoteBox = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }, []);

  return (
    <blockquote className="blockquote my-4 text-muted">
      <p className="mb-0 fst-italic">💬 {quote}</p>
    </blockquote>
  );
};

export default QuoteBox;
