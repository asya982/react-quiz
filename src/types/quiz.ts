export type QuizType = {
  id: number;
  question: string;
  variants: string[];
  comment: boolean;
  type: "single-select" | "single-select-image" | "bubble" | "multiple-select";
};

export type AnswerType = {
  questionId: number;
  value: string;
};
