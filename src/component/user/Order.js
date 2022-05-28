import React from "react";

const Order = ({ details, index }) => {
  const {
    customer_name,
    customer_email,
    customer_phone,
    product_name,
    quantity,
    price,
    shippingAddress,
    _id,
  } = details;
  return (
    <tr>
      <th>{index+=1}</th>
      <td>{customer_name}</td>
      <td>{customer_email}</td>
      <td>{customer_phone}</td>
      <td>{product_name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{shippingAddress}</td>
      <td>{_id}</td>
      <td><button className="btn btn-error btn-sm">Cancel Order</button></td>
    </tr>
  );
};

export default Order;
