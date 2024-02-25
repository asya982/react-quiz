import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import { quizAPI } from "../../API/quiz";

import BasicPage from "./components/BasicPage";

import { AnswerType } from "../../types/quiz";

import styles from "./QuizPage.module.css";

import BubbleSelect from "./components/BubbleSelect";
import MultipleSelect from "./components/MultipleSelect";
import QuizProgress from "./components/QuizProgress";

const QuizPage: FC = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const allQuestions = quizAPI.getAllQuestions();
  const currentQuestion = quizAPI.getQuestionById(Number(questionId));

  const { t, i18n } = useTranslation();

  const baseSaving = (answer: AnswerType) => {
    quizAPI.saveAnswer(answer);
    const pageNumber = answer.questionId + 1;
    const nextPage =
      allQuestions.length < pageNumber ? "/finish" : `/quiz/${pageNumber}`;

    navigate(nextPage);
  };

  const languageChange = (answer: AnswerType) => {
    i18n.changeLanguage(answer.value);
    baseSaving(answer);
  };

  const renderOptions = () => {
    if (!currentQuestion) return;

    switch (currentQuestion?.id) {
      case 1:
        return (
          <BasicPage
            question={currentQuestion}
            onSelectHandler={languageChange}
          />
        );
      case 4:
        return (
          <MultipleSelect
            question={currentQuestion}
            onSelectHandler={baseSaving}
          />
        );
      case 5:
        return (
          <BubbleSelect
            onSelectHandler={baseSaving}
            question={currentQuestion}
          />
        );

      default:
        return (
          <BasicPage
            question={currentQuestion}
            onSelectHandler={baseSaving}
            optionsWithImage={currentQuestion.type === "single-select-image"}
          />
        );
    }
  };

  useEffect(() => {
    if (!currentQuestion) navigate("/");
  }, [currentQuestion, navigate]);

  return (
    <section className={styles.quizPage}>
      <QuizProgress
        questionId={currentQuestion?.id}
        totalQuestionsCount={allQuestions.length}
      />
      <div className={styles.title}>
        <h2>
          <Trans
            components={{ em: <span className="highlight" /> }}
            i18nKey={`questions.${currentQuestion?.question}`}
          />
        </h2>

        {currentQuestion?.comment && (
          <p>{t(`comments.${currentQuestion.question}`)}</p>
        )}
      </div>
      {renderOptions()}
    </section>
  );
};

export default QuizPage;
