import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleArray = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];
  return (
    <div className="App">
      {sampleArray.map((sample) => {
        return <PhotoListItem key = {sample.id} photo={sample} />
      })}
    </div>
  );
};

export default App;
