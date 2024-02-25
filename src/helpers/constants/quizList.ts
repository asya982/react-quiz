import { QuizType } from "../../types/quiz";
import { topics } from "./topics";

export const quizList: QuizType[] = [
  {
    id: 1,
    question: "language",
    comment: true,
    variants: [
      { value: "en" },
      { value: "de" },
      { value: "fr" },
      { value: "es" },
    ],
    type: "single-select",
  },
  {
    id: 2,
    question: "gender",
    comment: true,
    variants: [
      { value: "female", emoji: "👩" },
      { value: "male", emoji: "🧑" },
      { value: "other", emoji: "😉" },
    ],
    type: "single-select-image",
  },
  {
    id: 3,
    question: "age",
    comment: false,
    variants: [
      { value: "18" },
      { value: "30" },
      { value: "40" },
      { value: "50" },
    ],
    type: "single-select",
  },
  {
    id: 4,
    question: "hate_in_book",
    comment: false,
    variants: [
      { value: "logic" },
      { value: "humor" },
      { value: "speed" },
      { value: "ending" },
    ],
    type: "multiple-select",
  },
  {
    id: 5,
    question: "fav_topics",
    comment: true,
    variants: Object.values(topics)
      .flat()
      .map((item) => ({
        value: item.id,
      })),
    type: "bubble",
  },
];
