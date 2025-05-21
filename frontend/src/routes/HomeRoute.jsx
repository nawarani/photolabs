import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favlist={props.favlist} filterByTopic={props.filterByTopic}/>
      <PhotoList photos={props.photos} favlist={props.favlist} checkFav={props.checkFav} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;
