// reducers/configureStore.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './genelReducer'; // Root reducer import edildi
import { thunk } from 'redux-thunk';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk)); // Store oluşturuluyor
}
