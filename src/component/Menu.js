import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeClick, clickPencil,setActionMenuItems } from "../utils/MenuSlice";
import { iconsNamesArray } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faFileArrowDown,
  faRotateRight,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
  const dispatch = useDispatch();
  const handleClick = (iconName) => {
    dispatch(clickPencil(iconName));
    dispatch(activeClick(iconName));
  };
  const handleActionMenuItems = (iconName) => {
    dispatch(setActionMenuItems(iconName));
    
  };

  const activeMenu = useSelector((store) => store.menu.activeItems);

  return (
    <div
      className="px-5 py-1 flex justify-between w-1/4 absolute left-1/2 top-10 rounded-md menu-container"
      style={{ zIndex: 10 }}
    >
      <div
        className={`cursor-pointer h-10 w-10 flex justify-center items-center rounded-md hover:bg-text2 ${
          activeMenu === iconsNamesArray.Pencil ? "bg-text2" : ""
        } `}
        onClick={() => handleClick(iconsNamesArray.Pencil)}
      >
        <FontAwesomeIcon icon={faPencil} className="icon" />
      </div>
      <div
        className={`cursor-pointer h-10 w-10 flex justify-center items-center rounded-md hover:bg-text2 ${
          activeMenu === iconsNamesArray.Eraser ? "bg-text2" : ""
        } `}
        onClick={() => handleClick(iconsNamesArray.Eraser)}
      >
        <FontAwesomeIcon icon={faEraser} className="icon" />
      </div>
      <div
        className="cursor-pointer h-10 w-10 flex justify-center items-center rounded-md hover:bg-text2"
        onClick={() => {
          handleActionMenuItems(iconsNamesArray.FileArrowDown);
        }}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className="icon" />
      </div>
      <div
        className="cursor-pointer h-10 w-10 flex justify-center items-center rounded-md hover:bg-text2"
        onClick={() => {
          handleActionMenuItems(iconsNamesArray.RotateRight);
        }}
      >
        <FontAwesomeIcon icon={faRotateRight} className="icon" />
      </div>
      <div
        className="cursor-pointer h-10 w-10 flex justify-center items-center rounded-md hover:bg-text2"
        onClick={() => {
          handleActionMenuItems(iconsNamesArray.RotateLeft);
        }}
      >
        <FontAwesomeIcon icon={faRotateLeft} className="icon" />
      </div>
    </div>
  );
};
export default Menu;
