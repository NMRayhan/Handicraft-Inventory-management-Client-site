import React from "react";
import BusinessSummary from "./BusinessSummary";
import HomeBanner from "./HomeBanner";
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
    </div>
  );
};

export default Home;
