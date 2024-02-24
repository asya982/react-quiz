import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { quizAPI } from "../../API/quiz";

import ProgressBar from "../../ui/ProgressBar";
import BasicPage from "./components/BasicPage";

import { AnswerType } from "../../types/quiz";

import styles from "./QuizPage.module.css";

import BubbleSelect from "./components/BubbleSelect";

const QuizPage: FC = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const allQuestions = quizAPI.getAllQuestions();
  const currentQuestion = quizAPI.getQuestionById(Number(questionId));

  const { t, i18n } = useTranslation();

  const baseSaving = (answer: AnswerType) => {
    quizAPI.saveAnswer(answer);
    const pageNumber = answer.questionId+1;
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
      case 5:
        return <BubbleSelect />;

      default:
        return (
          <BasicPage question={currentQuestion} onSelectHandler={baseSaving} />
        );
    }
  };

  useEffect(() => {
    if (!currentQuestion) navigate("/");
  }, [currentQuestion, navigate]);

  return (
    <section className={styles.quizPage}>
      <div>
        {Number(currentQuestion?.id) > 1 && (
          <button onClick={() => navigate(-1)}>Back</button>
        )}
        <ProgressBar
          totalCount={allQuestions.length}
          currentProgress={currentQuestion?.id}
        />
      </div>
      <div className={styles.title}>
        <h2>{t(`questions.${currentQuestion?.question}`)}</h2>
        {currentQuestion?.comment && (
          <p>{t(`comments.${currentQuestion.question}`)}</p>
        )}
      </div>
      {renderOptions()}
    </section>
  );
};

export default QuizPage;
