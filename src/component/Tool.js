import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { changeSize,changeColor } from "../utils/ToolSlice";
import { iconsNamesArray } from "../constant";

import { Colors } from "../constant";
const Tool = () => {

  const dispatch = useDispatch()
  const showTools = useSelector((store) => store.menu.iconsName);

  const pencilTrue = showTools === iconsNamesArray.Pencil;
  const ErasorTrue =
    showTools === iconsNamesArray.Eraser ||
    showTools === iconsNamesArray.Pencil;

const {color,size} = useSelector((store)=>(store.tool[showTools]))

  const updateBrushSize = (e) => {

dispatch(changeSize({item:showTools,size:e.target.value}))

  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: showTools, color: newColor }));
  };

  return (
    <div
      className="absolute flex flex-col gap-10 border-border1 border border-solid w-[250px] px-5"
      style={{ zIndex: 10, right: "20px", top: "100px" }} // Adjusted position to fit in the screen
    >
      {pencilTrue && (
        <div className="w-full">
          <h3 className="text-text1 my-2">color palette</h3>
          <div className="flex gap-2">
            <div
              style={{ backgroundColor: Colors.Black }}
              className="h-6 w-6 border border-gray-300 cursor-pointer hover:border-gray-800 my-2"
               
              onClick={() => {
                updateColor(Colors.Black);
              }}
            ></div>
            <div
              style={{ backgroundColor: Colors.Red }}
              className="h-6 w-6 border border-gray-300 cursor-pointer hover:border-gray-800 my-2"
              onClick={() => {
                updateColor(Colors.Red);
              }}
            ></div>
            <div
              style={{ backgroundColor: Colors.Yellow }}
              className="h-6 w-6 border border-gray-300 cursor-pointer hover:border-gray-800 my-2"
              onClick={() => {
                updateColor(Colors.Yellow);
              }}
            ></div>
            <div
              style={{ backgroundColor: Colors.Blue }}
              className="h-6 w-6 border border-gray-300 cursor-pointer hover:border-gray-800 my-2"
              onClick={() => {
                updateColor(Colors.Blue);
              }}
            ></div>
            <div
              style={{ backgroundColor: Colors.Green }}
              className="h-6 w-6 border border-gray-300 cursor-pointer hover:border-gray-800 my-2"
              onClick={() => {
                updateColor(Colors.Green);
              }}
            ></div>
            <div
              style={{ backgroundColor: Colors.Orange }}
              className="h-6 w-6 border border-gray-300 cursor-pointer hover:border-gray-800 my-2"
              onClick={() => {
                updateColor(Colors.Orange);
              }}
            ></div>
            <div
              style={{ backgroundColor: Colors.White }}
              className="h-6 w-6 border border-gray-300 cursor-pointer hover:border-gray-800 my-2"
              onClick={() => {
                updateColor(Colors.White);
              }}
            ></div>
          </div>
        </div>
      )}
      {ErasorTrue && (
        <div>
          <div className="text-text1">brush size</div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
             value={size}
            onChange={updateBrushSize}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Tool;
