import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from "react";


const PhotoFavButton = (props) => {
  const [fav, setFav] = useState(true);
  
  const handleClick = () => {
    setFav(fav === true ? false : true);
    console.log("fav:", fav);
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick = {handleClick} >
        < FavIcon selected={fav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
