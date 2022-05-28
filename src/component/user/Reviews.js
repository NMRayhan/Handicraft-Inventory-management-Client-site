import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import AddReviewModal from "./AddReviewModal";

const Reviews = () => {
  const [user, loading, error] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/review/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email]);

  console.log(reviews);

  return (
    <div className="">
      <label className="btn btn-link link-hover" htmlFor="AddReview-Modal">
        Add Review
      </label>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => {
                return (
                  <tr key={index}>
                    <th>{(index += 1)}</th>
                    <td>{review.productName}</td>
                    <td>{review.userReview}</td>
                    <td>
                      <button className="btn btn-sm btn-warning">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <AddReviewModal />
    </div>
  );
};

export default Reviews;
