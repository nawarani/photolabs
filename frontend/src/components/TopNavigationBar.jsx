import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} filterByTopic={props.filterByTopic}/>
      <FavBadge favlist={props.favlist}/>
    </div>
  )
};

export default TopNavigation;
