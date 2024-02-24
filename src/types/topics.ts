export type TopicType = {
  value: string;
  emoji: string;
  id: string;
};

export type TopicListType = {
  [key: string]: TopicType[];
};
