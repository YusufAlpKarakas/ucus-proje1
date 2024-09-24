// src/reducers/ucusReducer.js
import { SET_UCUS_LIST, SET_LOADING, SET_ERROR, CLEAR_UCUS_LIST } from '../aksiyonlar/ucusAksiyon';

const initialState = {
  ucusListesi: [],
  loading: false,
  error: null,
};

const ucusListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UCUS_LIST:
      return {
        ...state,
        ucusListesi: action.payload,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_UCUS_LIST:
      return {
        ...state,
        ucusListesi: [], // Uçuş listesini temizle
        error: null,
      };
    default:
      return state;
  }
};

export default ucusListReducer;
