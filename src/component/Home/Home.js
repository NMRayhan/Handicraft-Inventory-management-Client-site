import React from "react";
import BusinessSummary from "./BusinessSummary";
import CustomerSupport from "./CustomerSupport";
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
      <div>
        <CustomerSupport/>
      </div>
    </div>
  );
};

export default Home;
