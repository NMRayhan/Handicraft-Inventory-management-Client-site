import React from "react";
import { useQuery } from "react-query";
import Spinner from "../common/Spinner";
import Review from "./Review";

const HomeReview = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/review`).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  console.log(reviews);
  return (
    <div className="my-10">
      <div className="divider divider-vertical"></div>
      <h5 className="text-center text-4xl font-mono text-primary my-3">
        Our Customer Review
      </h5>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        {reviews.map((review) => (
          <Review key={review._id} details={review} />
        ))}
      </div>
    </div>
  );
};

export default HomeReview;
