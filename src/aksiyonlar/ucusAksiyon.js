// src/aksiyonlar/ucusAksiyon.js
import axios from 'axios';

export const SET_UCUS_LIST = 'SET_UCUS_LIST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_UCUS_LIST = 'CLEAR_UCUS_LIST';

export const fetchUcusList = (filterData = {}) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const { scheduleDate = '2024-11-11', flightDirection = 'A' } = filterData; // Varsayılan değerler
      console.log("Filtreleme Parametreleri:", { scheduleDate, flightDirection });

      const response = await axios.get('http://localhost:3001/api/flights', {
        params: {
          includedelays: false,
          page: 1,
          sort: '+scheduleTime',
          scheduleDate,
          flightDirection,
        }
      });

      console.log("Uçuş Verisi:", response.data); // Gelen veriyi kontrol edin
      if (response.data.flights && response.data.flights.length > 0) {
        dispatch({ type: SET_UCUS_LIST, payload: response.data.flights });
      } else {
        dispatch({ type: SET_ERROR, payload: 'Uçuş bulunamadı' });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};

export const clearUcusList = () => {
  return {
    type: CLEAR_UCUS_LIST,
  };
};
