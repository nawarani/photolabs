import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const photo = props.photo;
  return (
    <div>
      <button>Favourite</button>
      <img src={photo.urls.regular}/>
      <footer>
        <img src ={photo.user.profile}/>
        <span>{photo.user.username}</span>
        <span>{photo.location.city}, {photo.location.country}</span>
      </footer>
    </div>
  )
};

export default PhotoListItem;
