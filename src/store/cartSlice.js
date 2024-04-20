import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [{ totalCount: 0 }] },
  reducers: {
    addItemWithcount: (state, action) => {
      const { id, categoryItem } = action.payload;
      let isNewEntry = true;
      state.items.forEach((item, index) => {
        if (item[id]) {
          let prevCount = item[id].count;
          state.items.splice(index, 1);
          state.items.push({ [id]: { ...categoryItem, count: prevCount + 1 } });

          isNewEntry = false;
          return;
        }
      });
      if (isNewEntry) state.items.push({ [id]: { ...categoryItem, count: 1 } });
      state.items[0].totalCount += 1;
    },

    removeItem: (state, action) => {
      const id = action.payload;

      state.items.forEach((item, index) => {
        if (item[id]) {
          let prevCount = item[id].count;
          if (prevCount === 1) {
            state.items.splice(index, 1);
          } else {
            state.items[index][id].count = prevCount - 1;
          }
          return;
        }
      });
      state.items[0].totalCount -= 1;
    },
    clearCart: (state) => {
      return { items: [] };
    },
  },
});
export const { addItem, removeItem, clearCart, addItemWithcount } =
  cartSlice.actions;
export default cartSlice.reducer;
