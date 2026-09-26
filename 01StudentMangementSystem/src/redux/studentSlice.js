import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  students: [
    {
      id: 1,
      name: "Omkar Raskar",
      email: "omkar@example.com",
      course: "Computer Science",
      age: 19,
      marks: 92,
      attendance: 95
    },
    {
      id: 2,
      name: "Aarav Sharma",
      email: "aarav.s@example.com",
      course: "Information Technology",
      age: 20,
      marks: 88,
      attendance: 90
    }
  ],
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