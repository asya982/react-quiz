import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Option } from "../../../ui/Option";

import { AnswerType, QuizType } from "../../../types/quiz";

import styles from "../QuizPage.module.css";
import Emoji from "../../../ui/Emoji";

export type OptionsGroupProps = {
  question: QuizType;
  onSelectHandler: (answer: AnswerType) => void;
};

type BasicPageProps = OptionsGroupProps & { optionsWithImage?: boolean };

const BasicPage: FC<BasicPageProps> = ({
  onSelectHandler,
  question,
  optionsWithImage = false,
}) => {
  const { t } = useTranslation();

  const optionsPrepare = (value: string, emoji?: string) => {
    if (emoji) {
      return (
        <div className={styles.emojiOption}>
          <Emoji symbol={emoji} />
          <p>{value}</p>
        </div>
      );
    }
    return value;
  };

  return (
    <div
      className={`${styles.basicList} ${
        optionsWithImage ? styles.emojiLayout : ""
      }`}
    >
      {question.variants.map((answer, key) => (
        <Option
          value={optionsPrepare(t(`answers.${answer.value}`), answer?.emoji)}
          onSelect={() =>
            onSelectHandler({
              questionId: question.id,
              value: answer.value,
            })
          }
          key={`option-${key}`}
        />
      ))}
    </div>
  );
};

export default BasicPage;
