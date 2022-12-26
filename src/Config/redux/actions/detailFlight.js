import axios from "axios";
import swal from "sweetalert";

export const getPayment = (token) => async (dispatch) => {
  // console.log(process.env.REACT_APP_API_BACKEND);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_API_BACKEND}ticket/49823683-f59e-4d4a-8244-64dc6fd42741`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
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

export const putOrder = (id, formData, token) => async (dispatch) => {
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_API_BACKEND}order/49823683-f59e-4d4a-8244-64dc6fd42741`,
      formData,
      {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const Flight = result.data;
    dispatch({ type: "PUT_ORDER_ID", payload: Flight });
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
