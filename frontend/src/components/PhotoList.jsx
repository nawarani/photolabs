import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const photos = props.photos;
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} favlist={props.favlist} checkFav={props.checkFav} openModal={props.openModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
