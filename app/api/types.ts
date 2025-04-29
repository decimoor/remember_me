export type Card = {
  question: string;
  answer: string;
  options: Option[];
};

export type Option = {
  correct: boolean;
  text: string;
};
