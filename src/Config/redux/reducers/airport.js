const initialState = {
  airport: {},
  isloading: false,
};

const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AIRPORT":
      return {
        ...state,
        airport: action.payload,
      };

    default:
      return state;
  }
};

export default airportReducer;
