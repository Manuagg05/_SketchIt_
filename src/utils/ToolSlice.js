import { createSlice } from "@reduxjs/toolkit";
import {Colors,iconsNamesArray} from "../constant";

const ToolSlice = createSlice({
  name: "tool",
  initialState: {
    [iconsNamesArray.Pencil]: {
      color: Colors.Black,
      size: 3,
    },
    [iconsNamesArray.Eraser]: {
      color: Colors.White,
      size: 3,
    },
  },
  reducers: {
    changeColor: (state, action) => {
      state[action.payload.item].color = action.payload.color;
    },
    changeSize: (state, action) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const {changeColor,changeSize} = ToolSlice.actions
export default ToolSlice.reducer