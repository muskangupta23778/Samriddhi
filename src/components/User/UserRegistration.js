import React, { useState, useContext } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";
import FieldWorkerProfile from "./../FieldWorker/FieldWorkerProfile";
import { AuthContext } from "../../AuthContext";

const UserRegistration = () => {
    const { logout } = useContext(AuthContext);
    const [users, setUsers] = useState([
        { name: "", identity_number: "", date_of_birth: "", address: "", phone: "" }
    ]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [showProfile, setShowProfile] = useState(false);
    const token = localStorage.getItem("token");

    const handleChange = (index, e) => {
        const newUsers = [...users];
        newUsers[index][e.target.name] = e.target.value;
        setUsers(newUsers);
    };

    const handleAddUser = () => {
        if (users.length < 5) {
            setUsers([...users, { name: "", identity_number: "", date_of_birth: "", address: "", phone: "", relation: "" }]);
            setActiveIndex(users.length);
        }
    };

    const handleRemoveUser = (index) => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
        setActiveIndex(null);
    };

    const handleToggleUser = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            await axios.post("http://localhost:4000/users", users, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include Bearer token in the header
                },
            });
            setMessage("Users registered successfully!");
            setUsers([{ name: "", identity_number: "", date_of_birth: "", address: "", phone: "" }]);
            setActiveIndex(0);
        } catch (err) {
            setError("Failed to register users. Please try again.");
        }
    };

    const handleLogout = () => {
        console.log("Logging out...");
        logout();
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ff5733", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "10px", padding: "10px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-white" style={{ fontSize: "1.5rem" }}>🚀 Dashboard</a>
                    <div className="ms-auto d-flex">
                        <button className="btn btn-outline-light me-2" style={{ borderRadius: "15px" }} onClick={() => setShowProfile(true)}>
                            <FiUser /> Profile
                        </button>
                        <button className="btn btn-dark" style={{ borderRadius: "15px" }} onClick={handleLogout}>
                            <FiLogOut /> Logout
                        </button>
                    </div>
                </div>
            </nav>
            {showProfile ? (
                <FieldWorkerProfile />
            ) : (
                <div className="d-flex justify-content-center align-items-center min-vh-100 bg-orange-pattern p-5">
                    <div className="card p-5 shadow-lg w-50 rounded-4 border-0" style={{ background: "#ffffffdd", backdropFilter: "blur(10px)", marginTop: "50px" }}>
                        <h2 className="text-center mb-4 text-white fw-bold" style={{ background: "#ff5733", padding: "10px", borderRadius: "10px" }}>User Registration</h2>
                        {message && <p className="text-success text-center fw-semibold">{message}</p>}
                        {error && <p className="text-danger text-center fw-semibold">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            {users.map((user, index) => (
                                <div key={index} className="mb-4 p-3 border rounded" style={{ background: "#fff8f5" }}>
                                    <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "#ff5733", borderRadius: "10px", cursor: "pointer", padding: "10px" }} onClick={() => handleToggleUser(index)}>
                                        <h5 className="fw-bold text-white mb-0 flex-grow-1 text-center">User {index + 1}</h5>
                                        {index > 0 && (
                                            <FaTrash onClick={() => handleRemoveUser(index)} size={16} style={{ cursor: "pointer", color: "white" }} />
                                        )}
                                    </div>
                                    {activeIndex === index && (
                                        [
                                            { label: "Name", name: "name", type: "text", required: true },
                                            { label: "Identity Number", name: "identity_number", type: "text", required: true },
                                            { label: "Date of Birth", name: "date_of_birth", type: "date", required: true },
                                            { label: "Address", name: "address", type: "text", required: true },
                                            { label: "Phone", name: "phone", type: "tel", required: true },
                                            ...(index > 0 ? [{ label: "Relation", name: "relation", type: "text", required: true }] : [])
                                        ].map((field, i) => (
                                            <div className="mb-3" key={i}>
                                                <label className="form-label fw-semibold">{field.label}</label>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={user[field.name]}
                                                    onChange={(e) => handleChange(index, e)}
                                                    className="form-control border-0 shadow-sm text-center"
                                                    style={{ borderRadius: "10px", fontSize: "1.1rem", padding: "12px" }}
                                                    required={field.required}
                                                />
                                            </div>
                                        ))
                                    )}
                                </div>
                            ))}
                            {users.length < 5 && (
                                <button type="button" onClick={handleAddUser} className="btn btn-secondary w-100 fw-bold shadow-sm mb-3" style={{ borderRadius: "10px", fontSize: "1.1rem", padding: "12px" }}>
                                    + Add Another User
                                </button>
                            )}
                            <button type="submit" className="btn w-100 fw-bold shadow-sm" style={{ backgroundColor: "#ff5733", color: "white", borderRadius: "10px", fontSize: "1.2rem", padding: "12px" }}>
                                Register Users
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserRegistration;
