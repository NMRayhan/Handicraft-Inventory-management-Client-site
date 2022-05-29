import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Spinner from "../common/Spinner";
import OrderRow from "./OrderRow";

const ManageOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [admin] = useAdmin(user)
  useEffect(() => {
    fetch(`http://localhost:5000/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [admin]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>no</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Product Name</th>
            <th>quantity</th>
            <th>shipping Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <OrderRow key={order._id} index={index} details={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
