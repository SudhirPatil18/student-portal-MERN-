const initialState = {
    user: null,
    token: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload.user, token: action.payload.token, error: null };
      case 'LOGIN_FAIL':
        return { ...state, user: null, token: null, error: action.payload };
      case 'LOGOUT':
        return { ...state, user: null, token: null, error: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  