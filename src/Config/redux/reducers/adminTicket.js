const initialState = {
    adminTicket: [],
    isloading: false,
  };
  
  const ticketAllReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TICKET_ALL":
        return {
          ...state,
          adminTicket: action.payload,
        };
      case "GET_TICKET_ID":
          return {
            ...state,
            adminTicket: action.payload,
        };

      case "ADD_TICKET":
        return {
          ...state,
          adminTicket: action.payload,
        };

      case "UPDATE_TICKET":
        return {
          ...state,
          adminTicket: action.payload,
        };

      case "DELETE_TICKET":
          return {
            ...state,
            adminTicket: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default ticketAllReducer;