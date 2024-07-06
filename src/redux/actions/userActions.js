import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
