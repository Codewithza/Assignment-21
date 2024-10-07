import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: []
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    updateStudent: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.students.findIndex(student => student.id === id);
      if (index !== -1) {
        state.students[index] = updatedData;
      }
    }
  }
});

export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
