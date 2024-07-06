import axios from 'axios';

export const fetchStudents = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/students');
    dispatch({ type: 'FETCH_STUDENTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_STUDENTS_FAIL', payload: error.message });
  }
};

export const addOrUpdateStudent = (student) => async (dispatch) => {
  try {
    const response = await axios.post('/api/students', student);
    dispatch({ type: 'ADD_UPDATE_STUDENT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_UPDATE_STUDENT_FAIL', payload: error.message });
  }
};

export const updateStudent = (studentId, updatedDetails) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/students/${studentId}`, updatedDetails);
    dispatch({ type: 'UPDATE_STUDENT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_STUDENT_FAIL', payload: error.message });
  }
};

export const deleteStudent = (studentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/students/${studentId}`);
    dispatch({ type: 'DELETE_STUDENT_SUCCESS', payload: studentId });
  } catch (error) {
    dispatch({ type: 'DELETE_STUDENT_FAIL', payload: error.message });
  }
};
