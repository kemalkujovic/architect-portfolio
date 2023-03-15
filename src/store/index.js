import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = { showMenu: false };
const handlerClick = createSlice({
  name: "handler",
  initialState: initialState,
  reducers: {
    displayMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

const store = configureStore({
  reducer: handlerClick.reducer,
});

export const handlerActions = handlerClick.actions;
export default store;
