import React from "react";
import Header from "../Header";
import Slider from "../Slider";
import Search from "../Search";

const Checkout = () => {
  return (
    <>
      <Header strip={false} cart={false} />

      <Search />
    </>
  );
};

export default Checkout;
