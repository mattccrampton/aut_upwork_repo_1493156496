import axios from 'axios';

// Actions
const LOAD_PRE_LEFT     = 'Homepage/ThirdRow/TopBooksLeft/PRELOAD';
const LOAD_LEFT         = 'Homepage/ThirdRow/TopBooksLeft/LOAD';
const LOAD_LEFT_SUCCESS = 'Homepage/ThirdRow/TopBooksLeft/LOAD_SUCCESS';
const LOAD_LEFT_FAILURE = 'Homepage/ThirdRow/TopBooksLeft/LOAD_FAILURE';

const INITIAL_STATE = {

  top: {
    book_list: [],
    error: false,
    loading: false
  },
  left: {
    book_list: [],
    error: false,
    loading: false
  },
  center: {
    book_list: [],
    error: false,
    loading: false
  },
  right: {
    book_list: [],
    error: false,
    loading: false
  },

};


// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case LOAD_PRE_LEFT:
      return { ...state, left.loading: true };
    case LOAD_LEFT_SUCCESS:
      return { ...state, left.loading: false, left.book_list_left:action.payload };
    case LOAD_LEFT_FAILURE:
      return { ...state, left.loading: false, left.error:action.payload };
    default: return state;
  }
}

// Action Creators
export function preLoadTopBooksLeftAction() {
  return { type: PRELOAD };
}

export function loadTopBooksLeftAction() {

  const request = axios.get(`http://${window.app_config["api_hostname"]}/scifibooklove/books?limit=6&offset=0&browse_node=271585011`);
  return {
    type: LOAD_LEFT,
    payload: request
  }
}

export function loadTopBooksLeftSuccessAction(book_list) {
  return {
    type: LOAD_LEFT_SUCCESS,
    payload: book_list
  }
}

export function loadTopBooksLeftFailureAction(error) {
  return {
    type: LOAD_LEFT_FAILURE,
    payload: error
  }
}

