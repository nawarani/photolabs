import { useReducer } from "react";

const ACTIONS = {
  CLOSE_MODAL: 'closeModal',
  OPEN_MODAL: 'openModal',
  TOGGLE_FAV: 'checkFav',
  SET_PHOTOS: 'getPhotos',
  SET_TOPICS: 'getTopics',
  TOGGLE_TOPIC: 'filterByTopic'
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
    case ACTIONS.SET_PHOTOS:
      return {...state, photoData: action.payload}
    case ACTIONS.SET_TOPICS:
      return {...state, topicData: action.payload}
    case ACTIONS.TOGGLE_TOPIC:
      return {...state, photoData: action.payload}
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  modal: false,
  photoModalDetails: {},
  favList: [],
  photoData: [],
  topicData: []
}


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  const openModal = (photosDetail) => {
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

  const setPhotos = (photos) => {
    dispatch({type: ACTIONS.SET_PHOTOS, payload: photos})
  }

  const setTopics = (topics) => {
    dispatch({type: ACTIONS.SET_TOPICS, payload: topics})
  }

  const filterByTopic = (topic) => {
    fetch(`api/topics/${topic.id}/photos`)
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.TOGGLE_TOPIC, payload: data}));
  }

  return {
    state,
    openModal,
    checkFav,
    closeModal,
    setPhotos,
    setTopics,
    filterByTopic
  }
};

export default useApplicationData;

