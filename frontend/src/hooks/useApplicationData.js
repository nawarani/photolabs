import { useReducer } from "react";

const ACTIONS = {
  CLOSE_MODAL: 'closeModal',
  OPEN_MODAL: 'openModal',
  TOGGLE_FAV: 'checkFav'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CLOSE_MODAL:
      return {...state, modal:false}
    case ACTIONS.OPEN_MODAL:
      return {...state, modal:true, photoModalDetails: action.payload}
    case ACTIONS.TOGGLE_FAV:
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

const initialState = {
  modal: false,
  photoModalDetails: {},
  favList: []
}


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  const openModal = (photosDetail) => {
    console.log("inside openmodal", photosDetail);
    dispatch({type: ACTIONS.OPEN_MODAL, payload: photosDetail});
  }

  const checkFav = (id, favList) => {
    let newList = null;
    if(state.favList.includes(id)) {
      newList = favList.filter((item) => item !== id)
    } else {
      newList = [...favList, id]
    }
    dispatch({type: ACTIONS.TOGGLE_FAV, payload: id});
  }

  return {
    state,
    openModal,
    checkFav,
    closeModal
  }
};

export default useApplicationData;

