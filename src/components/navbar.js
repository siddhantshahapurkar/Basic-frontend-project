import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainNavbar } from "./mainNavbar";

const Navbar = () => {
  const [state, setState] = useState(1);
  const dict = { 1: "car1.jpg", 2: "car2.jpg", 3: "car3.jpg", 4: "car4.jpg" };

  const prev = () => {
    if (state !== 1) {
      setState(state - 1);
    } else {
      setState(4);
    }
  };

  const next = () => {
    if (state !== 4) {
      setState(state + 1);
    } else {
      setState(1);
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="bg-orange-300">
        <div className="flex justify-center">
          <h1 className="text-7xl pt-10 font-agdasima transition ease-in-out delay-150 hover:animate-bounce">
            New Collections
          </h1>
        </div>
        <div className="h-3/5 flex justify-center items-center pt-10">
          <AiFillCaretLeft className="icon" onClick={prev} />
          <div className="collection_img_div">
            <img className="collection_img" src={dict[state]} alt="" />
            {/* <img className="h-4/5" src="car2.jpg" alt="" />
            <img className="h-4/5" src="car3.jpg" alt="" />
            <img className="h-4/5" src="car4.jpg" alt="" /> */}
          </div>
          <AiFillCaretRight className="icon" onClick={next} />
        </div>
        <div className="pt-10"></div>
      </div>
    </>
  );
};

export default Navbar;
