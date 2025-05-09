import HomeRoute from './routes/HomeRoute';
import './App.scss';
import Topics from "./mocks/topics";
import Photos from "./mocks/photos";

const App = () => {
  return (
    <div className="App">
      <HomeRoute topics ={Topics} photos={Photos}/>
    </div>
  );
};

export default App;
