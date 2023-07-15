import React from "react";
// import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useState, useRef } from "react";
import Item from "./item";

const Inventory = () => {
  let admin = require("./inventory.json");
  // const obj_data = admin;

  return (
    <div>
      <h1 className="text-7xl font-agdasima flex justify-center pt-12">
        Inventory
      </h1>
      <div className="grid grid-cols-3 gap-3 pt-12 m-8">
        <Item
          id={admin[0].id}
          // src={admin[0].src}
          // added={admin[0].added}
          // quantity={admin[0].quantity}
          // description={admin[0].description}
          // color={admin[0].color}
          // sizeSelected={admin[0].sizeSelected}
          // showsizeoptions={admin[0].showsizeoptions}
          // showadditem={admin[0].showadditem}
        />
        <Item
          id={admin[1].id}
          // src={admin[1].src}
          // added={admin[1].added}
          // quantity={admin[1].quantity}
          // description={admin[1].description}
          // color={admin[1].color}
          // sizeSelected={admin[1].sizeSelected}
          // showsizeoptions={admin[1].showsizeoptions}
          // showadditem={admin[1].showadditem}
        />
        <Item
          id={admin[2].id}
          // src={admin[2].src}
          // added={admin[2].added}
          // quantity={admin[2].quantity}
          // description={admin[2].description}
          // color={admin[2].color}
          // sizeSelected={admin[2].sizeSelected}
          // showsizeoptions={admin[2].showsizeoptions}
          // showadditem={admin[2].showadditem}
        />
        <Item
          id={admin[3].id}
          // src={admin[3].src}
          // added={admin[3].added}
          // quantity={admin[3].quantity}
          // description={admin[3].description}
          // color={admin[3].color}
          // sizeSelected={admin[3].sizeSelected}
          // showsizeoptions={admin[3].showsizeoptions}
          // showadditem={admin[3].showadditem}
        />
        <Item
          id={admin[4].id}
          // src={admin[4].src}
          // added={admin[4].added}
          // quantity={admin[4].quantity}
          // description={admin[4].description}
          // color={admin[4].color}
          // sizeSelected={admin[4].sizeSelected}
          // showsizeoptions={admin[4].showsizeoptions}
          // showadditem={admin[4].showadditem}
        />
        <Item
          id={admin[5].id}
          // src={admin[5].src}
          // added={admin[5].added}
          // quantity={admin[5].quantity}
          // description={admin[5].description}
          // color={admin[5].color}
          // sizeSelected={admin[5].sizeSelected}
          // showsizeoptions={admin[5].showsizeoptions}
          // showadditem={admin[5].showadditem}
        />
      </div>
    </div>
  );
};

export default Inventory;
