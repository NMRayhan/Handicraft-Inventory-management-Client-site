import React from "react";

const OrderRow = ({ details, index }) => {
  const {
    customer_name,
    customer_email,
    customer_phone,
    product_name,
    quantity,
    shippingAddress,
  } = details;
  return (
    <tr class="hover">
      <th>{(index += 1)}</th>
      <td>{customer_email}</td>
      <td>{customer_phone}</td>
      <td>{product_name}</td>
      <td>{quantity}</td>
      <td>{shippingAddress}</td>
      <td>
          <button className="btn btn-sm btn-primary">Delivery</button>
      </td>
    </tr>
  );
};

export default OrderRow;
