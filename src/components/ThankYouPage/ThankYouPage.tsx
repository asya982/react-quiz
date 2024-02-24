import { FC } from "react";
import { useTranslation } from "react-i18next";
import { quizAPI } from "../../API/quiz";
import { useNavigate } from "react-router-dom";

import download from "../../assets/download.png";
import checkmark from "../../assets/checkmark.png";

import styles from "./ThankYouPage.module.css";

const ThankYouPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    quizAPI.clearAnswers();
    navigate("/");
  };
  return (
    <>
      <h2></h2>
      <img src={checkmark} alt="checkmark icon" />
      <div className={styles.download}>
        <img src={download} alt="download icon" />{" "}
        <p>{t("after_quiz.download_answers")}</p>
      </div>
      <button onClick={handleRetakeQuiz}>{t("after_quiz.retake")}</button>
    </>
  );
};

export default ThankYouPage;
