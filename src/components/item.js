import React, { useRef, useState } from "react";

const Item = (props) => {
  var obj_data = require("../index");
  const data = require("./inventory.json");
  obj_data[props.id - 1] = data[props.id - 1];
  console.log(obj_data[props.id - 1].showadditem);
  const s_ref = useRef();
  const m_ref = useRef();
  const l_ref = useRef();
  const xl_ref = useRef();

  const [showadditem, setshowadditem] = useState(true);
  const [showsizeoptions, setshowsizeoptions] = useState(false);
  obj_data[props.id - 1].showadditem = showadditem;
  obj_data[props.id - 1].showsizeoptions = showsizeoptions;

  const select_size = (e) => {
    setshowadditem(true);
    setshowsizeoptions(false);
    obj_data[props.id - 1].sizeSelected = e.target.id;
    obj_data[props.id - 1].added = true;
  };

  const additem = () => {
    setshowadditem(false);
    setshowsizeoptions(true);
    console.log(obj_data[props.id - 1]);
  };

  console.log(obj_data[props.id - 1].showadditem);

  return (
    <div className="flex justify-center flex-col">
      <img className="img_inv" src={obj_data[props.id - 1].src} alt="" />
      <div className="flex justify-center p-3">
        <div className="rounded-md border-2 border-black px-5">
          <button
            className={
              obj_data[props.id - 1].showadditem == true
                ? "selbutton"
                : "hideselbutton"
            }
            onClick={additem}
          >
            Add Item
          </button>
          <ul
            className={
              obj_data[props.id - 1].showsizeoptions == true
                ? "sizebar"
                : "hidesizebar"
            }
          >
            {" "}
            <div className="flex justify-center items-center text-lg pr-1">
              Size:
            </div>
            <li>
              <button className="p-2" id="S" ref={s_ref} onClick={select_size}>
                S
              </button>
            </li>
            <li>
              <button className="p-2" id="M" ref={m_ref} onClick={select_size}>
                M
              </button>
            </li>
            <li>
              <button className="p-2" id="L" ref={l_ref} onClick={select_size}>
                L
              </button>
            </li>
            <li>
              <button
                className="p-2"
                id="XL"
                ref={xl_ref}
                onClick={select_size}
              >
                XL
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Item;
