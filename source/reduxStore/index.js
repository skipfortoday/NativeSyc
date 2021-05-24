
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import thunk from "redux-thunk";
const middleware = [thunk];

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk)
//   )
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
