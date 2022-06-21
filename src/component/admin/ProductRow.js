import React from "react";

const ProductRow = ({ details, index, setProductDetails }) => {
  const { name, description, img, min_Order, price, stock, status } = details;
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
        <label
          htmlFor="delete-confirm-modal"
          onClick={() => setProductDetails(details)}
          className="btn btn-xs bg-red-600"
        >
          Delete
        </label>
      </td>
      <td>
        <label
          className="btn btn-xs bg-primary"
          onClick={() => setProductDetails(details)}
          htmlFor="update-product-modal"
        >
          Update
        </label>
      </td>
      <td>
        {status ? (
          "Published"
        ) : (
          "unPublished"
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
