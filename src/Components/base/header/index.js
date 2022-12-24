import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import Image from "../../../Assets/img";

function NavbarComponent() {
  const token = localStorage.getItem("token");
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container fluid>
        <img
          src={Image.Fly}
          alt="logo"
          style={{ width: "30px", marginRight: "10px" }}
        />
        <Navbar.Brand href="/home" style={{ fontWeight: "bold" }}>
          Ankasa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Form
            className=" "
            id="responsive-navbar-nav"
            style={{ justifyContent: "center" }}
          >
            <Form.Control
              type="search"
              placeholder="Where you want to go?"
              className="me-2"
              aria-label="Search"
              style={{
                borderRadius: "10px",
                height: "40px",
                width: "25rem",
                marginLeft: "20rem",
              }}
            />
          </Form>
          <Button
            className="modal"
            variant="light"
            style={{
              borderBottom: "1px solid",
              color: "blue",
              marginLeft: "2rem",
            }}
          >
            <h5>Find Ticket</h5>
          </Button>
          <Button
            className="modal"
            variant="light"
            style={{
              borderBottom: "1px solid",
              color: "blue",
              marginLeft: "1rem",
            }}
          >
            <h5>My Booking</h5>
          </Button>
          {!token ? (
            <>
              <Button
                variant="light"
                style={{
                  width: "4rem",
                  marginRight: "1rem",
                  marginLeft: "5rem",
                }}
              >
                <img
                  src={Image.Message}
                  alt=""
                  style={{
                    verticalAlign: "middle",
                    width: "25px",
                    height: "25px",
                    borderRadius: "15%",
                    marginLeft: "-1px",
                  }}
                />
              </Button>
              <Button
                variant="light"
                style={{ width: "4rem", marginRight: "1rem" }}
              >
                <img
                  src={Image.Bell}
                  alt=""
                  style={{
                    verticalAlign: "right",
                    width: "30px",
                    height: "27px",
                    borderRadius: "50%",
                    marginLeft: "-1px",
                  }}
                />
              </Button>

              <Button variant="light" style={{ width: "4rem" }}>
                <img
                  src={Image.Img}
                  alt=""
                  style={{
                    verticalAlign: "middle",
                    width: "50px",
                    height: "40px",
                    borderRadius: "50%",
                    marginLeft: "-5px",
                  }}
                />
              </Button>
            </>
          ) : (
            <>
              <Button
                id="responsive-navbar-nav"
                style={{
                  justifyContent: "end",
                  borderRadius: "7px",
                  marginLeft: "23rem",
                }}
                className="btn-1"
                variant="primary"
                size="sm"
              >
                Login
              </Button>
              <Button
                className="btn-1"
                variant="outline-primary"
                size="sm"
                style={{ borderRadius: "7px" }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
