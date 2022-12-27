import axios from "axios";




  export const bookingTiket = (token) => async (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BACKEND,
        url:  `order/users`,
        //   data: id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data.data, 'ini');
          dispatch({ type: "GET_ORDER_USER", payload: res.data.data });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  // export const bookingTiketId =(token,id) => async (dispatch) => {
  //   return new Promise((resolve, reject) => {
  //     axios({
  //       method: "GET",
  //       baseURL: process.env.REACT_APP_API_BACKEND,
  //       url:  `order/users/${id}`,
  //       //   data: id,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => {
  //         console.log(res.data);
  //         dispatch({ type: "GET_ORDER_USER_ID", payload: res.data.data });
  //         resolve(res);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // };


   