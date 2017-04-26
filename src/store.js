import { createStore, applyMiddleware } from 'redux';
import rootReducer from  './reducers';
import promise from 'redux-promise';
//import logger from "redux-logger";



export default(initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
          promise, //thunkMiddleware,
          //logger()
        ),
    );
}
/*
*/

/*
//Run logger only when in debug mode
if(config.debug_mode){
  var createStoreWithMiddleware = applyMiddleware( promise, logger() )(createStore);
} else {
  var createStoreWithMiddleware = applyMiddleware( promise )(createStore);
};


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
, app);
*/
