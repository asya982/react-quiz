import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
  errorMessage?: string;
}

const Input: FC<InputProps> = ({ valid = true, errorMessage, ...props }) => {
  return (
    <div className={styles.input}>
      <div
        className={`${styles.inputContainer} ${!valid ? styles.invalid : ""}`}
      >
        <input {...props} className={styles.input} />
      </div>
       <p>{errorMessage}</p>
    </div>
  );
};

export default Input;
