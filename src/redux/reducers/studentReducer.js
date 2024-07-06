const initialState = [];

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS_SUCCESS':
      return action.payload;
    case 'ADD_UPDATE_STUDENT_SUCCESS':
      return state.map((student) =>
        student._id === action.payload._id ? action.payload : student
      );
    case 'UPDATE_STUDENT_SUCCESS':
      return state.map((student) =>
        student._id === action.payload._id ? action.payload : student
      );
    case 'DELETE_STUDENT_SUCCESS':
      return state.filter((student) => student._id !== action.payload);
    case 'FETCH_STUDENTS_FAIL':
    case 'ADD_UPDATE_STUDENT_FAIL':
    case 'UPDATE_STUDENT_FAIL':
    case 'DELETE_STUDENT_FAIL':
      return state;
    default:
      return state;
  }
};

export default studentReducer;
