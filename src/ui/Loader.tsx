import { FC, useEffect, useState } from "react";
import styles from "./Loader.module.css";

type LoaderProps = {
  duration?: number;
};

const Loader: FC<LoaderProps> = ({ duration = 5000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setProgress(progress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [duration]);

  return (
    <div className={styles.circularProgress}>
      <svg className={styles.progressRing} viewBox="0 0 100 100">
        <circle
          className={styles.progressRingCircle}
          stroke="#FFF"
          strokeWidth="5"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <circle
          className={styles.progressRingCircle}
          stroke="#E4229B"
          strokeWidth="5"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          style={{
            strokeDasharray: `${progress * 251} 251`,
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.progressText}
        >
          {Math.round(progress * 100)}%
        </text>
      </svg>
    </div>
  );
};
export default Loader;
