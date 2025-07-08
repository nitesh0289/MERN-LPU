import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import App from "./App";
import store from "./store";
import "./index.css";
import Products from "./components/ecommerce/Products";
import ProductPage from "./components/ecommerce/Product";
import CartPage from "./components/ecommerce/Cart";
import Dashboard from "./layouts/Dashboard";
import Signup from "./components/signup";
import Login from "./components/login";
import PrivateRoute from "./routes/Private";
import AuthRoute from "./routes/AuthRoute";
import AdminRoute from "./routes/AdminRoute";
import ReduxCounter from "./components/ReduxCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="container">
      <h1>Home Page</h1>
      <button onClick={() => navigate("/products")}>Products</button>
    </main>
  );
};

const About = () => {
  return (
    <main className="container">
      <h1>About Page</h1>
    </main>
  );
};

const Contact = () => {
  return (
    <main className="container">
      <h1>Contact Page</h1>
    </main>
  );
};

const Profile = () => {
  return (
    <main className="container">
      <h1>Profile Page</h1>
    </main>
  );
};

const UserProfile = () => {
  const params = useParams();

  return (
    <main className="container">
      <h1>This is a profile of {params.username}</h1>
      <h2>Age: {params.age}</h2>
    </main>
  );
};

const ProfileSetting = () => {
  return (
    <main className="container">
      <h1>Profile Setting Page</h1>
    </main>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <Contact />
                </PrivateRoute>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthRoute>
                  <Signup />
                </AuthRoute>
              }
            />
            <Route path="/profile">
              <Route
                index
                element={
                  <AdminRoute>
                    <Profile />
                  </AdminRoute>
                }
              />
              <Route path=":username">
                <Route index element={<UserProfile />} />
                <Route path=":age" element={<UserProfile />} />
              </Route>
              {/* <Route path=":username/:age" element={<UserProfile />} /> */}
              <Route path="setting" element={<ProfileSetting />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/redux-counter" element={<ReduxCounter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
