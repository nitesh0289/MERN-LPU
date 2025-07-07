import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Dashboard() {
  return (
    <main style={{ height: "100vh", padding: 0, margin: 0 }}>
      {/* Navbar */}
      <Navbar />
      <Outlet />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Dashboard;
