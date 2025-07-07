import React from "react";
import { NavLink } from "react-router";

import "./navbar.css";

function Navbar() {
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
      <button className="logout-btn" onClick={() => console.log("Logout successfull!")}>
        Logout
      </button>
    </header>
  );
}

export default Navbar;
