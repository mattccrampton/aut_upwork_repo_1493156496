import axios from 'axios';

// Actions
const PRELOAD      = 'bookDetail/BookDetailContent/PRELOAD';
const LOAD         = 'bookDetail/BookDetailContent/LOAD';
const LOAD_SUCCESS = 'bookDetail/BookDetailContent/LOAD_SUCCESS';
const LOAD_FAILURE = 'bookDetail/BookDetailContent/LOAD_FAILURE';

const INITIAL_STATE = {
  bookDetailContent: null,
  error: false,
  loading: false
};


// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  //console.log("bookDetail/ThirdRow/LeftList reducer called", state, action);
  switch (action.type) {
    // do reducer stuff
    case PRELOAD:
      //console.log("Got to preload case");
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      //console.log("Got to load success case");
      return { ...state, loading: false, bookDetailContent:action.payload };
    case LOAD_FAILURE:
      //console.log("Got to load failure case");
      return { ...state, loading: false, error:action.payload };
    default: return state;
  }
}

// Action Creators
export function preLoadBookDetailContentAction() {
  return { type: PRELOAD };
}

export function loadBookDetailContentAction(book_id) {

  //console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  //console.log("process.env", process.env);

  const request = axios.get(`http://${window.app_config["api_hostname"]}/scifibooklove/books/${book_id}`);
  
  return {
    type: LOAD,
    payload: request
  }
}

export function loadBookDetailContentSuccessAction(bookDetailContent) {
  return {
    type: LOAD_SUCCESS,
    payload: bookDetailContent
  }
}

export function loadBookDetailContentFailureAction(error) {
  return {
    type: LOAD_FAILURE,
    payload: error
  }
}

