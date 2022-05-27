import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "Products.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="my-10">
        <h4 className="text-center text-primary text-4xl font-medium mt-10">
          Our Latest Product is Here....
        </h4>
        <h4 className="text-center text-accent my-4 text-xl font-medium mt-10">
          Our Product is our honour
        </h4>
      </div>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center">
        {products.map((product) => (
          <Product key={product._id} details={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
