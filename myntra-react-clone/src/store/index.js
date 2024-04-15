import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusslice";
import bagSlice from "./bagSlice";
const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchingStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default myntraStore;
