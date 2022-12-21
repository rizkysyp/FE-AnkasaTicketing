import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login";
import LogoLogin from "../../Components/base/logo/logoAuth";
import Register from "../../Pages/Register";
import ForgetPw from "../../Pages/verifOtp/ForgetPw";
import VerifyOtp from "../../Pages/verifOtp";
import Landing from "../../Pages/Landing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logo" element={<LogoLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpw" element={<ForgetPw />} />
        <Route path="/otp" element={<VerifyOtp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
