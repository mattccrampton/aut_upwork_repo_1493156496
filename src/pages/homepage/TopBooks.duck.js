import axios from 'axios';

// Actions
const PRELOAD      = 'homepage/TopBooks/PRELOAD';
const LOAD         = 'homepage/TopBooks/LOAD';
const LOAD_SUCCESS = 'homepage/TopBooks/LOAD_SUCCESS';
const LOAD_FAILURE = 'homepage/TopBooks/LOAD_FAILURE';

const INITIAL_STATE = {
  book_list: [],
  error: false,
  loading: false
};


// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  //console.log("homepage/TopBooks reducer called", state, action);
  switch (action.type) {
    // do reducer stuff
    case PRELOAD:
      //console.log("Got to preload case");
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      //console.log("Got to load success case");
      return { ...state, loading: false, book_list:action.payload };
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

export function loadTopBooksSuccessAction(book_list) {
  return {
    type: LOAD_SUCCESS,
    payload: book_list
  }
}

export function loadTopBooksFailureAction(error) {
  return {
    type: LOAD_FAILURE,
    payload: error
  }
}

