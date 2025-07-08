import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

import "./navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedinUser")) || [];
    if (user.length) {
      setUser(user[0]);
    } else {
      setUser(null);
    }
    console.log("hello useEffect runs")
  }, [localStorage.getItem("loggedinUser")]);

  const handleClick = () => {
    if (user?.email) {
      const loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
      if (loggedinUser.length) {
        localStorage.setItem("loggedinUser", JSON.stringify([]));
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <header>
      <a className="navbrand" href="/">
        LPU Store
      </a>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/about"}>About us</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </nav>
      <div className="right">
        <h4>Hi {user?.name || "Guest"}</h4>
        <button className="logout-btn" onClick={handleClick}>
          {user?.email ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
