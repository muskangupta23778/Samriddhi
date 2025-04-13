import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

const FieldWorkerLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log(id, password);
      const response = await axios.post("https://samridhihealth.com/fw/login", { id, password });
      login(response.data.token);
      navigate("/fw/dashboard");
    } catch (err) {
      console.log(err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient">
      <div className="card p-5 shadow-lg w-25 rounded-4 border-0" style={{ background: "#ff5733", color: "white", backdropFilter: "blur(10px)" }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#ffc107" }}>🚀 Login</h2>
        {error && <p className="text-warning text-center fw-semibold">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">🆔 ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="form-control border-0 shadow-sm"
              required
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">🔒 Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control border-0 shadow-sm"
              required
              style={{ borderRadius: "10px" }}
            />
          </div>
          <button type="submit" className="btn w-100 fw-bold shadow-sm" style={{ backgroundColor: "#ffc107", color: "#ff5733", borderRadius: "10px" }}>
            🔑 Login
          </button>
        </form>
      </div>
      <style>
        {`
          .bg-gradient {
            background: linear-gradient(135deg, #ff5733, #ffc107);
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default FieldWorkerLogin;
