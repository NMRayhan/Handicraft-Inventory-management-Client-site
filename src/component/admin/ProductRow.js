import React from "react";

const ProductRow = ({ details, index }) => {
  const { name, description, img, min_Order, price, stock } = details;
  console.log(details);
  return (
    <tr class="hover">
      <th>{(index += 1)}</th>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <img src={img} alt={name} />
      </td>
      <td>{price}</td>
      <td>{min_Order}</td>
      <td>{stock}</td>
    </tr>
  );
};

export default ProductRow;
