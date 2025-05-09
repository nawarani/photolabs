import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import Topics from "../mocks/topics";

const topics = Topics;

// const sampleDataForTopicList = [
//   {
//     id: 1,
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: 2,
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: 3,
//     slug: "topic-3",
//     title: "People",
//   },
// ];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      <ul className="topic-list">
        {topics.map(topic => (
          <TopicListItem key={topic.id} topic={topic} />
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
