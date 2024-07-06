import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import studentReducer from './reducers/studentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  students: studentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
