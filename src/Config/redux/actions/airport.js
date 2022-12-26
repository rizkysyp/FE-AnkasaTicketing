import axios from "axios";
// import swal from "sweetalert";


  export const getAirport = () => async (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BACKEND,
        url:  `airport?limit=5`,
        //   data: id,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
        .then((res) => {
          console.log(res.data.data,'ini');
          dispatch({ type: "GET_AIRPORT", payload: res.data.data });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };