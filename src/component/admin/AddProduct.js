import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";

const AddProduct = () => {
  const [user, loading] = useAuthState(auth);

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const admin_name = e.target.admin_email.value;
    const admin_email = e.target.admin_name.value;
    const name = e.target.product_name.value;
    const description = e.target.description.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const min_Order = e.target.min_Order.value;
    const img = e.target.img.value;

    const product = {
      admin_name,
      admin_email,
      name,
      description,
      quantity,
      price,
      min_Order,
      img,
    };
    console.log(product);
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Product Added to Database");
      });
    e.target.reset();
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <form onSubmit={handleSubmitAdd}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Admin Email</span>
          </label>
          <input
            type="email"
            name="admin_email"
            readOnly
            value={user?.email}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Admin Name</span>
          </label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            name="admin_name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            name="product_name"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            name="description"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Quantity</span>
          </label>
          <input
            type="number"
            name="quantity"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="number"
            name="price"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Minimum Order</span>
          </label>
          <input
            type="number"
            name="min_Order"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Img URL</span>
          </label>
          <input
            type="text"
            name="img"
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6 max-w-sm m-auto">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
