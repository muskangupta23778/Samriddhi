import React from "react";
import './../css/navbar.css';
import { useNavigate } from "react-router-dom"; // Assuming you will create a separate CSS file for styling

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#" style={{ fontSize: "1.8rem", fontWeight: "bold", letterSpacing: "1px" }}>
                    SamriddhiHealth
                </a>
                {/* Toggler button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ms-auto">
                        <button
                            className="btn navbar-btn me-2"
                            onClick={() => navigate("/qr")}
                        >
                            Get New Card
                        </button>
                        <button
                            className="btn navbar-btn me-2"
                            onClick={() => navigate("/")}
                        >
                            Get Card Details
                        </button>
                        <button
                            className="btn navbar-btn me-2"
                            onClick={() => alert("Contact clicked")}
                        >
                            Contact
                        </button>
                        <button
                            className="btn navbar-btn"
                            onClick={() => alert("Associated Hospitals clicked")}
                        >
                            Associated Hospitals
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
