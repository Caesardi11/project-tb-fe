import API from "./api";

const CompanyService = {
  getCases: async function (data) {
    try {
      const response = await API.get("/api/cases", data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getCasesById: async function (id) {
    try {
      const response = await API.get(`/api/cases/${id}`);
      return response;
    } catch (err) {
      console.log("cases service error", err);
      throw err;
    }
  },
}

export default CompanyService