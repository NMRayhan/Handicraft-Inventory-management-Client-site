import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";
import Order from "./Order";

const Orders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders/${user?.email}`;
    fetch(url,{
      method:"GET"
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error?.message);
  }
  return (
    <div>
      <h2 className="text-primary text-2xl">Total Order : {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Per Price</th>
              <th>Shipping Address</th>
              <th>Order ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order key={order._id} index={index} details={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
