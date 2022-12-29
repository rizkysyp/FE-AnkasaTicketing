const initialState = {
    booking : [],
    isloading: false,
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ORDER_ADMIN":
        return {
          ...state,
          booking: action.payload,
        };
      case "DELETE_DATA_BOOKING":
          return {
            ...state,
            booking: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default bookingReducer;