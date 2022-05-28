import React from "react";
import BusinessSummary from "./BusinessSummary";
import CustomerSupport from "./CustomerSupport";
import FAQ from "./FAQ";
import HomeBanner from "./HomeBanner";
import HomeReview from "./HomeReview";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <div>
        <BusinessSummary/>
      </div>
      <div>
          <Products/>
      </div>
      <div>
        <CustomerSupport/>
      </div>
      <div>
        <HomeReview/>
      </div>
      <div>
        <FAQ/>
      </div>
    </div>
  );
};

export default Home;
