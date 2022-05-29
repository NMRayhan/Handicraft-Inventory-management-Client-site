import React from "react";
import { toast } from "react-toastify";

const Order = ({ details, index, refetch }) => {
  // const [user, loading, error] =useAuthState(auth)
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

  const handleCancelOrder = () => {
    const proceed = window.confirm("Are You sure delete this order?");
    if (proceed) {
      fetch(`https://rocky-peak-58572.herokuapp.com/orderCancel/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast.success("Order Delete Successfully Done");
        });
    }
  };

  return (
    <tr>
      <th>{(index += 1)}</th>
      <td>{customer_name}</td>
      <td>{customer_email}</td>
      <td>{customer_phone}</td>
      <td>{product_name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{shippingAddress}</td>
      <td>{_id}</td>
      <td>
        <button className="btn btn-error btn-sm" onClick={handleCancelOrder}>
          Delete Order
        </button>
      </td>
    </tr>
  );
};

export default Order;
