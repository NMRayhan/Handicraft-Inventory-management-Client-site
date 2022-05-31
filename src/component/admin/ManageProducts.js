import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [user, loading] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [productDeleting, setProductDeleting] = useState(null);

  useEffect(() => {
    fetch(`https://rocky-peak-58572.herokuapp.com/products/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);

  if (loading) {
    <Spinner />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Img</th>
            <th>Price</th>
            <th>Minimum Order</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Update</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pd, index) => (
            <ProductRow
              key={pd._id}
              index={index}
              details={pd}
              setProductDeleting={setProductDeleting}
            />
          ))}
        </tbody>
      </table>
      {productDeleting && (
        <DeleteConfirmModal
          details={productDeleting}
          key={productDeleting._id}
          setProductDeleting={setProductDeleting}
        />
      )}
    </div>
  );
};

export default ManageProducts;
