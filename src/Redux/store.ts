import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import timeReducer from "./reducer/timeReducer";
import menuListReducer from './reducer/menuListReducer';
import filterReducer from './reducer/filterReducer';
const rootReducer = combineReducers({
  time: timeReducer,
  menu: menuListReducer,
  filter: filterReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
