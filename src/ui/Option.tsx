import { FC, ReactNode } from "react";
import styles from "./Option.module.css";
import Emoji from "./Emoji";

type OptionProps = {
  value: string | ReactNode;
  multiselect?: boolean;
  onSelect: () => void;
};

type BubbleOptions = OptionProps & {
  emoji: string;
};

export const Option: FC<OptionProps> = ({
  value,
  multiselect = false,
  onSelect,
}) => {
  return (
    <div className={styles.optionContainer} onClick={onSelect}>
      {value}
      {multiselect && <button></button>}
    </div>
  );
};

export const BubbleOption: FC<BubbleOptions> = ({ value, emoji, onSelect }) => {
  return (
    <div
      className={`${styles.optionContainer} ${styles.bubble}`}
      onClick={onSelect}
    >
      <Emoji symbol={emoji} />
      <p>{value}</p>
    </div>
  );
};
