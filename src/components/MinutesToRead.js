import React from "react";

const MinutesToRead = ({ minutes }) => {
  const coffee = "☕️";
  const bento = "🍱";

  let emoji;

  // If the article takes less than 30 minutes to read:
  if (minutes < 30) {
    // Count 1 for every 5 minutes (rounded up to the nearest 5)
    let coffeeCupCount = Math.ceil(minutes / 5);
    // Using Array.from() and arrow function as the map function to manipulate the elements
    let coffeeEmojiArr = Array.from({ length: coffeeCupCount }, () => coffee);
    emoji = coffeeEmojiArr.join("");
  // If the article takes 30 minutes or longer to read:  
  } else {
    // Count 1 for every 10 minutes (rounded up to the nearest 10)
    let bentoBoxCount = Math.ceil(minutes / 10);
    let bentoEmojiArr = Array.from({ length: bentoBoxCount }, () => bento);
    emoji = bentoEmojiArr.join("");
  }

  let displayTime = `${emoji} ${minutes} to read`;

  return <span>{displayTime}</span>;
};

export default MinutesToRead;
