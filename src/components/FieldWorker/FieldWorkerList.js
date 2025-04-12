import React, { useState, useEffect } from "react";
import axios from "axios";

const FieldWorkerList = () => {
    const [fieldWorkers, setFieldWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const token = localStorage.getItem("token");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const fetchFieldWorkers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/fw" , {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include Bearer token in the header
                    },
                });
                setFieldWorkers(response.data);
            } catch (err) { 
                setError("Failed to fetch field workers.");
            } finally {
                setLoading(false);
            }
        };
        fetchFieldWorkers();
    }, []);

    return (
        <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#ff5733", color: "white", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <h3 className="text-center fw-bold" style={{ color: "#ffc107" }}>🛠 Field Workers</h3>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-warning text-center">{error}</p>}
            <ul className="list-group mt-3">
                {fieldWorkers.map((worker) => (
                    <li key={worker.id} className="list-group-item border-0 shadow-sm mb-2" style={{ backgroundColor: "#ffc107", color: "#ff5733", borderRadius: "10px" }}>
                        <strong>{worker.name}</strong> ({worker.phone})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FieldWorkerList;
