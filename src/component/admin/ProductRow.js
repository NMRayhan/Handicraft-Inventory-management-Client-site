import React from "react";

const ProductRow = ({ details, index, setProductDeleting }) => {
  const { name, description, img, min_Order, price, stock } = details;
  return (
    <tr className="hover">
      <th>{(index += 1)}</th>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <img src={img} alt={name} />
      </td>
      <td>{price}</td>
      <td>{min_Order}</td>
      <td>{stock}</td>
      <td>
        <label for="delete-confirm-modal" onClick={()=> setProductDeleting(details)} class="btn btn-xs bg-red-600">Delete</label>
      </td>
      <td>
        <button className="btn btn-xs bg-primary">Update</button>
      </td>
      <td>
      <input type="checkbox" class="toggle toggle-primary" />
      </td>
    </tr>
  );
};




export default ProductRow;
