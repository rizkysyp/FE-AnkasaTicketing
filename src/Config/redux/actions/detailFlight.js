import axios from "axios";
// import swal from "sweetalert";

export const DetailFlight = (token) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      baseURL: process.env.REACT_APP_API_BACKEND,
      url: `/`,
      //   data: id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_PROFILE_ID", payload: res.data.data });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
