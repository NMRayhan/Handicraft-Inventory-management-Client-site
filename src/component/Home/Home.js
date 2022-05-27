import React from "react";
import HomeBanner from "./HomeBanner";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <div>
          <Products/>
      </div>
    </div>
  );
};

export default Home;
