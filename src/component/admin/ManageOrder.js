import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";
import OrderRow from "./OrderRow";

const ManageOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
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
