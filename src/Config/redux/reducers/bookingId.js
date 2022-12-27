const initialState = {
    ticketId: {},
    isloading: false,
    
  };
  
  const boockingTicketIdReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case "GET_ORDER_USER":
    //     return {
    //       ...state,
    //       ticket: action.payload,
    //     };
      case "GET_ORDER_USER_ID":
          return {
            ...state,
            ticketId : action.payload,
          };

      default:
        return state;
    }
  };
  
  export default boockingTicketIdReducer;