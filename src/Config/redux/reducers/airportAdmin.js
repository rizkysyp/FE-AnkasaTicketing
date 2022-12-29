const initialState = {
    airportAdmin: [],
    isloading: false,
};

const airportAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_AIRPORT_ADMIN":
            return {
                ...state,
                airportAdmin: action.payload,
            };
        case "GET_AIRPORT_ADMIN_ID":
            return {
                ...state,
                airportAdmin: action.payload,
            };
        case "ADD_AIRPORT":
            return {
                ...state,
                airportAdmin: action.payload,
            };
        case "UPDATE_AIRPORT":
            return {
                ...state,
                airportAdmin: action.payload,
            };
        case "DELETE_AIRPORT":
            return {
                ...state,
                airportAdmin: action.payload,
            };

        default:
            return state;
    }
};

export default airportAdminReducer;