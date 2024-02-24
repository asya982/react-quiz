import { FC } from "react";
import ProgressBar from "../../../ui/ProgressBar";
import { useNavigate } from "react-router-dom";
import styles from "../QuizPage.module.css";

type QuizProgressProps = {
  questionId?: number;
  totalQuestionsCount: number;
};

const QuizProgress: FC<QuizProgressProps> = ({
  questionId,
  totalQuestionsCount,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.progressContainer}>
      {Number(questionId) > 1 && (
        <svg
          onClick={() => navigate(-1)}
          className={styles.backBtn}
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.5L2.5 8L9 14.5"
            stroke="inherit"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      <ProgressBar
        totalCount={totalQuestionsCount}
        currentProgress={questionId}
      />
    </div>
  );
};

export default QuizProgress;
