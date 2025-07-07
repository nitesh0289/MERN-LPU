import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes, useNavigate, useParams } from "react-router";
import App from "./App";
import "./index.css";
import useFetch from "./components/hooks/useFetch";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
};

const About = () => {
  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
};

const Contact = () => {
  return (
    <main>
      <h1>Contact Page</h1>
    </main>
  );
};

const Profile = () => {
  return (
    <main>
      <h1>Profile Page</h1>
    </main>
  );
};

const UserProfile = () => {
  const params = useParams();

  return (
    <main>
      <h1>This is a profile of {params.username}</h1>
      <h2>Age: {params.age}</h2>
    </main>
  );
};

const ProfileSetting = () => {
  return (
    <main>
      <h1>Profile Setting Page</h1>
    </main>
  );
};

// => /products
const Products = () => {
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
              <NavLink to={`/products/${product.id}`} key={i}>
                <img src={product.image} alt={product.title} width={200} height={200} />
                <p>{product.title}</p>
              </NavLink>
            );
          })}
        </>
      )}
    </main>
  );
};

// => /products/:id
const ProductPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch({
    url: `https://fakestoreapi.com/products/${id}`,
    method: "GET"
  });
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem("userCart") || [];
    localStorage.setItem("userCart", JSON.stringify([...cartItems, data]));
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
};

const CartPage = () => {
  return (
    <main>
      <h1>Cart Page</h1>
    </main>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path=":username">
            <Route index element={<UserProfile />} />
            <Route path=":age" element={<UserProfile />} />
          </Route>
          {/* <Route path=":username/:age" element={<UserProfile />} /> */}
          <Route path="setting" element={<ProfileSetting />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
