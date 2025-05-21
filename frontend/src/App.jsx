import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import { useEffect } from "react";


const App = () => {
  const {
    state,
    openModal,
    checkFav,
    closeModal,
    setPhotos,
    setTopics
  } = useApplicationData();

  useEffect(() => {
    // use the fetch API to make an AJAX request to the backend
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  useEffect(() => {
    // use the fetch API to make an AJAX request to the backend
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => setTopics(data));
  }, []);

  return (
    <div className="App">
      <HomeRoute topics ={state.topicData} photos={state.photoData} openModal = {openModal} checkFav={checkFav} favlist={state.favList} />
      {state.modal && <PhotoDetailsModal closeModal={closeModal} photoModalDetails={state.photoModalDetails} checkFav={checkFav} favlist={state.favList}/>}
    </div>
  );
}


export default App;
