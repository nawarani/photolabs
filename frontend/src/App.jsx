import HomeRoute from './routes/HomeRoute';
import './App.scss';
import Topics from "./mocks/topics";
import Photos from "./mocks/photos";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState } from "react";

const App = () => {
  const [modal, setModal] = useState(false);
  const [photoModalDetails, setPhotoModalDetails] = useState({});
  const [favList, setFavlist] = useState([]);
  
  const closeModal = () => {
    setModal(false);
  }
  const openModal = (photosDetail) => {
    setModal(true);
    console.log("inside openModal", photosDetail);
    setPhotoModalDetails(photosDetail);
  }
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

  return (
    <div className="App">
      <HomeRoute topics ={Topics} photos={Photos} openModal = {openModal} checkFav={checkFav} favlist={favList} />
      {modal && <PhotoDetailsModal closeModal={closeModal} photoModalDetails={photoModalDetails} checkFav={checkFav} favlist={favList}/>}
    </div>
  );
};

export default App;
