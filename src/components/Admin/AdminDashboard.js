import React, { useState, useContext } from "react";
import AdminList from "./AdminList";
import FieldWorkerList from "../FieldWorker/FieldWorkerList";
import { AuthContext } from "../../AuthContext";
import { FiLogOut } from "react-icons/fi";

const AdminDashboard = () => {
  const [view, setView] = useState("admins");
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("Logging out...");
    logout();
  };

  return (
      
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ff5733", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "10px", padding: "10px" }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-white" style={{ fontSize: "1.5rem" }}>🚀 Admin Dashboard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button 
                  className={`btn btn-sm mx-1 ${view === "admins" ? "btn-warning text-dark" : "btn-outline-light"}`} 
                  onClick={() => setView("admins")}
                  style={{ borderRadius: "15px", fontWeight: "bold" }}
                >
                  👤 Admin List
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`btn btn-sm mx-1 ${view === "fieldworkers" ? "btn-warning text-dark" : "btn-outline-light"}`} 
                  onClick={() => setView("fieldworkers")}
                  style={{ borderRadius: "15px", fontWeight: "bold" }}
                >
                  🛠 Field Worker List
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`btn btn-sm mx-1 ${view === "users" ? "btn-warning text-dark" : "btn-outline-light"}`} 
                  onClick={() => setView("users")}
                  style={{ borderRadius: "15px", fontWeight: "bold" }}
                >
                  👥 Show Users
                </button>
              </li>
              <li className="nav-item">
              <button 
                  className="btn btn-sm mx-1 text-white" 
                  onClick={handleLogout} 
                  style={{ backgroundColor: "#000", borderRadius: "15px", fontWeight: "bold", border: "1px solid white" }}
                >
                 <FiLogOut className="me-1" /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-4 text-center">
        {view === "admins" && <AdminList />}
        {view === "fieldworkers" && <FieldWorkerList />}
        {view === "users" && <div>Users List Component Placeholder</div>}
      </div>
    </div>
  );
};

export default AdminDashboard;