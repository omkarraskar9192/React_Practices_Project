import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter((student) => student.id !== action.payload);
    },
    updateStudent: (state, action) => {
    state.students = state.students.map((student) => student.id === action.payload.id ? (Object.assign(student, action.payload)) : student);
    },

  },
}); 

export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;