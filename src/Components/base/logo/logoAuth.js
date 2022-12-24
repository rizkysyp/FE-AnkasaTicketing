import React from "react";
import Image from "../../../Assets/img";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoLogin = () => {
  return (
    <div className="pt-5">
      <div className="d-flex justify-content-center">
        <img src={Image.pesawat} alt="" />
        <h2>Ankasa</h2>
      </div>
    </div>
  );
};

export default LogoLogin;
