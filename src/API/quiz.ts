import { quizList } from "../helpers/constants/quizList";
import { deleteTags } from "../helpers/formatString";
import i18n from "../i18n/config";
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
    localStorage.removeItem("email");
    i18n.changeLanguage("en");
  },

  getUserAnswers: () => {
    const userData = [];
    for (let i = 0; i < quizList.length; i++) {
      let answer = localStorage.getItem(`${quizList[i].id}`) || "";

      if (quizList[i].type === "multiple-select") {
        answer = answer
          ?.split(", ")
          .map((ans) => i18n.t(`answers.${ans}`))
          .join(", ");
      } else if (quizList[i].type === "bubble") {
        answer = answer
          .split(", ")
          .map((ans) => i18n.t(`topic.${ans}`))
          .join(", ");
      } else {
        answer = i18n.t(`answers.${answer}`);
      }

      const question = quizList[i];
      const questionText = deleteTags(i18n.t(`questions.${question.question}`));
      userData.push({
        order: `${quizList[i].id}`,
        title: questionText,
        type: question.type,
        answer,
      });
    }

    userData.push({
      order: "6",
      title: "Email",
      type: "email",
      answer: localStorage.getItem("email"),
    });
    return userData;
  },
};
