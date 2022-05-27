import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Purchase = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(product.min_Order);
  const [purchaseError, setPurchaseError] = useState("");
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/purchase/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [_id]);

  //   submit Product Purchase details
  const handleSubmitPurchase = (e) => {
    e.preventDefault();
    const customer_name = e.target.customer_name.value;
    const customer_email = e.target.customer_email.value;
    const customer_phone = e.target.customer_phone.value;
    const product_name = e.target.product_name.value;
    const quantity = e.target.quantity.value;
    const shippingAddress = e.target.shippingAddress.value;

    const Order = {
      customer_name,
      customer_email,
      customer_phone,
      product_name,
      quantity,
      shippingAddress,
    };
    const url = `http://localhost:5000/purchase`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Order),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Order Place Successfully Done");
        return e.target.reset();
      });
  };

  //   product quantity change
  const handleQuantityChange = (e) => {
    const typed = parseInt(e.target.value);
    if (typed < 0) {
      return;
    }
    if (typed >= product.min_Order && typed < product.stock) {
      setQuantity(e.target.value);
      setPurchaseError("");
    } else {
      setPurchaseError(
        `Order Maximum ${product.stock - 1} number of Quantity Or Minimum ${
          product.min_Order
        } of Quantity`
      );
      setQuantity(e.target.value);
    }
  };

  return (
    <div className="">
      {/* product top section  */}
      <div>
        <h3 className="text-center text-primary text-2xl font-bold my-10">
          Purchase your desire product with reasonable price
        </h3>
        <div className="grid gap-5 justify-between lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-9/12 m-auto">
          <div className="border-2 rounded-lg">
            <img src={product.img} alt="" className="p-8 rounded-lg" />
          </div>
          <div>
            <h1 className="text-2xl">
              <span className="text-accent">Product Title</span> <br />{" "}
              <span className="">{product.name}</span>
            </h1>
          </div>
          <div>
            <h2 className="text-2xl">
              <span className="text-accent">Product Description</span> <br />{" "}
              {product.description}
            </h2>
          </div>
          <div>
            <h1 className="text-2xl text-center font-mono">
              Stock-<span className="text-secondary">{product.stock}</span>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-center font-mono">
              Price-<span className="text-secondary">{product.price}</span>$
              <small>(per unit)</small>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl text-center font-mono">
              Minimum Order-
              <span className="text-secondary">{product.min_Order}</span>
            </h1>
          </div>
        </div>
      </div>
      {/* form section  and calculation */}
      <div>
        <div className="">
          <div className="max-w-4xl m-auto">
            <div className="card shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmitPurchase}>
                  <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Customer Email</span>
                      </label>
                      <input
                        type="email"
                        name="customer_email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Customer Name</span>
                      </label>
                      <input
                        type="text"
                        name="customer_name"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Name</span>
                      </label>
                      <input
                        type="text"
                        name="product_name"
                        value={product.name}
                        readOnly
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Order Quantity</span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="input input-bordered"
                      />
                      <label className="label">
                        <span className="label-text-alt text-red-600">
                          {purchaseError}
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Shipping Address</span>
                      </label>
                      <textarea
                        name="shippingAddress"
                        required
                        className="textarea textarea-bordered"
                      ></textarea>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="text"
                        name="customer_phone"
                        required
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="form-control mt-6 max-w-sm m-auto">
                    {quantity >= product.min_Order &&
                    quantity < product.stock ? (
                      <button className="btn btn-primary" type="submit">
                        Place Order
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        disabled
                        type="submit"
                      >
                        Place Order
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
