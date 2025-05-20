import HomeRoute from './routes/HomeRoute';
import './App.scss';
import Topics from "./mocks/topics";
import Photos from "./mocks/photos";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    state,
    openModal,
    checkFav,
    closeModal
  } = useApplicationData();
  console.log("inside app.jsx");

  return (
    <div className="App">
      <HomeRoute topics ={Topics} photos={Photos} openModal = {openModal} checkFav={checkFav} favlist={state.favList} />
      {state.modal && <PhotoDetailsModal closeModal={closeModal} photoModalDetails={state.photoModalDetails} checkFav={checkFav} favlist={state.favList}/>}
    </div>
  );
}


export default App;
