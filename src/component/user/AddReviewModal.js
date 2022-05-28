import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";

const AddReviewModal = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddReview = (event) => {
    event.preventDefault();
    const product = productName;
    const userReview = event.target.review.value;
    let photoURL = "";
    if (user?.photoURL !== null) {
      photoURL = user.photoURL;
    } else {
      photoURL = "https://i.ibb.co/56d3Hfw/images.png";
    }

    const review = {
      productName: product,
      userReview: userReview,
      reviewEmail: user.email,
      reviewName: user.displayName,
      reviewPhoto: photoURL,
    };
    
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => toast.success("User Review Submitted"));
    event.target.reset();
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <input type="checkbox" id="AddReview-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="AddReview-Modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Product Review</h3>
          <form onSubmit={handleAddReview} className="py-4">
            <div className="form-control mb-5">
              <select
                className="select select-bordered w-full"
                onChange={(e) => setProductName(e.target.value)}
              >
                <option disabled selected>
                  Pick a product
                </option>
                {products.map((product, index) => (
                  <option key={index} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                name="email"
                value={user?.email}
                readOnly
                className="input input-primary"
              />
            </div>
            <div className="form-control mt-5">
              <textarea
                name="review"
                className="textarea textarea-primary"
                placeholder="Enter Your Review"
              ></textarea>
            </div>
            <div className="mt-5">
              <button type="submit" className="btn btn-outline btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;
