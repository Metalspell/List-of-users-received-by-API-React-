import { createSlice } from '@reduxjs/toolkit';

export const Reduxrepository = createSlice({
  name: 'store',
  initialState: {
    value1: [],
    value2: []
  },
  reducers: {
    addSelectedRow: (state, data) => {
      state.value1 = data.payload;
    },
    nestedArray: (state, data) => {
      state.value2 = data.payload;
    }
  },
})

export const { addSelectedRow, nestedArray} = Reduxrepository.actions;
export const selectValue1 = state => state.taskReducer.value1;
export const selectValue2 = state => state.taskReducer.value2;

export default Reduxrepository.reducer;