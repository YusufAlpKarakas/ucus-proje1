// reducers/genelReducer.js
import { combineReducers } from 'redux';
import ucusListReducer from './ucusListReducer';

const rootReducer = combineReducers({
   ucusListReducer, // Uçuş listesi reducer'ı
});

export default rootReducer;
