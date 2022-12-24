import axios from "axios";
import swal from "sweetalert";

export const detailFlight = (token) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get({
        baseURL: process.env.API_BACKEND,
        url: `:id`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_DETAILFLIGHT_ID", payload: res.data.data });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const insertDetailFlight = (id, formData, token) => async (dispatch) => {
  try {
    const result = await axios.put(
      `${process.env.API_BACKEND}ticket`,
      formData,
      {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const Flight = result.data;
    dispatch({ type: "INSERT_DETAILFLIGHT", payload: Flight });
    swal({
      title: "Good job!",
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
