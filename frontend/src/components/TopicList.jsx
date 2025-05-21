import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {props.topics.map(topic => (
        <TopicListItem key={topic.id} topic={topic} filterByTopic={props.filterByTopic} />
      ))}
    </ul>
  );
};

export default TopicList;
