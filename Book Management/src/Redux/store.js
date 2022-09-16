import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
 import { reducer as App} from "../Redux/App/reducer";
 import { reducer as Auth} from "../Redux/Auth/reducer";

  import thunk from "redux-thunk"


  
 const rootReducer= combineReducers({ App, Auth})
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export { store}