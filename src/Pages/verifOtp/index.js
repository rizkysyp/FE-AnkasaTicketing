import React, { useState } from "react";
import LogoAuth from "../../Components/base/logoAuth";
import LogoLogin from "../../Components/base/logo/logoAuth";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VerifOtp } from "../../Config/redux/actions/user";

const VerifyOtp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(otp);
    let data = {
      email,
      otp,
    };
    dispatch(VerifOtp(data, navigate));
  };
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
            <form onSubmit={postData} className="flex-column d-flex ">
              <h1 className="container d-flex align-items-start">
                Verification Otp
              </h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={style.inputLogin}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                name="otp"
                placeholder="Otp"
                className={style.inputLogin}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                className={style.loginbtn}
                type="submit"
                style={{ backgroundColor: "#2395FF", color: "white" }}
              >
                Verif
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
