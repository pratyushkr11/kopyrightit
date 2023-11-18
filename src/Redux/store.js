// // store.js
// import { createStore, combineReducers } from 'redux';
// import { authReducer } from './authReducer';

// // Combine reducers if you have more than one reducer
// const rootReducer = combineReducers({
//   auth: authReducer,
//   // Add other reducers here if needed
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  // Add any middleware or enhancers as needed
);

export default store;

