const initialState = {
  booking: {},
  isloading: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKING_ID":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
