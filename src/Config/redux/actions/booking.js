import axios from "axios";

export const getTicket = (id, token) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}ticket/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_BOOKING_ID",
          payload: res.data.data,
        });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
