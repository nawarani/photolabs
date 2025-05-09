import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';

// const sampleDataForPhotoListItem = {
//   id: 1,
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   urls: {
//     full: "/Image-1-Full.jpeg",
//     regular: "/Image-1-Regular.jpeg",
//   },
//   user: {
//     username: "exampleuser",
//     name: "Joe Example",
//     profile: "/profile-1.jpg",
//   },
// };

// Note: Rendering a single component to build components in isolation

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
