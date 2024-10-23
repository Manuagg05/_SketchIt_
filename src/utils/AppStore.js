import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./MenuSlice"; // Import the default reducer
import ToolReducer from "./ToolSlice"
const AppStore = configureStore({
  reducer: {
    menu: MenuReducer, // Use the correct reducer
    tool:ToolReducer
  },
});

export default AppStore;
