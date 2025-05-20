import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from "react";


const PhotoFavButton = (props) => {
  
  const handleClick = (id) => {
    props.checkFav(id, props.favlist);
  }

  return (
    <div className="photo-list__fav-icon" onClick = {() => handleClick(props.photoId)}>
      < FavIcon selected={props.favlist.includes(props.photoId)} />
    </div>
  );
};

export default PhotoFavButton;
