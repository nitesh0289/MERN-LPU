import React from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

function ProductPage() {
  const { id } = useParams();
  const { data, error, loading } = useFetch({
    url: `https://fakestoreapi.com/products/${id}`,
    method: "GET"
  });
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem("userCart") || [];
    if (cartItems.length > 0)
      localStorage.setItem("userCart", JSON.stringify([...cartItems, data]));
    else localStorage.setItem("userCart", JSON.stringify([data]));
    navigate("/cart");
  };

  return (
    <>
      {loading ? (
        <h1>Product is loading...</h1>
      ) : (
        <main>
          <img src={data?.image} alt={data?.title} width={200} height={200} />
          <h2>{data?.title}</h2>
          <h3>{data?.price}</h3>
          <p>{data?.category}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </main>
      )}
    </>
  );
}

export default ProductPage;
