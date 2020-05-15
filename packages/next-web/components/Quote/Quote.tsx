import React from "react";
import { QuoteWrapper } from "./Quote.style";

interface QuoteProps {}

const quoteList = [
  " Keep going every little step! ",
  " 오마이걸 - 살짝 설렜어 ",
  " Everything's gonna be okay! ",
  " You don't have to be productive all the time, don't be too stressful! ",
  " Almost done, try a little hard! ",
  " One day you're gonna die...  ",
  " Enjoy... ",
];

const Quote: React.FC<QuoteProps> = () => {
  const quote = quoteList[Math.floor(Math.random() * quoteList.length)];
  return <QuoteWrapper>"{quote}"</QuoteWrapper>;
};

export default Quote;
