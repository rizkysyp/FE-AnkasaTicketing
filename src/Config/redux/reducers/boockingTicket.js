const initialState = {
    boockingTicket: {},
    isloading: false,
  };
  
  const boockingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TCKET_ID":
        return {
          ...state,
          ticket: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default boockingTicketReducer;
  