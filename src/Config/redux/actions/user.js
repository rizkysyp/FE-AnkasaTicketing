import axios from "axios";
import swal from "sweetalert";

export const loginUser = (loginData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}user/login`,
      loginData
    );
    const user = result.data.data;
    const dataLocal = user;
    console.log(dataLocal);
    localStorage.setItem("Ankasa", JSON.stringify(dataLocal));
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });

    // navigate("/MyBooking3");
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      if (user.role == "admin") {
        console.log("ini admin");
      } else {
        console.log("ini customer");
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "USER_LOGIN_ERROR" });
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};

export const registerUserCustomer =
  (dataForm, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "USER_REGISTER_PENDING" });
      const result = await axios.post(
        `${process.env.REACT_APP_API_BACKEND}user/register/customer`,
        dataForm
      );
      const user = result.data.data;
      console.log(user);
      console.log(result.data.data);
      dispatch({ type: "USER_REGISTER_CUSTOMER_SUCCESS", payload: user });
      navigate("/verifOtp");
    } catch (error) {
      console.log(error);
      dispatch({ type: "USER_REGISTER_CUSTOMER_ERROR" });
      swal({
        title: "Oops!",
        text: `${error.response.data.message}`,
        icon: "error",
      });
    }
  };
export const registerUserAdmin = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}user/register/admin`,
      dataForm
    );
    const user = result.data.data;
    console.log(user);
    console.log(result.data.data);
    dispatch({ type: "USER_REGISTER_ADMIN_SUCCESS", payload: user });
    navigate("/verifOtp");
  } catch (error) {
    console.log(error);
    dispatch({ type: "USER_REGISTER_ADMIN_ERROR" });
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};
export const VerifOtp = (data, navigate) => async (dispacth) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}user/verification`,
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispacth({ type: "USER_VERIFICATION_SUCCESS", payload: user });
    navigate("/Login");
    console.log("user verif success");
  } catch (err) {
    console.log("user verif fail");
    console.log(err);
  }
};
export const ForgotPw = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}user/forgot-password`,
      data
    );
    const user = result.data.data;
    console.log(user);
    console.log(result.data.data);
    dispatch({ type: "CONFIRM_EMAIL_SUCCESS", payload: user });
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch({ type: "CONFIRM_EMAIL_ERROR" });
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};
