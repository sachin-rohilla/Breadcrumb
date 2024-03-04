import React from "react";
import BreadCrumb from "./BreadCrumb";
import { checkoutData } from "../constants/breadCrumbData";

const Checkout = () => {
  return (
    <div>
      <h1>This is Checkout</h1>
      <BreadCrumb data={checkoutData} />
    </div>
  );
};

export default Checkout;
