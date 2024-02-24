import { QuizType } from "../../types/quiz";
import { topics } from "./topics";

export const quizList: QuizType[] = [
  {
    id: 1,
    question: "language",
    comment: true,
    variants: ["en", "de", "fr", "es"],
    type: "single-select",
  },
  {
    id: 2,
    question: "gender",
    comment: true,
    variants: ["female", "male", "other"],
    type: "single-select-image",
  },
  {
    id: 3,
    question: "age",
    comment: false,
    variants: ["18", "30", "40", "50"],
    type: "single-select",
  },
  {
    id: 4,
    question: "hate_in_book",
    comment: false,
    variants: ["logic", "humor", "speed", "ending"],
    type: "multiple-select",
  },
  {
    id: 5,
    question: "fav_topics",
    comment: true,
    variants: Object.values(topics).flat().map(item => item.id),
    type: "bubble",
  },
];
