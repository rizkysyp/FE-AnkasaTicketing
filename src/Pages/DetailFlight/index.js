import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import Fly from "../../img/fly.png";
import garuda from "../../img/garuda.png";
import Form from "react-bootstrap/Form";

function FlightDetail() {
  return (
    <div
      className="container-fluid mb-5"
      style={{
        backgroundColor: "blue",
        height: "11rem",
        borderBottomRightRadius: "25%",
        borderBottomLeftRadius: "25%",
        marginBottom: "5rem",
      }}
    >
      <div className="text" style={{ height: "1rem" }}>
        <img src={Fly} alt="" height={130} style={{ opacity: "2px" }} />
      </div>
      <div>
        <h4
          className="text-light text-left"
          style={{ fontWeight: "bold", marginLeft: "4rem" }}
        >
          Contact Person Details
        </h4>
        <h4
          className="text-light text-end"
          style={{ fontWeight: "bold", marginRight: "20rem" }}
        >
          Flight Details
        </h4>
        <h6
          className="text-light text-end"
          style={{ fontWeight: "bold", marginRight: "3rem" }}
        >
          View Details
        </h6>
      </div>
      <Row>
        <Col>
          <div className="container m-4">
            <div
              className="bg-light"
              style={{
                marginLeft: "1rem",
                height: "20rem",
                width: "52rem",
                borderRadius: "10px",
              }}
            >
              <Form style={{ paddingTop: "2rem" }}>
                <h5 className="text-secondary" style={{ marginLeft: "2rem" }}>
                  Full Name
                </h5>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder=""
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
                <h5
                  className="text-secondary mt-3"
                  style={{ marginLeft: "2rem" }}
                >
                  Email
                </h5>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder=""
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
                <h5
                  className="text-secondary mt-3"
                  style={{ marginLeft: "2rem" }}
                >
                  Phone Number
                </h5>
                <input
                  country=""
                  type="number1"
                  className="form-control"
                  name="number"
                  placeholder=""
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
              </Form>
            </div>
          </div>
          <h4
            className="title mt-5"
            style={{ fontWeight: "bold", marginLeft: "4rem" }}
          >
            Passenger Details
          </h4>
          <div className="container m-4">
            <div
              className="bg-light"
              style={{
                marginLeft: "1rem",
                height: "25rem",
                width: "52rem",
                borderRadius: "10px",
              }}
            >
              <Form style={{ paddingTop: "2rem" }}>
                <div>
                  <p className="bg mb-3" style={{ marginLeft: "2rem" }}>
                    <h5>Passenger : 1 Adult</h5>
                    <h5>Same as contact person</h5>
                    <Form.Check
                      className=""
                      type="switch"
                      id="custom-switch"
                      label="Same as contact person"
                      style={{ marginLeft: "18rem" }}
                    />
                  </p>
                </div>
                <h5 className="text-secondary" style={{ marginLeft: "2rem" }}>
                  Title
                </h5>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder=""
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
                <h5
                  className="text-secondary mt-3"
                  style={{ marginLeft: "2rem" }}
                >
                  Full Name
                </h5>
                <input
                  type="Name"
                  className="form-control"
                  name="Name"
                  placeholder=""
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
                <h5
                  className="text-secondary mt-3"
                  style={{ marginLeft: "2rem" }}
                >
                  Nationality
                </h5>
                <Form.Select
                  aria-label="Nationality"
                  style={{
                    marginLeft: "2rem",
                    width: "47rem",
                    height: "45px",
                    marginBottom: "5rem",
                  }}
                >
                  <option>Open This Select Nationality</option>
                  <option value="1">Indonesia</option>
                  <option value="2">Japan</option>
                  <option value="3">Argentina</option>
                  <option value="4">France</option>
                </Form.Select>
              </Form>
            </div>
          </div>
        </Col>
        <Col>
          <div className="row container m-4">
            <div
              className="bg-light"
              style={{
                height: "30rem",
                width: "40rem",
                borderRadius: "10px",
              }}
            >
              <div className="container mt-4 col-12">
                <img
                  src={garuda}
                  alt=""
                  width={130}
                  height={90}
                  style={{ marginTop: "1rem", marginLeft: "1rem" }}
                />
                <h4 className="text-center" style={{ marginLeft: "3rem" }}>
                  Garuda Indonesia
                </h4>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default FlightDetail;
