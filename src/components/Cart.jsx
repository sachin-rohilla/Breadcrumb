import React from "react";
import BreadCrumb from "./BreadCrumb";
import { cartData } from "../constants/breadCrumbData";

const Cart = () => {
  return (
    <div>
      <h1>This is Cart</h1>
      <BreadCrumb data={cartData} />
    </div>
  );
};

export default Cart;
