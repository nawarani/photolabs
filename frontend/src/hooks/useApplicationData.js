import { useState } from "react";
import { useReducer } from "react";

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



// const initialState = {
//   modal: false,
//   photoModalDetails: {},
//   favList: []
// }

// const [state, dispatch] = useReducer(reducer, initialState);

// export const ACTIONS = {
//   closeModal: 'closeModal',
//   openModal: 'openModal',
//   checkFav: 'checkFav'
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.closeModal:
//       return {...state, modal:false}
//     case ACTIONS.openModal:
//       return {...state, modal:true, photoModalDetails: photosDetail}
//     case ACTIONS.checkFav:
//       let newList = null;
//       if(state.favList.includes(id)) {
//         newList = favList.filter((item) => item !== id)
//       } else {
//         newList = [...favList, id]
//       }
//       return {...state, favList:newList}
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }
// export default reducer;

