import React, { useState } from "react";

import "./signup.css";
import { useNavigate } from "react-router";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  function handleSignup() {
    const { name, email, password, confirmPassword } = form;
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Required fields are empty!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password not matched!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUsers = JSON.stringify([...users, { name, email, password }]);

    localStorage.setItem("users", newUsers);
    navigate("/login");
  }

  return (
    <main className="container">
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
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
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
        />
      </div>

      <button onClick={handleSignup}>Signup</button>
    </main>
  );
}

export default Signup;
