import axios from "axios";
import swal from "sweetalert";

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
          type: "GET_TICKET_ID",
          payload: res.data.data,
        });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getUserProf = (token) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_API_BACKEND}user/profile,
`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "GET_USER_PROFILE",
          payload: res.data.data,
        });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const postOrder = (formData, token) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}order`,
      formData,
      {
        "content-type": "multipart/data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const Flight = result.data;
    dispatch({ type: "POST_ORDER_ID", payload: Flight });
    swal({
      title: "Thanks!",
      text: `${result.data.message}`,
      icon: "success",
    });
  } catch (error) {
    console.log(error);
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};
