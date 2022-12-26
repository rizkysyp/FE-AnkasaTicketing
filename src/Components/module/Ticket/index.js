import React from "react";
import Image from "../../../Assets/img";
import style from "./cardStyleTicket.module.css";

const Ticket = ({
  image,
  airline,
  origin,
  destination,
  transit,
  departure,
  arrive,
  price,
  onClick,
}) => {
  const time = () => {
    if (departure && arrive) {
      departure = ConvertToSeconds(departure);
      arrive = ConvertToSeconds(arrive);
      let diff = Math.abs(arrive - departure);
      return secondsTohhmmss(diff);
    }
    function ConvertToSeconds(time) {
      var splitTime = time.split(":");
      return splitTime[0] * 3600 + splitTime[1] * 60;
    }
    function secondsTohhmmss(secs) {
      var hours = parseInt(secs / 3600);
      var seconds = parseInt(secs % 3600);
      var minutes = parseInt(seconds / 60);
      return hours + "  hours  " + minutes + "  minutes ";
    }
  };

  return (
    <div className={`${style.main} card mb-4`}>
      <div className="card-body">
        <div className="d-flex">
          <img
            className={`${style.planeIcon} m-3`}
            src={image}
            alt="garuda-icon"
          />
          <p className="text-muted m-3 mt-4 fw-bold">{airline}</p>
        </div>
        <div className="d-flex mt-3">
          <div className="flex-column ms-3">
            <p className="p-0 m-0 h4">departure city{origin}</p>
            <p className="text-muted fs-6 fw-light">
              departure time{departure}
            </p>
          </div>
          <div className="flex-column ms-3 me-3">
            <img src={Image.planeticket} alt="plane-logo" />
            planet tiket
          </div>
          <div className="flex-column me-5">
            <p className="p-0 m-0 h4">arrival_city{destination}</p>
            <p className="text-muted fs-6 fw-light">arrive time{arrive}</p>
          </div>
          <div className="flex-column">
            <p className="p-0 m-0 text-muted fw-normal">time {time()}</p>
            <p className="text-muted fw-light">transit ({transit})</p>
          </div>
          <div className="justify-content-between p-3 ms-3">
            <img src={Image.koper} alt="luggage-logo" className="ms-3 me-3" />
            <img src={Image.burger} alt="food-logo" className="ms-3 me-3" />
            <img src={Image.wifi} alt="wifi-logo" className="ms-3 " />
          </div>
          <div className="d-flex">
            <p className="text-muted m-3 me-4 ">
              <span className="price text-primary fw-bold">$ {price},00</span>
              /pax
            </p>
          </div>
          <button className={style.btnSelect} onClick={onClick}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
