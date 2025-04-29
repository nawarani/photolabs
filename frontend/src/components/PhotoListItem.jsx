import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const photo = props.photo;
  return (
    <div className = "photo-list__item">
      < PhotoFavButton />
      <img src={photo.urls.regular} className = "photo-list__image"/>
      <div className ="photo-list__user-details">
        <img src ={photo.user.profile} className = "photo-list__user-profile"/>
        <div className = "photo-list__user-info">
          <div>{photo.user.username}</div>
          <div className = "photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
