import React from "react";
import useFetch from "./useFetch";

function Products() {
  const { data, error, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
    method: "GET"
  });

  return (
    <main style={{ display: "flex", flexDirection: "column", overflow: "auto", height: "100vh" }}>
      <h1>Products</h1>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data?.map((product, i) => {
            return (
              <div key={i}>
                <img src={product.image} alt={product.title} width={200} height={200} />
                <p>{product.title}</p>
              </div>
            );
          })}
        </>
      )}
    </main>
  );
}

export default Products;
