import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!props.isFavPhotoExist} selected={props.favlist.length}/>
    </div>
  ) 
};

export default FavBadge;
