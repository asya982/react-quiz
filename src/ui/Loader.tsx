import { FC, useEffect, useRef, useState } from "react";
import styles from "./Loader.module.css";

type LoaderProps = {
  duration?: number;
};

const Loader: FC<LoaderProps> = ({ duration = 5000 }) => {
  const [progress, setProgress] = useState(0);
  const [offset, setOffset] = useState(283);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress = progress + (50 / duration) * 100;
      setProgress(newProgress);
      const progressToFill = (283 * (100 - newProgress)) / 100;
      setOffset(progressToFill);
    }, 50);

    if (progress >= 100) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [duration, progress]);

  return (
    <div className={styles.progressContainer}>
      <svg className={styles.progressRing} width="250" height="250">
        <circle
          className={styles.progressRingCircle}
          strokeWidth="25"
          fill="transparent"
          r="96.25"
          cx="125"
          cy="125"
        />
        <circle
          ref={circleRef}
          className={styles.progressRingCircle}
          strokeWidth="25"
          fill="transparent"
          r="96.25"
          cx="125"
          cy="125"
          style={{ strokeDashoffset: offset }}
        />
      </svg>
      <div className={styles.progressText}>{Math.round(progress)}%</div>
    </div>
  );
};

export default Loader;
