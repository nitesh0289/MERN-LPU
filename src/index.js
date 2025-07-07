import { BrowserRouter, Route, Routes, useParams } from "react-router";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import Products from "./components/ecommerce/Products";
import ProductPage from "./components/ecommerce/Product";
import CartPage from "./components/ecommerce/Cart";
import Dashboard from "./layouts/Dashboard";

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

        <Route path="/products" element={<Dashboard />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
