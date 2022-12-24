import React from "react";
import Image from "../../../Assets/img";

const LogoAuth = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#2395FF", height: "100vh" }}
    >
      <img src={Image.logoAuth} alt="" />
    </div>
  );
};

export default LogoAuth;
