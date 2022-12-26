const initialState = {
  detailFlight: {},
  isloading: false,
};

const detailFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TICKET_ID":
      return {
        ...state,
        detailFlight: action.payload,
      };
    case "GET_USER_PROFILE":
      return {
        ...state,
        detailFlight: action.payload,
      };
    case "PUT_ORDER_ID":
      return {
        ...state,
        detailFlight: action.payload,
      };
    default:
      return state;
  }
};

export default detailFlightReducer;
