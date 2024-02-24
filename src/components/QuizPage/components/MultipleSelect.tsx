import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { OptionsGroupProps } from "./BasicPage";
import { Option } from "../../../ui/Option";

import styles from "../QuizPage.module.css";

const MultipleSelect: FC<OptionsGroupProps> = ({
  onSelectHandler,
  question,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const { t } = useTranslation();

  const handleSelect = (value: string) => {
    const isInList = selectedAnswers.includes(value);

    if (isInList) {
      setSelectedAnswers((prev) => prev.filter((v) => v !== value));
    } else {
      setSelectedAnswers((prev) => [...prev, value]);
    }
  };

  const saveAnswers = () => {
    onSelectHandler({
      questionId: question.id,
      value: selectedAnswers.join(", "),
    });
  };
  return (
    <>
      <div className={styles.basicList}>
        {question.variants.map((answer, key) => (
          <Option
            value={t(`answers.${answer}`)}
            onSelect={() => handleSelect(t(`answers.${answer}`))}
            key={`option-${key}`}
            multiselect
          />
        ))}
      </div>
      <button disabled={!selectedAnswers.length} onClick={saveAnswers}>
        {t("after_quiz.next")}
      </button>
    </>
  );
};

export default MultipleSelect;
