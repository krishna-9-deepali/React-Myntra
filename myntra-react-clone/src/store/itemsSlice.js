import { createSlice } from "@reduxjs/toolkit";
import data from "./data";
const { items } = data; //destructuring object .
const itemSlice = createSlice({
  name: "items",
  initialState: items, //data.items,
  reducers: {
    addInitialItem: (state, action) => {
      return action.payload;
    },
  },
});
export const itemsActions = itemSlice.actions;
export default itemSlice;
