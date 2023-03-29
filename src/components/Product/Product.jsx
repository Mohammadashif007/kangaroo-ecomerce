import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, addToCart}) => {
  // console.log(product);
  const { img, name, price, seller, ratings} = product;
  return (
    <div className="product-cart">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="name">{name}</h5>
        <p>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratting : {ratings}</p>
      </div>
      <button className="add-btn" onClick={()=>addToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
  );
};

export default Product;
