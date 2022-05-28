import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";
import AddReviewModal from "./AddReviewModal";

const Reviews = () => {
  const [user, loading, error] = useAuthState(auth);

  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch(`http://localhost:5000/review/${user?.email}`).then((res) =>
      res.json()
    )
  );

  const HandleDeleteReview = (id) => {
    const proceed = window.confirm("Are You sure want to delete this review?");
    if (!proceed) {
      return;
    } else {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE"
      })
        .then((response) => response.json())
        .then((data) => {
          toast(data.message);
          refetch();
        });
    }
  };

  if (isLoading || loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error.message);
  }

  return (
    <div className="">
      <label className="btn btn-link link-hover" htmlFor="AddReview-Modal">
        Add Review
      </label>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Review</th>
                <th>Rating</th>
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
                    <td>{review.userRating}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => HandleDeleteReview(review._id)}
                      >
                        Delete
                      </button>
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
