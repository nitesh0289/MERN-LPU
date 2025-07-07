import React from "react";
import { NavLink } from "react-router";

import useFetch from "../hooks/useFetch";
import "./style.css";

// => /products
function Products() {
  const { data, error, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
    method: "GET"
  });

  return (
    <main className="products-container">
      <h1>Products</h1>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data?.map((product, i) => {
              return (
                <NavLink to={`/products/${product.id}`} key={i}>
                  <img src={product.image} alt={product.title} width={200} height={200} />
                  <p>{product.title}</p>
                </NavLink>
              );
            })}
          </>
        )}
      </ul>
    </main>
  );
}

export default Products;
