import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./footer.css";
import Image from "../../../Assets/img";

class Footer extends Component {
  render() {
    return (
      <Row>
        <Col>
          <div style={{ marginLeft: "1rem" }}>
            <div className="container-fluid">
              <div className="row mt-5">
                <div className=" container m-5 text-start">
                  <img src={Image.Fly} alt="" />
                  <Button
                    className="text text-dark"
                    style={{
                      fontWeight: "bold",
                      width: "5rem",
                    }}
                    variant="outline-light"
                  >
                    Ankasa
                  </Button>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-8">
                <h6
                  className="text-center"
                  style={{ color: "#707070", marginLeft: "2rem" }}
                >
                  Find your Flight and explore the world with us. We will take
                  care of the rest
                </h6>
              </div>
            </div>
            <div className="row">
              <div
                className="col-8 offset-lg-1 "
                style={{ marginTop: "8rem", marginLeft: "2rem" }}
              >
                <h6 style={{ color: "#707070" }} className="text-product">
                  © Ankasa. All Rights Reserved.
                </h6>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="container-fluid">
            <div className="row mt-5">
              <div className=" container m-5 text-start">
                <Button
                  className="text text-dark"
                  style={{ fontWeight: "bold", width: "5rem" }}
                  variant="outline-light"
                >
                  Features
                </Button>
              </div>
            </div>
          </div>
          <div className="offset-lg-1">
            <Button
              style={{ color: "#707070" }}
              className="text-secondary"
              variant="outline"
            >
              Find Ticket
            </Button>
          </div>
          <div className="offset-lg-1">
            <Button
              style={{ color: "#707070" }}
              className="text-secondary"
              variant="outline"
            >
              My Booking
            </Button>
          </div>
          <div className="offset-lg-1">
            <Button
              style={{ color: "#707070" }}
              className="text-secondary"
              variant="outline"
            >
              Chat
            </Button>
          </div>
          <div className="offset-lg-1">
            <Button
              style={{ color: "#707070" }}
              className="text-secondary"
              variant="outline"
            >
              Notification
            </Button>
          </div>
        </Col>
        <Col>
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="container m-5 text-start">
                <Button
                  className="text text-dark "
                  style={{ fontWeight: "bold", width: "19rem" }}
                  variant="outline-light"
                >
                  Download Ankasa app
                </Button>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <Button
              className="text text-dark "
              style={{ fontWeight: "bold", width: "13rem", marginLeft: "6rem" }}
              variant="outline-light"
            >
              <img src={Image.App} alt="" />
            </Button>
          </div>
          <div className="container-fluid">
            <Button
              className="text text-dark mt-4"
              style={{ fontWeight: "bold", width: "13rem", marginLeft: "6rem" }}
              variant="outline-light"
            >
              <img src={Image.Play} alt="" />
            </Button>
          </div>
        </Col>
        <Col>
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="container m-5 text-start">
                <Button
                  className="text text-dark "
                  style={{ fontWeight: "bold", width: "6rem" }}
                  variant="outline-light"
                >
                  Folllow Us
                </Button>
              </div>
              <div style={{ marginLeft: "2rem" }}>
                <img src={Image.Fb} alt="" className="sosmed" />
                <img src={Image.Twit} alt="" className="sosmed" />
                <img src={Image.Ig} alt="" className="sosmed" />
                <img src={Image.Yt} alt="" className="sosmed" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Footer;
