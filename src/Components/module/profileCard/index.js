import React from "react";
// import Button from "../../base/button";
import styles from "./profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Input from "../../base/input";
import Image from "../../../Assets/img";

const ProfileCard = ({
  fullname,
  city,
  address,
  profImg,
  noCard,
  typeCard,
  saldoCard,
  onChange,
}) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await localStorage.clear();
    swal({
      title: "Log Out",
      text: `Log Out Success`,
      icon: "success",
    });
    navigate("/login");
  };
  return (
    <div className={styles.profileCard}>
      <div className={styles.wraperProfile}>
        <img src={profImg ? profImg : ""} alt="" />
      </div>
      <div>
        <Input
          label="Select photo"
          name="files"
          id="files"
          className="inputFoto"
          classNameLabel="labelFoto"
          type="file"
          onChange={onChange}
        />
      </div>
      <div className={styles.name}>{fullname ? fullname : ""}</div>
      <div className={styles.address}>
        {city ? city : ""}, {address ? address : ""}
      </div>
      <div className={styles.titleCard}>
        <div>Cards</div>
        <div>+ Add</div>
      </div>
      <div className={styles.contentCard}>
        <div>{noCard ? noCard : ""}</div>
        <div className={styles.cardType}>
          <div>{typeCard ? typeCard : ""} Card</div>
          <div>$ {saldoCard ? saldoCard : ""}</div>
        </div>
      </div>
      <div className={styles.menu}>
        {/* profile */}
        <Link to="/profile">
          <div className="d-flex justify-content-between">
            <button className="btn">
              <img src={Image.u9} alt="" />
            </button>
            <button className="btn">
              <img src={Image.b1} alt="" />
            </button>
          </div>
        </Link>
        {/* my reviuw */}
        <div className="d-flex justify-content-between">
          <button className="btn">
            <img src={Image.u7} alt="" />
          </button>
          <button className="btn">
            <img src={Image.b3} alt="" />
          </button>
        </div>
        {/* setting */}
        <div className="d-flex justify-content-between">
          <button className="btn">
            <img src={Image.u8} alt="" />
          </button>
          <button className="btn">
            <img src={Image.b3} alt="" />
          </button>
        </div>
        {/* logout */}
        <div className="d-flex justify-content-between" onClick={handleLogout}>
          <button className="btn">
            <img src={Image.u6} alt="" />
          </button>
          <button className="btn">
            <img src={Image.b2} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
