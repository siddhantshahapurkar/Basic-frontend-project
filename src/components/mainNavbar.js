import React from "react";
import { Link } from "react-router-dom";

export const MainNavbar = () => {
  return (
    <div className="bghome bg-local bg-cover bg-opacity-50 h-screen opacity-95">
      <div className="grid grid-cols-8 bg-white h-10 flex justify-center items-center">
        <div className="col-span-3"></div>
        <div className="col-span-4 flex justify-center">
          <ul className="flex">
            <li className="px-8 font-serif text-xl">Home</li>
            <li className="px-8 font-serif text-xl">Clothes</li>{" "}
            <li className="px-8 font-serif text-xl">
              <Link to={"/aboutUs"}>About Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <Link to={"/cart"}>
            <img className="shoppingimg" src="shopping.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
