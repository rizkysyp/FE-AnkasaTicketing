const initialState = {
    airlines: [],
    isloading: false,
  };
  
  const airlinesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_AIRLINES":
        return {
          ...state,
          airlines: action.payload,
        };
      case "GET_AIRLINES_ID":
          return {
            ...state,
            airlines: action.payload,
        };
      case "INSERT_AIRLINES":
          return {
            ...state,
            airlines: action.payload,
        };
      case "DELETE_AIRLINES":
          return {
            ...state,
            airlines: action.payload,
        };
        case "UPDATE_AIRLINES":
          return {
            ...state,
            airlines: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default airlinesReducer;