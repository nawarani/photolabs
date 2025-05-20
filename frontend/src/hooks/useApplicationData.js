import { useReducer } from "react";

const ACTIONS = {
  closeModal: 'closeModal',
  openModal: 'openModal',
  checkFav: 'checkFav'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.closeModal:
      return {...state, modal:false}
    case ACTIONS.openModal:
      return {...state, modal:true, photoModalDetails: action.payload}
    case ACTIONS.checkFav:
      let newList = null;
      if(state.favList.includes(action.payload)) {
        newList = state.favList.filter((item) => item !== action.payload)
      } else {
        newList = [...state.favList, action.payload]
      }
      return {...state, favList:newList}
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = () => {

  const initialState = {
    modal: false,
    photoModalDetails: {},
    favList: []
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const closeModal = () => {
    dispatch({type: ACTIONS.closeModal});
  }

  const openModal = (photosDetail) => {
    console.log("inside openmodal", photosDetail);
    dispatch({type: ACTIONS.openModal, payload: photosDetail});
  }

  const checkFav = (id, favList) => {
    let newList = null;
    if(state.favList.includes(id)) {
      newList = favList.filter((item) => item !== id)
    } else {
      newList = [...favList, id]
    }
    dispatch({type: ACTIONS.checkFav, payload: id});
  }

  return {
    state,
    openModal,
    checkFav,
    closeModal
  }
};

export default useApplicationData;

