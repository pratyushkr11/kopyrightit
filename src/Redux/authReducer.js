// Import action types
import { LOGIN, LOGOUT } from './authAction'; // Import the correct path to your authActions file

// Define your initial state
const initialState = {
  isAuthenticated: false,
  userData: null,
};

// Define the auth reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case LOGOUT:
      // Clear user data from local storage when logging out
      localStorage.removeItem('user');
      // Clear user ID from local storage when logging out
  localStorage.removeItem('userId');
      return {
        ...state,
        isAuthenticated: false,
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;
