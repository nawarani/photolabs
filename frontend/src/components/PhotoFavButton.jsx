import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';
import { useState } from "react";


const PhotoFavButton = (props) => {
  const [fav, setFav] = useState(true);
  
  const handleClick = () => setFav(fav === true ? false : true);
  
  return (
    <div className="photo-list__fav-icon">
      <div className = "photo-list__fav-icon-svg">
          {fav && < FavBadge onClick = {handleClick} />}
      </div>
    </div>
  );
};

export default PhotoFavButton;
