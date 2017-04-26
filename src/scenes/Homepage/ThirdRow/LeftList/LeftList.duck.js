import axios from 'axios';

// Actions
const PRELOAD      = 'homepage/ThirdRow/LeftList/PRELOAD';
const LOAD         = 'homepage/ThirdRow/LeftList/LOAD';
const LOAD_SUCCESS = 'homepage/ThirdRow/LeftList/LOAD_SUCCESS';
const LOAD_FAILURE = 'homepage/ThirdRow/LeftList/LOAD_FAILURE';

const INITIAL_STATE = {
  bookList: null,
  error: false,
  loading: false
};


// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  //console.log("homepage/ThirdRow/LeftList reducer called", state, action);
  switch (action.type) {
    // do reducer stuff
    case PRELOAD:
      //console.log("Got to preload case");
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      //console.log("Got to load success case");
      return { ...state, loading: false, bookList:action.payload };
    case LOAD_FAILURE:
      //console.log("Got to load failure case");
      return { ...state, loading: false, error:action.payload };
    default: return state;
  }
}

// Action Creators
export function preLoadTopBooksAction() {
  return { type: PRELOAD };
}

export function loadTopBooksAction(browse_node, limit) {

  //console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  //console.log("process.env", process.env);

  const request = axios.get(`http://${window.app_config["api_hostname"]}/scifibooklove/books?limit=${limit}&offset=0&browse_node=${browse_node}`);
  
  return {
    type: LOAD,
    payload: request
  }
}

export function loadTopBooksSuccessAction(bookList) {
  return {
    type: LOAD_SUCCESS,
    payload: bookList
  }
}

export function loadTopBooksFailureAction(error) {
  return {
    type: LOAD_FAILURE,
    payload: error
  }
}

