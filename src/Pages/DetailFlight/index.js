import React, { useEffect, useState } from "react";
import "./index.module.css";
import { Row, Col, Container, Form, Accordion, Button } from "react-bootstrap";
import Fly from "../../Assets/img/fly.png";
import Garuda from "../../Assets/img/garuda.png";
import Plan from "../../Assets/img/plan.png";
import Aten from "../../Assets/img/atten.png";
import Footer from "../../Components/base/footer";
import { useSelector, useDispatch } from "react-redux";
import {
  putOrder,
  getPayment,
  getUserProf,
} from "../../Config/redux/actions/detailFlight";

function DetailFlightPage() {
  const { DetailFlight } = useSelector((state) => state.detailFlight);
  const id = "";
  const dispatch = useDispatch();

  const [dataDetailFlight, setDataDetailFlight] = useState({});

  console.log(dataDetailFlight);

  const handleData = (e) => {
    e.preventDefault();
    const localdata = localStorage.getItem("Ankasa");
    const { token } = JSON.parse(localdata);
    const formData = new FormData();
    formData.append("name", dataDetailFlight.fullname);
    formData.append("email", dataDetailFlight.email);
    formData.append("phone", dataDetailFlight.phone);
    formData.append("city", dataDetailFlight.city);
    formData.append("tittle", dataDetailFlight.tittle);
    formData.append("country", dataDetailFlight.country);
    dispatch(putOrder(id, formData, token));
    dispatch(getPayment(token));
    dispatch(getUserProf(token));
  };

  const handleChange = (e) => {
    console.log(e.target);
    const newdata = { ...dataDetailFlight };
    newdata[e.target.name] = e.target.value;
    setDataDetailFlight(newdata);
  };

  useEffect(() => {
    const localdata = localStorage.getItem("Ankasa");
    if (localdata) {
      const { token } = JSON.parse(localdata);
      dispatch(getPayment(token));
    }
  }, []);

  return (
    <div
      className="container-fluid mb-5"
      style={{
        backgroundColor: " #2395FF",
        height: "9rem",
        borderBottomRightRadius: "2rem",
        borderBottomLeftRadius: "2rem",
        marginBottom: "5rem",
      }}
    >
      <div className="text" style={{ height: "1rem" }}>
        <img src={Fly} alt="" height={100} style={{ opacity: "2px" }} />
      </div>
      <Row>
        <Col>
          <h4
            className="text-light text-start"
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
          <div className="container m-3">
            <div
              className="card"
              style={{
                marginLeft: "1rem",
                height: "23rem",
                width: "50rem",
                borderRadius: "10px",
              }}
            >
              <Form style={{ paddingTop: "2rem" }}>
                <h5
                  className="text-secondary text-start"
                  style={{ marginLeft: "2rem" }}
                >
                  Full Name
                </h5>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder=""
                  onChange={(e) => handleChange(e)}
                  value={dataDetailFlight.fullname}
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
                <h5
                  className="text-secondary text-start mt-4"
                  style={{ marginLeft: "2rem" }}
                >
                  Email
                </h5>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder=""
                  onChange={(e) => handleChange(e)}
                  value={dataDetailFlight.email}
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
                <h5
                  className="text-secondary text-start mt-4"
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
                  onChange={(e) => handleChange(e)}
                  value={dataDetailFlight.phone}
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
              </Form>
              <div
                className="info mt-4"
                style={{
                  backgroundColor: "#f0cec3",
                  width: "40rem",
                  marginLeft: "5rem",
                  height: "2rem",
                  paddingRight: "20rem",
                  borderRadius: "5px",
                }}
              >
                <img src={Aten} alt="" />
              </div>
            </div>
          </div>
          <h4
            className="title mt-5 text-start"
            style={{ fontWeight: "bold", marginLeft: "4rem" }}
          >
            Passenger Details
          </h4>
          <div className="container m-4">
            <div
              className="card"
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
                  }}
                >
                  <Container>
                    <Row
                      style={{
                        backgroundColor: " #abcfe1",
                        paddingTop: "5px",
                        borderRadius: "8px",
                      }}
                    >
                      <Col>
                        <div className="all col-12">
                          <h6>Passenger : 1 Adult</h6>
                        </div>
                      </Col>
                      <Col>
                        <div
                          className="all col-12"
                          style={{ marginLeft: "14rem" }}
                        >
                          <h6>Same as contact person</h6>
                        </div>
                      </Col>
                      <Col>
                        <Form.Check
                          className="col-1"
                          type="switch"
                          id="custom-switch"
                          style={{ marginLeft: "12rem" }}
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <h5
                  className="text-secondary text-start"
                  style={{ marginLeft: "2rem" }}
                >
                  Title
                </h5>
                <Form.Select
                  aria-label="tittle"
                  name="tittle"
                  onChange={(e) => handleChange(e)}
                  value={dataDetailFlight.tittle}
                  style={{
                    marginLeft: "2rem",
                    width: "47rem",
                    height: "45px",
                  }}
                >
                  <option>Open Title</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                </Form.Select>
                <h5
                  className="text-secondary text-start mt-3"
                  style={{ marginLeft: "2rem" }}
                >
                  Full Name
                </h5>
                <input
                  type="Name"
                  className="form-control"
                  name="Name"
                  placeholder=""
                  onChange={(e) => handleChange(e)}
                  value={dataDetailFlight.fullname}
                  style={{ marginLeft: "2rem", width: "47rem" }}
                />
                <h5
                  className="text-secondary text-start mt-3"
                  style={{ marginLeft: "2rem" }}
                >
                  Country
                </h5>
                <Form.Select
                  aria-label="country"
                  name="country"
                  onChange={(e) => handleChange(e)}
                  value={dataDetailFlight.country}
                  style={{
                    marginLeft: "2rem",
                    width: "47rem",
                    height: "45px",
                    marginBottom: "5rem",
                  }}
                >
                  <option>Open Country</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Japan">Japan</option>
                  <option value="Argentina">Argentina</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Australia">Australia</option>
                </Form.Select>
              </Form>
            </div>
            <h4
              className="title mt-5 text-start"
              style={{ fontWeight: "bold", marginLeft: "2rem" }}
            >
              Passenger Details
            </h4>
            <div className="container m-2 mt-4">
              <div
                className="card"
                style={{
                  height: "12rem",
                  width: "50rem",
                  borderRadius: "10px",
                }}
              >
                <Row>
                  <Col>
                    <Form style={{ paddingTop: "1rem" }}>
                      {["checkbox"].map((type) => (
                        <div
                          key={`inline-${type}`}
                          className="tick mb-4 text-primary text-start"
                          style={{
                            borderBottom: "dark",
                            width: "20rem",
                            margin: "1rem",
                          }}
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
                    <h5
                      className="main text-end text-primary"
                      style={{ margin: "2rem" }}
                    >
                      $ 2,00/pax
                    </h5>
                  </Col>
                  <hr style={{ width: "50rem", marginLeft: "10px" }} />
                  <div>
                    <h6
                      className="txt text-start"
                      style={{ marginLeft: "1rem" }}
                    >
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
                  onClick={(e) => handleData(e)}
                  style={{ marginRight: "3em", width: "15em" }}
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div className="row container m-3">
              <div
                className="card"
                style={{
                  height: "30rem",
                  width: "40rem",
                  borderRadius: "10px",
                }}
              >
                <Row>
                  <Col>
                    <div className="container mt-4 mb-1">
                      <img src={Garuda} alt="" width={120} />
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{
                        paddingTop: "3rem",
                        paddingRight: "3rem",
                        fontWeight: "bold",
                      }}
                    >
                      <h4
                        className="airlines text-center "
                        onChange={(e) => handleChange(e)}
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Garuda Indonesia
                      </h4>
                    </div>
                  </Col>
                </Row>
                <Row className="fly " md={4}>
                  <Col xs={6} md={3}>
                    <div
                      className="fly"
                      style={{
                        width: "16rem",
                        marginLeft: "rem",
                        fontWeight: "bold",
                      }}
                    >
                      <h4
                        className="flight"
                        onChange={(e) => handleChange(e)}
                        style={{}}
                      >
                        Medan (IDN)
                      </h4>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="fly" style={{ marginLeft: "8rem" }}>
                      <img src={Plan} alt="" height={20} />
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div
                      className="fly col-12"
                      onChange={(e) => handleChange(e)}
                      style={{ width: "16rem" }}
                    >
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
                      <p onChange={(e) => handleChange(e)}>
                        Sunday, 15 August 2020
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p onChange={(e) => handleChange(e)}>12:33 - 15:21</p>
                    </div>
                  </Col>
                </Row>
                <div>
                  <Container>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div
                          key={`inline-${type}`}
                          className="tick mb-3 text-primary text-start"
                          style={{ marginLeft: "1rem" }}
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
                          className="tick mb-3 text-primary text-start"
                          style={{ marginLeft: "1rem" }}
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
                        <div className="total mt-3">
                          <h4>Total Payment</h4>
                        </div>
                      </Col>
                      <Col>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header className="text-primary">
                              <h4 className="payment text-primary text-end">
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
                                  <h6>$ 45.65</h6>
                                  <hr />
                                  <h6>$ 22.65</h6>
                                  <hr />
                                  <h6>$ 43.05</h6>
                                  <hr />
                                  <h6>$ 38.65</h6>
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
export default DetailFlightPage;
