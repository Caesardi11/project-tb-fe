import {
    GET_CASES,
    GET_CASES_BY_ID,
  } from "../types";
  
  const initialState = {
    data: [],
    dataById: false,
    loading: true
  };
  
  const casesReducers = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CASES:
        return {
          ...state,
          data: payload.data,
        //   loading: false
        };
      case GET_CASES_BY_ID:
        return {
          ...state,
          dataById: payload.data,
        };
  
      default:
        return state;
    }
  };
  
  export default casesReducers;
  