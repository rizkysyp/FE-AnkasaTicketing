import React from "react";
import style from "./login.module.css";
import LogoAuth from "../../Components/base/logoAuth";
import LogoLogin from "../../Components/base/logo/logoAuth";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { loginUser } from "../../Config/redux/actions/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup.string().min(3, "Minimum 3 character").required("Required"),
    }),
    onSubmit: (values) => {
      try {
        dispatch(loginUser(values, navigate));
        // swal("Login Succes!", "success anda berhasil login", "success");
        // navigate("/DetailFlight");
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
              <h2 className="container d-flex align-items-start text-primary">
                Login
              </h2>
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
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={style.inputLogin}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
              <button
                className={style.loginbtn}
                type="submit"
                style={{ backgroundColor: "#2395FF", color: "white" }}
              >
                Sign In
              </button>{" "}
              <div>
                <p>Did you forget your password?</p>
                <Link to="/forgetpw">Forgot Password</Link>
                <br />
                <Link style={{ marginTop: "1rem" }} to="/register">
                  Register
                </Link>
                <hr />
              </div>
            </form>
          </div>

          <p className="d-flex justify-content-center">or sign in with</p>
          <div className="d-flex mt-10">
            <div className="d-flex justify-content-center">
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
