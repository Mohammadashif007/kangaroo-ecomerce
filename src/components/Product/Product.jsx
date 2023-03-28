import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product-cart">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="name">{name}</h5>
        <p>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratting : {ratings}</p>
      </div>
      <button className="add-btn">Add To Cart</button>
    </div>
  );
};

export default Product;
