const initialState = {
  detailFlight: {},
  isloading: false,
};

const detailFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILFLIGHT_ID":
      return {
        ...state,
        detailFlight: action.payload,
      };
    case "EDIT_DETAILFLIGHT":
      return {
        ...state,
        detailFlight: action.payload,
      };
    default:
      return state;
  }
};

export default detailFlightReducer;
