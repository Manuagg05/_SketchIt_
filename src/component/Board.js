import React, { useRef, useLayoutEffect,useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const Board = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  const activeItems = useSelector((store) => store.menu.activeItems);
 const { color , size } = useSelector(
   (store) => store.tool[activeItems] || {}
 );

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const changeConfig = () => {
      context.strokeStyle = color;
      context.lineWidth = size;
      context.lineCap = "round"; // Optional: to make the drawing smoother
    };

    changeConfig();
  }, [color, size]);

  useLayoutEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseDown = (e) => {
      shouldDraw.current = true;
      context.beginPath();
     context.moveTo(e.clientX,e.clientY)
    
    };
    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    };
    const handleMouseUp = (e) => {
      shouldDraw.current = false;
      context.closePath();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  console.log(color, size);

  return (
    <>
      <canvas ref={canvasRef}> </canvas>
    </>
  );
};
export default Board;


