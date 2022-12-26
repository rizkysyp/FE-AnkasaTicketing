const initialState = {
    ticket: {},
    isloading: false,
  };
  
  const boockingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ORDER_USER":
        return {
          ...state,
          ticket: action.payload,
        };
      // case "GET_ORDGET_ORDER_USER_IDER_USER":
      //     return {
      //       ...state,
      //       ticket: action.payload,
      //     };

      default:
        return state;
    }
  };
  
  export default boockingTicketReducer;
  