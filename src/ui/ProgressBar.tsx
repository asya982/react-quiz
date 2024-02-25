import { FC } from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  totalCount: number;
  currentProgress?: number;
};

const ProgressBar: FC<ProgressBarProps> = ({
  totalCount,
  currentProgress = 1,
}) => {
  const progressWidth = (currentProgress * 100) / totalCount;
  return (
    <section className={styles.container}>
      <p>
        <span className="highlight">{currentProgress}</span>/{totalCount}
      </p>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </section>
  );
};

export default ProgressBar;
