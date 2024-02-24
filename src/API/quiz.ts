import { quizList } from "../helpers/constants/quizList";
import { AnswerType } from "../types/quiz";

export const quizAPI = {
  getAllQuestions: () => {
    return quizList;
  },

  getQuestionById: (id: number) => {
    return quizList.find((el) => el.id === id);
  },

  saveAnswer: (answer: AnswerType) => {
    localStorage.setItem(`${answer.questionId}`, answer.value);
  },

  clearAnswers: () => {
    for (let i = 0; i < quizList.length; i++) {
      localStorage.removeItem(`${quizList[i].id}`);
    }
  },
};
