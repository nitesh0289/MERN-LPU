import React, { useState } from "react";

import "./login.css";
import { useNavigate } from "react-router";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleLogin() {
    const { email, password } = form;
    if (email === "" || password === "") {
      alert("Required fields are empty!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.filter((u) => u.email === email);
    if (!user.length) {
      alert("User not exists, Please signup!");
      return;
    }

    if (user[0].password !== password) {
      alert("Email or password is invalid");
      return;
    }

    localStorage.setItem("loggedinUser", JSON.stringify(user));
    navigate("/");
  }

  return (
    <main className="container">
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Name"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}

export default Login;
