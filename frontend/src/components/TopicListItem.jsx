import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const topic = props.topic;
  return (
    <li className="topic-list__item" onClick={() => props.filterByTopic(topic)}>
      <span>{topic.title}</span>
    </li>
  );
};

export default TopicListItem;
