import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} favlist={props.favlist} checkFav={props.checkFav} openModal={props.openModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
