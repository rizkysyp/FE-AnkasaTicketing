import { useEffect } from "react";
import "./MyBooking.css";
import Barcode from "react-barcode";
import Plan from "../../Assets/img/plan.png";
import { useSelector, useDispatch } from "react-redux";
import { bookingTiketId } from "../../Config/redux/actions/bookingId";
import { auto } from "@popperjs/core";
import NavbarComponent from "../../Components/base/header";
import Footer from "../../Components/base/footer";
import { useParams } from "react-router-dom";

function MyBarcode(props) {
  const { ticketId } = useSelector((state) => state.ticketId);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  console.log(ticketId);

  useEffect(() => {
    const localdata = localStorage.getItem("Ankasa");
    const { token } = JSON.parse(localdata);
    dispatch(bookingTiketId(token, id));
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="container-fluid bg-primary p-5">
        <div
          className="col-lg-8 offset-lg-2 bg-white p-5"
          style={{ borderRadius: "5%" }}
        >
          <div className="d-flex justify-content-between">
            <h4 className="mb-5">
              <b>Booking Pass</b>
            </h4>
            <h5>:</h5>
          </div>
          <div className="container border">
            <div className="row p-4">
              <div className="col-9">
                <div className="d-flex mb-5">
                  {/* <img src={ticketId.airlines_names} alt="" width={120} height={auto} /> */}
                  <p>{ticketId.airlines_names}</p>
                  <h3 className="ms-5">
                    <b>{ticketId.arrival_code}</b>
                  </h3>
                  <img
                    src={Plan}
                    height={auto}
                    className=" img-fluid  mx-4"
                    alt=""
                  />
                  <h3>
                    <b>{ticketId.departure_code}</b>
                  </h3>
                </div>
                <div className="d-flex mb-4" style={{}}>
                  <div className="me-5">
                    <h6>Code</h6>
                    <h5>{ticketId.code}</h5>
                  </div>
                  <div className="ms-lg-5">
                    <h6>Class</h6>
                    <h5>{ticketId.type}</h5>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-5">
                    <h6>Terminal</h6>
                    <h4>{ticketId.terminal}</h4>
                  </div>
                  <div className="ms-lg-5">
                    <h6>Gate</h6>
                    <h4>{ticketId.gate}</h4>
                  </div>
                </div>
                <h6>Departure</h6>
                <h5>{ticketId.departure}</h5>
              </div>
              <Barcode value={ticketId.id} />
              <div className="col-lg-3 bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyBarcode;
