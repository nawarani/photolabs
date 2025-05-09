import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';
import Photos from "../mocks/photos";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
