import React from "react";
import Header from "../Header";
import Slider from "../Slider";

const Checkout = () => {
  return (
    <>
      <Header strip={false} cart={false} />
      <Slider />
    </>
  );
};

export default Checkout;
