import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { topics } from "../../../helpers/constants/topics";
import { BubbleOption } from "../../../ui/Option";
import { TopicType } from "../../../types/topics";

const BubbleSelect: FC = () => {
  const [selectedTopics, setSelectedTopics] = useState<TopicType[]>([]);

  const { t } = useTranslation();

  const age = localStorage.getItem("3") || "40";

  const handleSelect = (topic: TopicType) => {
    if (selectedTopics.length > 3) return;

    const isInList = selectedTopics.includes(topic);
    if (isInList) {
      setSelectedTopics((prev) => prev.filter((t) => t.value !== topic.value));
    } else {
      setSelectedTopics((prev) => [...prev, topic]);
    }
  };

  return (
    <div>
      {topics[age]?.map((topic, key) => (
        <BubbleOption
          key={key}
          {...topic}
          onSelect={() => handleSelect(topic)}
        />
      ))}
      <button disabled={selectedTopics.length > 3 || !selectedTopics.length}>
        {t("after_quiz.next")}
      </button>
    </div>
  );
};

export default BubbleSelect;
