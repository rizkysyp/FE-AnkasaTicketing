import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailFlight from "../../Pages/DetailFlight";
import MyBarcode from "../../Pages/MyBooking/MyBooking3";
import Login from "../../Pages/Login";
import LogoLogin from "../../Components/base/logo/logoAuth";
import Register from "../../Pages/Register/customer";
import RegisterAdmin from "../../Pages/Register/admin";
import Profile from "../../Pages/Profile/index";
// import ForgetPw from "../../Pages/verifOtp/ForgetPw";
import VerifyOtp from "../../Pages/verifOtp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DetailFlight" element={<DetailFlight />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/MyBooking" element={<MyBarcode />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/logo" element={<LogoLogin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
        <Route path="/verifOtp" element={<VerifyOtp />} />
        {/* <Route path="/verifOtp" element={<ForgetPw />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
