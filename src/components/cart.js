import React from "react";
import { obj_data } from "../index";
import { MainNavbar } from "./mainNavbar";

const Cart = () => {
  //   var obj_data = require("../index");
  console.log(obj_data);
  return (
    <>
      <MainNavbar />
      <div>
        <h1 className="text-6xl flex justify-center font-tektur pt-3 pb-10">
          Shopping Cart
        </h1>
        <div className="pt-10">
          {obj_data.map((data) => {
            console.log(data.added);
            if (data.added == true) {
              return (
                <span className="flex pt-10 pb-10">
                  <div>
                    <img className="cart_img" src={data.src} alt="" />
                  </div>
                  <div className="cart_data pl-10 border-l-2 border-black">
                    <ul>
                      <li className="pt-2 font-semibold">
                        Color: {data.color}
                      </li>
                      <li className="pt-2 font-semibold">
                        Description: {data.description}
                      </li>
                      <li className="pt-2 font-semibold">
                        Size selected: {data.sizeSelected}
                      </li>
                    </ul>
                  </div>
                </span>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
