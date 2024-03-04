import React from "react";
import BreadCrumb from "./BreadCrumb";
import { shopData } from "../constants/breadCrumbData";

const Shop = () => {
  return (
    <div>
      <h1>This is Shop</h1>
      <BreadCrumb data={shopData} />
    </div>
  );
};

export default Shop;
