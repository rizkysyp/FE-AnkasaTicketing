import axios from "axios";
import swal from "sweetalert";


export const updatePayment = (id,token,navigate) => async (dispatch) => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_API_BACKEND}order/payment/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      const statusPayment = result.data;
      dispatch({ type: "UPDATE_PAYMENT", payload: statusPayment });
      swal({
        title: "Update payment Success",
        text: `${result.data.message}`,
        icon: "success",
      });
      navigate('/MyBooking')
    } catch (error) {
      console.log(error);
      swal({
        title: "Update payment Fail",
        text: `${error.response.data.message}`,
        icon: "error",
      });
    }
  };