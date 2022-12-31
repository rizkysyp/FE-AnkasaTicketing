import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailFlight from "../../Pages/DetailFlight";
import MyBarcode from "../../Pages/MyBooking/MyBooking3";
import Login from "../../Pages/Login";
import LogoLogin from "../../Components/base/logo/logoAuth";
import Register from "../../Pages/Register/customer";
import RegisterAdmin from "../../Pages/Register/admin";
import ForgetPw from "../../Pages/verifOtp/ForgetPw";
import VerifyOtp from "../../Pages/verifOtp";
import Landing from "../../Pages/Landing";
import Profile from "../../Pages/Profile";
import MyBooking from "../../Pages/MyBooking/MyBooking";
import MyBooking2 from "../../Pages/MyBooking/MyBooking2";
import SearchBooking from "../../Pages/SearchBooking/searchbooking";
import Ticket from "../../Components/module/Ticket";
// import MyBarcode from "../../Pages/MyBooking/MyBooking3";
import Admin from "../../Pages/TicketAdmin/admin";
import InsertTicket from "../../Pages/TicketAdmin/insert";
import UpdateTicketAll from "../../Pages/TicketAdmin/update";
import GetAirlines from "../../Pages/AirlinesAdmin";
import InsertAirlines from "../../Pages/AirlinesAdmin/insert";
import UpdateAirlines from "../../Pages/AirlinesAdmin/update";
import AdminBooking from "../../Pages/BookingAdmin";
import Airport from "../../Pages/AirportAdmin";
import InsertAirport from "../../Pages/AirportAdmin/insert";
import UpdateAirport from "../../Pages/AirportAdmin/update";
import NavbarComponentAdmin from "../../Components/base/header/headerAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/DetailFlight" element={<DetailFlight />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgetpw" element={<ForgetPw />} />
        <Route path="/otp" element={<VerifyOtp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/MyBooking" element={<MyBooking />} />
        <Route path="/searchbooking" element={<SearchBooking />} />
        <Route path="/tiket" element={<Ticket />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
        <Route path="/verifOtp" element={<VerifyOtp />} />
        <Route path="/payment/:id" element={<MyBooking2 />} />
        <Route path="/MyBarcode/:id" element={<MyBarcode />} />
        <Route path="/Admin/ticket" element={<Admin />} />
        <Route path="/Admin/ticket/insert" element={<InsertTicket />} />
        <Route path="/Admin/ticket/update/:id" element={<UpdateTicketAll />} />
        <Route path="/Admin/airlines" element={<GetAirlines />} />
        <Route path="/Admin/airlines/insert" element={<InsertAirlines />} />
        <Route path="/Admin/airlines/update/:id" element={<UpdateAirlines />} />
        <Route path="/Admin/booking" element={<AdminBooking />} />
        <Route path="/Admin/airport" element={<Airport />} />
        <Route path="/Admin/airport/insert" element={<InsertAirport />} />
        <Route path="/Admin/airport/update/:id" element={<UpdateAirport />} />
        <Route path="/headerAdmin" element={<NavbarComponentAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
