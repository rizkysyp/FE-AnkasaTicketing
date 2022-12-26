import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login";
import LogoLogin from "../../Components/base/logo/logoAuth";
import Register from "../../Pages/Register";
import ForgetPw from "../../Pages/verifOtp/ForgetPw";
import VerifyOtp from "../../Pages/verifOtp";
import Landing from "../../Pages/Landing";
import Profile from "../../Pages/Profile";
import MyBooking from "../../Pages/MyBooking/myBooking";
import MyBooking2 from "../../Pages/MyBooking/MyBooking2";
import MyBarcode from "../../Pages/MyBooking/MyBooking3"

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/MyBooking" element={<MyBooking />} />
        <Route path="/MyBooking2" element={<MyBooking2 />} />
        <Route path="/MyBarcode/:id" element={<MyBarcode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
