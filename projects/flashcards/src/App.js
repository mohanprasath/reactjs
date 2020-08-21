import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import Flashcard from "./Flashcard";
import "./App.css";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASH_CARDS);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=50&category=18")
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = questionItem.correct_answer;
            const options = [...questionItem.incorrect_answers, answer];
            return {
              id: `${index}-${Date.now()}`,
              questions: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
        // console.log(res.data);
      });
  });

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASH_CARDS = [
  {
    id: 1,
    question: "what is a heap?",
    answer: "dynamic memory location in the memory",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 2,
    question: "what is a hash table ?",
    answer:
      "location in the memory that stores data using a technique called hashing",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
];

export default App;
