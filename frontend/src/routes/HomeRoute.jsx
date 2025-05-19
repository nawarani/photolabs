import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import { useState } from "react";

const HomeRoute = (props) => {
  const [favList, setFavlist] = useState([]);
  const checkFav = (id) => {
    console.log("checkFavid", id)
    let newList = null;
    if(favList.includes(id)) {
      newList = favList.filter((item) => item !== id)
    } else {
      newList = [...favList, id]
    }
    setFavlist(newList);
  };
  console.log(favList);
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favlist={favList}/>
      <PhotoList photos={props.photos} favlist={favList} checkFav={checkFav} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;
