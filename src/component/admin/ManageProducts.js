import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [user, loading] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);

  if (loading) {
    <Spinner />;
  }
  console.log(products);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Img</th>
            <th>Price</th>
            <th>Minimum Order</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pd, index) => (
            <ProductRow key={pd._id} index={index} details={pd} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
