import { FC } from "react";
import { useTranslation } from "react-i18next";
import { quizAPI } from "../../API/quiz";
import { useNavigate } from "react-router-dom";

import download from "../../assets/download.png";
import checkmark from "../../assets/checkmark.png";

import styles from "./ThankYouPage.module.css";
import Papa from "papaparse";

const ThankYouPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    quizAPI.clearAnswers();
    navigate("/");
  };

  const exportDataToCSV = () => {
    const csv = Papa.unparse(quizAPI.getUserAnswers());

    const csvBlob = new Blob([csv], { type: "text/csv" });

    const csvUrl = URL.createObjectURL(csvBlob);

    const link = document.createElement("a");
    link.href = csvUrl;
    link.download = "quiz_answers.csv";

    link.click();

    URL.revokeObjectURL(csvUrl);
  };

  return (
    <>
      <div>
        <h2 className={styles.thankYou}>{t(`after_quiz.thank_you`)}</h2>
        <p>{t("after_quiz.thank_you_comment")}</p>
      </div>
      <img src={checkmark} alt="checkmark icon" className={styles.checkMark} />
      <section className={styles.actionBtn}>
          <div className={styles.download} onClick={exportDataToCSV}>
            <img src={download} alt="download icon" />{" "}
            <p>{t("after_quiz.download_answers")}</p>
          </div>
        <button onClick={handleRetakeQuiz}>{t("after_quiz.retake")}</button>
      </section>
    </>
  );
};

export default ThankYouPage;
