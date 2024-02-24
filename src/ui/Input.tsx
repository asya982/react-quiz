import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
}

const Input: FC<InputProps> = ({ valid = true, ...props }) => {
  return (
    <div className={`${styles.inputContainer} ${!valid ? styles.invalid : ""}`}>
      <input {...props} className={styles.input} />
    </div>
  );
};

export default Input;
