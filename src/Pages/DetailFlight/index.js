import React from "react";
import "./style.css";
import { Row, Col, Container, Form, Accordion } from "react-bootstrap";
import Fly from "../../Assets/img/fly.png";
import garuda from "../../Assets/img/garuda.png";
import Plan from "../../Assets/img/plan.png";
import Footer from "../../components/footer";

function FlightDetail() {
  return (
    <div
      className="container-fluid mb-5"
      style={{
        backgroundColor: "blue",
        height: "9rem",
        borderBottomRightRadius: "25%",
        borderBottomLeftRadius: "25%",
        marginBottom: "5rem",
      }}
    >
      <div className="text" style={{ height: "1rem" }}>
        <img src={Fly} alt="" height={100} style={{ opacity: "2px" }} />
      </div>
      <Row>
        <Col>
          <h4
            className="text-light text-left"
            style={{ fontWeight: "bold", marginLeft: "4rem" }}
          >
            Contact Person Details
          </h4>
        </Col>
        <Col>
          <h4
            className="text-light text-end"
            style={{ fontWeight: "bold", marginRight: "-2rem" }}
          >
            Flight Details
          </h4>
        </Col>
        <Col>
          <h6
            className="text-light text-end"
            style={{ fontWeight: "bold", marginRight: "3rem" }}
          >
            View Details
          </h6>
        </Col>
      </Row>

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
                <div
                  className="bg mb-3"
                  style={{
                    marginLeft: "2rem",
                    width: "46rem",
                    height: "2rem",
                    borderRadius: "8px",
                    // textAlign: "center",
                  }}
                >
                  <Container>
                    <Row>
                      <Col>
                        <div className="all col-12">
                          <h6>Passenger : 1 Adult</h6>
                        </div>
                      </Col>
                      <Col>
                        <div
                          className="all col-12"
                          style={{ marginLeft: "13rem" }}
                        >
                          <h6>Same as contact person</h6>
                        </div>
                      </Col>
                      <Col>
                        <Form.Check
                          className="col-10"
                          type="switch"
                          id="custom-switch"
                          style={{ marginLeft: "12rem" }}
                        />
                      </Col>
                    </Row>
                  </Container>
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
                  <option value="5">Spain</option>
                </Form.Select>
              </Form>
            </div>
          </div>
        </Col>

        <Col>
          <div>
            <div className="row container m-4">
              <div
                className="bg-light"
                style={{
                  height: "30rem",
                  width: "40rem",
                  borderRadius: "10px",
                }}
              >
                <Col>
                  <div className="container mt-4 col-12 ">
                    <img
                      src={garuda}
                      alt=""
                      width={120}
                      height={90}
                      style={{ marginTop: "1rem", marginLeft: "1rem" }}
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <h4
                      className="text-center col-12 mb-4"
                      style={{ marginLeft: "3rem" }}
                    >
                      Garuda Indonesia
                    </h4>
                  </div>
                </Col>
                <Row className="fly" md={4}>
                  <Col xs={6} md={3}>
                    <div className="fly col-12" style={{ width: "16rem" }}>
                      <h4>Medan (IDN)</h4>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ marginLeft: "8rem" }}>
                      <img src={Plan} alt="" />
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="fly col-12" style={{ width: "16rem" }}>
                      <h4>Tokyo (JPN)</h4>
                    </div>
                  </Col>
                </Row>
                <Row
                  className="mt-3"
                  xs={2}
                  md={4}
                  lg={6}
                  style={{ width: "80rem", marginLeft: "2rem" }}
                >
                  <Col>
                    <div>
                      <p>Sunday, 15 August 2020</p>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p>12:33 - 15:21</p>
                    </div>
                  </Col>
                </Row>
                <div>
                  <Container>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            label="Refundable"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Container>
                </div>
                <div>
                  <Container>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`inline-${type}`} className="mb-">
                          <Form.Check
                            label="Can reschedule"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                      ))}
                      <hr />
                    </Form>
                  </Container>
                </div>
                <div>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="text-primary">
                        Total Payment
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col>
                            <h5>Total</h5>
                            <h5>Total</h5>
                            <h5>Total</h5>
                            <h5>Total</h5>
                          </Col>
                          <Col>
                            <h5>=</h5>
                            <h5>=</h5>
                            <h5>=</h5>
                            <h5>=</h5>
                          </Col>
                          <Col xs={3}>
                            <h5>$ 12.00</h5>
                            <h5>$ 12.00</h5>
                            <h5>$ 12.00</h5>
                            <h5>$ 12.00</h5>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
export default FlightDetail;
