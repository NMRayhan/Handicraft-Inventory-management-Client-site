import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ details }) => {
  const { name, description, img, price, stock, min_Order } = details;
  const navigate = useNavigate()
  const handleProductPurchase = (_id) => {
    navigate(`/purchase/${_id}`)
  }
  return (
    <div className="card card-compact max-h-max bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} className="h-72 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <span className="text-accent text-xl">Short Description</span>
        <p>{description}</p>
        <div className="grid grid-flow-col justify-between items-center">
          <div>
            <span className="text-accent text-xl">Price </span>
            <p>{price}</p>
          </div>
          <div>
            <span className="text-accent text-xl">Stock </span>
            <p>{stock}</p>
          </div>
          <div>
            <span className="text-accent text-xl">Order </span><div className="badge badge-primary badge-outline">Minimum</div>
            <p>{min_Order}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=> handleProductPurchase(details._id)}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
