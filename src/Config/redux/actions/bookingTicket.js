import axios from "axios";
// import swal from "sweetalert";

export const bookingTiket = (token) => async (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BACKEND,
        url: `ticket/1780f206-3be1-4e99-b696-f2aa7ade6837`,
        //   data: id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          dispatch({ type: "GET_TCKET_ID", payload: res.data.data });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };