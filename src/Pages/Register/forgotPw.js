import React from "react";
import style from "./style.module.css";
import LogoAuth from "../../Components/base/logoAuth";
import LogoLogin from "../../Components/base/logo/logoAuth";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ForgotPw } from "../../Config/redux/actions/user";

const ForgetPw = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email format").required("Required"),
    }),
    onSubmit: (values) => {
      try {
        dispatch(ForgotPw(values, navigate));
      } catch (error) {
        swal.fire({
          title: "Error!",
          text: error,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      }
    },
  });
  return (
    <div className="row" style={{ height: "100vh" }}>
      <div className="col-6">
        <LogoAuth />
      </div>
      <div className="col-6">
        <div>
          <LogoLogin />
        </div>
        <div
          className=" d-flex flex-column justify-content-center p-10"
          style={{
            backgroundColor: "white",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <div className="container  d-flex justify-content-center">
            <form
              onSubmit={formik.handleSubmit}
              className="flex-column d-flex "
            >
              <h1 className="container d-flex align-items-start">
                Forgot Password
              </h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={style.inputLogin}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
              <button
                className={style.loginbtn}
                type="submit"
                style={{ backgroundColor: "#2395FF", color: "white" }}
              >
                Send
              </button>{" "}
              <div>
                <p>You'll get message soon on your email</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPw;
