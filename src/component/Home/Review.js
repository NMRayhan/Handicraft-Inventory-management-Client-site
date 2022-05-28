import React from "react";

const Review = ({ details }) => {
  const { productName, userReview, userRating, reviewName, reviewPhoto } =
    details;
  return (
    <div className="card bg-base-200 shadow-xl">
      <h3 className="text-center text-info text-2xl mt-5">{productName}</h3>
      <div className="text-center p-10">
        <p className="text-xl">{userReview}</p>
      </div>
      <div className="text-center p-10">
        <p className="text-xl">User Rating : {userRating}</p>
      </div>
      <div className="w-3/4">
        <div className="flex items-center">
          <div className="card-body items-end">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={reviewPhoto} alt={reviewName} />
              </div>
            </div>
          </div>
          <div className="card-body items-start">
            <h2 className="card-title text-accent font-light text-2xl">
              {reviewName}
            </h2>
            {/* <h2 className="card-title text-2xl">{Location}</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
