import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailFlight from "../../Pages/DetailFlight";
import MyBarcode from "../../Pages/MyBooking/MyBooking3";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DetailFlight" element={<DetailFlight />} />
        <Route path="/MyBooking" element={<MyBarcode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
