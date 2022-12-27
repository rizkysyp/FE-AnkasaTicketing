import axios from "axios";

export const bookingTiketId =(token,id) => async (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BACKEND,
        url:  `order/detail/${id}`,
        //   data: id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          // console.log(res.data.data[0].passenger_name
          //   );
          dispatch({ type: "GET_ORDER_USER_ID", payload: res.data.data[0]});
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };