import { FC, ReactNode, useState } from "react";
import styles from "./Option.module.css";
import Emoji from "./Emoji";

type OptionProps = {
  value: string | ReactNode;
  multiselect?: boolean;
  onSelect: () => void;
};

type BubbleOptions = OptionProps & {
  emoji: string;
  disabled?: boolean;
};

export const Option: FC<OptionProps> = ({
  value,
  multiselect = false,
  onSelect,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
    onSelect();
  };

  const checkedCss = clicked ? styles.checked : "";

  return (
    <div
      className={`${styles.optionContainer} ${checkedCss}`}
      onClick={handleClick}
    >
      {value}
      {multiselect && (
        <label
          className={`${styles.checkbox} ${checkedCss}`}
          htmlFor="checkbox"
        >
          <input id="checkbox" type="checkbox" checked={clicked} readOnly />
        </label>
      )}
    </div>
  );
};

export const BubbleOption: FC<BubbleOptions> = ({
  value,
  emoji,
  onSelect,
  disabled = false,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    onSelect();
    if (!disabled || clicked) {
      setClicked((prev) => !prev);
    }
  };

  return (
    <div
      className={`${styles.optionContainer} ${styles.bubble} ${
        clicked ? styles.selected : ""
      }`}
      onClick={handleClick}
    >
      <Emoji symbol={emoji} />
      <p>{value}</p>
    </div>
  );
};
