import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { topics } from "../../../helpers/constants/topics";
import { BubbleOption } from "../../../ui/Option";
import { TopicType } from "../../../types/topics";

import styles from "../QuizPage.module.css";
import { OptionsGroupProps } from "./BasicPage";

type BubbleSelectProps = OptionsGroupProps;

const BubbleSelect: FC<BubbleSelectProps> = ({ onSelectHandler, question }) => {
  const [selectedTopics, setSelectedTopics] = useState<TopicType[]>([]);

  const { t } = useTranslation();

  const age = localStorage.getItem("3") || "40";

  const handleSelect = (topic: TopicType) => {
    const isInList = selectedTopics.includes(topic);

    if (selectedTopics.length === 3 && !isInList) return;

    if (isInList) {
      setSelectedTopics((prev) => prev.filter((t) => t.value !== topic.value));
    } else {
      setSelectedTopics((prev) => [...prev, topic]);
    }
  };

  const saveAnswer = () => {
    onSelectHandler({
      questionId: question.id,
      value: selectedTopics.map((el) => el.id).join(", "),
    });
  };

  return (
    <>
      <div className={styles.bubbleContainer}>
        {topics[age]?.map((topic, key) => (
          <BubbleOption
            key={key}
            emoji={topic.emoji}
            value={t(`topic.${topic.id}`)}
            onSelect={() => handleSelect(topic)}
            disabled={selectedTopics.length >= 3}
          />
        ))}
      </div>
      <button
        disabled={selectedTopics.length > 3 || !selectedTopics.length}
        onClick={saveAnswer}
      >
        {t("after_quiz.next")}
      </button>
    </>
  );
};

export default BubbleSelect;
