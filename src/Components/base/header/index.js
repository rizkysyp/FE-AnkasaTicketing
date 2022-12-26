import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import Image from "../../../Assets/img";
import { Link, NavLink } from "react-router-dom";
import MyModalTicket from '../modal/modalChat'
import MyVerticallyCenteredModal from '../modal/modalNotif'
import MydModalWithGrid from '../modal/modalTiket'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailProfile} from "../../../Config/redux/actions/profile";



function NavbarComponent() {
  const token = localStorage.getItem("Ankasa");
  const { profile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    const localdata = localStorage.getItem("Ankasa");
    const { token } = JSON.parse(localdata);
    dispatch(detailProfile(token));
  }, []);


  return (
    <div className="container-fluid bg-white">
      <div className="container py-3 bg-white">
        <div className="row d-flex justify-content-between ">
          <div className="col-lg-3 col-3">
            <div className="d-flex mt-3 mt-lg-4">
              <img
                src={Image.Fly}
                alt="logo"
                style={{ width: "30px", marginRight: "10px" }}
              />
              <NavLink to="/" style={{ color: 'black', fontWeight: "bold", textDecoration: 'none' }}>
                <h5>Ankasa</h5>
              </NavLink>

            </div>
          </div>
          <div className="col-lg-3 col-5 mt-2 mt-lg-3">
            <Form.Control className=''
              type="search"
              placeholder="Where you want to go?"
              aria-label="Search"
            />
            
          </div>
          <div className="col-lg-6 col-3 justify-content-between">
            <Navbar  expand="lg" className="">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse>
              <button className="btn "><MydModalWithGrid/></button>
              <NavLink to="/MyBooking" style={{textDecoration:'none', color:'black'}} className='px-lg-3 mt-lg-1'><h6> My Booking</h6></NavLink>
                {token ? (
                  <div className="mx-lg-5 px-lg-4 " >
                  <MyModalTicket/>
                  <MyVerticallyCenteredModal/>
                    <Button variant="white" style={{ width: "4rem" }}>
                      <Link to='/profile'>
                        <img
                          src={profile.photo}
                          alt=""
                          style={{
                            verticalAlign: "middle",
                            height: "40px",
                            borderRadius: "50%",
                            marginLeft: "-5px",
                          }}
                        /></Link>
                    </Button>
                  </div>
                ) : (
                  <div className="d-lg-flex px-lg-5">
                  <Link to='/login'><Button
                      id="responsive-navbar-nav"
                      className="btn-1 px-lg-4"
                      variant="primary"
                      
                    >
                      Login
                    </Button></Link>
                    
                    <Link to='/Register'><Button
                      className="btn-1  px-lg-4"
                      variant="outline-primary"
                     
                    >
                      Sign Up
                    </Button></Link>
                    
                  </div>
                )}
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavbarComponent;
