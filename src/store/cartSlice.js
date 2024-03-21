import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    //set of  reducer functions
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      let filteredItems = state.items.filter(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      state.items = filteredItems;
    },
    clearCart: (state) => {
      //Both ways work
      // state.items.length = 0;
      return { items: [] };
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
