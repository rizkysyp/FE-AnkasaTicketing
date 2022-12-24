import React, { useState } from "react";
import LogoAuth from "../../Components/base/logoAuth";
import { Link, useNavigate } from "react-router-dom";
import LogoLogin from "../../Components/base/logo/logoAuth";
import style from "./register.module.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import swal from "sweetalert";
import * as yup from "yup";
import { registerUser } from "../../Config/redux/actions/user";

const Register = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleCheckbox = (e) => {
    setSuccess(e.target.checked);
  };

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      fullname: yup.string().required("Required"),
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup.string().min(8, "Minimum 8 character").required("Required"),
    }),
    onSubmit: (values) => {
      try {
        dispatch(registerUser(values, navigate));
        if (!success) {
          swal({
            title: "Warning",
            text: `Anda harus menyetujui persyaratan kami terlebih dahulu untuk lanjut!`,
            icon: "warning",
          });
        }
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
          <div className="container d-flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex-column d-flex">
              <h1 className="d-flex align-items-start">Register</h1>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className={style.inputRegister}
                value={formik.values.fullname}
                onChange={formik.handleChange}
              />
              {formik.errors.fullname && formik.touched.fullname && (
                <p>{formik.errors.fullname}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={style.inputRegister}
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
                className={style.inputRegister}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}

              <button
                className={style.registerbtn}
                type="submit"
                style={{ backgroundColor: "#2395FF", color: "white" }}
              >
                Sign Up
              </button>
              <p className="d-flex">
                <input
                  type="checkbox"
                  name="check"
                  className={style.check}
                  onChange={handleCheckbox}
                />
                {"  "}
                &nbsp; &nbsp; Accept terms and condition
              </p>
              <hr />
            </form>
          </div>

          <div className="container">
            <p>Already have an account?</p>
            <Link to="/login">
              <button
                className={style.registerbtn}
                type="submit"
                style={{
                  color: "#2395FF",
                  borderRadius: "10px",
                  cursor: "pointer",
                  margin: "15px 0",
                  borderColor: "#2395FF",
                }}
              >
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
