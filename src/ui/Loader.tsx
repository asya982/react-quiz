import { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={styles.progressBar}>
      <progress
        value="75"
        max="100"
        style={{ visibility: "hidden", height: 0, width: 0 }}
      >
        75%
      </progress>
    </div>
  );
};

export default Loader;
