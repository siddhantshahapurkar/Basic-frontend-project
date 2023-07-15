import React from "react";

const AboutUs = () => {
  const data = require("./inventory.json");
  const data_clothes = data;
  const lessee = () => {
    console.log(data);
  };

  return (
    <>
      <div>AboutUs</div>
      <button onClick={lessee}>hbchcb</button>
    </>
  );
};

export default AboutUs;
