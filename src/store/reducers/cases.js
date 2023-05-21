import {
    GET_CASES,
    GET_CASES_BY_ID,
    SHOW_LOADER,
    HIDE_LOADER
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
          loading: false
        };
      case GET_CASES_BY_ID:
        return {
          ...state,
          dataById: payload.data,
          loading: false
        };
        case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
  
      default:
        return state;
    }
  };
  
  export default casesReducers;
  