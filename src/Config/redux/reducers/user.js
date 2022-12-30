const initialState = {
  user: {},
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "USER_LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "USER_REGISTER_ADMIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_REGISTER_CUSTOMER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_REGISTER_ADMIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "USER_REGISTER_CUSTOMER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "USER_REGISTER_ADMIN_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "USER_REGISTER_CUSTOMER_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
