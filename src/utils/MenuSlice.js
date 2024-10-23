import { createSlice } from "@reduxjs/toolkit";
import { iconsNamesArray } from "../constant";

const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    iconsName: iconsNamesArray.Pencil,
    activeItems: iconsNamesArray.Pencil,
    actionMenuItems: null,
  },
  reducers: {
    clickPencil: (state, action) => {
      state.iconsName = action.payload;
    },
    activeClick: (state, action) => {
      state.activeItems = action.payload;
    },
    setActionMenuItems: (state, action) => {
      state.actionMenuItems = action.payload;
    },
  },
});
export const { clickPencil, activeClick, setActionMenuItems } =
  MenuSlice.actions;
export default MenuSlice.reducer;
