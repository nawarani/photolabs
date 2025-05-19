import HomeRoute from './routes/HomeRoute';
import './App.scss';
import Topics from "./mocks/topics";
import Photos from "./mocks/photos";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState } from "react";

const App = () => {
  const [modal, setModal] = useState(true);
  const [photoModalDetails, setPhotoModalDetails] = useState({});
  const closeModal = () => {
    setModal(false);
  }
  const openModal = (photosDetail) => {
    setModal(true);
    setPhotoModalDetails(photosDetail);
  }

  return (
    <div className="App">
      <HomeRoute topics ={Topics} photos={Photos} openModal = {openModal}/>
      {modal && <PhotoDetailsModal closeModal={closeModal} photo={photoModalDetails}/>}
    </div>
  );
};

export default App;
