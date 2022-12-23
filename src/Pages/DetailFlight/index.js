import React from "react";
import "./detail.css";
import { Row, Col, Container, Form, Accordion, Button } from "react-bootstrap";
import Fly from "../../Assets/img/fly.png";
import garuda from "../../Assets/img/garuda.png";
import Plan from "../../Assets/img/plan.png";
import Aten from "../../Assets/img/atten.png";
import Footer from "../../components/footer";

function FlightDetail() {
  return (
    <div
      className="container-fluid mb-5"
      style={{
        backgroundColor: " #2395FF",
        height: "10rem",
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
              className="wrapp"
              style={{
                marginLeft: "1rem",
                height: "25rem",
                width: "50rem",
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
              <div className="info mt-4">
                <img src={Aten} alt="" />
              </div>
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
              className="wrapp"
              style={{
                marginLeft: "1rem",
                height: "25rem",
                width: "50rem",
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
            <h4
              className="title mt-5"
              style={{ fontWeight: "bold", marginLeft: "2rem" }}
            >
              Passenger Details
            </h4>
            <div className="container m-2 mt-4">
              <div
                className="wrapp"
                style={{
                  height: "15rem",
                  width: "50rem",
                  borderRadius: "10px",
                }}
              >
                <Row>
                  <Col>
                    <Form style={{ paddingTop: "2rem" }}>
                      {["checkbox"].map((type) => (
                        <div
                          key={`inline-${type}`}
                          className="tick mb-4 text-primary"
                          style={{ borderBottom: "dark", width: "20rem" }}
                        >
                          <Form.Check
                            label="Travel Insurance"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Col>
                  <Col>
                    <h5 className="main text-end">$ 2,00/pax</h5>
                  </Col>
                  <hr style={{ width: "50rem", marginLeft: "10px" }} />
                  <div>
                    <h6 className="txt">
                      Get travel compensation up to $ 10.000,00
                    </h6>
                  </div>
                </Row>
              </div>
              <div>
                <Button
                  className="btn mt-4 mb-3"
                  variant="primary"
                  size="lg"
                  style={{ marginLeft: "12em", width: "15em" }}
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div className="row container m-4">
              <div
                className="card"
                style={{
                  height: "33rem",
                  width: "40rem",
                  borderRadius: "10px",
                }}
              >
                <Row>
                  <Col>
                    <div className="container mt-4 col-9">
                      <img src={garuda} alt="" width={120} height={90} />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <h4 className="airlines text-center mb-4">
                        Garuda Indonesia
                      </h4>
                    </div>
                  </Col>
                </Row>
                <Row className="fly mt-4" md={4}>
                  <Col xs={6} md={3}>
                    <div className="fly col-12" style={{ width: "16rem" }}>
                      <h4 className="flight">Medan (IDN)</h4>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ marginLeft: "8rem" }}>
                      <img src={Plan} alt="" />
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="fly col-12" style={{ width: "16rem" }}>
                      <h4 className="flight">Tokyo (JPN)</h4>
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
                        <div
                          key={`inline-${type}`}
                          className="tick mb-3 text-primary"
                        >
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
                        <div
                          key={`inline-${type}`}
                          className="tick mb-3 text-primary"
                        >
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
                  <Container>
                    <Row>
                      <Col xs={6} md={4}>
                        <div className="total mt-2">
                          <h4>Total Payment</h4>
                        </div>
                      </Col>
                      <Col>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header className="text-primary">
                              <h4 className="payment text-primary text-center">
                                $ 150.00
                              </h4>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row md={4}>
                                <Col>
                                  <h6>VIP</h6>
                                  <hr />
                                  <h6>Dish</h6>
                                  <hr />
                                  <h6>airlines</h6>
                                  <hr />
                                  <h6>aim</h6>
                                  <hr />
                                </Col>
                                <Col xs={6}>
                                  <h6>=</h6>
                                  <hr />
                                  <h6>=</h6>
                                  <hr />
                                  <h6>=</h6>
                                  <hr />
                                  <h6>=</h6>
                                  <hr />
                                </Col>
                                <Col>
                                  <h6>$45.65</h6>
                                  <hr />
                                  <h6>$22.65</h6>
                                  <hr />
                                  <h6>$43.05</h6>
                                  <hr />
                                  <h6>$38.65</h6>
                                  <hr />
                                </Col>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Col>
                    </Row>
                  </Container>
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
