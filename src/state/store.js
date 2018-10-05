import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import {createLogger} from 'redux-logger';
import {autoRehydrate} from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  reducer,
  undefined,
  composeWithDevTools(
  applyMiddleware(...[createLogger()]),
  autoRehydrate()
  )
);
