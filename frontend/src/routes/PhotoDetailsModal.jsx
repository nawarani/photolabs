import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  const photo = props.photoModalDetails;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.closeModal()}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
      <div className = "photo-details-modal__header">
        < PhotoFavButton favlist={props.favlist} photoId={photo.id} checkFav={props.checkFav}/>
        <img src={photo.urls.regular} className = "photo-details-modal__image"/>
        <div className ="photo-details-modal__photographer-details">
          <img src ={photo.user.profile} className = "photo-details-modal__photographer-profile"/>
          <div className = "photo-details-modal__photographer-info">
            <div>{photo.user.username}</div>
            <div className = "photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
          </div>
        </div>
      </div>
      <div className = "photo-details-modal__images">
        < PhotoList photos={Object.values(photo.similar_photos)} favlist={props.favlist} checkFav={props.checkFav}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
