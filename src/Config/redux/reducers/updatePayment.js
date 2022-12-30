const initialState = {
    statusPayment: {},
    isloading: false,
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_PAYMENT":
        return {
          ...state,
          statusPayment: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default paymentReducer;