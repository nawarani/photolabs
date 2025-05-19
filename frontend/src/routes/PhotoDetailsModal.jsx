import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const photo = props.photo;
  console.log(photo);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.closeModal()}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
