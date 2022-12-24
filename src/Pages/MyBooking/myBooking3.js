import React from "react";
import "./style.css";
import Barcode from "react-barcode";
import { Row, Col, Container } from "react-bootstrap";
import garuda from "../../img/garuda.png";
import Plan from "../../img/plan.png";

function MyBarcode() {
  return (
    <div className="row">
      <div
        className="border col-1"
        style={{
          height: "50rem",
          width: "83%",
          marginTop: "6rem",
          marginBottom: "6rem",
          marginLeft: "10%",
          marginRight: "10%",
          justifyItems: "center",
          borderRadius: "10px",
        }}
      >
        <div>
          <h3
            style={{
              fontWeight: "bold",
              marginLeft: "19rem",
              paddingTop: "3rem",
            }}
          >
            Booking Pass
          </h3>
        </div>
        <div
          className="border"
          style={{
            height: "37rem",
            width: "52rem",
            marginTop: "2rem",
            marginBottom: "6rem",
            marginLeft: "20%",
            justifyItems: "center",
            borderRadius: "10px",
          }}
        >
          <Container>
            <Row>
              <Col>
                <div className="container mt-4 col-9">
                  <img src={garuda} alt="" width={120} height={90} />
                </div>
              </Col>

              <Col>
                <div className="fly " style={{ width: "14rem" }}>
                  <h3 className="flight">IDN</h3>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: "5rem" }}>
                  <img src={Plan} alt="" height={30} />
                </div>
              </Col>
              <div
                className="fly "
                style={{
                  width: "12rem",
                  paddingRight: "15rem",
                  marginTop: "5rem",
                }}
              >
                <h3 className="flight">JPN</h3>
              </div>
            </Row>
            <Row>
              <Col>
                <div className="add text-secondary mt-4">
                  <h6>Code</h6>
                  <div className="text-dark">
                    <h4>AB-221</h4>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="add text-secondary mt-4">
                  <h6>Class</h6>
                  <div className="text-dark">
                    <h4>Economy</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="add text-secondary mt-4">
                  <h6>Terminal</h6>
                  <div className="text-dark">
                    <h4>A</h4>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="add text-secondary mt-4">
                  <h6>Gate</h6>
                  <div className="text-dark">
                    <h4>221</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="add text-secondary mt-4 mb-5">
              <h5>Departure</h5>
              <div className="text-dark">
                <h4>Monday, 20 July ‘20 - 12:33</h4>
              </div>
            </div>
          </Container>
          <div style={{ marginLeft: "12rem" }}>
            <Barcode value="ALVIN JAMAL AZKYA" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyBarcode;
