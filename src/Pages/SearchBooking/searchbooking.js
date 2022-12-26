import React, { useEffect, useState } from "react";
import NavbarComponent from "../../Components/base/header";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Footer from "../../Components/base/footer";
import Ticket from "../../Components/module/Ticket";
import HeaderSearch from "../../Components/base/header/search";
import axios from "axios";

const SearchBooking = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [selected, setSelected] = useState(null);
  const [onedit, setOnedit] = useState(false);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  let tiket = `https://flyer-be-production.up.railway.app/ticket`;
  const getData = () => {
    axios
      .get(tiket)
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data);

        setSelected(null);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
        setData([]);
      });
  };
  return (
    <div className="container">
      <nav>
        <NavbarComponent />
      </nav>
      <main>
        <div className="row">
          <HeaderSearch
          // onClick={(e) => {
          //   searchBandara(e);
          // }}
          />
          {/*filter*/}
          <div className="col-log-4 col">
            <div className="d-flex justify-content-between">
              <h5>
                <b>Filter</b>
              </h5>
              <button
                className="btn btn-transparent text-primary"
                // onClick={reset}
              >
                <b>Reset</b>
              </button>
            </div>
            <div className="card">
              {/*Transit*/}
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h6
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <b>Transit</b>
                    </button>
                  </h6>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="d-flex justify-content-between">
                          Direct
                          <input
                            type="checkbox"
                            value="direct"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setTransit("direct");
                            //   } else {
                            //     setTransit("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          Transit{" "}
                          <input
                            type="checkbox"
                            value="direct"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setTransit("transit1");
                            //   } else {
                            //     setTransit("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          Transit 2+
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setTransit("transit2");
                            //   } else {
                            //     setTransit("");
                            //   }
                            // }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Facilities*/}
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h6
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <b>Facilities</b>
                    </button>
                  </h6>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="d-flex justify-content-between">
                          Luggage
                          <input
                            type="checkbox"
                            value="direct"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setFacilities("lunggage");
                            //   } else {
                            //     setFacilities("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          In-Flight Meal{" "}
                          <input
                            type="checkbox"
                            value="direct"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setFacilities("meal");
                            //   } else {
                            //     setFacilities("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          Wi-fi
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setFacilities("wifi");
                            //   } else {
                            //     setFacilities("");
                            //   }
                            // }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Departure Time*/}

              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h6
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <b>Departure Time</b>
                    </button>
                  </h6>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="d-flex justify-content-between">
                          00:00 - 06:00
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setDeparture("mid");
                            //   } else {
                            //     setDeparture("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          06:00 - 12:00{" "}
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setDeparture("morning");
                            //   } else {
                            //     setDeparture("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          12:00 - 18:00
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setDeparture("afternoon");
                            //   } else {
                            //     setDeparture("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          18:00 - 24:00
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setDeparture("night");
                            //   } else {
                            //     setDeparture("");
                            //   }
                            // }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Time Arrived*/}

              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h6
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <b>Time Arrived</b>
                    </button>
                  </h6>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="d-flex justify-content-between">
                          00:00 - 06:00
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setTimeArrive("mid");
                            //   } else {
                            //     setTimeArrive("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          06:00 - 12:00{" "}
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setTimeArrive("morning");
                            //   } else {
                            //     setTimeArrive("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          12:00 - 18:00
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setTimeArrive("afternoon");
                            //   } else {
                            //     setTimeArrive("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          18:00 - 24:00
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setTimeArrive("night");
                            //   } else {
                            //     setTimeArrive("");
                            //   }
                            // }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Airlines*/}

              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h6
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <b>Airlines</b>
                    </button>
                  </h6>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="d-flex justify-content-between">
                          Garuda Indonesia
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setAirlines("Garuda Indonesia");
                            //   } else {
                            //     setAirlines("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          Air Asia{" "}
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setAirlines("Air Asia");
                            //   } else {
                            //     setAirlines("");
                            //   }
                            // }}
                          />
                        </li>
                        <li className="d-flex justify-content-between">
                          Lion Air
                          <input
                            type="checkbox"
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setAirlines("Fly Emirates");
                            //   } else {
                            //     setAirlines("");
                            //   }
                            // }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Ticket Price*/}

              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h6
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <b>Ticket Price</b>
                    </button>
                  </h6>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-group list-group-flush">
                        <li className="d-flex justify-content-between">
                          <p>Lowest</p>
                          <span>Highest</span>
                        </li>
                        <div>
                          <Box>
                            <Slider
                              getAriaLabel={() => "Temperature range"}
                              valueLabelDisplay="auto"
                              //   value={value}
                              //   onChange={handleChange}
                            />
                          </Box>
                        </div>
                        <li>
                          <input
                            type="text"
                            style={{
                              width: "25%",
                              background: "white",
                              border: "none",
                            }}
                            // placeholder={"$" + value[0] * 100 + ",00"}
                            className="form-control"
                            disabled
                          />
                          <input
                            type="text"
                            // placeholder={"$" + value[1] * 100 + ",00"}
                            className="form-control "
                            style={{
                              width: "30%",
                              background: "white",
                              border: "none",
                            }}
                            disabled
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*select ticket*/}
          <div className="col col-lg-8">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h5>
                  <b>
                    Select Ticket{" "}
                    <span
                      className="ms-2 text-secondary"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      {/* {`(${ticket.data?.length} flight found)`} */}
                    </span>
                  </b>{" "}
                </h5>
                <p>(6 flight found)</p>
              </div>
              <button>
                <b>Sort By</b>
                <svg>sort</svg>
              </button>
            </div>
            <div className="card">
              {data?.length >= 1
                ? data.map((item, index) => {
                    return (
                      <Ticket
                        key={item.id}
                        image={item.logo}
                        airline={item.airlines_names}
                        origin={item.departure_city}
                        transit={item.arrival_city}
                        departure={item.departure}
                        arrive={item.arrive}
                        price={item.price}
                        // facilities={item.facilities}
                        // onClick={() => handleClickTiket(item.id)}
                      />
                    );
                  })
                : "Ticket not found"}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SearchBooking;
