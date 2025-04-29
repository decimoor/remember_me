import type { Card } from "./types";

const exampleCard: Card = {
  question: "When is my birthday?",
  answer: "25.07.2002",
  options: [
    {
      text: "31.01.2001",
      correct: false,
    },
    {
      text: "25.07.2002",
      correct: true,
    },
  ],
};

export const getCard: (id: number) => Promise<Card> = (id: number) => {
  return new Promise<Card>((res) => {
    setTimeout(() => {
      res(exampleCard);
    }, 500);
  });
};
