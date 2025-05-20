import { useState } from "react";

const useApplicationData = () => {
  const initialState = {
    modal: false,
    photoModalDetails: {},
    favList: []
  }

  const [state, setState] = useState(initialState);

  const closeModal = () => {
    setState({...state, modal:false});
  }

  const openModal = (photosDetail) => {
    console.log("inside openmodal", photosDetail);
    setState({...state, modal:true, photoModalDetails: photosDetail});
  }

  const checkFav = (id, favList) => {
    let newList = null;
    if(state.favList.includes(id)) {
      newList = favList.filter((item) => item !== id)
    } else {
      newList = [...favList, id]
    }
    setState({...state, favList:newList});
  }

  return {
    state,
    openModal,
    checkFav,
    closeModal
  }
};


export default useApplicationData;