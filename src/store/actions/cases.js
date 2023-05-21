import CasesService from "../../services/casesService"
import { GET_CASES,GET_CASES_BY_ID } from "../types"

export const getCases = (params, history) =>
  async function (dispatch) {
    try {
      const response = await CasesService.getCases(params);
      dispatch({ type: GET_CASES, payload: response });
      // console.log(response)
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getCasesById = (id) =>
  async function (dispatch) {
    try {
      const response = await CasesService.getCasesById(id);
      dispatch({ type: GET_CASES_BY_ID, payload: response.data });
      // console.log(response)
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };