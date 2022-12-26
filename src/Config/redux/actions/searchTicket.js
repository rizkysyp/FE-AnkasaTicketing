import axios from "axios";
import swal from "sweetalert";

export const getTicket =
  (
    transit = "",
    facilities = "",
    departureTime = "",
    timeArrive = "",
    search = "",
    minTicketPrice = "",
    maxTicketPrice = ""
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "GET_TICKET_PENDING" });
      const result = await axios.get(
        `https://flyer-be-production.up.railway.app/ticket`
      );
      console.log(result.data);
      const ticket = result.data;

      dispatch({ type: "GET_TICKET_SUCCESS", payload: ticket });
      // dispatch({ type: "GET_TICKET_ID", payload: ticket });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_TICKET_ERROR" });
      swal({
        title: "Oops!",
        text: `${error.response.data.message}`,
        icon: "error",
      });
    }
  };
