import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({

  name: "shop",
  initialState: {
    todoShop: [],
    count: 1,
    dataCheckbox: []
   },
  reducers: {

    addData: (state, action) => {
        state.todoShop.push(action.payload);
    },
    deleteData: (state, action) => {
      const idxTask = state.todoShop.findIndex(
        (task) => task.id === action.payload
      );
      state.todoShop.splice(idxTask, 1);
      console.log(idxTask);
    },

    addCheckbox: (state, action) => {
      state.dataCheckbox.push(action.payload);
  },
  deleteCheckbox: (state, action) => {
    const idxTask = state.dataCheckbox.findIndex(
      (task) => task.id === action.payload
    );
    state.dataCheckbox.splice(idxTask, 1);
  }
  }
});

export const {
    addData,
    deleteData,
    addCheckbox,
    deleteCheckbox

} = testSlice.actions;

export default testSlice.reducer;
