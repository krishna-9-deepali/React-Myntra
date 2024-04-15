import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      // const isExist = state.includes(action.payload);
      // if (!isExist) {
      state.push(action.payload);
      // }
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId != action.payload);
    },
  },
});
export const bagActions = bagSlice.actions;
export default bagSlice;
// const isexist = state.indexOf(action.payload);

// if (isexist === -1) {
//   state.push(action.payload);
// }

//findindex method
//       const index = state.findIndex(item => item === action.payload);
// if (index === -1) {
//   state.push(action.payload);
// }
//

//find method of array
// const existingItem = state.find(item => item === action.payload);
// if (!existingItem) {
//   state.push(action.payload);
// }
