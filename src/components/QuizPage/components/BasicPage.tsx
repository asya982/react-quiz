import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Option } from "../../../ui/Option";

import { AnswerType, QuizType } from "../../../types/quiz";

import styles from "../QuizPage.module.css";

export type OptionsGroupProps = {
  question: QuizType;
  onSelectHandler: (answer: AnswerType) => void;
};

type BasicPageProps = OptionsGroupProps;

const BasicPage: FC<BasicPageProps> = ({ onSelectHandler, question }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.basicList}>
      {question.variants.map((answer, key) => (
        <Option
          value={t(`answers.${answer}`)}
          onSelect={() =>
            onSelectHandler({ questionId: question.id, value: answer })
          }
          key={`option-${key}`}
        />
      ))}
    </div>
  );
};

export default BasicPage;
